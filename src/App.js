import './App.css'
import Language from './component/Language'
import Header from './component/Header';
import Shipping from './component/Shipping';
import Banner from './component/Banner'
import BannerFull from './component/BannerFull';
import Brand from './component/Brand';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <Language/>
      <Header/>
      <BannerFull/>
      <Shipping/>
      <Banner/>
      <Brand/>
      <Footer/>
    </>
  );
}

export default App;
