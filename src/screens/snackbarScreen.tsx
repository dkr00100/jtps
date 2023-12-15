import { StyleSheet, View } from 'react-native';
import React from 'react';
import {
  Button,
  Icon,
  Snackbar,
  SnackbarLabelRenderItem,
  Text,
} from 'rn-jtps-ui-library';

const SnackbarScreen = () => {
  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  const renderItem: SnackbarLabelRenderItem = (label) => {
    return (
      <Text type="p11" style={{ color: 'white' }}>
        {label}
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      <Button onPress={onToggleSnackBar}>{visible ? 'Hide' : 'Show'}</Button>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        label="Error communicating with server"
        renderLabel={renderItem}
        icon={<Icon name="cross" size={20} color={'white'} />}
        onIconPress={onDismissSnackBar}
      />
    </View>
  );
};

export default SnackbarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
