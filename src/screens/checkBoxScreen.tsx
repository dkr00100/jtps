import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';

import { CheckBox, Icon } from 'rn-jtps-ui-library';

const CheckBoxScreen = () => {
  var [checked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <CheckBox
        title="Checkbox"
        iconRight={false}
        checked={checked}
        checkedIcon={<Icon name="checkedCircle" size={24} />}
        uncheckedIcon={<Icon name="uncheckedCircle" size={24} />}
        onPress={() => {
          setChecked(!checked);
        }}
      />
    </View>
  );
};

export default CheckBoxScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    padding: 8,
  },
});
