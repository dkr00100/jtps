import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import {
  Card,
  CategoryCard,
  ListItem,
  Text,
  VacancyCard,
} from 'rn-jtps-ui-library';
import { customTheme } from '../constants/theme';

const CardScreen = () => {
  const [expanded, setExpanded] = useState(false);
  const [favourite, setFavourite] = useState(false);
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>Title</Card.Title>
        <Card.Subtitle>Subtitle</Card.Subtitle>
        <Card.Content>
          <ListItem.Expandable
            content={
              <ListItem.Content>
                <ListItem.Title>Help</ListItem.Title>
              </ListItem.Content>
            }
            isExpanded={expanded}
            onPress={() => {
              setExpanded(!expanded);
            }}
            containerStyle={{
              backgroundColor: customTheme.colors.antiFlashWhite,
            }}
          >
            <ListItem
              bottomDivider
              containerStyle={{
                backgroundColor: customTheme.colors.antiFlashWhite,
              }}
            >
              <ListItem.Content>
                <ListItem.Title>Instruction Title 1</ListItem.Title>
                <ListItem.Subtitle>Subtitle</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
            <ListItem
              containerStyle={{
                backgroundColor: customTheme.colors.antiFlashWhite,
              }}
            >
              <ListItem.Content>
                <ListItem.Title>Instruction Title 2</ListItem.Title>
                <ListItem.Subtitle>Subtitle</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          </ListItem.Expandable>
        </Card.Content>

        <Card.Divider />
        <Card.Footer>
          <Text type="h4">Test</Text>
        </Card.Footer>
      </Card>

      <VacancyCard
        cardTitle="Favourite Title"
        favourite={favourite}
        onFavouritePress={() => {
          setFavourite(!favourite);
        }}
        subtitle="Test Subtitle"
        badgesList={['Definite', 'Fulltime']}
        publishedDate="11/02/2002"
        closingDate="28/02/2002 - 19:00"
      >
        <Text type="p4" style={{ color: '#355360' }}>
          Reference No. Circular No. HR/MFET/03/2023
        </Text>
      </VacancyCard>

      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <CategoryCard
          cardTitle="CategoryTitle which is very long"
          favourite={favourite}
          onFavouritePress={() => {
            setFavourite(!favourite);
          }}
          onCardPress={() => {
            console.error('Card Press');
          }}
        />
        <CategoryCard
          cardTitle="CategoryTitle"
          favourite={favourite}
          onFavouritePress={() => {
            setFavourite(!favourite);
          }}
          onCardPress={() => {
            console.error('Card Press');
          }}
        />
      </View>
    </View>
  );
};

export default CardScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
