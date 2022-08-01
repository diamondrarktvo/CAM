import { StyleSheet, Text, View } from 'react-native';

export default function Profil() {
   return (
      <View style={styles.view_container}>
         <Text>Bienvenue dans la screen Profil</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   view_container: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
      backgroundColor: '#0594D0',
   },
});
