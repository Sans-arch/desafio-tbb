import { CustomThemeProvider } from '../contexts/ThemeContext';
import { CustomProductsProvider } from '../contexts/ProductsContext';

import GlobalStyle from '../styles/global';
import { Container } from './styles';

import Header from '../components/Header';
import Filter from '../components/Filter';
import ProductsList from '../components/ProductsList';

function App() {
  return (
    <CustomThemeProvider>
      <CustomProductsProvider>
        <GlobalStyle />

        <Container>
          <Header />
          <Filter />
          <ProductsList />
        </Container>
      </CustomProductsProvider>
    </CustomThemeProvider>
  );
}

export default App;
