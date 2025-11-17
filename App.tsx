/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { Text, StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { 
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      
      <NewAppScreen
        templateFileName="App.tsx"
        safeAreaInsets={safeAreaInsets}
      />
      <Text style={styles.myTextStyle}>Hello, React Native!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  myTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 16,
  },
  container: {
    flex: 1,
  },
});

export default App;
