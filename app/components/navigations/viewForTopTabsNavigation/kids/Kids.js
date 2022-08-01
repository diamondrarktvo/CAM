import { Text, View, StyleSheet } from 'react-native';

export default function Kids() {
   return (
      <View style={styles.view_container}>
         <Text>Bienvenue dans la section des enfants.</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   view_container: {
      flex: 1,
      backgroundColor: '#E8AABE',
   },
});
