import { StyleSheet, Text, View } from 'react-native';
import { Icon } from '@rneui/themed';
import { Colors } from '../../../../theme/Colors';

export default function Anime() {
   return (
      <View style={styles.view_container}>
         <View style={styles.titre_indicatif}>
            <Text style={styles.titre_txt}>Populaire</Text>
            <Icon
               name={'chevron-right'}
               color={Colors.black}
               size={32}
               onPress={() => alert('clicker')}
            />
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   view_container: {
      flex: 1,
      backgroundColor: '#7AA95C',
   },
   titre_indicatif: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 10,
   },
   titre_txt: {
      fontSize: 24,
      fontWeight: 'bold',
   },
});
