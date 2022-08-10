import React, { useCallback } from 'react';
import {
   View,
   Text,
   StyleSheet,
   FlatList,
   Image,
   SafeAreaView,
   StatusBar,
} from 'react-native';
import { film } from '_utils';

export default function ListingPage() {
   const _renderItem = useCallback(({ item }) => {
      return (
         <View style={styles.view_renderItem}>
            <Image style={styles.image} source={item.poster_path} />
         </View>
      );
   }, []);

   const _idKeyExtractor = (item, index) =>
      item?.id == null ? index.toString() : item.id.toString();

   return (
      <SafeAreaView style={styles.container}>
         <FlatList
            data={film}
            key={'_'}
            keyExtractor={_idKeyExtractor}
            renderItem={_renderItem}
            removeClippedSubviews={true}
            initialNumToRender={5}
            maxToRenderPerBatch={3}
            numColumns={2}
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
      margin: 1,
   },
   image: {
      width: '100%',
      height: 190,
   },
});
