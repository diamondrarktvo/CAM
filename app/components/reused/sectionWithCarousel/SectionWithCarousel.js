import { View, Text, StyleSheet } from 'react-native';
import { Icon } from '@rneui/themed';
import Caroussel from '_components/carousel/Caroussel';
import { Colors } from '_theme/Colors';

export default function Section({ annonce, titreSection, dataForCarousel }) {
   return (
      <View style={styles.section}>
         {annonce === false && (
            <View style={styles.titre_indicatif}>
               <Text style={styles.titre_txt}>{titreSection}</Text>
               <Icon
                  name={'chevron-right'}
                  color={Colors.black}
                  size={32}
                  onPress={() => alert('clicker')}
               />
            </View>
         )}
         <Caroussel data={dataForCarousel} annonce={annonce} />
      </View>
   );
}

const styles = StyleSheet.create({
   section: {
      marginVertical: 10,
   },
   titre_indicatif: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 5,
      marginHorizontal: 10,
   },
   titre_txt: {
      fontSize: 24,
      fontWeight: 'bold',
   },
});
