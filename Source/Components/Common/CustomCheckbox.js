// CustomCheckbox.js
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const CustomCheckbox = ({ checked, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon
        name={checked ? 'check-square' : 'square'}
        size={20}
        color={checked ? '#2E6074' : '#B0B0B0'}
      />
    </TouchableOpacity>
  );
};

export default CustomCheckbox;

const styles = StyleSheet.create({
  container: {
    marginLeft: 6, 
  },
});
