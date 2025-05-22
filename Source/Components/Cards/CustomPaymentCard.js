import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const CustomPaymentCard = ({
  title = 'CARDS',
  methodLabel = 'Credit and Debit Card',
  icon = 'credit-card',
  isDefault = false,
  onToggleDefault = () => {},
  onAddPress = () => {},
}) => {
  const [checked, setChecked] = useState(isDefault);

  const handleToggle = () => {
    setChecked(!checked);
    onToggleDefault(!checked);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.cardTitle}>{title}</Text>
        <TouchableOpacity style={styles.defaultToggle} onPress={handleToggle}>
          <Text style={styles.defaultText}>Set as Default</Text>
          <View style={styles.checkbox}>
            {checked && <View style={styles.checkboxChecked} />}
          </View>
        </TouchableOpacity>
      </View>

      {/* Card Row */}
      <View style={styles.cardRow}>
        <View style={styles.iconRow}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name={icon} size={18} color="#333" />
          </TouchableOpacity>
          <Text style={styles.cardText}>{methodLabel}</Text>
        </View>
        <TouchableOpacity onPress={onAddPress}>
          <Text style={styles.addLink}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomPaymentCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 12,
    padding: 16,
    backgroundColor: '#fff',
    maxWidth: 400,
    alignSelf: 'center',
    width: '100%',
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#334155',
    letterSpacing: 0.5,
  },
  defaultToggle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  defaultText: {
    fontSize: 13,
    color: '#6B7280',
    marginRight: 8,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: '#9CA3AF',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    width: 10,
    height: 10,
    backgroundColor: '#2E6074',
    borderRadius: 1,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  cardText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },
  addLink: {
    color: '#2E6074',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});
