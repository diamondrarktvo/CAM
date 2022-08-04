import { Text, View, ScrollView } from 'react-native';
import { film, genres } from '_utils/constante/data';
import Section from '_components/reusable/sectionWithCarousel/SectionWithCarousel';
import { styles } from './style';

export default function Movie({ navigation }) {
   return (
      <ScrollView>
         <View style={styles.view_container}>
            <Section annonce={true} dataForCarousel={film} />
            <Section
               annonce={false}
               titreSection="Populaires"
               dataForCarousel={film}
               navigation={navigation}
            />
            <Section
               annonce={false}
               titreSection="Nouveautés"
               dataForCarousel={film}
               navigation={navigation}
            />
            <Section
               annonce={false}
               titreSection="Tendances"
               dataForCarousel={film}
               navigation={navigation}
            />
            <Section
               annonce={false}
               titreSection="Genres"
               dataForCarousel={genres}
               navigation={navigation}
            />
         </View>
      </ScrollView>
   );
}
