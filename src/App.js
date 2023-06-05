import './App.css'
import Header from './component/Header';
import Shipping from './component/Shipping';
import Banner from './component/Banner'
import BannerFull from './component/BannerFull';
import Brand from './component/Brand';
import Footer from './component/Footer';

function App() {
  return (
    <>
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
