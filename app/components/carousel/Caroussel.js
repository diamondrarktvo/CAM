import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {
   Dimensions,
   SafeAreaView,
   StyleSheet,
   Image,
   Text,
   View,
} from 'react-native';
import { Colors } from './../../theme/Colors';
import { data } from '../../utils/data';

export default function Caroussel({ annonce }) {
   const isCarousel = React.useRef(null);

   const _renderItem = ({ item }) => {
      return (
         <View key={item.id}>
            <Image
               style={
                  annonce === false
                     ? styles.poster_image
                     : styles.poster_image_annonce
               }
               source={item.urlImage} //require(film.urlImage) si path absolue et {{ uri : urlImage}} si lien
            />
            {annonce === false && (
               <Text style={styles.titre_film}>{item.titre}</Text>
            )}
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
               renderItem={_renderItem}
               sliderWidth={150}
               itemWidth={annonce === false ? 145 : 160}
               inactiveSlideOpacity={0.9}
               inactiveSlideScale={1}
               useScrollView={true}
            />
         </View>
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   view_carousel: {
      width: '100%',
      flexDirection: 'row',
   },
   poster_image: {
      height: 160,
      width: 140,
      borderRadius: 10,
   },
   poster_image_annonce: {
      height: 200,
      width: 150,
      borderRadius: 10,
   },
   titre_film: {
      fontSize: 20,
      color: Colors.black,
      textAlign: 'center',
   },
});
