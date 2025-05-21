import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FontSize, Height, Width } from '../../constants/constants';
import CustomSearch from '../../Components/CustomSearch';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
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
    image: require('../../../assets/Sliders/Slider1.png')

  },
  {
    id: 2,
    image: require('../../../assets/Sliders/Slider1.png')

  },
  {
    id: 2,
    image: require('../../../assets/Sliders/Slider1.png')

  }

]

const Categories = ({ navigation }) => {


  const [selectedCategory, setSelectedCategory] = React.useState('All');
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          marginVertical: Width(35),
          marginHorizontal: Width(5),
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            columnGap: Width(10),
          }}>
          <Image
            style={{ height: Height(16), width: Width(16) }}
            source={require('../../../assets/Icons/location_on-2.png')}
          />
          <Text style={{ fontSize: 12 }}>
            Deliver to{' '}
            <Text style={{ fontFamily: 'Inter-Bold', fontWeight: '900' }}>
              Maruti Apartments-Del..
            </Text>
          </Text>
          <View style={{ marginLeft: Width(100) }}>
            <Pressable onPress={() => navigation.navigate('Profile')}>
              <Image
                style={{ height: Height(24), width: Width(24) }}
                source={require('../../../assets/Icons/ProfileIcon.png')}
              />
            </Pressable>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingVertical: 8,
            justifyContent: 'space-between',
          }}>
          <View style={{ flex: 1, marginRight: 12 }}>
            <CustomSearch />
          </View>

          {/* Icons section */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MaterialIcons
              size={15}
              name={'favorite-border'}
              style={{ marginRight: 16 }}
            />
            <Image
              style={{ width: Width(15), height: Height(15) }}
              source={require('../../../assets/Icons/shopping_cart.png')}
            />
          </View>
        </View>

        {/* <View>
          <CustomCategoryList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categories}
            selected={selectedCategory}
            onSelect={name => setSelectedCategory(name)}
            bgColor="#D4E7F2"
            imageSize={Width(30)}
            gap={26}
            containerStyle={{ marginTop: Height(12) }}
            textStyle={{ fontSize: FontSize(11), fontWeight: '600' }}
          />
        </View> */}

        {/* <View>
          <CustomCasual data={Sliders} />
        </View> */}

        <View>
          <Text style={{ fontSize: 15, fontWeight: "500" }} >Fashion</Text>
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
            style={{ textAlign: 'right', textDecorationLine: "underline", color: "#2E6074E8", marginVertical: 20 }}
            onPress={() => navigation.navigate('Fashion')}>
            View all
          </Text>
        </View>
        <View>
          <Text>Beauty & Wellness</Text>
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
            style={{ textAlign: 'right', textDecorationLine: "underline", color: "#2E6074E8", marginVertical: 20 }}
            onPress={() => navigation.navigate('Fashion')}>
            View all
          </Text>
        </View>
        <View>
          <Text>Electronics & Home Essentials</Text>
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
            style={{ textAlign: 'right', textDecorationLine: "underline", color: "#2E6074E8", marginVertical: 20 }}
            onPress={() => navigation.navigate('Fashion')}>
            View all
          </Text>
        </View>

        <View>
          <ColorCustomSlider data={Products} />
        </View>
        <View>
          <Text style={{fontSize:14,fontWeight:"700",top:40}} >HOT DEALS JUST FOR YOU..</Text>
          <CustomOfferCard item={offerData} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({});
