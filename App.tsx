import * as Font from 'expo-font';
import * as React from 'react';

import { ThemeProvider } from 'rn-jtps-ui-library';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/homeScreen';
import ButtonScreen from './src/screens/buttonScreen';
import IconScreen from './src/screens/iconScreen';
import BadgeScreen from './src/screens/badgeScreen';
import BottomSheetScreen from './src/screens/bottomSheetScreen';
import CardScreen from './src/screens/cardScreen';
import CheckBoxScreen from './src/screens/checkBoxScreen';
import ChipScreen from './src/screens/chipScreen';
import DropdownScreen from './src/screens/dropdownScreen';
import ListItemScreen from './src/screens/listItemScreen';
import SkeletonScreen from './src/screens/skeletonScreen';
import SnackbarScreen from './src/screens/snackbarScreen';
import TextInputScreen from './src/screens/textInputScreen';
import TextScreen from './src/screens/textScreen';
import { customTheme } from './src/constants/theme';
import PostMatchingScreen from './src/screens/postMatchingScreen';

export type RootStackParamList = {
  HomeScreen: undefined;
  ButtonScreen: undefined;
  TextScreen: undefined;
  IconScreen: undefined;
  ChipScreen: undefined;
  CheckBoxScreen: undefined;
  BadgeScreen: undefined;
  ListItemScreen: undefined;
  DropdownScreen: undefined;
  BottomSheetScreen: undefined;
  TextInputScreen: undefined;
  CarouselScreen: undefined;
  SkeletonScreen: undefined;
  CardScreen: undefined;
  SnackbarScreen: undefined;
  PostMatchingScreen: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [fontLoaded, setFontLoaded] = React.useState(false);

  React.useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        bruno: require('./assets/fonts/BrunoAceSC-Regular.ttf'),
      });
      setFontLoaded(true);
    };
    loadFonts();
  }, []);
  if (!fontLoaded) {
    return null; // or a loading indicator
  }
  return (
    <ThemeProvider theme={customTheme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="ButtonScreen" component={ButtonScreen} />
          <Stack.Screen name="IconScreen" component={IconScreen} />
          <Stack.Screen name="TextScreen" component={TextScreen} />
          <Stack.Screen name="ChipScreen" component={ChipScreen} />
          <Stack.Screen name="CheckBoxScreen" component={CheckBoxScreen} />
          <Stack.Screen name="BadgeScreen" component={BadgeScreen} />
          <Stack.Screen name="ListItemScreen" component={ListItemScreen} />
          <Stack.Screen name="DropdownScreen" component={DropdownScreen} />

          <Stack.Screen
            name="BottomSheetScreen"
            component={BottomSheetScreen}
          />

          <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
          <Stack.Screen name="SkeletonScreen" component={SkeletonScreen} />
          <Stack.Screen name="CardScreen" component={CardScreen} />
          <Stack.Screen name="SnackbarScreen" component={SnackbarScreen} />
          <Stack.Screen name="PostMatchingScreen" component={PostMatchingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
