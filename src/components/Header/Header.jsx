import { Box, LogoLink, LogoWrapper, NameStyle } from "./Header.styled";
import chemistry from "../../assets/svg/chemistry.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box>
      <LogoWrapper>
        <Link to="/">
          <img src={chemistry} alt="main logo" width={40} height={40} />
        </Link>
        <LogoLink>Chemistry tasks</LogoLink>
      </LogoWrapper>
      <NameStyle>Кукса С.П.</NameStyle>
    </Box>
  );
};

export default Header;
