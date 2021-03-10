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
  Button,
  SectionList,
  TouchableOpacity,
  Modal,
} from 'react-native';

import Header from '../Header';
import { jobsListData } from '../../data/jobsListData';


// function houseJob(){
//   title: String;
//   cadence: String;
//   description: String;
//   assignee: Person;
// }

const Item = ({ title }) => (
  <View style={styles.row}>
    <Text>{title}</Text>  
  </View>
);

//When someone clicks on the title of a job, this function runs
const pressHandlerJob = (item) => {
  console.log(item.title);
}

//When someone clicks on the initials of someone's name, this function runs
class JobsTab extends React.Component {
    constructor(props){
        super(props)
    }
    pressHandlerPerson = (item) => {
      console.log(item.nameText);
      this.props.onClosePress();
    }

    render () {
        console.log(this.props.test)
        return(
        <Modal 
        animationType="slide"
        style={styles.container}>
          <Header title= 'House Jobs'></Header>
          <SectionList 
            sections={jobsListData}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={styles.row}>
                <TouchableOpacity onPress = {() => pressHandlerJob(item)}>
                  <Text style={styles.row}> {item.title} </Text>
                </TouchableOpacity> 
                <TouchableOpacity style = {styles.circle} onPress = {() => this.pressHandlerPerson(item)}>
                  <Text style={styles.row}> {item.nameText} </Text>
                </TouchableOpacity> 
              </View>
            )}
            renderSectionHeader={({ section }) => (
              <View>
                <Text style={styles.sectionHeader}>{section.title}</Text>  
              </View>
            )}
          />
        </Modal>
        );
    }
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex:1, 
  },
  sectionHeader: {
    padding: 15,
    backgroundColor: 'lavender',
    textAlign: 'center',
    fontSize: 28,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    fontSize: 14,
  },  
  circle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 50,
    backgroundColor: 'gray',
  }
});

export default JobsTab;
