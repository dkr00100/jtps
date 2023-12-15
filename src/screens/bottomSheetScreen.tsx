/* eslint-disable react-native/no-inline-styles */
import { Text, View } from 'react-native';
import React, { useCallback, useRef } from 'react';
import { Button, BottomSheet, BottomSheetRefProps } from 'rn-jtps-ui-library';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const BottomSheetScreen = () => {
  const ref = useRef<BottomSheetRefProps>(null);
  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive();
    if (isActive) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(-400);
    }
  }, []);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View>
        <Button onPress={onPress}>BottomSheetScreen</Button>
        <BottomSheet ref={ref}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}
          >
            <Text>Have a great day</Text>
          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};

export default BottomSheetScreen;
