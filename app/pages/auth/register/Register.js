import { StyleSheet, View, Text } from 'react-native';
import { Button } from '@rneui/themed';
import { Colors } from '../../../theme/Colors';

export default function Register() {
   return (
      <View style={styles.view_container}>
         <Text style={styles.text}>Register screen</Text>
         <Button
            title={'React Native Elements'}
            buttonStyle={{
               backgroundColor: Colors.purple,
            }}
            raised
         />
      </View>
   );
}
const styles = StyleSheet.create({
   view_container: {
      flex: 1,
   },
   text: {
      margin: 40,
   },
});
