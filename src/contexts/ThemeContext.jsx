/* eslint-disable react/jsx-no-constructed-context-values */
import PropTypes from 'prop-types';
import React, {
  createContext, useState, useMemo,
} from 'react';
import { ThemeProvider } from 'styled-components';

import themes from '../styles/themes';

export const ThemeContext = createContext();

export function CustomThemeProvider(props) {
  const [theme, setTheme] = useState('dark');

  const currentTheme = useMemo(() => themes[theme] || themes.dark, [theme]);

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
  }

  return (
    <ThemeContext.Provider value={{
      theme,
      handleToggleTheme,
    }}
    >
      <ThemeProvider theme={currentTheme}>
        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

CustomThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
