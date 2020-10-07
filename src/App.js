import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import styled from 'styled-components/native';

import {Text} from 'react-native';

import {ThemeProvider} from 'styled-components';

import {Private, Public} from './routes';

import {getMnemonicStr, switchTheme} from './redux/actions';
import {DARK_THEME} from './redux/constants';

function App({mnemonicStr, getMnemonicStr, theme, switchTheme}) {
  let [auth, setAuth] = React.useState(false);

  React.useEffect(() => {
    getMnemonicStr();
    // switchTheme(DARK_THEME);
    let data = {
      name: 'Thinh',
      age: 30,
      email: 'thinh@gmail.com',
    };
    AsyncStorage.setItem('user', JSON.stringify(data));
  }, []);
  return (
    <>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <StatusBar
            backgroundColor={theme.BACKGROUND_COLOR_PRIMARY}
            barStyle={theme.STATUS_BAR_STYLE}
          />
          <AppContainer>{auth ? <Public theme={theme}/> : <Private />}</AppContainer>
        </ThemeProvider>
      </NavigationContainer>
    </>
  );
}

const mapStateToProp = (state) => ({
  mnemonicStr: state.mnemonicStr,
  theme: state.theme,
});

const mapDispatchToProp = {
  getMnemonicStr,
  switchTheme,
};

const AppContainer = styled.View`
  width: 100%;
  height: 100%;
  padding-top: 5;
  padding-right: 5;
  padding-bottom: 5;
  padding-left: 5;
  background-color: ${props => props.theme.BACKGROUND_COLOR_PRIMARY}
`;

export default connect(mapStateToProp, mapDispatchToProp)(App);
