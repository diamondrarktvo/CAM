import { StyleSheet } from 'react-native';
import { Colors } from '_theme/Colors';

const styles = StyleSheet.create({
   view_container: {
      flex: 1,
      backgroundColor: Colors.white,
      margin: 40,
      alignItems: 'center',
   },
   login_image: {
      width: 300,
      height: 250,
   },
   view_formulaire: {
      flex: 1,
   },
   view_head_form: {
      flex: 1,
      padding: 10,
   },
   title_form: {
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
   },
   text_formulaire: {
      textAlign: 'center',
   },
   view_input: {
      flex: 4,
   },
   input: {
      height: 60,
      backgroundColor: Colors.grey,
      padding: 10,
      width: 300,
      margin: 6,
      borderRadius: 15,
   },
   forgotText: {
      textAlign: 'right',
      paddingRight: 7,
      color: Colors.purple,
   },
   bouton_connexion: {
      backgroundColor: Colors.purple,
      padding: 15,
      borderRadius: 25,
      width: 270,
      marginHorizontal: 20,
      marginTop: 20,
      marginBottom: 25,
   },
});

export default styles;
