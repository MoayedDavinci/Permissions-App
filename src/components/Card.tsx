import React from 'react';
import styled from 'styled-components';
import { colors } from '../assets/colors';
import Typography from './Typography';
import Icon from './Icon';
import EditdIcon from '../assets/Icons/EditdIcon';
import DeleteIcon from '../assets/Icons/DeleteIcon';
import RoleIconZero from '../assets/Icons/RoleIconZero';
import RoleIconOne from '../assets/Icons/RoleIconOne';
import RoleIconTwo from '../assets/Icons/RoleIconTwo';
import RoleIconThree from '../assets/Icons/RoleIconThree';
import RoleIconFour from '../assets/Icons/RoleIconFour';
import UsersIcon from '../assets/Icons/UsersIcon';
import Link from './Link';
import { useNavigate } from 'react-router-dom';

const CardStyled = styled.div`
  width: 303px;
  height: 378px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background: ${colors.white}; 
  border: 1px solid ${colors.primary};
  border-radius: 8px; 

 > :first-child {
    margin-top: 16px; 
    margin-bottom: 0px; 
  }
 > :nth-child(2) {
    margin-top: 16px; 
    margin-bottom: 48px; 
  }
 > :nth-child(3) {
    margin-top: 0px; 
    margin-bottom: 48px; 
  }
`;

const CardChild = styled.div`
  width: 80%; 
  text-align: center;
`;

const TitleDiv = styled.div`
  width: 100%; 
  display:flex;
  flex-direction:column;
  gap:16px;
  align-items: center;
`;

const InformationDiv = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:16px;

      > :first-child {
        display:flex;
        gap:4px;
        align-items:center;
  }
`

const ActionsDiv = styled.div<{ hasIcons: boolean }>`
  display:flex;
   justify-content: ${({ hasIcons }) => (hasIcons ? 'space-between' : 'flex-start')}; 
  align-items: center; 
  width:100%;
    > :first-child {
    text-align: left; 
    padding-left:16px;
  }

  > :last-child {
    display: flex;
    gap: 8px;
    padding-right:16px;
  }
`;

const IconsMap = {
  0: RoleIconZero,
  1: RoleIconOne,
  2: RoleIconTwo,
  3: RoleIconThree,
  4: RoleIconFour,
}

interface ICard {
  custom: boolean,
  name: string,
  icon: number,
  assignedUsers: number,
  id: string,
  handleDeleteRole: () => void
}

const Card: React.FC<ICard> = ({ custom, name, icon, assignedUsers, id, handleDeleteRole }) => {
  const navigate = useNavigate()
  return (
    <CardStyled>
      <ActionsDiv hasIcons={custom}>
        <Typography variant="label">{custom ? 'Custom Role' : 'Default Role'}</Typography>
        {custom && (
          <div>
            <Icon onClick={() => navigate(`/edit/${id}`)} svg={EditdIcon} width={'20px'} height={'20px'} />
            <Icon onClick={() => handleDeleteRole()} svg={DeleteIcon} width={'20px'} height={'20px'} />
          </div>
        )}
      </ActionsDiv>
      <TitleDiv>
        {/* @ts-ignore */}
        <Icon grey svg={IconsMap[icon] || RoleIconZero} width={'80px'} height={'80px'} />
        <Typography variant="title">{name}</Typography>
      </TitleDiv>
      <InformationDiv>
        <div>
          <UsersIcon />
          <Typography variant="info">{assignedUsers}</Typography>
        </div>
        <div>
          <Typography variant="description">{'Users Assigned'}</Typography>
        </div>
      </InformationDiv>
      <CardChild>
        <Link to={`/create/${id}`}>Use As Template</Link>
      </CardChild>
    </CardStyled>
  );
};

export default Card;
