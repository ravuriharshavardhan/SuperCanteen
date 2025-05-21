import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Or any other icon library

const CustomOrderBtn = ({
  title = 'Use Location',
  iconName = 'location-on',
  iconColor = '#4a7c8a',
  borderColor = '#4a7c8a',
  width = 200,
  height = 50,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          width,
          height,
          borderColor,
        },
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.content}>
        <Icon name={iconName} size={20} color={iconColor} style={styles.icon} />
        <Text style={[styles.text, { color: iconColor }]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1.5,
    borderRadius: 12,
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default CustomOrderBtn;
