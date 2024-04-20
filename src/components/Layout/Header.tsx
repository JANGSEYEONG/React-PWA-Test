import {styled} from 'styled-components';

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <h2>Header!!</h2>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  width: 100%;
  height: 40px;
  background-color: ${({theme}) => theme.colors.gray};
`;
export default Header;
