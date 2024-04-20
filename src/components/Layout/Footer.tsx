import {styled} from 'styled-components';

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <ContentsBox>
        <CopyrightBox>Copyright 2024. PomPomTeam rights reserved.</CopyrightBox>
      </ContentsBox>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  width: 100%;
  height: 60px;
  background-color: ${({theme}) => theme.colors.gray};
`;

const ContentsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
`;

const CopyrightBox = styled.h2`
  font-weight: 600;
  font-size: 12px;
`;

export default Footer;
