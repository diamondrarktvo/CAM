import {
   StyleSheet,
   Text,
   View,
   Image,
   TextInput,
   TouchableOpacity,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button } from '@rneui/themed';
import { Colors } from '../../../theme/Colors';

export default function Register() {
   return (
      <KeyboardAwareScrollView>
         <View style={styles.view_container}>
            <Image
               source={require('../../../images/Register.gif')}
               style={styles.register_image}
            />
            <View style={styles.view_formulaire}>
               <View style={styles.view_head_form}>
                  <Text style={styles.title_form}>Inscription</Text>

                  <Text style={styles.text_formulaire}>
                     Veuillez completer les informations
                  </Text>
               </View>
               <View
                  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                  style={styles.view_input}
               >
                  <TextInput
                     style={styles.input}
                     keyboardType="email-address"
                     placeholder="Entrer votre email ..."
                  />
                  <TextInput
                     style={styles.input}
                     keyboardType="default"
                     placeholder="Entrer votre mot de passe ..."
                     secureTextEntry={true}
                  />
                  <TouchableOpacity style={styles.bouton_connexion}>
                     <Text
                        style={{
                           textAlign: 'center',
                           fontSize: 16,
                           fontWeight: 'bold',
                           color: '#fff',
                        }}
                     >
                        S'inscrire
                     </Text>
                  </TouchableOpacity>
                  <Text style={{ textAlign: 'center' }}>
                     Vous n'avez pas de compte?{' '}
                     <Text style={{ color: '#7360e3' }}>S'inscrire</Text>
                  </Text>
               </View>
            </View>
         </View>
      </KeyboardAwareScrollView>
   );
}
const styles = StyleSheet.create({
   view_container: {
      flex: 1,
      margin: 20,
      alignItems: 'center',
   },
   register_image: {
      width: 300,
      height: 250,
   },
   view_formulaire: {
      flex: 1,
   },
   view_head_form: {
      flex: 1,
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
