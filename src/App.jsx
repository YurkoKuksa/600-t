import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/Layout/SharedLayout";
import { lazy } from "react";

import { Brain } from "./components/Interesting/Brain/Brain";

const Home = lazy(() => import("./pages/Home/Home"));
const Author = lazy(() => import("./pages/Author/Author"));
const Interesting = lazy(() => import("./pages/InterestChemistry/Interesting"));
const Contacts = lazy(() => import("./pages/Contacts/Contacts"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const AboutBook = lazy(() => import("./components/Home/AboutBook/AboutBook"));
const AllPublications = lazy(() =>
  import("./components/Home/AllPublications/AllPublications")
);

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/book" element={<AboutBook />} />
          <Route path="/allpublication" element={<AllPublications />} />

          <Route path="/biography" element={<Author />} />
          <Route path="/interesting/" element={<Interesting />}>
            <Route path="brain" element={<Brain />} />
          </Route>
          <Route path="/contacts" element={<Contacts />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
