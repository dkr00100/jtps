import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Skeleton } from 'rn-jtps-ui-library';

const SkeletonScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Skeleton width={100} height={12} style={{ marginBottom: 10 }} />
        <Skeleton width={85} height={12} style={{ marginBottom: 10 }} />
        <Skeleton width={20} height={20} style={{ marginBottom: 10 }} />
        <Skeleton circle width={20} height={20} style={{ marginBottom: 10 }} />
        <Skeleton
          circle
          width={40}
          height={40}
          style={{
            marginBottom: 10,
            borderRadius: 60,
            transform: [{ scaleX: 2 }],
          }}
        />
      </View>
    </View>
  );
};

export default SkeletonScreen;

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
