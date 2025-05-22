import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import { FontSize, Height, Width } from '../../constants/constants';
import CustomSearch from '../../Components/CustomSearch';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomCategoryList from '../../Components/CustomCategoryList';
import CustomCasual from '../../Components/CustomCasual';
import categories from '../../Mock/Data/categories';
import ColorCustomSlider from '../../Components/ColorCustomSlider';
import Products from '../../Mock/Data/Prodcuts';
import CustomOfferCard from '../../Components/CustomOfferCard';
import offerData from '../../Mock/Data/offerData';
import Fashion from '../../Mock/Data/Fashion';
import BeautyData from '../../Mock/Data/BeautyData';
import ElectronicsHome from '../../Mock/Data/ElectronicsHome';
import CustomFavoriteCard from '../../Components/CustomFavoriteCard';

const Sliders = [
  { id: 1, image: require('../../../assets/Sliders/Slider1.png') },
  { id: 2, image: require('../../../assets/Sliders/Slider1.png') },
  { id: 3, image: require('../../../assets/Sliders/Slider1.png') },
];

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Header: Location and Profile */}
      <View style={styles.header}>
        <View style={styles.locationRow}>
          <Image
            style={styles.locationIcon}
            source={require('../../../assets/Icons/location_on-2.png')}
          />
          <Text style={styles.deliverText}>
            Deliver to{' '}
            <Text style={styles.deliverBold}>
              Maruti Apartments-Del..
            </Text>
          </Text>
          <Pressable
            style={styles.profileIconWrapper}
            onPress={() => navigation.navigate('Profile')}
          >
            <Image
              style={styles.profileIcon}
              source={require('../../../assets/Icons/ProfileIcon.png')}
            />
          </Pressable>
        </View>

        {/* Search and Icons */}
        <View style={styles.searchRow}>
          <View style={{ flex: 1, marginRight: 12 }}>
            <Pressable onPress={() => navigation.navigate('Search')}>
              <CustomSearch backgroundColor="#fff" />
            </Pressable>
          </View>
          <Pressable onPress={() => navigation.navigate('Wishlist')}>
            <MaterialIcons
              size={20}
              name="favorite-border"
              style={styles.icon}
            />
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Orders')}>
            <Image
              style={styles.cartIcon}
              source={require('../../../assets/Icons/shopping_cart.png')}
            />
          </Pressable>
        </View>
      </View>

      {/* Categories */}
      <View style={styles.section}>
        <CustomCategoryList
          horizontal
          data={categories}
          bgColor="#D4E7F2"
          width={Width(32)}
          height={Height(32)}
          borderRadius={Width(15)}
          selectedBorderColor="#008ECC"
          textColor="#333"
          textStyle={{ fontSize: FontSize(13) }}
          imageSize={Height(34)}
        />
      </View>

      <View style={styles.divider} />

      {/* Slider Section */}
      <CustomCasual cardRadius={20} paddingHorizontal={20} data={Sliders} />

      {/* Fashion */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Fashion</Text>
        <CustomCategoryList
          data={Fashion}
          horizontal={false}
          numColumns={3}
          bgColor="#D4DEF226"
          width={Width(100)}
          height={Height(105)}
          borderRadius={Width(5)}
          selectedBorderColor="#008ECC"
          textColor="#333"
          textStyle={{ fontSize: FontSize(13) }}
          containerStyle={{ paddingTop: Height(12) }}
          gap={Width(20)}
          imageSize={Height(80)}
        />
        <Text style={styles.viewAll} onPress={() => navigation.navigate('Fashion')}>
          View all
        </Text>
      </View>

      {/* Beauty */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Beauty & Wellness</Text>
        <CustomCategoryList
          data={BeautyData}
          horizontal={false}
          numColumns={3}
          bgColor="#D4DEF226"
          width={Width(100)}
          height={Height(105)}
          borderRadius={Width(5)}
          selectedBorderColor="#008ECC"
          textColor="#333"
          textStyle={{ fontSize: FontSize(13) }}
          containerStyle={{ paddingTop: Height(12) }}
          gap={Width(20)}
          imageSize={Height(80)}
        />
        <Text style={styles.viewAll} onPress={() => navigation.navigate('Fashion')}>
          View all
        </Text>
      </View>

      {/* Electronics */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Electronics & Home Essentials</Text>
        <CustomCategoryList
          data={ElectronicsHome}
          horizontal={false}
          numColumns={3}
          bgColor="#D4DEF226"
          width={Width(100)}
          height={Height(105)}
          borderRadius={Width(5)}
          selectedBorderColor="#008ECC"
          textColor="#333"
          textStyle={{ fontSize: FontSize(13) }}
          containerStyle={{ paddingTop: Height(12) }}
          gap={Width(20)}
          imageSize={Height(80)}
        />
        <Text style={styles.viewAll} onPress={() => navigation.navigate('Fashion')}>
          View all
        </Text>
      </View>

      {/* Product Slider */}
      <ColorCustomSlider data={Products} />

      {/* Hot Deals */}
      <View style={styles.section}>
        <Text style={styles.hotDealsText}>
          HOT DEALS{' '}
          <Image
            style={{ height: 14, width: 14 }}
            source={require('../../../assets/Icons/local_fire_department.png')}
          />{' '}
          JUST FOR YOU..
        </Text>
        <CustomOfferCard item={offerData} />
      </View>

      {/* Favorite Styles */}
      <View style={[styles.section, { backgroundColor: '#2B5B9612' ,justifyContent:"center"}]}>
        <View style={{ flexDirection: 'row', alignItems: 'center',top:25 }}>
          <Text style={styles.sectionTitle}>Style That Doesn’t Clock Out</Text>
          <Image
            style={{ height: 20, width: 20, marginLeft: 5,  marginBottom:10}}
            source={require('../../../assets/Icons/av_timer.png')}
          />
        </View>
        <CustomFavoriteCard whiteBg />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginVertical: Width(5),
    marginHorizontal: Width(5),
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: Width(10),
  },
  locationIcon: {
    height: Height(16),
    width: Width(16),
  },
  deliverText: {
    fontSize: 12,
  },
  deliverBold: {
    fontFamily: 'Inter-Bold',
    fontWeight: '900',
  },
  profileIconWrapper: {
    marginLeft: 'auto',
  },
  profileIcon: {
    height: Height(24),
    width: Width(24),
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  icon: {
    marginRight: 16,
  },
  cartIcon: {
    width: Width(15),
    height: Height(15),
  },
  divider: {
    height: 1,
    backgroundColor: '#d2d2d2',
    marginHorizontal: Width(5),
    marginVertical: 10,
  },
  section: {
    marginHorizontal: Width(5),
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 10,
  },
  viewAll: {
    textAlign: 'right',
    textDecorationLine: 'underline',
    color: '#2E6074E8',
    marginVertical: 20,
  },
  hotDealsText: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 10,
  },
});
