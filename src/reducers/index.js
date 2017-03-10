/**
 * Created by leah on 2017-02-14.
 */
import { combineReducers } from 'redux';
import FoodReducer from './reducer_food';
import CaloriesReducer from './reducer_calories';
import ActiveFood from './reducer_active_food';
import MealsReducer from './reducer_meals';

export default combineReducers({
    meals: MealsReducer,
    food: FoodReducer,
    calories: CaloriesReducer,
    activeFood: ActiveFood
});