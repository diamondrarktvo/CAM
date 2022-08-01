import { Text, View, StyleSheet } from 'react-native';
import { Icon } from '@rneui/themed';
import { Colors } from '../../../../theme/Colors';
import Caroussel from './../../../carousel/Caroussel';

export default function Movie() {
   return (
      <View style={styles.view_container}>
         <View style={styles.section}>
            <View style={styles.titre_indicatif}>
               <Text style={styles.titre_txt}>Populaire</Text>
               <Icon
                  name={'chevron-right'}
                  color={Colors.black}
                  size={32}
                  onPress={() => alert('clicker')}
               />
            </View>
            <Caroussel annonce={false} />
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   view_container: {
      flex: 1,
      marginHorizontal: 10,
   },
   section: {
      flex: 1,
      marginVertical: 5,
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
