import { useContext } from 'react';

import { Container } from './styles';
import { ThemeContext } from '../../contexts/ThemeContext';

import logoTbb from '../../assets/logo.png';

export default function Header() {
  const { theme, handleToggleTheme } = useContext(ThemeContext);

  return (
    <Container>
      <img src={logoTbb} alt="Logo The Brooklyn Brothers" />
      <button
        type="button"
        onClick={handleToggleTheme}
      >
        {theme === 'dark' ? '💡' : '🌙'}
      </button>
    </Container>
  );
}
