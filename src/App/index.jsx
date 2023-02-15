import { CustomProductsProvider } from '../contexts/ProductsContext';

import GlobalStyle from '../styles/global';
import { Container } from './styles';

import Header from '../components/Header';
import Filter from '../components/Filter';
import ProductsList from '../components/ProductsList';
import Footer from '../components/Footer';

function App() {
  return (
    <CustomProductsProvider>
      <GlobalStyle />

      <Container>
        <Header />
        <Filter />
        <ProductsList />
        <Footer />
      </Container>
    </CustomProductsProvider>
  );
}

export default App;
