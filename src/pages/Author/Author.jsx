import {
  AuthBox,
  DecorPicture,
  MainBox,
  MainTitle,
  Paragraph,
  PictureBox,
  PortretPicture,
} from "./Author.styled";

import Auth from "../../assets/images/portret.png";

import chem from "../../assets/images/chemistry9.png";

const Author = () => {
  return (
    <MainBox>
      <AuthBox>
        <PictureBox>
          <PortretPicture src={Auth} alt="портрет автора" width={500} />
        </PictureBox>
        <div>
          <MainTitle>Кукса Сергій Петрович</MainTitle>

          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            molestias molestiae iste, quod ea eius voluptatem iusto mollitia
            explicabo dignissimos, facere quis quos quisquam nam similique quasi
            quo impedit libero? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Porro pariatur asperiores dolores animi ab, neque
            voluptate atque ullam, fugit, at optio harum quam hic corrupti eius
            laudantium ex nulla delectus. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Ex enim ad explicabo excepturi sit
            dolorum perspiciatis commodi maxime impedit sequi natus deserunt
            doloremque, aspernatur quae mollitia tempora totam? Itaque,
            voluptates.
          </Paragraph>
        </div>
        <DecorPicture
          src={chem}
          alt="набір хімічних пробірок та колб сірого кольору"
        />
      </AuthBox>
    </MainBox>
  );
};

export default Author;

//  <img
//       src="https://png.pngtree.com/thumb_back/fw800/background/20230527/pngtree-phoenix-bird-in-flames-wallpapers-wallpapershd-image_2697352.jpg"
//       alt=""
//       width={950}
//     />
