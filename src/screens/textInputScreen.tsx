import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import { TextInput, SearchTextInput } from 'rn-jtps-ui-library';

// import Row from '../utils/row';

const TextInputScreen = () => {
  const [textValue1, setTextValue1] = useState<string>('');
  return (
    <View style={styles.container}>
      <TextInput
        value={textValue1}
        setValue={setTextValue1}
        label={'Text Input with Label and Error Message:'}
        placeholder="Placeholder"
        errorMessage="TestError"
      />
      <View style={{ marginTop: 20 }} />
      <SearchTextInput value={textValue1} setValue={setTextValue1} clear />
      <View style={{ marginTop: 20 }} />
      <TextInput
        value={textValue1}
        setValue={setTextValue1}
        placeholder="Underline Placeholder"
        type="underline"
      />
      <View style={{ marginTop: 20 }} />
      <Text>Result: {textValue1}</Text>
    </View>
  );
};

export default TextInputScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  buttonContainer: {
    padding: 8,
  },
});
