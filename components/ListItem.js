import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  Alert,
  TouchableOpacity,
} from 'react-native';

const ListItem = ({item}) => {
  return (
    <TouchableOpacity onPress={()=>{Alert.alert(item.text)}} style={styles.listItem}>
      <View style = {styles.listItemView}>
          <Text style={styles.listItemText}> {item.text} </Text>
          <Text style={styles.listItemText}> {item.nameText} </Text>
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    listItem:{
        padding:15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 3,
        borderColor: '#eee',
    },
    listItemView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    listItemText: {
        fontSize: 12,
    }
});

export default ListItem;