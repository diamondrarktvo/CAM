import React, { useCallback, useEffect, useState } from 'react';
import {
   View,
   Text,
   StyleSheet,
   FlatList,
   Image,
   SafeAreaView,
} from 'react-native';
import { film } from '_utils';

export default function ListingPage({ route }) {
   //all states or variables
   let numberOfColumn = route.params.numberOfColumn;

   //all logics
   const _renderItem = useCallback(({ item }) => {
      return (
         <View style={styles.view_renderItem}>
            <Image style={styles.image} source={item.poster_path} />
         </View>
      );
   }, []);

   const _idKeyExtractor = (item, index) =>
      item?.id == null ? index.toString() : item.id.toString();

   //all life cycles

   return (
      <SafeAreaView style={styles.container}>
         <FlatList
            data={film}
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
});
