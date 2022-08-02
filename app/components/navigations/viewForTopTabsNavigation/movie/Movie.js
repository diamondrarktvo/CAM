import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Colors } from '../../../../theme/Colors';
import { film, genres } from '../../../../utils/data';
import Section from '../../../reused/sectionWithCarousel/SectionWithCarousel';

export default function Movie() {
   return (
      <ScrollView>
         <View style={styles.view_container}>
            <Section annonce={true} dataForCarousel={film} />
            <Section
               annonce={false}
               titreSection="Populaire"
               dataForCarousel={film}
            />
            <Section
               annonce={false}
               titreSection="Nouveautés"
               dataForCarousel={film}
            />
            <Section
               annonce={false}
               titreSection="Genre"
               dataForCarousel={genres}
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
