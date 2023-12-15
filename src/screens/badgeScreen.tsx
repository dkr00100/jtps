import { StyleSheet, View } from 'react-native';
import React from 'react';

import { Badge, Icon } from 'rn-jtps-ui-library';

const BadgeScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Icon name="notification-idle" size={24} />
        <Badge
          status="success"
          // eslint-disable-next-line react-native/no-inline-styles
          containerStyle={{ position: 'absolute', top: 0, left: 15 }}
        />
      </View>

      <Badge value="3" status="success" />
    </View>
  );
};

export default BadgeScreen;

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
