import { StyleSheet, View, ViewStyle } from 'react-native';
import React, { FC } from 'react';
type Props = {
  style?: ViewStyle;
};
const Row: FC<Props> = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default Row;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
