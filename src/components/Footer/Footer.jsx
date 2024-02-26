import { Link } from "react-router-dom";
import { LogoLink, MainBox, SvgPicture } from "./Footer.styled";
import chemistry from "../../assets/svg/chemistrywhite.svg";

const Footer = () => {
  return (
    <MainBox>
      <Link to="/">
        <SvgPicture src={chemistry} alt="main logo" width={40} height={40} />
      </Link>
      <LogoLink>Chemistry tasks</LogoLink>
    </MainBox>
  );
};

export default Footer;

// Contacts
// phone
// email
// Звлишити відгук, форма

//"Хімія - це мистецтво перетворення звичайного у диво, а наука - ключ до розкриття цього чуда";

// Звичайні речі природи викликають у нас величезне здивування і виражають яскравішу красу, ніж штучно вигадані. - Леонардо да Вінчі
// Ми всі хіміки. Наші життя залежать від хімічних процесів всередині нас та навколо нас. - Люї Пастер
// Хімія може бути вибуховою, але без неї ми нікуди. - Річард Фійнман
