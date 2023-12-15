import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { Card, Text, ListItem } from 'rn-jtps-ui-library';

const PostMatchingScreen = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.postMatchingOuter}>
        <Card>
          <Text type="h6">ICT Support Assistant</Text>
        </Card>
        <View style={{ paddingHorizontal: 10, paddingTop: 10 }}>
          <ListItem.Expandable
            content={
              <ListItem.Content>
                <Text type="p9">Post Criteria 1</Text>
              </ListItem.Content>
            }
            isExpanded={expanded}
            onPress={() => {
              setExpanded(!expanded);
            }}
          >
            <View style={{ paddingTop: 10 }}>
              <ListItem style={styles.listItemContent}>
                <ListItem.Content>
                  <Text type="h6">Scale</Text>
                  <Text type="p9" style={{ marginTop: 10 }}>
                    Scale 16
                  </Text>
                </ListItem.Content>
              </ListItem>
              <ListItem style={styles.listItemContent}>
                <ListItem.Content>
                  <Text type="h6">MQF Level</Text>
                  <Text type="p9" style={{ marginTop: 10 }}>
                    N/A
                  </Text>
                </ListItem.Content>
              </ListItem>
              <ListItem style={styles.listItemContent}>
                <ListItem.Content>
                  <Text type="h6">ECTS</Text>
                  <Text type="p9" style={{ marginTop: 10 }}>
                    N/A
                  </Text>
                </ListItem.Content>
              </ListItem>
              <ListItem style={styles.listItemContent}>
                <ListItem.Content>
                  <Text type="h6">Position Required</Text>
                  <Text type="p9" style={{ marginTop: 10 }}>
                    N/A
                  </Text>
                </ListItem.Content>
              </ListItem>

              <ListItem style={styles.listItemContent}>
                <ListItem.Content>
                  <Text type="h6">Certificate</Text>
                  <Text type="p9" style={{ marginTop: 10 }}>
                    Public Officers - Qualification in Computing or ICT
                  </Text>
                </ListItem.Content>
              </ListItem>
              <ListItem style={styles.listItemContent}>
                <ListItem.Content>
                  <Text type="h6">Conditions</Text>
                  <Text type="p9" style={{ marginTop: 10 }}>
                    N/A
                  </Text>
                </ListItem.Content>
              </ListItem>
            </View>
          </ListItem.Expandable>
        </View>
      </View>
    </View>
  );
};

export default PostMatchingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  postMatchingOuter: {
    borderColor: '#F5F5F5',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 5,
    paddingBottom: 15,
    width: '90%',
  },
  listItemContent: {
    borderBottomColor: '#ECF1F3',
    borderBottomWidth: 1,
  },
});
