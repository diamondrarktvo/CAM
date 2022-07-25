import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../../theme/Colors';

export default function HeaderGlobal() {
   return (
      <View style={styles.container}>
         <Text style={styles.titre_salutation}>Hi, Dama!</Text>
         <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.icon_user}>D</Text>
         </TouchableOpacity>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      marginVertical: 5,
      marginHorizontal: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
   titre_salutation: {
      color: Colors.black,
      fontSize: 32,
      fontWeight: 'bold',
   },
   icon_user: {
      backgroundColor: Colors.purple,
      fontSize: 27,
      fontWeight: 'bold',
      width: 40,
      height: 40,
      textAlign: 'center',
      borderRadius: 40,
      color: Colors.white,
   },
});
