import {styled} from 'styled-components';
import AppLayout from './AppLayout';
const Layout = (props: {children: React.ReactNode}) => {
  return (
    <LayoutWrapper>
      <LogoWrapper>
        <div>설명이나 이미지나 비워도되고!!!!</div>
      </LogoWrapper>
      <AppWrapper>
        <AppLayout>{props.children}</AppLayout>
      </AppWrapper>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 200px;
  height: 100vh;
`;

// App 위치 잡기용임
const LogoWrapper = styled.div`
  width: 320px;
  height: 568px;
  background-color: #f4eaea;
  @media (max-width: 640px) {
    display: none;
  }
`;

// height는 추가 변경 가능
const AppWrapper = styled.main`
  position: relative;
  border-radius: 10px;
  width: 320px;
  height: 568px;
  background-color: pink;
  @media (max-width: 640px) {
    width: 100vw;
    height: 100vh;
  }
`;

export default Layout;
