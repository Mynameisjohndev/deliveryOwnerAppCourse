import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { ContextAppProvider } from './src/context';
import { Routes } from './src/routes';
import themes from './src/themes';

export default function App() {
  return (
    <ContextAppProvider>
      <ThemeProvider theme={themes}>
        <NavigationContainer>
          <StatusBar style="inverted" />
          <Routes />
        </NavigationContainer>
      </ThemeProvider>
    </ContextAppProvider>
  );
}