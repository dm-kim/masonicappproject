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
} from 'react-native';

import Header from './components/Header';
import { jobsListData } from './data/jobsListData';
import JobsTab from './components/tabs/Jobs';

const HOME = 'home'

//When someone clicks on the title of a job, this function runs
const pressHandlerJob = (item) => {
  console.log(item.title);
}

const App = () => {
    const [openTabName, setOpenTabName] = useState(HOME);

    const renderJobsTab  = () => {
      return <JobsTab
      test={'test'}
      onClosePress={()=> setOpenTabName(HOME)} />
    }
    console.log(openTabName)
    if (openTabName === HOME){
      return (<SafeAreaView>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
        <Button style = {styles.sectionHeader} title={'Jobs'} onPress={() => setOpenTabName('anything')} />
      </SafeAreaView>)
    }
    // if openTabName === 'Jobs' renderJobsTab()
    // 
    return renderJobsTab();
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex:1, 
  },
  sectionHeader: {
    padding: 15,
    top: 100,
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

export default App;
