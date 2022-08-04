import { CardStyleInterpolators } from '@react-navigation/stack';
import { Easing } from 'react-native';
import { Colors } from '_theme/Colors';

//config for transitionSpec
const transitionConfig = {
   animation: 'timing',
   config: {
      duration: 60,
      easing: Easing.linear,
   },
};

export const configStack = {
   screenOptionsForHeaderShown: {
      headerShown: true,
      gestureEnabled: true,
      //CardStyleInterpolators est utile pour regler la transition durant le changement de screen, gestureEnabled doit être activé | gestureDirection peut aussi le faire|
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, //on utilise la transition par défaut de IOS
      transitionSpec: {
         open: transitionConfig,
         close: transitionConfig,
      },
      headerTintColor: Colors.white,
      headerTitleAlign: 'center',
      headerStyle: {
         backgroundColor: Colors.purple,
      },
      headerTitleStyle: {
         fontWeight: 'bold',
         fontSize: 24,
      },
      cardStyle: {
         backgroundColor: Colors.white,
      },
   },
};
