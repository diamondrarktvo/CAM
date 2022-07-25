import { Text, View, StyleSheet } from 'react-native';

export default function Movie() {
   return (
      <View style={styles.view_container}>
         <Text>Bienvenue dans la section des films.</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   view_container: {
      flex: 1,
      backgroundColor: '#EEE6D8',
   },
});
