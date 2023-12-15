import { View } from 'react-native';
import { Icon, ListItem } from 'rn-jtps-ui-library';
import React, { useState } from 'react';

const ListItemScreen = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <View>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title style={{ marginBottom: 10 }}>John Doe</ListItem.Title>
          <ListItem.Subtitle>CEO, Example.com</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <Icon name="star-smooth" size={20} />
        <ListItem.Content>
          <ListItem.Title style={{ marginBottom: 10 }}>John Doe</ListItem.Title>
          <ListItem.Subtitle>CEO, Example.com</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>

      <ListItem.Expandable
        content={
          <ListItem.Content>
            <ListItem.Title style={{ marginBottom: 10 }}>
              Top Users
            </ListItem.Title>
            <ListItem.Subtitle>Tap to expand</ListItem.Subtitle>
          </ListItem.Content>
        }
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}
      >
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>John Doe</ListItem.Title>
            <ListItem.Subtitle>Principle Engineer</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>Albert</ListItem.Title>
            <ListItem.Subtitle>Staff Engineer</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </ListItem.Expandable>
    </View>
  );
};

export default ListItemScreen;
