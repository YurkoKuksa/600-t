import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/Layout/SharedLayout";
import { lazy } from "react";

const Home = lazy(() => import("./pages/Home/Home"));
const Author = lazy(() => import("./pages/Author/Author"));
const Interesting = lazy(() => import("./pages/InterestChemistry/Interesting"));
const Contacts = lazy(() => import("./pages/Contacts/Contacts"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const AboutBook = lazy(() => import("./components/Home/AboutBook/AboutBook"));
const Sources = lazy(() => import("./pages/SourcesPage/Sources"));

const AllPublications = lazy(() =>
  import("./components/Home/AllPublications/AllPublications")
);
const Brain = lazy(() => import("./components/Interesting/Brain/Brain"));
const Household = lazy(() =>
  import("./components/Interesting/Household/Household")
);
const Inorganic = lazy(() =>
  import("./components/Interesting/Inorganic/Inorganic")
);
const NewLife = lazy(() => import("./components/Interesting/NewLife/NewLife"));
const Organic = lazy(() => import("./components/Interesting/Organic/Organic"));
const Space = lazy(() => import("./components/Interesting/Space/Space"));
const Water = lazy(() => import("./components/Interesting/Water/Water"));

const Admin = lazy(() => import("./pages/AdminPage/Admin"));

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
            <Route path="household" element={<Household />} />
            <Route path="inorganic" element={<Inorganic />} />
            <Route path="newlife" element={<NewLife />} />
            <Route path="organic" element={<Organic />} />
            <Route path="space" element={<Space />} />
            <Route path="water" element={<Water />} />
          </Route>
          <Route path="/sources" element={<Sources />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
