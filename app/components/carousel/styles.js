import { StyleSheet } from 'react-native';
import { Colors } from '_theme/Colors';

//on met le width du carousel plus petit et on met à 100% le width du view qui l'englobe
export const styles = StyleSheet.create({
   view_carousel: {
      width: '100%',
      flexDirection: 'row',
   },
   //la taille de l'image est différent selon la section à afficher
   poster_image: {
      height: 160,
      width: 140,
      borderRadius: 20,
   },
   poster_image_annonce: {
      height: 230,
      width: 350,
      borderRadius: 10,
   },
   titre_film: {
      fontSize: 16,
      fontWeight: 'bold',
      color: Colors.black,
      textAlign: 'left',
      marginLeft: 10,
   },
   poster_genre: {
      height: 90,
      width: 140,
      borderRadius: 20,
   },
   maskImageGenre: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      borderRadius: 20,
      width: 140,
   },
   nom_genre: {
      fontWeight: 'bold',
      opacity: 0.9,
      color: Colors.white,
      fontSize: 24,
      textAlign: 'center',
      top: 25,
   },
});
