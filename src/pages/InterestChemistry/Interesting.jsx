import { LinksFacts } from "./Interesting.styled";
import { Outlet } from "react-router-dom";

const Interesting = () => {
  return (
    <div>
      <h2>Interesting</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi aliquid
        nulla saepe, dolorem error fugit eum consequatur iusto quae,
        necessitatibus nobis quisquam soluta dolores repellendus a minima esse.
        Quia, quidem?
      </p>
      <hr />
      <LinksFacts>Household chemicals</LinksFacts>
      <LinksFacts>Inorganic chemistry</LinksFacts>
      <LinksFacts>Organic chemistry</LinksFacts>
      <LinksFacts>Water chemistry</LinksFacts>
      <LinksFacts to="brain">Brain chemistry</LinksFacts>
      <LinksFacts>Space chemistry</LinksFacts>
      <LinksFacts>Chemical basis for the origin of life</LinksFacts>
      <hr />

      <Outlet />
    </div>
  );
};
export default Interesting;
