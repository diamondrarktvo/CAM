import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//import Login from './app/pages/auth/login/Login';
import Register from './app/pages/auth/register/Register';

export default function App() {
   return (
      <SafeAreaProvider>
         <View style={styles.container}>
            <Register />
         </View>
      </SafeAreaProvider>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
});
