import { View, Text, StyleSheet } from 'react-native';
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
                  <Text style={styles.icon_user}>D</Text>
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
      flexDirection: 'column',
      marginHorizontal: 10,
      marginVertical: 40,
   },
   content_head: {
      height: 60,
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
   search_bar: {
      backgroundColor: Colors.grey,
      borderRadius: 20,
      width: 270,
   },
   icon_user: {
      backgroundColor: Colors.purple,
      fontSize: 40,
      fontWeight: 'bold',
      width: 60,
      height: 60,
      textAlign: 'center',
      borderRadius: 50,
      color: Colors.white,
   },
});
