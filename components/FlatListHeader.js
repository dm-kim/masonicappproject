import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const FlatListHeader = ({title}) => {
  return (
    <View style = {styles.flatListHeaderView}>
        <Text style={styles.flatListHeaderText}> {title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default FlatListHeader;