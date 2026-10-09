import { AIAssistant } from "./components/layout/AIAssistant"
import { Footer } from "./components/layout/Footer"
import { Header } from "./components/layout/Header"
import { SocialRail } from "./components/layout/SocialRail"
import { useNavigation } from "./hooks/useNavigation"
import { useScrollReveal } from "./hooks/useScrollReveal"
import { getProductByRoute } from "./routing/routes"
import HomePage from "./pages/Home/HomePage"
import ServicesPage from "./pages/Services/ServicesPage"
import ProductsPage from "./pages/Products/ProductsPage"
import ContactPage from "./pages/Contact/ContactPage"
import ProductDetailPage from "./pages/ProductDetail/ProductDetailPage"

export default function App() {
  const { route } = useNavigation()
  useScrollReveal(route)

  const selectedProduct = getProductByRoute(route)

  return (
    <>
      <Header route={route} />
      <SocialRail />
      <AIAssistant />
      <div className="route-view" key={route}>
        {route === "/" && <HomePage />}
        {route === "/dich-vu" && <ServicesPage />}
        {route === "/san-pham" && <ProductsPage />}
        {route === "/lien-he" && <ContactPage />}
        {selectedProduct && <ProductDetailPage product={selectedProduct} />}
      </div>
      <Footer />
    </>
  )
}
