import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Icon } from 'rn-jtps-ui-library';
import Row from '../../utils/row';
export default function IconScreen() {
  return (
    <View style={styles.container}>
      <Row>
        <Icon
          name="star-outlined"
          size={60}
          color={'#808080'}
          containerStyle={styles.iconContainer}
        />
        <Icon
          name="star-filled"
          size={60}
          containerStyle={styles.iconContainer}
        />
        <Icon
          name="star-smooth"
          size={60}
          containerStyle={styles.iconContainer}
        />
      </Row>
      <Row>
        <Icon name="criteria" size={60} containerStyle={styles.iconContainer} />
        <Icon
          name="search-vacancies"
          size={60}
          containerStyle={styles.iconContainer}
        />
        <Icon name="home" size={60} containerStyle={styles.iconContainer} />
        <Icon name="archive" size={60} containerStyle={styles.iconContainer} />
        <Icon
          name="user-account"
          size={60}
          containerStyle={styles.iconContainer}
        />
      </Row>
      <Row>
        <Icon
          name="notification-active"
          size={60}
          containerStyle={styles.iconContainer}
        />
        <Icon
          name="notification-idle"
          size={60}
          containerStyle={styles.iconContainer}
        />
      </Row>

      <Icon name="link" size={60} containerStyle={styles.iconContainer} />

      <Icon
        name="information"
        size={60}
        containerStyle={styles.iconContainer}
      />
      <Row>
        <Icon name="phone" size={60} containerStyle={styles.iconContainer} />
        <Icon
          name="clipboard"
          size={60}
          containerStyle={styles.iconContainer}
        />
        <Icon name="toggle" size={60} containerStyle={styles.iconContainer} />
        <Icon name="cross" size={60} containerStyle={styles.iconContainer} />
      </Row>
      <Row>
        <Icon name="leftChevron" size={60} containerStyle={styles.iconContainer} />
        <Icon name="upArrow" size={60} containerStyle={styles.iconContainer} />

        <Icon
          name="bottomArrow"
          size={60}
          containerStyle={styles.iconContainer}
        />

        <Icon name="chevron" size={60} containerStyle={styles.iconContainer} />
      </Row>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    padding: 8,
    borderRadius: 1,
    margin: 2,
    justifyContent: 'center',
  },
});
