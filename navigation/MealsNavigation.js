import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
//the above might cause an error
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen
  },
  CategoryMeals: {
    screen: CategoryMealsScreen
  },
  MealDetails: { screen: MealDetailScreen }
},
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : Colors.accentColor
      },
      headerTintColor: Platform.OS === 'android' ? Colors.accentColor : 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 33,
        fontFamily: 'ambit'
      },
    }
  }
)

export default createAppContainer(MealsNavigator);