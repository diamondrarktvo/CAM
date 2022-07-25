import { StyleSheet, Text, View } from 'react-native';

export default function Anime() {
   return (
      <View style={styles.view_container}>
         <Text>Bienvenue dans la section des animés.</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   view_container: {
      flex: 1,
      backgroundColor: '#7AA95C',
   },
});
