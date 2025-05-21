import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const CustomCommonHeader = ({ title, onLeftPress, leftIconName = 'chevron-small-left' }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftIconContainer} onPress={onLeftPress}>
        <Entypo name={leftIconName} size={24} color="#333" />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      {/* Placeholder for right space to center the title */}
      <View style={styles.rightSpace} />
    </View>
  );
};

export default CustomCommonHeader;

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    width:"100%",
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginTop:20,

    borderColor:"#d1d1d1"
  },
  leftIconContainer: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    flex: 1,

    fontSize: 18,
    color: '#333',
  },
  rightSpace: {
    width: 40, // same as left icon to center the title
  },
});
