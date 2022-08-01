import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Colors } from '../../../../theme/Colors';
import { data } from '../../../../utils/data';
import Section from '../../../sectionWithCarousel/SectionWithCarousel';

export default function Movie() {
   return (
      <ScrollView style={styles.scrolview}>
         <View style={styles.view_container}>
            <Section annonce={true} dataForCarousel={data} />
            <Section
               annonce={false}
               titreSection="Populaire"
               dataForCarousel={data}
            />
            <Section
               annonce={false}
               titreSection="Nouveautés"
               dataForCarousel={data}
            />
         </View>
      </ScrollView>
   );
}

const styles = StyleSheet.create({
   view_container: {
      flex: 1,
   },
});
