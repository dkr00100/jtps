/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Button } from 'rn-jtps-ui-library';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type HomeScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenProp>();
  return (
    <View style={styles.container}>
      <Button
        type="solid"
        radius={8}
        onPress={() => {
          navigation.navigate('ButtonScreen');
        }}
        title="Buttons"
        titleStyle={{
          fontSize: 18,
          paddingHorizontal: 16,
        }}
      />

      <Button
        type="solid"
        radius={8}
        onPress={() => {
          navigation.navigate('IconScreen');
        }}
        title="Icons"
        titleStyle={{
          fontSize: 18,
          paddingHorizontal: 16,
        }}
      />
      <Button
        type="solid"
        radius={8}
        onPress={() => {
          navigation.navigate('TextScreen');
        }}
        title="Texts"
        titleStyle={{
          fontSize: 18,
          paddingHorizontal: 16,
        }}
      />
      <Button
        type="solid"
        radius={8}
        onPress={() => {
          navigation.navigate('ChipScreen');
        }}
        title="Chips"
        titleStyle={{
          fontSize: 18,
          paddingHorizontal: 16,
        }}
      />
      <Button
        type="solid"
        radius={8}
        onPress={() => {
          navigation.navigate('DropdownScreen');
        }}
        title="Dropdown"
        titleStyle={{
          fontSize: 18,
          paddingHorizontal: 16,
        }}
      />
      <Button
        type="solid"
        radius={8}
        onPress={() => {
          navigation.navigate('BadgeScreen');
        }}
        title="Badge"
        titleStyle={{
          fontSize: 18,
          paddingHorizontal: 16,
        }}
      />

      <Button
        type="solid"
        radius={8}
        onPress={() => {
          navigation.navigate('ListItemScreen');
        }}
        title="ListItems"
        titleStyle={{
          fontSize: 18,
          paddingHorizontal: 16,
        }}
      />

      <Button
        type="solid"
        radius={8}
        onPress={() => {
          navigation.navigate('BottomSheetScreen');
        }}
        title="BottomSheet"
        titleStyle={{
          fontSize: 18,
          paddingHorizontal: 16,
        }}
      />

      <Button
        type="solid"
        radius={8}
        onPress={() => {
          navigation.navigate('TextInputScreen');
        }}
        title="Text Input"
        titleStyle={{
          fontSize: 18,
          paddingHorizontal: 16,
        }}
      />
      <Button
        type="solid"
        radius={8}
        onPress={() => {
          navigation.navigate('SkeletonScreen');
        }}
        title="Skeleton"
        titleStyle={{
          fontSize: 18,
          paddingHorizontal: 16,
        }}
      />
      <Button
        type="solid"
        radius={8}
        onPress={() => {
          navigation.navigate('CheckBoxScreen');
        }}
        title="Checkbox"
        titleStyle={{
          fontSize: 18,
          paddingHorizontal: 16,
        }}
      />
      <Button
        type="solid"
        radius={8}
        onPress={() => {
          navigation.navigate('CardScreen');
        }}
        title="Card"
        titleStyle={{
          fontSize: 18,
          paddingHorizontal: 16,
        }}
      />
      <Button
        type="solid"
        radius={8}
        onPress={() => {
          navigation.navigate('SnackbarScreen');
        }}
        title="Snackbar"
        titleStyle={{
          fontSize: 18,
          paddingHorizontal: 16,
        }}
      />
      <Button
        type="solid"
        radius={8}
        onPress={() => {
          navigation.navigate('PostMatchingScreen');
        }}
        title="Post Matching"
        titleStyle={{
          fontSize: 18,
          paddingHorizontal: 16,
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
