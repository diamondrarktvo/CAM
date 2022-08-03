import {
   StyleSheet,
   Text,
   View,
   Image,
   TextInput,
   TouchableOpacity,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Icon } from '@rneui/themed';
import { Colors } from '_theme/Colors';
import styles from './style';

export default function Register() {
   return (
      <KeyboardAwareScrollView>
         <View style={styles.view_container}>
            <Image
               source={require('_images/Register.gif')}
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
                     keyboardType="default"
                     placeholder="Entrer votre prénom ..."
                  />
                  <TextInput
                     style={styles.input}
                     keyboardType="email-address"
                     placeholder="Entrer un email valide ..."
                  />
                  <TextInput
                     style={styles.input}
                     keyboardType="default"
                     placeholder="Entrer votre mot de passe ..."
                     secureTextEntry={true}
                  />
                  <TextInput
                     style={styles.input}
                     keyboardType="default"
                     placeholder="Confirmer votre mot de passe ..."
                     secureTextEntry={true}
                  />
                  <TouchableOpacity style={styles.bouton_connexion}>
                     <Text
                        style={{
                           textAlign: 'center',
                           fontSize: 16,
                           fontWeight: 'bold',
                           color: Colors.white,
                        }}
                     >
                        S'inscrire
                     </Text>
                  </TouchableOpacity>
                  <Text style={{ textAlign: 'center' }}>
                     Vous avez déjà un compte?{' '}
                     <Text style={{ color: Colors.purple }}>Se connecter</Text>
                  </Text>
                  <Text
                     style={{
                        textAlign: 'center',
                        fontSize: 18,
                        marginVertical: 5,
                     }}
                  >
                     ---- ou ----
                  </Text>
                  <View style={styles.connexion_with_social}>
                     <Text style={styles.text_connexion}>
                        Connectez-vous avec :
                     </Text>
                     <View style={styles.icones}>
                        <Icon
                           raised
                           name="facebook"
                           type="font-awesome"
                           color={Colors.purple}
                           //onPress={() => console.log('hello')}
                        />
                        <Icon
                           raised
                           name="google"
                           type="font-awesome"
                           color={Colors.purple}
                        />
                        <Icon
                           raised
                           name="linkedin"
                           type="font-awesome"
                           color={Colors.purple}
                        />
                     </View>
                  </View>
               </View>
            </View>
         </View>
      </KeyboardAwareScrollView>
   );
}
