import { Box } from "./App.styled";
import { Aside } from "./compponents/Aside/Aside";
import { Footer } from "./compponents/Footer/Footer";
import { SharedLayout } from "./compponents/Layout/SharedLayout";

function App() {
  return (
    <>
      <Box>
        <SharedLayout />
        <Aside />
      </Box>
      <Footer />
    </>
  );
}

export default App;
