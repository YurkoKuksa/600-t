import { Suspense } from "react";
import { Box, Container, Div } from "./SharedLayout.styled";
import { Outlet } from "react-router-dom";
import Aside from "../Aside/Aside";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export const SharedLayout = () => {
  return (
    <>
      <Box>
        <Header />
        <Container>
          <Aside />
          <Div>
            <Suspense fallback={<div>Loading page...</div>}>
              <Outlet />
            </Suspense>
          </Div>
        </Container>
      </Box>

      <Footer />
    </>
  );
};
