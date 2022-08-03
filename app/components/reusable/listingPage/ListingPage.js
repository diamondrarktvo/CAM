import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ListingPage() {
   return (
      <View style={styles.view_container}>
         <Text>Welcome in listing page</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   view_container: {
      flex: 1,
      margin: 100,
   },
});
