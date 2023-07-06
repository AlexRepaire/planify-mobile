import "react-native-gesture-handler";
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/AuthContext';
import Routes from './src/navigation/routes';
import { TaskProvider } from "./src/context/TaskContext";
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#fff'
    },
  };

  return (
    <SafeAreaProvider>
      <AuthProvider>
        <TaskProvider>
          <NavigationContainer theme={MyTheme}>
            <Routes />
          </NavigationContainer>
        </TaskProvider>
      </AuthProvider>
    </SafeAreaProvider>

  );
}

export default App;