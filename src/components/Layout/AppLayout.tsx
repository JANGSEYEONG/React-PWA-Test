import Header from './Header';
import Footer from './Footer';
import {styled} from 'styled-components';
const AppLayout = (props: {children: React.ReactNode}) => {
  return (
    <AppLayoutWrapper>
      <Header />
      <MainWrapper>{props.children}</MainWrapper>
      <Footer />
    </AppLayoutWrapper>
  );
};

const AppLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const MainWrapper = styled.main`
  width: 100%;
  flex: 1;
  overflow: auto;
`;

export default AppLayout;
