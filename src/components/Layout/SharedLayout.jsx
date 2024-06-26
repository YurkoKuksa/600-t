import { Suspense } from "react";
import { Box, Container, Div } from "./SharedLayout.styled";
import { Outlet } from "react-router-dom";
import Aside from "../Aside/Aside";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import { ScrollUpBtn } from "../ScrollUpButton/ScrollUpButton";

const SharedLayout = () => {
  return (
    <>
      <Box>
        <Header />
        <Container>
          <Aside />
          <Div>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Div>
        </Container>
        <ScrollUpBtn />
      </Box>

      <Footer />
    </>
  );
};
export default SharedLayout;
