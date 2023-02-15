import { Container } from './styles';

import logoTbb from '../../assets/logo.png';

export default function Header() {
  return (
    <Container>
      <img src={logoTbb} alt="Logo The Brooklyn Brothers" />
    </Container>
  );
}
