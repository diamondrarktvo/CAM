import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Colors } from '_theme/Colors';
import { film, genres } from '_utils/data';
import Section from '_components/reused/sectionWithCarousel/SectionWithCarousel';

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
