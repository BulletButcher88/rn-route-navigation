import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryGigScreen from '../screens/CategoryGigScreen';
import GigDetailScreen from '../screens/GigDetailScreen';
import ArticleScreen from '../screens/ArticleScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
import OrganiserScreen from '../screens/OrganiserScreen';
import FilterScreen from '../screens/FilterScreen';
import VenueMapScreen from '../screens/VenueMapScreen'

import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons'

const defaultStackNavOptions = {
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
    headerBackStyle: 'roboto-bold'
  }
}

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
  VenueMap: {
    screen: VenueMapScreen
  },
  Article: {
    screen: ArticleScreen
  },
}, defaultStackNavOptions
  // expo default header 
)

const FavNavigator = createStackNavigator({
  Favorites: FavoriteScreen,
  GigDetails: GigDetailScreen
}, defaultStackNavOptions)

const FilterNavigator = createStackNavigator({
  Filter: FilterScreen,
}, defaultStackNavOptions)

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
    screen: FavNavigator, navigationOptions: {
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
    },
    inactiveColor: Colors.fadedTextGrey
    //remove shifting and barStyle if it looks bad on android
  })
  : createBottomTabNavigator(
    tabScreenConfig,
    {
      tabBarOptions: {
        activeTintColor: Colors.redPicker,
        inactiveTintColor: Colors.fadedTextGrey,
      },
    })

const MainNavigator = createDrawerNavigator({
  GigFavorites: {
    screen: GigFavoriteNavigator,
    navigationOptions: {
      drawerLabel: 'HOME'
    },
  },
  Gigs: {
    screen: FavNavigator,
    navigationOptions: {
      drawerLabel: "TICKETS"
    }
  },
  Filter: {
    screen: FilterNavigator,
    navigationOptions: {
      drawerLabel: "FILTER SEARCH"
    }
  },
  // Gigs: {
  //   screen: CategoryGigScreen,
  //   navigationOptions: {
  //     drawerLabel: "GIGS NEARBY"
  //   }
  // },
}, {
  contentOptions: {
    activeTintColor: Colors.accentColor,
    activeBackgroundColor: Colors.lightTransparentGrey,
    inactiveTintColor: 'black',
    inactiveBackgroundColor: Colors.lightGrey,
    inactiveTintColor: Colors.offBlackText,
    itemStyle: { flex: 1, justifyContent: 'center' },
    labelStyle: {
      flex: 1,
      marginTop: 22,
      fontFamily: 'open-san-bold',
      fontSize: 15,
      height: 32,
      marginLeft: 40,
    },
  },
  drawerWidth: Dimensions.get('window').width - 180,
  drawerBackgroundColor: 'rgba(52, 52, 52, 0.6)'
})

export default createAppContainer(MainNavigator);