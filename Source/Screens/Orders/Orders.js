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

import CustomCommonHeader from '../../Components/Common/CustomCommonHeader';
import CustomSearchInput from '../../Components/CustomSearch';
import CustomBtn from '../../Components/CustomFilterBtn';
import CustomOrderCard from '../../Components/CustomOrderCard';
import CustomCancelCard from '../../Components/Cards/CustomCancelCard';
import {useNavigation} from '@react-navigation/native';
import CustomExchangeandReturnCard from '../../Components/Cards/CustomExchangeandReturnCard';
import CustomDeliveryCard from '../../Components/Cards/CustomCancelCard';

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

  const OnhandleTrack = () => {
    navigation.navigate('OrderTrack');
  };
  return (
    <View style={styles.container}>
      <CustomCommonHeader title={'Your Orders'} />
      <View style={{marginTop: 10}}>
        <CustomSearchInput />
      </View>

      <View style={styles.orderHeaderRow}>
        <Text style={styles.orderTitle}>Your Orders</Text>
        <CustomBtn
          title="Filter"
          onPress={() => {
            console.log('Filter button clicked');
            setModalVisible(true);
          }}
        />
      </View>

      <ScrollView>
        <View style={{rowGap: 30}}>
          <CustomOrderCard onTrack={() => navigation.navigate('OrderTrack')} />
          <CustomCancelCard
            OnPress={() => navigation.navigate('OrderCancel')}
          />
          <CustomExchangeandReturnCard
            onPress={() => navigation.navigate('OrderExchangeandReturn')}
          />
          <CustomExchangeandReturnCard
            onPress={() => navigation.navigate('OrderDetailsExchangeInitiated')}
          />
          <CustomOrderCard
            cancelTitle="Reorder"
            trackTitle="Exchange"
            replaceTitle="Return"
          />
          <CustomOrderCard
            onViewDetails={() => navigation.navigate('OrderArrivingProduct')}
            enableReplace={false}
            enableTrack={false}
            cancelTitle="cancel"
          />
          <CustomDeliveryCard
          
            OnPress={() => navigation.navigate('OrderTrack')}
          />
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
                <View style={styles.checkbox}>
                  {selectedStatuses.includes(option) && (
                    <Text style={styles.tick}>✔</Text>
                  )}
                </View>
                <Text>{option}</Text>
              </Pressable>
            ))}

            {/* Time Group */}
            <Text style={styles.sectionTitle}>Time Range</Text>
            {timeOptions.map((option, index) => (
              <Pressable
                key={index}
                style={styles.radioContainer}
                onPress={() => setSelectedTime(option)}>
                <View style={styles.checkbox}>
                  {selectedTime === option && (
                    <Text style={styles.tick}>✔</Text>
                  )}
                </View>
                <Text>{option}</Text>
              </Pressable>
            ))}

            {/* Buttons */}
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.cancelBtn} onPress={handleCancel}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelBtn} onPress={handleApply}>
                <Text style={styles.cancelText}>Apply</Text>
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
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#2E6074',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  tick: {
    fontSize: 14,
    color: '#2E6074',
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radio: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#2E6074',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  radioSelected: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#2E6074',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  cancelBtn: {
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    alignItems: 'center',

    height: 40,
    width: 200,
  },
  // applyBtn: {
  //   paddingVertical: 10,
  //   paddingHorizontal: 18,
  //   backgroundColor: '#2E6074',
  //   borderRadius: 6,
  // },
  cancelText: {
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  applyText: {
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
  },
});
