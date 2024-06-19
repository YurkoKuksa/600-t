import {
  CloseBtn,
  EmailLink,
  ExtraPicture,
  ImgSvg,
  LiContacts,
  LinkStyle,
  LogoPicture,
  MainModalBox,
  MainPicture,
  MainTitle,
  Navigator,
  PhoneLink,
  TitleBox,
  UlContacts,
} from "./BurgerMenu.styled";
import closeBtn from "../../../assets/svg/close.svg";
import logopic from "../../../assets/svg/chemistry.svg";
import mainpicture from "../../../assets/images/chemistry44.png";
import extrapicture from "../../../assets/images/chemistry16.png";
import { useEffect } from "react";

export const BurgerMenu = ({ close, open }) => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (
        event.key === "Escape" ||
        event.key === " " ||
        event.key === "Enter" ||
        event.key === "+"
      ) {
        close();
      }
    };

    // Додавання обробника подій на keydown
    document.addEventListener("keydown", handleKeyPress);

    // Блокування скролінгу, коли меню відкрите
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Прибирання обробника подій та відновлення скролінгу
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      document.body.style.overflow = "auto";
    };
  }, [open, close]);

  return (
    <MainModalBox open={open}>
      <CloseBtn type="button" onClick={close}>
        <ImgSvg src={closeBtn} alt="закрити" />
      </CloseBtn>
      <TitleBox>
        <LogoPicture src={logopic} alt="логотип" />
        <MainTitle>600 Задач з Xімії </MainTitle>
      </TitleBox>

      <MainPicture src={mainpicture} alt="головна декоративна" />

      <Navigator role="navigation">
        <ul>
          <li>
            <LinkStyle to="/" onClick={close}>
              Головна
            </LinkStyle>
          </li>
          <li>
            <LinkStyle to="/biography" onClick={close}>
              Автор
            </LinkStyle>
          </li>
          <li>
            <LinkStyle to="/interesting" onClick={close}>
              Цікава хімія
            </LinkStyle>
          </li>
          <li>
            <LinkStyle to="/contacts" onClick={close}>
              Контакти
            </LinkStyle>
          </li>
        </ul>
      </Navigator>

      <ExtraPicture src={extrapicture} alt="органічна формула" />

      <UlContacts>
        <LiContacts>
          <PhoneLink href="tel:+380968103053">+38 (096) 810-30-53</PhoneLink>
        </LiContacts>

        <LiContacts>
          <EmailLink href="mailto:kuksasergey55@gmail.com">
            kuksasergey55@gmail.com
          </EmailLink>
        </LiContacts>
      </UlContacts>
    </MainModalBox>
  );
};
