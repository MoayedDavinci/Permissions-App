import { FC, ReactNode, } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { colors } from "../../assets/colors";
import Typography from "../Typography";
import Logo from "../../assets/Icons/Logo";
import Icon from "../Icon";
import { matchPath, useLocation, useNavigate } from "react-router-dom";
import { ITab, tabs } from "./tabs";
import LogoutIcon from "../../assets/Icons/LogoutIcon";
import BackIcon from "../../assets/Icons/BackIcon";


interface LayoutProps {
  title: string,
  children: ReactNode;
  back?: boolean
}
const SharedLayout: FC<LayoutProps> = ({ title, children, back }) => {
  const navigate = useNavigate();
  const location = useLocation();


  return (
    <>
      <GlobalStyle />
      <Layout>
        <HorizontalNav >
          <Typography variant='subtitlePrimary'>Moayed Mustafa</Typography>
          <LogoutIcon />
        </HorizontalNav >
        <VerticalNav>
          <NavItem>
            <Logo />
          </NavItem>
          {tabs.map((tab: ITab) => {
            const active = !!matchPath({ path: tab.path, end: false }, location.pathname)
            return (
              <NavItem active={active} onClick={() => navigate(tab.path)}>
                <Icon svg={tab.icon} width={'44px'} height={'44px'} active={active} secondary={active} />
              </NavItem>
            )
          })}
        </VerticalNav >
        <MainContent>
          <HeaderWrapper>
            <Typography variant="header">{title}</Typography>
            {back && (
              <BackButton onClick={() => navigate(-1)}>
                <BackIcon />
                <Typography variant="subtitle">Back</Typography>
              </BackButton>
            )}
          </HeaderWrapper>
          {children}

        </MainContent>
      </Layout>
    </>
  );
}

export default SharedLayout;

const Layout = styled.div`
    height:100vh;
    display:grid;
    grid-template-rows:64px 1fr;
    grid-template-columns:108px 1fr;
    grid-template-areas:
        "vertical-nav horizontal-nav"
        "vertical-nav main";
    box-sizing:border-box;
    overflow:hidden;

    @media (max-width: 768px){
    grid-template-rows:64px 1fr 64px;
    grid-template-columns:1fr;
    grid-template-areas:
    "horizontal-nav"
    "main"
    "vertical-nav"
    }

`
const NavItem = styled.div<{ active?: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content:center;
  margin-left:auto;
  box-sizing: border-box;
  position: relative;
  cursor:pointer;
`;

const VerticalNav = styled.div`
    grid-area:vertical-nav;
    background:${colors.primary};
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:32px;
    //overflow:hidden;
    height:100%;
    box-sizing:border-box;

     > :first-child {
    margin-top: 24px; 
    margin-bottom: 38px; 
  }
  @media (max-width:768px){
    flex-direction:row;
    height:75px;
    width:100%;
    gap:8px;
}
`

const HorizontalNav = styled.div`
    grid-area:horizontal-nav;
    background:${colors.secondary};
    padding: 0 8px;
    box-sizing:border-box;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    gap:12px;

  @media (max-width: 768px) {
    justify-content: space-between; /* Adjust layout for smaller screens */
  }
`

const MainContent = styled.div`
  grid-area: main;
  padding: 24px;
  display:grid;
  grid-template-rows:32px 1fr;
  grid-template-areas:
    "title"
    "content";

  gap:24px;
  overflow-y: auto;
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;

  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BackButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer; /* Adds pointer cursor for clickable effect */
`;
