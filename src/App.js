import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import SectionAbout from './components/SectionAbout';
import SectionContact from './components/SectionContact';
import SectionProduct from './components/SectionProduct';

function App() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <SectionAbout></SectionAbout>
      <SectionProduct></SectionProduct>
      <SectionContact></SectionContact>
      <Footer></Footer>
    </>
  )
}

export default App;
