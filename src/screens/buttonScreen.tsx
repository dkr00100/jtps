/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, View } from 'react-native';
import React from 'react';

import { Button, Icon, IconButton, FAB } from 'rn-jtps-ui-library';
import Row from '../../utils/row';


const ButtonScreen = () => {
  return (
    <View style={styles.container}>
      <Button>Button default</Button>
      <Row>
        <Button containerStyle={styles.buttonContainer} type="solid">
          Button solid
        </Button>
        <Button
          containerStyle={styles.buttonContainer}
          type="solid"
          disabled={true}
        >
          Button solid
        </Button>
      </Row>
      <Row>
        <Button containerStyle={styles.buttonContainer} type="outline">
          Button outline
        </Button>
        <Button
          containerStyle={styles.buttonContainer}
          type="outline"
          disabled={true}
        >
          Button outline
        </Button>
      </Row>

      <Row>
        <Button containerStyle={styles.buttonContainer} type="clear">
          Button clear
        </Button>
        <Button
          containerStyle={styles.buttonContainer}
          type="clear"
          disabled={true}
        >
          Button clear
        </Button>
      </Row>
      <Row>
        <Button
          containerStyle={styles.buttonContainer}
          type="solid"
          radius={8}
          buttonStyle={{
            backgroundColor: '#880',
          }}
        >
          Button Radius
        </Button>

        <Button
          containerStyle={styles.buttonContainer}
          type="solid"
          disabled={true}
          radius={8}
          buttonStyle={{
            backgroundColor: '#880',
          }}
        >
          Button Radius
        </Button>
      </Row>

      <Row>
        <Button
          containerStyle={styles.buttonContainer}
          type="solid"
          radius={8}
          loading={true}
        >
          Button Radius
        </Button>

        <Button
          containerStyle={styles.buttonContainer}
          type="solid"
          radius={8}
          loading={false}
          onPress={() => {
            console.log('pressed');
          }}
          title="Title"
          titleStyle={{
            fontSize: 30,
          }}
        />
      </Row>

      <Row>
        <IconButton
          containerStyle={styles.buttonContainer}
          type="solid"
          color="primary"
          radius={8}
          icon={
            <Icon
              name="archive"
              size={16}
              containerStyle={{ marginRight: 8 }}
            />
          }
          onPress={() => {
            console.log('pressed');
          }}
          loading={false}
          title="Title"
          titleStyle={{
            color: '#000',
          }}
        />

        <IconButton
          containerStyle={styles.buttonContainer}
          type="solid"
          color="primary"
          radius={8}
          icon={<Icon name="phone" size={16} />}
          loading={false}
        />

        <IconButton
          containerStyle={styles.buttonContainer}
          type="solid"
          color="primary"
          radius={8}
          icon={
            <Icon name="archive" size={16} containerStyle={{ marginLeft: 8 }} />
          }
          iconRight={true}
          loading={false}
          title="Title"
          titleStyle={{
            color: '#000',
          }}
        />
      </Row>

      <FAB
        title={'Test'}
        size="small"
        visible={true}
        placement="left"
        onPress={() => console.log('tapped on FAB')}
      />
      <FAB
        icon={<Icon name="phone" size={24} />}
        size="large"
        placement="right"
      />
    </View>
  );
};

export default ButtonScreen;

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
