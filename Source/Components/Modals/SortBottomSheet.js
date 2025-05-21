import React, { useEffect, useRef, useState } from 'react';
import {
  Modal,
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Height, Width } from '../../constants/constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const sortOptions = [
  'Discount',
  'Popular',
  'Price: Low to High',
  'Price: High to Low',
  'Best Seller',
  'Rating: High to Low',
  'Rating: Low to High',
];

const SortBottomSheet = ({ visible, onClose }) => {
  const slideAnim = useRef(new Animated.Value(Height(1000))).current;
  const [selectedSortOptions, setSelectedSortOptions] = useState(['Popular', 'Price: Low to High']);
  const insets = useSafeAreaInsets();

  const toggleOption = (option) => {
    setSelectedSortOptions((prev) =>
      prev.includes(option)
        ? prev.filter((v) => v !== option)
        : [...prev, option]
    );
  };

  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: Height(1000) - Height(860),
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: Height(1000),
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [visible]);

  return (
    <Modal animationType="none" transparent visible={visible} onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.backdrop} />
      </TouchableWithoutFeedback>

      <Animated.View style={[styles.sheet, { top: slideAnim }]}>
        <View style={styles.dragHandle} />
        <Text style={styles.header}>Sort</Text>

        

        <View >
          <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
            {sortOptions.map((option) => (
              <TouchableOpacity
                key={option}
                style={styles.optionRow}
                onPress={() => toggleOption(option)}
              >
                <Ionicons
                  name={selectedSortOptions.includes(option) ? 'checkbox' : 'square-outline'}
                  size={22}
                  color="#2E6074"
                />
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View style={[styles.footer, { paddingBottom: insets.top || 42 }]}>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Apply sort:', selectedSortOptions)}>
              <Text style={styles.applyText}>Apply</Text>
            </TouchableOpacity>
          </View>

          {/* Footer always visible at the bottom */}
      
        </View>
      </Animated.View>
    </Modal>
  );
};

export default SortBottomSheet;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  sheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: Height(750),
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  dragHandle: {
    width: Width(40),
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 2.5,
    alignSelf: 'center',
    marginBottom: 12,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 18,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  optionText: {
    fontSize: 15,
    marginLeft: 12,
    color: '#222',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    marginTop:230
  },
  cancelText: {
    fontSize: 16,
    color: '#666',
  },
  applyText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E6074',
  },
});
