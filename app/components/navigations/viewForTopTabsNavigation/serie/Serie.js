import { Text, View, StyleSheet } from 'react-native';

export default function Serie() {
   return (
      <View style={styles.view_container}>
         <Text>Bienvenue dans la section des séries.</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   view_container: {
      flex: 1,
      backgroundColor: '#76CDCD',
   },
});
