import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

//the above might cause an error
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryGigScreen from '../screens/CategoryGigScreen';
import GigDetailScreen from '../screens/GigDetailScreen';
import ArticleScreen from '../screens/ArticleScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
import OrganiserScreen from '../screens/OrganiserScreen'

import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons'

const MusicSceneNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen
  },
  CategoryScreen: {
    screen: CategoryGigScreen
  },
  GigDetails: {
    screen: GigDetailScreen
  },
  Article: {
    screen: ArticleScreen
  },
},
  // expo default header 
  {
    defaultNavigationOptions: {
      headerStyle:
      {
        height: 80,
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : Colors.accentColor,
      },
      headerTintColor: Platform.OS === 'android' ? Colors.accentColor : 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: 'roboto-bold',
      },
    }
  }
)

const tabScreenConfig = {
  Gigs: {
    screen: MusicSceneNavigator, navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-search' size={25} color={tabInfo.tintColor} />
      }
    }
  },
  Favorites: {
    screen: FavoriteScreen, navigationOptions: {
      tabBarLabel: 'Saved',
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
      }
    }
  },
  MyGigs: {
    screen: OrganiserScreen, navigationOptions: {
      tabBarLabel: 'My Gigs',
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-calendar' size={25} color={tabInfo.tintColor} />
      }
    }
  },
  Chat: {
    screen: ChatScreen, navigationOptions: {
      tabBarLabel: 'Inbox',
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-chatbubbles' size={25} color={tabInfo.tintColor} />
      }
    }
  },
  Profile: {
    screen: ProfileScreen, navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-person' size={25} color={tabInfo.tintColor} />
      },
      tabBarColor: "red"
    }
  },
};


const GigFavoriteNavigator = Platform.OS == "android"
  ? createMaterialBottomTabNavigator(tabScreenConfig, {
    activeColor: Colors.strongTextGrey,
    shifting: true,
    barStyle: {
      backgroundColor: Colors.primaryColor
    }
    //remove shifting and barStyle if it looks bad on android
  })
  : createBottomTabNavigator(
    tabScreenConfig,
    {
      tabBarOptions: {
        activeTintColor: Colors.strongTextGrey
      }
    })

export default createAppContainer(GigFavoriteNavigator);