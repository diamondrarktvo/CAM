import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SearchBar } from '@rneui/themed';
import { Colors } from '../../theme/Colors';
import TopTabs from '../../components/navigations/tabs/TopTabs';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Header from '../../components/header/Header';

export default function Home() {
   return (
      <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
         <View style={styles.view_container}>
            <View style={styles.head_content}>
               <Header />
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
   },
   head_content: {
      height: 70,
      marginVertical: 10,
   },
   body_content: {
      flex: 1,
   },
});
