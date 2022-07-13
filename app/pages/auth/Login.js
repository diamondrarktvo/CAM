import {
   StyleSheet,
   Text,
   View,
   Image,
   TextInput,
   TouchableOpacity,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function Login() {
   return (
      //utile pour regler le probleme de vue quand le clavier virtuelle s'ouvre
      <KeyboardAwareScrollView>
         <View style={styles.view_container}>
            <Image
               style={styles.login_image}
               source={require('../../images/Login.gif')}
            />
            <View style={styles.view_formulaire}>
               <View style={styles.view_head_form}>
                  <Text style={styles.title_form}>Connexion</Text>

                  <Text style={styles.text_formulaire}>
                     Entrer vos informations pour continuer
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
                  <Text style={styles.forgotText}>Mot de passe oublié?</Text>
                  <TouchableOpacity style={styles.bouton_connexion}>
                     <Text
                        style={{
                           textAlign: 'center',
                           fontSize: 16,
                           fontWeight: 'bold',
                           color: '#fff',
                        }}
                     >
                        Se connecter
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
      backgroundColor: '#fff',
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
      backgroundColor: '#F5F3F3',
      padding: 10,
      width: 300,
      margin: 6,
      borderRadius: 15,
   },
   forgotText: {
      textAlign: 'right',
      paddingRight: 7,
      color: '#7360e3',
   },
   bouton_connexion: {
      backgroundColor: '#7360e3',
      padding: 15,
      borderRadius: 25,
      width: 270,
      marginHorizontal: 20,
      marginTop: 20,
      marginBottom: 25,
   },
});
