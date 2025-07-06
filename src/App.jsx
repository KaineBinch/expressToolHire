import { Route, Routes, useLocation } from "react-router-dom"
import "./App.css"
import {
  NotFound,
  HomePage,
  AboutPage,
  ProductsPage,
  FaqsPage,
  RentalPolicyPage,
  ContactPage,
} from "./pages"
import Navbar from "./components/layout/Navbar"
import { appRoutes } from "./constants/appRoutes"
import ScrollToTop from "./components/common/ScrollToTop"

function App() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route path={appRoutes.home} element={<HomePage />} />
        <Route path={appRoutes.about} element={<AboutPage />} />
        <Route path={appRoutes.products} element={<ProductsPage />} />
        <Route path={appRoutes.faqs} element={<FaqsPage />} />
        <Route path={appRoutes.rentalPolicy} element={<RentalPolicyPage />} />
        <Route path={appRoutes.contact} element={<ContactPage />} />
        <Route path={appRoutes.notFound} element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
