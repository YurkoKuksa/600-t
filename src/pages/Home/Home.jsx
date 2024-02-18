import { useState } from "react";

import AboutBook from "../../compponents/Home/AboutBook/AboutBook";
import AllPublications from "../../compponents/Home/AllPublications/AllPublications";

const Home = () => {
  const [showAboutBook, setShowAboutBook] = useState(false);
  const [other, setOther] = useState(false);
  const [scrollTarget, setScrollTarget] = useState(null);

  const handleShowAboutBook = () => {
    setShowAboutBook(true);
    setOther(false);
    //scrollIntoView - для плавної прокрутки
    // document.getElementById("yu").scrollIntoView({ behavior: "smooth" });
    setScrollTarget("yu");
  };

  const handleShowOther = () => {
    setOther(true);
    setShowAboutBook(false);
    // document.getElementById("other").scrollIntoView({ behavior: "smooth" });
    setScrollTarget("other");
  };

  return (
    <div>
      Home
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo dolore
        dolores repellat, odit commodi laborum eligendi iste perferendis cumque,
        rem, perspiciatis eum voluptas provident nisi natus. Quisquam delectus
        facilis odit.
      </p>
      <img
        src="https://png.pngtree.com/thumb_back/fw800/background/20230527/pngtree-phoenix-bird-in-flames-wallpapers-wallpapershd-image_2697352.jpg"
        alt=""
        width={950}
      />
      {/* <Link to="/book">Get to know more</Link> */}
      <button type="button" onClick={handleShowAboutBook}>
        Get to know more
      </button>
      <button type="button" onClick={handleShowOther}>
        Other information
      </button>
      <hr />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolorum
        nemo dolorem nam nihil facilis mollitia esse animi, quod id eligendi
        consequuntur cum fugiat quos nostrum deleniti? Eius, cumque velit!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
        reprehenderit, cumque rem repellat facere aliquam corrupti quam
        quibusdam, rerum quo cupiditate amet quisquam nostrum quas voluptates
        perferendis! Sit, omnis accusamus!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nihil
        corporis amet dolor! Porro aliquid nulla necessitatibus neque distinctio
        ex, pariatur officiis iure alias accusantium illum, corrupti impedit
        minus delectus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nihil
        corporis amet dolor! Porro aliquid nulla necessitatibus neque distinctio
        ex, pariatur officiis iure alias accusantium illum, corrupti impedit
        minus delectus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nihil
        corporis amet dolor! Porro aliquid nulla necessitatibus neque distinctio
        ex, pariatur officiis iure alias accusantium illum, corrupti impedit
        minus delectus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nihil
        corporis amet dolor! Porro aliquid nulla necessitatibus neque distinctio
        ex, pariatur officiis iure alias accusantium illum, corrupti impedit
        minus delectus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nihil
        corporis amet dolor! Porro aliquid nulla necessitatibus neque distinctio
        ex, pariatur officiis iure alias accusantium illum, corrupti impedit
        minus delectus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nihil
        corporis amet dolor! Porro aliquid nulla necessitatibus neque distinctio
        ex, pariatur officiis iure alias accusantium illum, corrupti impedit
        minus delectus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nihil
        corporis amet dolor! Porro aliquid nulla necessitatibus neque distinctio
        ex, pariatur officiis iure alias accusantium illum, corrupti impedit
        minus delectus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nihil
        corporis amet dolor! Porro aliquid nulla necessitatibus neque distinctio
        ex, pariatur officiis iure alias accusantium illum, corrupti impedit
        minus delectus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nihil
        corporis amet dolor! Porro aliquid nulla necessitatibus neque distinctio
        ex, pariatur officiis iure alias accusantium illum, corrupti impedit
        minus delectus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nihil
        corporis amet dolor! Porro aliquid nulla necessitatibus neque distinctio
        ex, pariatur officiis iure alias accusantium illum, corrupti impedit
        minus delectus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nihil
        corporis amet dolor! Porro aliquid nulla necessitatibus neque distinctio
        ex, pariatur officiis iure alias accusantium illum, corrupti impedit
        minus delectus.
      </p>
      {showAboutBook && <AboutBook />}
      {other && <AllPublications />}
      <hr />
      <span id="other">івp</span>
      <span id="yu">іва</span>
      {scrollTarget &&
        document.getElementById(scrollTarget) &&
        document
          .getElementById(scrollTarget)
          .scrollIntoView({ behavior: "smooth" })}
    </div>
  );
};

export default Home;
