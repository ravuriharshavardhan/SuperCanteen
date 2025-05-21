import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const CustomTextInput = ({
  style,
  borderColor = '#d2d22',
  borderWidth = 1,
  borderRadius = 8,
  placeholderTextColor = '#999',
  fontSize = 16,
  paddingHorizontal = 12,
  paddingVertical = 10,
  ...props
}) => {
  return (
    <TextInput
      style={[
        styles.input,
        {
          borderColor,
          borderWidth,
          borderRadius,
          fontSize,
          paddingHorizontal,
          paddingVertical,
        },
        style,
      ]}
      placeholderTextColor={placeholderTextColor}
      {...props}
    />
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  input: {
    color: '#000',
  },
});
