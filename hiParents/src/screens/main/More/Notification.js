import React, {useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Wording Notification',
    time: 'Saturday, 27 Nov 2021',
    status: true,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Wording notification ',
    time: 'Saturday, 27 Nov 2021',
    status: true,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Wording Notification',
    time: 'Saturday, 27 Nov 2021',
    status: true,
  },
  {
    id: 'ioo98aea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Wording Notification',
    time: 'Saturday, 27 Nov 2021',
    status: false,
  },
  {
    id: 'laj8affc-c555-48d3-a4f8-fbd91aa97f63',
    title: 'Wording notification ',
    time: 'Saturday, 27 Nov 2021',
    status: true,
  },
  {
    id: '50675a0f-3da1-471f-bd96-145573oo9472',
    title: 'Wording Notification',
    time: 'Saturday, 27 Nov 2021',
    status: false,
  },
];

const Item = ({title, time, status}) => (
  <View style={styles.item}>
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.time}>{time}</Text>
    </View>
  </View>
);

const Notification = () => {
  const renderItem = ({item}) => <Item title={item.title} time={item.time} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
    height: 65,
  },
  title: {
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'left',
    color: '#2F2F33',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  time: {
    fontFamily: 'Nunito-Regular',
    fontSize: 12,
    fontWeight: 'normal',
    textAlign: 'left',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 5,
  },
  viewStatus: {
    width: 50,
    height: 50,
    borderRound: 50,
    backgroundColor: '#10B278',
  },
});
