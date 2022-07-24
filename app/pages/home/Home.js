import { TOKENTMDB } from '@env';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SearchBar } from '@rneui/themed';
import { Colors } from '../../theme/Colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function Home() {
   return (
      <KeyboardAwareScrollView>
         <View style={styles.view_container}>
            <View style={styles.view_content}>
               <View style={styles.content_head}>
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
            </View>
         </View>
      </KeyboardAwareScrollView>
   );
}

const styles = StyleSheet.create({
   view_container: {
      flex: 1,
      backgroundColor: Colors.background,
   },
   view_content: {
      flex: 1,
      flexDirection: 'column',
      marginHorizontal: 10,
      marginVertical: 40,
   },
   content_head: {
      flex: 1,
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
