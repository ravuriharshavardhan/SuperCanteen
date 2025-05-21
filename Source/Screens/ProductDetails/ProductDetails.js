import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
  import CustomHeader from '../../Components/CustomHeader';
  import CustomSearchInput from '../../Components/CustomSearch';
  import CustomCasual from '../../Components/CustomCasual';
  import {Menwatch} from '../../Mock/Data/Menwatch';
  import {Height, Width} from '../../constants/constants';
  import CUstomAddressRow from '../../Components/CustomAddressRow';
  import CustomProductDetailsData from '../../Components/CustomProductDetailsData';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import CustomSimilarProdcuts from '../../Components/CustomSimilarProdcuts';
  import {SimilarProductData} from '../../Mock/Data/SimilarProductData';
  import CustomCustomersPhotoCard from '../../Components/CustomCustomersPhotoCard';
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import CustomAuthButton from '../../Components/CustomAuthButton';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  
  const ProductDetails = ({navigation}) => {
    return (
      <View style={styles.wrapper}>
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 120}}>
          <CustomHeader />
          <CustomSearchInput />
          <View >
            <CustomCasual cardHeight={Height(346)} paddingHorizontal={1}  cardWidth={390}  data={Menwatch} />
            <TouchableOpacity style={styles.heartIconWrapper}>
              <AntDesign name="hearto" size={22} color="#2E6074" />
            </TouchableOpacity>
          </View>
  
          <View style={styles.detailsWrapper}>
            <Text style={styles.title}>
              Titan Karishma Analog Watch – For Women {'\n'}2480SM02
            </Text>
  
            <View style={styles.ratingRow}>
              {[...Array(5)].map((_, index) => (
                <AntDesign key={index} name="staro" size={16} color="#D9D9D9" />
              ))}
              <Text style={styles.noRatingText}> No ratings yet</Text>
            </View>
  
            <Text style={styles.price}>₹1,995</Text>
            <Text style={styles.subText}>Free delivery by 24th May</Text>
            <Text style={[styles.subText,{color:"#416F81"}]}>Seller: EliteEdge Pvt Limited</Text>
            <Text style={styles.label}>Size: Onesize</Text>
            <Text style={[styles.label, {color: '#2E6074', fontWeight: '600'}]}>
              All Offers & Coupons
            </Text>
          </View>
  
          <View style={styles.infoRow}>
            <Ionicons name="refresh-circle-outline" size={24} color="#2E6074" />
            <Text style={styles.infoText}>7 Days Return Policy</Text>
          </View>
          <View style={styles.infoRow}>
            <Ionicons name="cash-outline" size={24} color="#2E6074" />
            <Text style={styles.infoText}>Cash on Delivery & UPI Available</Text>
          </View>
  
          <CUstomAddressRow />
  
          <View style={styles.bottomRow}>
            <Ionicons name="information-circle-outline" size={24} color="#2E6074" />
            <Text style={styles.infoText}>Product authenticity verified</Text>
          </View>
  
          <CustomProductDetailsData />
  
          <View style={styles.sectionWrapper}>
            <Text style={styles.sectionTitle}>Photos by our Customers</Text>
            <CustomCustomersPhotoCard data={Menwatch} />
          </View>
  
          <View style={styles.sectionWrapper}>
            <Text style={styles.sectionTitle}>Similar Products for You</Text>
            <CustomSimilarProdcuts data={SimilarProductData} />
          </View>
        </ScrollView>
  
        {/* Bottom Bar */}
        <View style={styles.bottomButtons}>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome name="share-alt" size={20} color="#2E6074" />
          </TouchableOpacity>
  
          <CustomAuthButton
            width={Width(114)}
            onPress={() => navigation.navigate('Orders')}
            title="Add to Cart"
            backgroundColor="#FFFFFF"
            br={10}
            borderWidth={1}
            borderColor="#2E6074"
            textStyle={{color: '#2E6074', fontSize: 16, fontWeight: 'bold'}}
          />
  
          <CustomAuthButton
            title="Buy Now"
            onPress={() => navigation.navigate('ProductCheckoutScreen')}
            width={Width(114)}
            backgroundColor="#2E6074"
            borderWidth={1}
            borderColor="#2E6074"
            br={10}
            textStyle={{fontSize: 16, fontWeight: 'bold'}}
          />
        </View>
      </View>
    );
  };
  
  export default ProductDetails;
  
  const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      backgroundColor: '#fff',
    },
    container: {
      backgroundColor: '#fff',
    },
    heartIconWrapper: {
      position: 'absolute',
      top: Height(350),
      right: 20,

      padding: 8,
      borderRadius: 20,
    },
    detailsWrapper: {
      paddingHorizontal: 16,
      paddingVertical: 12,
    },
    title: {
      color: '#2E6074E8',
      fontSize: 16,
      marginBottom: 6,
      fontWeight: '500',
    },
    ratingRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 6,
    },
    noRatingText: {
      marginLeft: 8,
      color: 'gray',
      fontSize: 13,
    },
    price: {
      color: '#000',
      fontSize: 18,

      marginBottom: 6,
    },
    subText: {
      color: 'gray',
      fontSize: 14,
      marginBottom: 4,
    },
    label: {
      color: '#000',
      fontFamily: 'Inter-Medium',
      marginTop: 10,
      fontSize: 14,
    },
    infoRow: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      marginVertical: 6,
    },
    infoText: {
      marginLeft: 10,
      fontSize: 14,
      color: '#000',
    },
    bottomRow: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: '#eee',
      marginTop: 10,
    },
    bottomButtons: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      flexDirection: 'row',
      backgroundColor: '#fff',
      paddingVertical: 10,
      paddingHorizontal: 12,
      borderTopWidth: 1,
      borderColor: '#eee',
      justifyContent: 'space-between',
      alignItems: 'center',
      elevation: 10,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: {width: 0, height: -2},
      shadowRadius: 4,
    },
    iconButton: {
      width: 45,
      height: 45,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    sectionWrapper: {
      paddingHorizontal: 16,
      paddingTop: 16,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#000',
      marginBottom: 8,
    },
  });
  