/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Dropdown, DropdownItem } from 'rn-jtps-ui-library';

const DropdownScreen = () => {
  const [selected, setSelected] = useState<DropdownItem>();
  const data = [
    { label: 'One', value: '1' },
    { label: 'Two', value: 2 },
    { label: 'Three', value: '3' },
    { label: 'Four', value: '4' },
    { label: 'Five', value: '5' },
    { label: 'Six', value: '6' },
  ];
  return (
    <View style={styles.container}>
      <View style={{ marginTop: -80 }}>
        <View style={{ marginBottom: 20 }}>
          <Dropdown
            labelStyle={{ fontWeight: '600', textAlign: 'center' }}
            contentStyle={{ fontWeight: '600' }}
            label="Select Item"
            data={data}
            onSelect={setSelected}
          />
        </View>
        <Dropdown
          disabled={true}
          labelStyle={{ fontWeight: '600', textAlign: 'center' }}
          disabledLabelStyle={{
            fontWeight: '600',
            textAlign: 'center',
          }}
          contentStyle={{ fontWeight: '600' }}
          label="Select Item"
          data={data}
          onSelect={setSelected}
        />
      </View>
      {!!selected && (
        <Text>
          Selected: label = {selected.label} and value = {selected.value}
        </Text>
      )}
    </View>
  );
};

export default DropdownScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
