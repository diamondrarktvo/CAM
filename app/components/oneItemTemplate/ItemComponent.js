import { Text, View, StyleSheet, Image } from 'react-native';

export default function ItemComponent({ annonce }) {
   return (
      <View style={styles.view_container}>
         <Image
            style={styles.poster_image}
            source={require('../../images/ducobu.jpeg')}
         />
         <Text style={styles.titre_film}>Ducobu 3</Text>
      </View>
   );
}
const styles = StyleSheet.create({
   view_container: {
      flex: 1,
      width: '40%',
   },
   poster_image: {
      height: 180,
      width: 130,
   },
   titre_film: {
      fontSize: 20,
      textAlign: 'center',
   },
});
