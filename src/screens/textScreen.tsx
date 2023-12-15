import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Text, Heading, Paragraph } from 'rn-jtps-ui-library';

export default function TextScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Heading</Text>
      <Heading type="h1" style={styles.text}>
        Heading
      </Heading>

      <Text type="h2" style={styles.text}>
        Heading
      </Text>
      <Text type="h3" style={styles.text}>
        Heading
      </Text>
      <Text type="h4" style={{ ...styles.text }}>
        Heading
      </Text>

      <Text type="h5" style={{ ...styles.text }}>
        Heading
      </Text>
      <Text type="h6" style={{ ...styles.text }}>
        Heading
      </Text>
      <Text type="h7" style={{ ...styles.text }}>
        Heading
      </Text>

      <Paragraph type="p1" style={styles.text}>
        Paragraph
      </Paragraph>

      <Text type="p3" style={styles.text}>
        Paragraph
      </Text>
      <Text type="p5" style={styles.text}>
        Paragraph
      </Text>
      <Text type="p6" style={{ ...styles.text }}>
        Paragraph
      </Text>

      <Text type="p7" style={{ ...styles.text }}>
        Paragraph
      </Text>
      <Text type="p9" style={{ ...styles.text }}>
        Paragraph
      </Text>
      <Text type="p11" style={{ ...styles.text }}>
        Paragraph
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    // fontFamily: 'bruno',
    color: '#808080',
    textAlign: 'center',
    fontSize: 50,
  },
});
