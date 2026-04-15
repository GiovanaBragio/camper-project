import './App.scss'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Authors from './pages/authors/authors'
import MapPage from './pages/map-page/map-page'
import ProductPage from './pages/product-page/product-page'
import RefPage from './pages/ref-page/ref-page'

function App() {

  return (
    <>
      <Header />
      <MapPage/>
      <ProductPage/>
      <RefPage/>
      <Authors/>
      <Footer/>
    </>
  )
}

export default App;
