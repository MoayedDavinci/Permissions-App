import styled from "styled-components";
import SharedLayout from "../components/Layout/SharedLayout";
import PageNotFound from "../assets/Icons/PageNotFound";
import notFound from "../assets/pageNotFound.png"

const NotFoundPage = () => {

    const LoaderWrapper = styled.div`
  display: flex;
  flex-direction:column;
  gap:32px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

    return (
        <SharedLayout title="Page Not Found" back>
            <LoaderWrapper>
                <PageNotFound />
                {/* <PageNotFoundText /> */}
                <img src={notFound} width="300" style={{ marginRight: '20px' }} />
            </LoaderWrapper>
        </SharedLayout>
    );
};


export default NotFoundPage;
