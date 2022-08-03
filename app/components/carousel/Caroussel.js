import React from 'react';
import Carousel from 'react-native-snap-carousel';
import { SafeAreaView, StyleSheet, Image, Text, View } from 'react-native';
import { Colors } from '_theme/Colors';

export default function Caroussel({ data, annonce }) {
   const isCarousel = React.useRef(null);

   const _renderItem = ({ item }) => {
      return item.type === 'film' ? (
         <View key={item.id}>
            <Image
               style={
                  annonce === false
                     ? styles.poster_image
                     : styles.poster_image_annonce
               }
               source={item.poster_path} //require(film.urlImage) si path absolue et {{ uri : urlImage}} si lien
            />
            {annonce === false && (
               <Text style={styles.titre_film}>{item.title}</Text>
            )}
         </View>
      ) : (
         <View style={{ position: 'relative' }} key={item.id}>
            <Image
               style={styles.poster_genre}
               source={item.poster_path} //require(film.urlImage) si path absolue et {{ uri : urlImage}} si lien
            />
            <View
               style={[StyleSheet.absoluteFillObject, styles.maskImageGenre]} //absoluteFillObject est une propriété reduisant l'écriture avec les propriétés position : absoluteFillObject de css
            ></View>
            <Text style={[StyleSheet.absoluteFillObject, styles.nom_genre]}>
               {item.nom}
            </Text>
         </View>
      );
   };

   return (
      <SafeAreaView>
         <View style={styles.view_carousel}>
            <Carousel
               layout="default"
               ref={isCarousel}
               data={data}
               //ces props son utiles si la section est de type annonce
               autoplay={annonce ? true : false}
               autoplayDelay={annonce ? 1000 : null}
               autoplayInterval={annonce ? 2000 : null}
               loop={annonce ? true : false}
               loopClonesPerSide={5} //Nombre de clones à ajouter de chaque côté des éléments d'origine. Lors d'un balayage très rapide
               //fin des props spéficifique au section annonce
               renderItem={_renderItem}
               sliderWidth={150}
               itemWidth={annonce === false ? 145 : 190}
               inactiveSlideOpacity={0.9} //on uniformise tous les opacity
               inactiveSlideScale={1} //on uniformise tous les hauteur
               useScrollView={true}
            />
         </View>
      </SafeAreaView>
   );
}

//on met le width du carousel plus petit et on met à 100% le width du view qui l'englobe
const styles = StyleSheet.create({
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
      width: 180,
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
