/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  FlatList,
} from 'react-native';

import Header from './components/Header';
import ListItem from './components/ListItem';
//import FlatListHeader from './components/FlatListHeader';


//How do I make it so that I can pass in the title of the header?
WeeklyFlatListHeader = () => (
  <View style={styles.flatListHeaderView}>
    <Text style={styles.flatListHeaderText}> Weekly Jobs </Text>
  </View>
);

MonthlyFlatListHeader = (title) => (
  <Header title={} description={}/>
  <View style={styles.flatListHeaderView}>
    <Text style={styles.flatListHeaderText}> {title} Jobs </Text>
  </View>
);

const App = () => {
  const [weeklyItems, setWeeklyItems] = useState ([
    {id: 1, text:  'Rags and Kitchen Surfaces', nameText: 'MK'},
    {id: 2, text:  'Common Areas and Garage', nameText: 'KM'},
    {id: 3, text:  'Shopping', nameText: 'JP'},
    {id: 4, text:  'Trash, Recycling, Compost', nameText: 'JL'},
  ]);

  const [monthlyItems, setMonthlyItems] = useState ([
    {id: 1, text:  '1 Mop & 1 Bathroom Clean & 2 Vacuums', nameText: 'MK'},
    {id: 2, text:  '1 Mop & 1 Bathroom Clean & 2 Vacuums', nameText: 'KM'},
    {id: 3, text:  'Fridge Organize + Clean and Filler', nameText: 'JP'},
    {id: 4, text:  'Dishes', nameText: 'JL'},
  ]);

  return (
    <View style={styles.container}>
      <Header title="Masonic Jobs List"/>
      <FlatList 
        data={weeklyItems}
        //ListHeaderComponent = { this.WeeklyFlatListHeader}
        renderItem ={({item}) => <ListItem item= {item}/> }
        />
      <FlatList 
        data={monthlyItems}
        ListHeaderComponent = { this.MonthlyFlatListHeader}
        renderItem ={({item}) => <ListItem item= {item}/> }
        />
    </View>
  );a
};

const styles = StyleSheet.create({
  container: {
    flex:1, 
    paddingTop: 60,
  },
  flatListHeaderView: {
    padding: 15,
    backgroundColor: 'lavender',
  },
  flatListHeaderText: {
    color: 'dimgray',
    fontSize: 16,
    textAlign: 'center',
  },  
});

export default App;
