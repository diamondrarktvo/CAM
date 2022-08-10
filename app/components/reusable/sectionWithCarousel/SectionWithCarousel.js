import { View, Text } from 'react-native';
import { Icon } from '@rneui/themed';
import Caroussel from '_components/carousel/Caroussel';
import { Colors } from '_theme/Colors';
import { nameStackNavigation as nameNav } from '_utils';
import { styles } from './styles';

export default function Section({
   annonce,
   titreSection,
   dataForCarousel,
   navigation,
   numberColumn,
}) {
   const _navigateToListingPage = () => {
      navigation.navigate(nameNav.listPage, {
         titleScreen: titreSection,
         numberOfColumn: numberColumn,
         dataToListing: dataForCarousel,
      });
   };

   return (
      <View style={styles.section}>
         {annonce === false && (
            <View style={styles.titre_indicatif}>
               <Text style={styles.titre_txt}>{titreSection}</Text>
               <Icon
                  name={'chevron-right'}
                  color={Colors.black}
                  size={32}
                  onPress={_navigateToListingPage}
               />
            </View>
         )}
         <Caroussel data={dataForCarousel} annonce={annonce} />
      </View>
   );
}
