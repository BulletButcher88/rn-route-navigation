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
  MealDetails: {
    screen: MealDetailScreen
  },
},
  // expo default header 
  {
    defaultNavigationOptions: {
      headerStyle: {
        height: 70,
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : Colors.accentColor,
        borderBottomColor: 'black',
        borderBottomWidth: 1
      },
      headerTintColor: Platform.OS === 'android' ? Colors.accentColor : 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 12,
        fontFamily: 'roboto-bold',
      },
    }
  }
)

export default createAppContainer(MealsNavigator);