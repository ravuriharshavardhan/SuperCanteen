import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from './Source/Screens/HomeScreen/HomeScreen';
import Categories from './Source/Screens/Categories/Categories';
import Orders from './Source/Screens/Orders/Orders';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import FashionScreen from './Source/Screens/CatogoryScreens/FashionScreen';
import ProfileScreen from './Source/Screens/HomeScreen/ProfileScreen';
import WatchStore from './Source/Screens/CatogoryScreens/WatchScreen';
import WelcomeScreen from './Source/Auth/WelcomeScreen';
import SigninScreen from './Source/Auth/SignInScreen';
import SignUpScreen from './Source/Auth/SIgnUpScreen';
import ForgotPasswordScreen from './Source/Auth/ForgotPasswordScreen';
import ResetPasswordScreen from './Source/Auth/ResetPasswordScreen';
import ProductDetails from './Source/Screens/ProductDetails/ProductDetails';
import ProductCheckoutScreen from './Source/Screens/Orders/ProductCheckoutScreen';
import PaymentMethodScreen from './Source/Screens/Orders/SelectPaymentMethod';
import PaymentConfirmationProcess from './Source/Screens/Orders/PaymentConfirmationProcess';
import OrderConfirm from './Source/Screens/Orders/OrderConfirm';
import AccountScreen from './Source/Screens/Account/AccountScreen';
import CreateAddressScreen from './Source/Screens/AddressScreen/CreateAddressScreen';
import AddressListScreen from './Source/Screens/AddressScreen/AddressListScreen';
import OrderTrackScreen from './Source/Screens/Orders/OrderTrackScreen';
import OrderCancelScreen from './Source/Screens/Orders/OrderCancelScreen';
import OrderExchangeScreen from './Source/Screens/Orders/OrderExchangeScreen';
import OrderExchangeandReturn from './Source/Screens/Orders/OrderExchangeandReturn';
import OrderArrivingProduct from './Source/Screens/Orders/OrderArrivingProduct';
import OrderDetailsExchangeInitiated from './Source/Screens/Orders/OrderDetailsExchangeInitiated';
import OrderConfirmFinal from './Source/Screens/Orders/OrderConfirmFinal';
import CartScreen from './Source/Screens/Orders/CartScreen';
import WishlistScreen from './Source/Screens/HomeScreen/WishlistScreen';
import SearchScreen from './Source/Screens/SearchScreen/SearchScreen';
import CouponsScreen from './Source/Screens/Account/CouponsScreen';
import PaymentMethodsScreen from './Source/Screens/Account/PaymentMethodsScreen';
import OffersScreen from './Source/Screens/Account/OffersScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: '#008ECC',
        tabBarInactiveTintColor: '#999',
        tabBarLabelStyle: {fontSize: 12},
        tabBarStyle: {
          height: 60,
          paddingBottom: 6,
        },
        tabBarIcon: ({color, size}) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Categories':
              iconName = 'category';
              break;
            case 'Orders':
              iconName = 'shopping-bag';
              break;
            case 'Account':
              iconName = 'person';
              break;
            default:
              iconName = 'home';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="Orders" component={Orders} />
      <Tab.Screen name="Account" component={AccountScreen} />


      
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Offers"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Main" component={BottomTabs} />
          <Stack.Screen name="Fashion" component={FashionScreen} />
          <Stack.Screen name="Signin" component={SigninScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="WatchStore" component={WatchStore} />
          <Stack.Screen name="welcome" component={WelcomeScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
          />
          <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} />
          <Stack.Screen name="ProductCheckoutScreen" component={ProductCheckoutScreen} />
          <Stack.Screen name="PaymentMethodScreen" component={PaymentMethodScreen} />
          <Stack.Screen name="OrderConfirm" component={OrderConfirm} />
          <Stack.Screen name="PaymentConfirmationProcess" component={PaymentConfirmationProcess} />
          <Stack.Screen name="CreateAddressScreen" component={CreateAddressScreen} />
          <Stack.Screen name="AddressList" component={AddressListScreen} />
          <Stack.Screen name="OrderTrack" component={OrderTrackScreen} />
          <Stack.Screen name="Orders" component={Orders} />
          <Stack.Screen name="OrderCancel" component={OrderCancelScreen} />
          <Stack.Screen name="OrderExchange" component={OrderExchangeScreen} />
          <Stack.Screen name="OrderExchangeandReturn" component={OrderExchangeandReturn} />
          <Stack.Screen name="OrderArrivingProduct" component={OrderArrivingProduct} />
          <Stack.Screen name="OrderDetailsExchangeInitiated" component={OrderDetailsExchangeInitiated} />
          <Stack.Screen name="OrderConfirmFinal" component={OrderConfirmFinal} />
          <Stack.Screen name="Wishlist" component={WishlistScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="Categories" component={Categories} />
          <Stack.Screen name="Coupons" component={CouponsScreen} />
          <Stack.Screen name="PaymentMethods" component={PaymentMethodsScreen} />
          <Stack.Screen name="Offers" component={OffersScreen} />
        
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
