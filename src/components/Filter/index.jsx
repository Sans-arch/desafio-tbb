import { Container } from './styles';
import Input from '../Input';

export default function Filter() {
  return (
    <Container>
      <Input
        type="text"
        placeholder="Busque por..."
      />
    </Container>
  );
}
