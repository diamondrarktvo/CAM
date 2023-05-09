import { Colors } from '_theme/Colors';
import React, { useCallback, useEffect, useState } from 'react';
import {
   View,
   Text,
   StyleSheet,
   FlatList,
   Image,
   SafeAreaView,
} from 'react-native';

export default function ListingPage({ route }) {
   //all states or variables
   let numberOfColumn = route.params.numberOfColumn;
   let dataToList = route.params.dataToListing;

   //all logics
   const _renderItem = useCallback(({ item }) => {
      return (
         <View style={styles.view_renderItem}>
            {item.type === 'film' ? (
               <Image style={styles.image} source={item.poster_path} />
            ) : (
               <View style={{ position: 'relative' }} key={item.id}>
                  <Image
                     style={styles.poster_genre}
                     source={item.poster_path} //require(film.urlImage) si path absolue et {{ uri : urlImage}} si lien
                  />
                  <View
                     style={[
                        StyleSheet.absoluteFillObject,
                        styles.maskImageGenre,
                     ]} //absoluteFillObject est une propriété reduisant l'écriture avec les propriétés position : absoluteFillObject de css
                  ></View>
                  <Text
                     style={[StyleSheet.absoluteFillObject, styles.nom_genre]}
                  >
                     {item.nom}
                  </Text>
               </View>
            )}
         </View>
      );
   }, []);

   const _idKeyExtractor = (item, index) =>
      item?.id == null ? index.toString() : item.id.toString();

   //all life cycles

   return (
      <SafeAreaView style={styles.container}>
         <FlatList
            data={dataToList}
            key={'_'}
            keyExtractor={_idKeyExtractor}
            renderItem={_renderItem}
            removeClippedSubviews={true}
            getItemLayout={(data, index) => ({
               length: data.length,
               offset: data.length * index,
               index,
            })}
            initialNumToRender={5}
            maxToRenderPerBatch={3}
            numColumns={numberOfColumn}
         />
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   /** for render item */
   view_renderItem: {
      flex: 1,
      margin: 2,
   },
   image: {
      width: '100%',
      height: 190,
      borderRadius: 10,
   },
   //if data is genres
   poster_genre: {
      width: '100%',
      height: 190,
      borderRadius: 10,
   },
   maskImageGenre: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      borderRadius: 20,
      width: '100%',
   },
   nom_genre: {
      fontWeight: 'bold',
      opacity: 0.9,
      color: Colors.white,
      fontSize: 24,
      textAlign: 'center',
      top: 80,
   },
});
