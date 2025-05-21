import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomPasswordInput = ({
  style,
  borderColor = '#d2d22',
  borderWidth = 1,
  borderRadius = 8,
  placeholderTextColor = '#999',
  fontSize = 16,
  paddingHorizontal = 10,
  ...props
}) => {
  const [secureText, setSecureText] = useState(true);

  return (
    <View
      style={[
        styles.container,
        {
          borderColor,
          borderWidth,
          borderRadius,
          paddingHorizontal,

        },
        style,
      ]}
    >
      <TextInput
        style={[styles.input, { fontSize }]}
        secureTextEntry={secureText}
        placeholderTextColor={placeholderTextColor}
        {...props}
      />
      <TouchableOpacity onPress={() => setSecureText(!secureText)}>
        <Icon
          name={secureText ? 'visibility-off' : 'visibility'}
          size={24}
          color="#888"
        />
      </TouchableOpacity>
    </View>
  );
};

export default CustomPasswordInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    color: '#000',
  },
});
