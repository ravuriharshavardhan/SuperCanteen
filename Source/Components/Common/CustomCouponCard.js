import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 45) / 2;

const coupons = [
  {
    id: '1',
    title: 'Flat 20% Off',
    subtitle: 'On min. purchase of ₹499',
    code: 'WELCOME20',
    expiry: '30 Sep 2025',
  },
  {
    id: '2',
    title: 'Flat ₹100 Off',
    subtitle: 'On orders above ₹999',
    code: 'SAVE100',
    expiry: '15 Oct 2025',
  },
  {
    id: '3',
    title: 'Buy 1 Get 1',
    subtitle: 'Applicable on select items',
    code: 'BOGO',
    expiry: '01 Dec 2025',
  },
  {
    id: '4',
    title: 'Buy 1 Get 1',
    subtitle: 'Applicable on select items',
    code: 'BOGO',
    expiry: '01 Dec 2025',
  },
  {
    id: '5',
    title: 'Buy 1 Get 1',
    subtitle: 'Applicable on select items',
    code: 'BOGO',
    expiry: '01 Dec 2025',
  },
  {
    id: '6',
    title: 'Buy 1 Get 1',
    subtitle: 'Applicable on select items',
    code: 'BOGO',
    expiry: '01 Dec 2025',
  },
];

const CouponCard = ({ item }) => (
  <View style={styles.card}>
    <View style={styles.topBanner}>
      <Text style={styles.discountText}>{item.title}</Text>
      <Text style={styles.subText}>{item.subtitle}</Text>
    </View>

    <View style={styles.dottedLineContainer}>
      <View style={styles.dottedLine} />
      <Image
        source={require('../../../assets/Icons/content_cut.png')}
        style={styles.scissorIcon}
        resizeMode="contain"
      />
    </View>

    <View style={styles.detailsContainer}>
      <View style={styles.row}>
        <Text style={styles.label}>Code:</Text>
        <Text style={styles.code}>{item.code}</Text>
        <MaterialIcons name="content-copy" size={14} color="#999" style={{ marginLeft: 4 }} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Expiry:</Text>
        <Text style={styles.expiry}>{item.expiry}</Text>
      </View>
    </View>

    <TouchableOpacity>
      <Text style={styles.applyText}>Apply Coupon</Text>
    </TouchableOpacity>
  </View>
);

const CustomCouponCard = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={coupons}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CouponCard item={item} />}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.listContent}
        initialNumToRender={4}
        windowSize={10}
        removeClippedSubviews={true}
      />
    </View>
  );
};

export default CustomCouponCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  listContent: {
    paddingBottom: 20,
    paddingTop: 10,
  },
  card: {
    width: CARD_WIDTH,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#eee',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  },
  topBanner: {
    backgroundColor: '#2E6074',
    paddingVertical: 12,
    alignItems: 'center',
  },
  discountText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#fff',
  },
  subText: {
    fontSize: 12,
    color: '#D8E3E8',
    marginTop: 2,
  },
  dottedLineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',

  },
  dottedLine: {
    borderBottomWidth: 1,
    borderStyle: 'dotted',
    borderColor: '#000',
    flex: 1,

    marginVertical: 6,

  },
  scissorIcon: {
    position: 'absolute',
    right: 10,
    top: -2,
    height: 16,
    width: 16,
    backgroundColor: 'transparent',
  },
  detailsContainer: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  label: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
    marginRight: 6,
  },
  code: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
  },
  expiry: {
    fontSize: 12,
    fontWeight: '500',
    color: '#D14444',
  },
  applyText: {
    color: '#2E6074',
    textAlign: 'center',
    paddingVertical: 10,
    fontWeight: '600',
    fontSize: 13,
  },
});
