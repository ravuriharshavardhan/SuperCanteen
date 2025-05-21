import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

const cartItems = [
  {
    id: 1,
    name: 'Timex',
    description: 'Bella Analog Watch for Womens',
    image: require('../../assets/Beatuy/B1.png'),
    price: '₹4,889',
    seller: 'EliteEdge Pvt Limited',
  },
  {
    id: 2,
    name: 'YouBelle',
    description: 'Casual Wear Pendant for Womens',
    image: require('../../assets/MensWatch/m1b.png'),
    price: '₹4,889',
    seller: 'EliteEdge Pvt Limited',
  },
  {
    id: 3,
    name: 'WomenClub',
    description: 'Tote Handbag for Womens',
    image: require('../../assets/fashion/F1.png'),
    price: '₹4,889',
    seller: 'EliteEdge Pvt Limited',
  },
];

// Custom Dropdown
const CustomDropdown = ({ options, selected, onSelect }) => {
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity
        onPress={() => setVisible(true)}
        style={styles.dropdownButton}
      >
        <Text style={styles.dropdownText}>{selected}</Text>
        <Feather name="chevron-down" size={16} color="#000" />
      </TouchableOpacity>

      <Modal
        transparent
        visible={visible}
        animationType="fade"
        onRequestClose={() => setVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setVisible(false)}
        >
          <View style={styles.dropdownContainer}>
            {options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.dropdownItem}
                onPress={() => {
                  onSelect(option);
                  setVisible(false);
                }}
              >
                <Text style={styles.dropdownItemText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

// Cart Card Component
const CartCard = ({ item, onUpdate }) => {
  const [selectedSize, setSelectedSize] = useState(item.size);
  const [selectedQty, setSelectedQty] = useState(item.quantity);

  return (
    <View style={styles.card}>
    <Image source={item.image} style={styles.image} />


      <View style={styles.details}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.subtitle}>{item.description}</Text>

        <View style={styles.dropdownRow}>
          <CustomDropdown
            options={['Onesize']}
            selected={selectedSize}
            onSelect={(val) => setSelectedSize(val)}
          />
          <CustomDropdown
            options={['1', '2', '3', '4', '5']}
            selected={`Quantity: ${selectedQty}`}
            onSelect={(val) => setSelectedQty(val)}
          />
        </View>

        <Text style={styles.deliveryText}>
          <Text style={{ color: '#000', fontWeight: '600' }}>
            Free delivery by 24th May
          </Text>
        </Text>
        <Text style={styles.returnPolicy}>↩ 7 days return policy</Text>
        <Text style={styles.seller}>
          Seller:{' '}
          <Text style={{ color: '#416E81' }}>{item.seller}</Text>
        </Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </View>
  );
};

const CustomCartCard = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      {/* <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back-outline" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Your Cart</Text>
        <View style={{ width: 24 }} />
      </View> */}

      {/* FlatList */}
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CartCard item={item} />}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
};

export default CustomCartCard;

// Styles
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f2f2' },
  header: {
    height: 56,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  headerTitle: { fontSize: 16, fontWeight: '600' },

  // Cart Card Styles
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    margin: 12,
    borderRadius: 10,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
   
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 8,
    backgroundColor: '#eee',
  },
  details: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },
  title: { fontWeight: 'bold', fontSize: 14 },
  subtitle: { color: '#666', fontSize: 12, marginBottom: 4 },
  dropdownRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 6,
  },
  deliveryText: {
    fontSize: 12,
    marginTop: 4,
  },
  returnPolicy: {
    fontSize: 12,
    color: '#444',
    marginTop: 2,
  },
  seller: {
    fontSize: 12,
    marginTop: 2,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 4,
  },

  // Custom Dropdown
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f6f8',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  dropdownText: { fontSize: 12, marginRight: 6 },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  dropdownContainer: {
    backgroundColor: '#fff',
    borderRadius: 6,
    paddingVertical: 6,
  },
  dropdownItem: {
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  dropdownItemText: {
    fontSize: 14,
  },
});
