import './App.css';
import Banner from './Banner';
import Contact from './Contact';
import Footer from './Footer';
import OurProducts from './OurProducts';
import Products from './Products';
import Gallery from './styled/Gallery';
import TopHeader from './TopHeader';
import WhoWeAre from './WhoWeAre';


function App() {


  return (
    <>
    {/* <Gallery /> */}
     <TopHeader />
     <Banner /> 
     <WhoWeAre />
     <Products />
     <OurProducts />
     <Contact />
     <Footer />
    </>
  );
}

export default App;
