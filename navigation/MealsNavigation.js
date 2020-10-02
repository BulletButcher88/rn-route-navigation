import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
//the above might cause an error
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import ArticleScreen from '../screens/ArticleScreen';
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
  Article: {
    screen: ArticleScreen
  },
},
  // expo default header 
  {
    defaultNavigationOptions: {
      headerStyle: {
        height: 70,
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

export default createAppContainer(MealsNavigator);