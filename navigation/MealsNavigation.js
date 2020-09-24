import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
//the above might cause an error
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen'

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMealsScreen
  },
  MealDetails: MealDetailScreen
})

export default createAppContainer(MealsNavigator);