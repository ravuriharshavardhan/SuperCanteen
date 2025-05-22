import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Modal,
  Pressable,
  TouchableOpacity,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import CustomCommonHeader from '../../Components/Common/CustomCommonHeader';
import CustomSearchInput from '../../Components/CustomSearch';
import CustomBtn from '../../Components/CustomFilterBtn';
import CustomOrderCard from '../../Components/CustomOrderCard';
import CustomCancelCard from '../../Components/Cards/CustomCancelCard';
import {useNavigation} from '@react-navigation/native';
import CustomExchangeandReturnCard from '../../Components/Cards/CustomExchangeandReturnCard';
import CustomDeliveryCard from '../../Components/Cards/CustomCancelCard';

const FilterIcon = ({ size = 24, color = '#2E6074' }) => (
  <Feather name="filter" size={size} color={color} />
);

const Orders = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedStatuses, setSelectedStatuses] = useState([]);
  const [selectedTime, setSelectedTime] = useState('');

  const statusOptions = [
    'All Orders',
    'Arriving',
    'Delivered',
    'Cancelled',
    'Return',
    'Exchange',
  ];

  const timeOptions = [
    'All',
    'Last 30 Days',
    'Last 6 Months',
    'This Year',
    'Last Year',
  ];
  const navigation = useNavigation();

  const toggleStatus = option => {
    if (selectedStatuses.includes(option)) {
      setSelectedStatuses(selectedStatuses.filter(item => item !== option));
    } else {
      setSelectedStatuses([...selectedStatuses, option]);
    }
  };

  const handleApply = () => {
    setModalVisible(false);
    // Handle filter logic here
  };

  const handleCancel = () => {
    setModalVisible(false);
    setSelectedStatuses([]);
    setSelectedTime('');
  };

  return (
    <View style={styles.container}>
      <CustomCommonHeader title={'Your Orders'} />
      <View style={{marginTop: 10}}>
        <CustomSearchInput />
      </View>

      <View style={styles.orderHeaderRow}>
        <Text style={styles.orderTitle}>Your Orders</Text>

        <TouchableOpacity
          style={styles.filterBtn}
          onPress={() => setModalVisible(true)}>
          <FilterIcon size={20} color="#2E6074" />
          <Text style={styles.filterBtnText}>Filter</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={{rowGap: 30}}>
          <CustomOrderCard onTrack={() => navigation.navigate('OrderTrack')} />
          <CustomCancelCard OnPress={() => navigation.navigate('OrderCancel')} />
          <CustomExchangeandReturnCard
            onPress={() => navigation.navigate('OrderExchangeandReturn')}
          />
          <CustomExchangeandReturnCard
            onPress={() => navigation.navigate('OrderDetailsExchangeInitiated')}
          />
          <CustomOrderCard cancelTitle="Reorder" trackTitle="Exchange" replaceTitle="Return" />
          <CustomOrderCard
            onViewDetails={() => navigation.navigate('OrderArrivingProduct')}
            enableReplace={false}
            enableTrack={false}
            cancelTitle="cancel"
          />
          <CustomDeliveryCard OnPress={() => navigation.navigate('OrderTrack')} />
        </View>
      </ScrollView>

      {/* Filter Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Filter Orders</Text>

            {/* Status Group */}
            <Text style={styles.sectionTitle}>Order Status</Text>
            {statusOptions.map((option, index) => (
              <Pressable
                key={index}
                style={styles.checkboxContainer}
                onPress={() => toggleStatus(option)}>
                <View
                  style={[
                    styles.checkbox,
                    selectedStatuses.includes(option) && styles.checkboxSelected,
                  ]}>
                  {selectedStatuses.includes(option) && (
                    <Text style={styles.tick}>✔</Text>
                  )}
                </View>
                <Text style={styles.optionText}>{option}</Text>
              </Pressable>
            ))}

            {/* Time Group */}
            <Text style={styles.sectionTitle}>Time Range</Text>
            {timeOptions.map((option, index) => (
              <Pressable
                key={index}
                style={styles.radioContainer}
                onPress={() => setSelectedTime(option)}>
                <View style={styles.radio}>
                  {selectedTime === option && <View style={styles.radioSelected} />}
                </View>
                <Text style={styles.optionText}>{option}</Text>
              </Pressable>
            ))}

            {/* Buttons */}
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.actionBtn, styles.cancelBtn]}
                onPress={handleCancel}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.actionBtn, styles.applyBtn]}
                onPress={handleApply}>
                <Text style={styles.applyText}>Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  orderHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
  orderTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2E6074',
  },
  filterBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E7F0F4',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
  },
  filterBtnText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2E6074',
    marginLeft: 8,
  },

  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
    color: '#2E6074',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 8,
    color: '#333',
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 2,
    borderColor: '#2E6074',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    borderRadius: 4,
  },
  checkboxSelected: {
    backgroundColor: '#2E6074',
  },
  tick: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },

  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  radio: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#2E6074',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  radioSelected: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#2E6074',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },

  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  actionBtn: {
    flex: 1,
    height: 44,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  cancelBtn: {
    backgroundColor: '#f0f0f0',
  },
  cancelText: {
    fontWeight: '600',
    color: '#2E6074',
    fontSize: 16,
  },
  applyBtn: {
    backgroundColor: '#2E6074',
  },
  applyText: {
    fontWeight: '600',
    color: '#fff',
    fontSize: 16,
  },
});
