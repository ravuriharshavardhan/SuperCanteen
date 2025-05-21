import { Image, StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import React from 'react';
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
  const renderSection = ({ item }) => item;

  const sections = [
    <View key="header" style={{ marginVertical: Width(35), marginHorizontal: Width(5) }}>
      {/* Location and Profile */}
      <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: Width(10) }}>
        <Image style={{ height: Height(16), width: Width(16) }} source={require('../../../assets/Icons/location_on-2.png')} />
        <Text style={{ fontSize: 12 }}>
          Deliver to{' '}
          <Text style={{ fontFamily: 'Inter-Bold', fontWeight: '900' }}>
            Maruti Apartments-Del..
          </Text>
        </Text>
        <View style={{ marginLeft: Width(100) }}>
          <Pressable onPress={() => navigation.navigate('Profile')}>
            <Image style={{ height: Height(24), width: Width(24) }} source={require('../../../assets/Icons/ProfileIcon.png')} />
          </Pressable>
        </View>
      </View>

      {/* Search + Icons */}
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 8, justifyContent: 'space-between' }}>

        <View style={{ flex: 1, marginRight: 12 }}>
          <Pressable onPress={()=>navigation.navigate('Search')}>
          <CustomSearch backgroundColor={'#fff'}  disabled/>

          </Pressable>
        
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Pressable onPress={() => navigation.navigate('Wishlist')}>
            <MaterialIcons size={15} name={'favorite-border'} style={{ marginRight: 16 }} />
          </Pressable>

          <Pressable onPress={() => navigation.navigate('Orders')}>
            <Image style={{ width: Width(15), height: Height(15) }} source={require('../../../assets/Icons/shopping_cart.png')} />
          </Pressable>
        </View>
      </View>
    </View>,

    <View style={{ marginTop: -30, marginVertical: 10 }} >
      <CustomCategoryList
        key="categories"
        horizontal
        showsHorizontalScrollIndicator={false}
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

    </View>,



    <View key="line" style={{ width: '100%', height: 1, backgroundColor: '#d2d2d2' }} />,

    <CustomCasual key="casual" cardRadius={20} paddingHorizontal={20} data={Sliders} />,

    <View key="fashion">
      <Text style={{ fontSize: 15, fontWeight: '500' }}>Fashion</Text>
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
    </View>,

    <View key="beauty">
      <Text>Beauty & Wellness</Text>
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
    </View>,

    <View key="electronics">
      <Text>Electronics & Home Essentials</Text>
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
    </View>,

    <ColorCustomSlider key="slider" data={Products} />,

    <View key="deals" style={{ marginTop: 40 }}>
      <Text style={{ fontSize: 14, fontWeight: '700' }}>HOT DEALS <Image style={{height:14,width:14}} source={require('../../../assets/Icons/local_fire_department.png')}/> JUST FOR YOU..</Text>
      <CustomOfferCard item={offerData} />
    </View>,

    <View style={{ backgroundColor: "#2B5B9612" }} >

      <View style={{flexDirection:"row",alignItems:"center"}}>
      <Text style={{ top: 20, fontSize: 15, fontWeight: "800" }} >Style That Doesn’t Clock Out</Text>
      <Image style={{height:20,width:20,top:20}} source={require('../../../assets/Icons/av_timer.png')}/>

      </View>

   

      <CustomFavoriteCard whiteBg={true} key="favorites" />

    </View>


  ];

  return (
    <FlatList
      data={sections}
      renderItem={renderSection}
      keyExtractor={(_, index) => index.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  viewAll: {
    textAlign: 'right',
    textDecorationLine: 'underline',
    color: '#2E6074E8',
    marginVertical: 20,
  },
});
