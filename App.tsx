import { NativeBaseProvider, StatusBar } from 'native-base';

import { THEME } from './src/themes/Theme';
import Routes from './src/Routes';

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar backgroundColor={THEME.colors.blue[800]} />
      <Routes />
    </NativeBaseProvider>
  );
}