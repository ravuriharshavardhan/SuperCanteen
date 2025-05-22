import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomBottomDrop = ({ value, onChangeText, placeholder, dropdownData = [] }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelect = (item) => {
    onChangeText(item);
    setShowDropdown(false);
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={styles.selector}
        onPress={() => setShowDropdown(!showDropdown)}
        activeOpacity={0.7}
      >
        <Text style={value ? styles.selectedText : styles.placeholderText}>
          {value || placeholder}
        </Text>
        <Icon
          name={showDropdown ? 'arrow-drop-up' : 'arrow-drop-down'}
          size={24}
          color="#2E6074"
        />
      </TouchableOpacity>

      {showDropdown && (
        <View style={styles.dropdown}>
          <FlatList
            data={dropdownData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handleSelect(item)}
                style={styles.dropdownItem}
              >
                <Text style={styles.dropdownItemText}>{item}</Text>
              </TouchableOpacity>
            )}
            nestedScrollEnabled
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    marginTop: 8,
    zIndex: 1,
  },
  selector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 12,
    paddingHorizontal: 4,
  },
  placeholderText: {
    color: '#888',
    fontSize: 14,
  },
  selectedText: {
    color: '#2E6074',
    fontSize: 14,
  },
  dropdown: {
    backgroundColor: '#fff',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: 6,
    maxHeight: 180,
    elevation: 4,
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderColor: '#f1f1f1',
  },
  dropdownItemText: {
    fontSize: 14,
    color: '#333',
  },
});

export default CustomBottomDrop;
