import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import {
  NotFound,
  HomePage,
  AboutPage,
  ProductsPage,
  FaqsPage,
  RentalPolicyPage,
  ContactPage,
} from "./pages";
import ScrollToTop from "./components/scrollToTop";
import Navbar from "./components/Navbar";
import { appRoutes } from "./constants/appRoutes.js";

function App() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route path={appRoutes.notFound} element={<NotFound />} />
        <Route exact path={appRoutes.home} element={<HomePage />} />
        <Route exact path={appRoutes.about} element={<AboutPage />} />
        <Route exact path={appRoutes.products} element={<ProductsPage />} />
        <Route exact path={appRoutes.faqs} element={<FaqsPage />} />
        <Route
          exact
          path={appRoutes.rentalPolicy}
          element={<RentalPolicyPage />}
        />
        <Route exact path={appRoutes.contact} element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
