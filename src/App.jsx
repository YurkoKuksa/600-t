import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./compponents/Layout/SharedLayout";
import Home from "./pages/Home/Home";
import Author from "./pages/Author/Author";
import Interesting from "./pages/InterestChemistry/Interesting";
import Contacts from "./pages/Contacts/Contacts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/biography" element={<Author />} />
          <Route path="interesting" element={<Interesting />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
