import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import {
  ContactBox,
  Description,
  LiWrap,
  CustomNavLink,
  MainBox,
  MainTitle,
  TableImg,
  UlWrap,
  WrapBox,
} from "./Interesting.styled";
import { Outlet } from "react-router-dom";

import tab from "../../assets/images/chemistry103.png";
import Loader from "../../components/Loader/Loader";
AOS.init();
const Interesting = () => {
  const [currentPath, setCurrentPath] = useState(null);

  const handleClick = (to) => {
    if (currentPath === to) {
      setCurrentPath(null);

      return;
    }

    setCurrentPath(to);
  };

  return (
    <MainBox>
      <ContactBox>
        <MainTitle>Цікаві факти з хімії</MainTitle>
        <Description>
          Цей розділ пропонує вам ознайомитись з дивовижними властивостями
          хімічних речовин. Він розкриє перед вами незвичайні аспекти хімічних
          явищ, надихнувши на дослідження та поглиблене розуміння основ цієї
          науки. Дізнайтеся про захоплюючі факти, які лежать в основі нашого
          світу та щоденного життя, відкриваючи нові грані універсуму хімії.
        </Description>
        <Description></Description>

        <WrapBox>
          <nav>
            <UlWrap data-aos="fade-down" data-aos-duration="800">
              <LiWrap>
                <CustomNavLink
                  to="household"
                  onClick={() => handleClick("household")}
                  $active={currentPath}
                >
                  Побутова хімія
                </CustomNavLink>
              </LiWrap>
              <LiWrap>
                <CustomNavLink
                  to="inorganic"
                  onClick={() => handleClick("inorganic")}
                  $active={currentPath}
                >
                  Неорганічна хімія
                </CustomNavLink>
              </LiWrap>
              <LiWrap>
                <CustomNavLink
                  to="organic"
                  onClick={() => handleClick("organic")}
                  $active={currentPath}
                >
                  Органічна хімія
                </CustomNavLink>
              </LiWrap>
              <LiWrap>
                <CustomNavLink
                  to="water"
                  onClick={() => handleClick("water")}
                  $active={currentPath}
                >
                  Xімія води
                </CustomNavLink>
              </LiWrap>
              <LiWrap>
                <CustomNavLink
                  to="brain"
                  onClick={() => handleClick("brain")}
                  $active={currentPath}
                >
                  Xімія мозку
                </CustomNavLink>
              </LiWrap>
              <LiWrap>
                <CustomNavLink
                  to="space"
                  onClick={() => handleClick("space")}
                  $active={currentPath}
                >
                  Xімія космосу
                </CustomNavLink>
              </LiWrap>
              <LiWrap>
                <CustomNavLink
                  to="newlife"
                  onClick={() => handleClick("newlife")}
                  $active={currentPath}
                >
                  Хімічна основа життя
                </CustomNavLink>
              </LiWrap>
            </UlWrap>
          </nav>

          {currentPath && <Loader /> && <Outlet />}
        </WrapBox>

        <TableImg src={tab} alt="Таблиця Менделеєва" $active={currentPath} />
      </ContactBox>
    </MainBox>
  );
};
export default Interesting;
