import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './app/pages/home/Home';

export default function App() {
   return (
      <SafeAreaProvider>
         <View style={styles.container}>
            <Home />
         </View>
      </SafeAreaProvider>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
});
