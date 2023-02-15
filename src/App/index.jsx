import GlobalStyle from '../styles/global';
import Header from '../components/Header';
import { Container } from './styles';
import ProductsList from '../components/ProductsList';
import Footer from '../components/Footer';

function App() {
  return (
    <>
      <GlobalStyle />

      <Container>
        <Header />
        <ProductsList />
        <Footer />
      </Container>
    </>
  );
}

export default App;
