import GlobalStyle from '../styles/global';
import Header from '../components/Header';
import { Container } from './styles';
import ProductsList from '../components/ProductsList';
import Footer from '../components/Footer';
import Filter from '../components/Filter';

function App() {
  return (
    <>
      <GlobalStyle />

      <Container>
        <Header />
        <Filter />
        <ProductsList />
        <Footer />
      </Container>
    </>
  );
}

export default App;
