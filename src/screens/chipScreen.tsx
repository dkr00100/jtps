/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, View } from 'react-native';

import React from 'react';
import { Chip, Icon } from 'rn-jtps-ui-library';

const ChipScreen = () => {
  return (
    <View style={styles.container}>
      <Chip
        title="Selected Chip"
        selected={true}
        titleStyle={{ color: '#fff', fontWeight: '600' }}
        containerStyle={{ marginVertical: 15 }}
      />
      <Chip
        title="Chip"
        selected={false}
        titleStyle={{ paddingHorizontal: 16, color: '#000', fontWeight: '600' }}
        containerStyle={{ marginVertical: 15 }}
      />
      <Chip
        title="Outlined Chip"
        titleStyle={{ color: '#fff' }}
        type="outline"
        selected={true}
        containerStyle={{ marginVertical: 15 }}
      />
      <Chip
        title="Outlined & Disabled"
        type="outline"
        disabled
        containerStyle={{ marginVertical: 15 }}
      />
      <Chip
        title="Left Icon Chip"
        titleStyle={{ color: '#000', fontWeight: '600' }}
        icon={<Icon name="home" size={16} />}
        containerStyle={{ marginVertical: 15 }}
      />
      <Chip
        title="Right Icon Chip"
        icon={<Icon name="link" size={16} />}
        titleStyle={{ color: '#000', fontWeight: '600' }}
        iconRight
        containerStyle={{ marginVertical: 15 }}
      />
      <Chip
        title="Pressable Icon Chip"
        icon={<Icon name="home" size={16} />}
        titleStyle={{ color: '#000', fontWeight: '600' }}
        onPress={() => console.log('Icon chip was pressed!')}
        type="outline"
        raised={true}
        containerStyle={{ marginVertical: 15 }}
      />
      <Chip
        title="Pressable Icon Chip"
        titleStyle={{ color: '#000', fontWeight: '600' }}
        icon={<Icon name="link" size={16} />}
        onPress={() => console.log('Icon chip was pressed!')}
        iconRight
        raised={true}
        type="outline"
        containerStyle={{ marginVertical: 15 }}
      />
    </View>
  );
};

export default ChipScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
