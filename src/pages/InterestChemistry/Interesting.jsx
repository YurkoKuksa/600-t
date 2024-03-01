import { useState } from "react";
import {
  ContactBox,
  Description,
  LiWrap,
  LinksFacts,
  MainBox,
  MainTitle,
  TableImg,
  UlWrap,
} from "./Interesting.styled";
import { Outlet } from "react-router-dom";

import tab from "../../assets/images/chemistry103.png";

const Interesting = () => {
  const [currentPath, setCurrentPath] = useState(null);

  const handleClick = (to) => {
    if (currentPath === to) {
      setCurrentPath(null);
      // Якщо поточний шлях співпадає з посиланням, то не робимо зміни
      return;
    }
    // В іншому випадку оновлюємо поточний шлях та відкриваємо контент
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
        {/* <hr /> */}
        <nav>
          <UlWrap>
            <LiWrap>
              <LinksFacts
                to="household"
                onClick={() => handleClick("household")}
                currentPath={currentPath}
              >
                Побутова хімія
              </LinksFacts>
            </LiWrap>
            <LiWrap>
              <LinksFacts
                to="inorganic"
                onClick={() => handleClick("inorganic")}
                currentPath={currentPath}
              >
                Неорганічна хімія
              </LinksFacts>
            </LiWrap>
            <LiWrap>
              <LinksFacts
                to="organic"
                onClick={() => handleClick("organic")}
                currentPath={currentPath}
              >
                Органічна хімія
              </LinksFacts>
            </LiWrap>
            <LiWrap>
              <LinksFacts
                to="water"
                onClick={() => handleClick("water")}
                currentPath={currentPath}
              >
                Xімія води
              </LinksFacts>
            </LiWrap>
            <LiWrap>
              <LinksFacts
                to="brain"
                onClick={() => handleClick("brain")}
                currentPath={currentPath}
              >
                Xімія мозку
              </LinksFacts>
            </LiWrap>
            <LiWrap>
              <LinksFacts
                to="space"
                onClick={() => handleClick("space")}
                currentPath={currentPath}
              >
                Xімія космосу
              </LinksFacts>
            </LiWrap>
            <LiWrap>
              <LinksFacts
                to="newlife"
                onClick={() => handleClick("newlife")}
                currentPath={currentPath}
              >
                Хімічна основа життя
              </LinksFacts>
            </LiWrap>
          </UlWrap>
        </nav>

        {/* <hr /> */}

        {currentPath && <Outlet />}

        <TableImg
          src={tab}
          alt="Таблиця Менделеєва"
          currentPath={currentPath}
        />

        {/* <p> &copy; All rights reserved</p> */}
      </ContactBox>
    </MainBox>
  );
};
export default Interesting;
