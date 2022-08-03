import { View, Text } from 'react-native';
import { Icon } from '@rneui/themed';
import Caroussel from '_components/carousel/Caroussel';
import { Colors } from '_theme/Colors';
import { styles } from './styles';

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