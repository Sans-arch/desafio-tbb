import GlobalStyle from '../styles/global';
import Header from '../components/Header';
import { Container } from './styles';
import ProductsList from '../components/ProductsList';

function App() {
  return (
    <>
      <GlobalStyle />

      <Container>
        <Header />
        <ProductsList />
      </Container>
    </>
  );
}

export default App;
