import { Text, View, ScrollView } from 'react-native';
import { film, genres } from '_utils/data';
import Section from '_components/reusable/sectionWithCarousel/SectionWithCarousel';
import { styles } from './style';

export default function Movie() {
   return (
      <ScrollView>
         <View style={styles.view_container}>
            <Section annonce={true} dataForCarousel={film} />
            <Section
               annonce={false}
               titreSection="Populaires"
               dataForCarousel={film}
            />
            <Section
               annonce={false}
               titreSection="Nouveautés"
               dataForCarousel={film}
            />
            <Section
               annonce={false}
               titreSection="Tendances"
               dataForCarousel={film}
            />
            <Section
               annonce={false}
               titreSection="Genres"
               dataForCarousel={genres}
            />
         </View>
      </ScrollView>
   );
}
