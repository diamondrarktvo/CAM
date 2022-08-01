import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SearchBar } from '@rneui/themed';
import { Colors } from '../../theme/Colors';
import TopTabs from '../../components/navigations/tabs/TopTabs';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import HeaderGlobal from '../../components/header/HeaderGlobal';

export default function Home() {
   return (
      <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
         <View style={styles.view_container}>
            <View style={styles.head_content}>
               <HeaderGlobal />
            </View>
            <View style={styles.body_content}>
               <TopTabs />
            </View>
         </View>
      </KeyboardAwareScrollView>
   );
}

const styles = StyleSheet.create({
   view_container: {
      flex: 1,
      marginTop: 10,
      marginHorizontal: 5,
      backgroundColor: Colors.background,
   },
   head_content: {
      height: 45,
      marginVertical: 10,
   },
   body_content: {
      flex: 1,
      marginBottom: 65,
   },
});
