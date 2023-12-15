import { StyleSheet, View, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import {
  Carousel,
  CarouselListRenderItem,
  VacancyCard,
  VacancyCardProps,
} from 'rn-jtps-ui-library';

const CarouselScreen = () => {
  const { width } = useWindowDimensions();
  const [favourite, setFavourite] = useState(false);

  const items: VacancyCardProps[] = [
    {
      cardTitle: 'Vacancy 1',
      favourite: favourite,
      onFavouritePress: () => {
        setFavourite(!favourite);
      },
      subtitle: 'Vacancy Subtitle',
      badgesList: ['Definite', 'Fulltime'],
      publishedDate: '11/11/11',
      closingDate: '22/12/11',
    },
    {
      cardTitle: 'Vacancy 2',
      favourite: favourite,
      onFavouritePress: () => {
        setFavourite(!favourite);
      },
      subtitle: 'Vacancy Subtitle',
      badgesList: ['Definite', 'Fulltime'],
      publishedDate: '11/11/11',
      closingDate: '22/12/11',
    },
    {
      cardTitle: 'Vacancy 3',
      favourite: favourite,
      onFavouritePress: () => {
        setFavourite(!favourite);
      },
      subtitle: 'Vacancy Subtitle',
      badgesList: ['Definite', 'Fulltime'],
      publishedDate: '11/11/11',
      closingDate: '22/12/11',
    },
  ];

  const renderItem: CarouselListRenderItem<VacancyCardProps> = ({
    item,
    index,
  }) => {
    return (
      // <View style={{ width }}>
      <VacancyCard
        key={index}
        cardTitle={item.cardTitle}
        badgesList={item.badgesList}
        closingDate={item.closingDate}
        favourite={item.favourite}
        onFavouritePress={item.onFavouritePress}
        publishedDate={item.publishedDate}
        subtitle={item.subtitle}
        style={{ width }}
      />
      // </View>
    );
  };

  return (
    <View style={[styles.container, { width }]}>
      <Carousel items={items} renderItem={renderItem} />
      <Carousel items={items} renderItem={renderItem} />
      <Carousel items={items} renderItem={renderItem} />
    </View>
  );
};

export default CarouselScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
