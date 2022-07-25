import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SearchBar } from '@rneui/themed';
import { Colors } from '../../theme/Colors';

export default function Header() {
   return (
      <View style={styles.container}>
         <SearchBar
            platform={Platform.OS === 'android' ? 'android' : 'ios'}
            lightTheme
            containerStyle={styles.search_bar}
            placeholder="Search ..."
            cancelIcon
         />
         <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.icon_user}>D</Text>
         </TouchableOpacity>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      marginVertical: 10,
      flexDirection: 'row',
      justifyContent: 'space-around',
   },
   search_bar: {
      width: 250,
      backgroundColor: Colors.grey,
      borderRadius: 20,
   },
   icon_user: {
      backgroundColor: Colors.purple,
      fontSize: 27,
      fontWeight: 'bold',
      width: 40,
      height: 40,
      marginVertical: 10,
      textAlign: 'center',
      borderRadius: 40,
      color: Colors.white,
   },
});
