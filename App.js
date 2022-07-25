import { Colors } from './app/theme/Colors';
import { StyleSheet, View, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './app/components/navigations/Navigation';

export default function App() {
   return (
      <SafeAreaProvider>
         <View style={styles.container}>
            <StatusBar
               backgroundColor={Colors.background}
               animated={true}
               showHideTransition="slide"
               barStyle="dark-content"
            />
            <Navigation />
         </View>
      </SafeAreaProvider>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
});
