import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FontSize, Height, Width } from '../../constants/constants';
import CustomSearch from '../../Components/CustomSearch';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomCategoryList from '../../Components/CustomCategoryList';
import CustomCasual from '../../Components/CustomCasual';
import categories from '../../Mock/Data/categories';
import { Pressable, ScrollView } from 'react-native-gesture-handler';
import ColorCustomSlider from '../../Components/ColorCustomSlider';
import Products from '../../Mock/Data/Prodcuts';
import CustomOfferCard from '../../Components/CustomOfferCard';
import offerData from '../../Mock/Data/offerData';
import Fashion from '../../Mock/Data/Fashion';

const Sliders = [
  {
    id: 1,
    image: require('../../../assets/Sliders/Slider1.png'),
  },
  {
    id: 2,
    image: require('../../../assets/Sliders/Slider1.png'),
  },
  {
    id: 3,
    image: require('../../../assets/Sliders/Slider1.png'),
  },
];

const Categories = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Location and Profile */}
        <View style={styles.headerRow}>
          <Image
            style={styles.locationIcon}
            source={require('../../../assets/Icons/location_on-2.png')}
          />
          <Text style={styles.locationText}>
            Deliver to{' '}
            <Text style={styles.locationBoldText}>Maruti Apartments-Del..</Text>
          </Text>
          <View style={styles.profileIconContainer}>
            <Pressable onPress={() => navigation.navigate('Profile')}>
              <Image
                style={styles.profileIcon}
                source={require('../../../assets/Icons/ProfileIcon.png')}
              />
            </Pressable>
          </View>
        </View>

        {/* Search and Icons */}
        <View style={styles.searchRow}>
          <View style={styles.searchContainer}>
            <CustomSearch />
          </View>
          <View style={styles.iconRow}>
            <MaterialIcons
              size={15}
              name={'favorite-border'}
              style={styles.iconSpacing}
            />
            <Image
              style={styles.cartIcon}
              source={require('../../../assets/Icons/shopping_cart.png')}
            />
          </View>
        </View>

        {/* Fashion Section */}
        <View>
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
          <Text
            style={styles.viewAllText}
            onPress={() => navigation.navigate('Fashion')}>
            View all
          </Text>
        </View>

        {/* Beauty & Wellness */}
        <View>
          <Text style={styles.sectionTitle}>Beauty & Wellness</Text>
          <CustomCategoryList
            data={categories}
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
          <Text
            style={styles.viewAllText}
            onPress={() => navigation.navigate('Fashion')}>
            View all
          </Text>
        </View>

        {/* Electronics & Home Essentials */}
        <View>
          <Text style={styles.sectionTitle}>Electronics & Home Essentials</Text>
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
          <Text
            style={styles.viewAllText}
            onPress={() => navigation.navigate('Fashion')}>
            View all
          </Text>
        </View>
      
      </View>
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: Width(35),
    marginHorizontal: Width(5),
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: Width(10),
  },
  locationIcon: {
    height: Height(16),
    width: Width(16),
  },
  locationText: {
    fontSize: 12,
  },
  locationBoldText: {
    fontFamily: 'Inter-Bold',
    fontWeight: '900',
  },
  profileIconContainer: {
    marginLeft: Width(100),
  },
  profileIcon: {
    height: Height(24),
    width: Width(24),
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    justifyContent: 'space-between',
  },
  searchContainer: {
    flex: 1,
    marginRight: 12,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSpacing: {
    marginRight: 16,
  },
  cartIcon: {
    width: Width(15),
    height: Height(15),
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '500',
  },
  viewAllText: {
    textAlign: 'right',
    textDecorationLine: 'underline',
    color: '#2E6074E8',
    marginVertical: 20,
  },
});
