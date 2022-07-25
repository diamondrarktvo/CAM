import { Text, View, StyleSheet, Image } from 'react-native';

export default function ItemComponent() {
   return (
      <View style={styles.view_container}>
         <Image
            style={styles.poster_image}
            source={require('../../images/ducobu.jpeg')}
         />
      </View>
   );
}
const styles = StyleSheet.create({
   view_container: {
      flex: 1,
   },
});
