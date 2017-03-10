/**
 * Created by leah on 2017-02-14.
 */
export function selectFood(food){
    return {
     type: 'FOOD_SELECTED',
     payload: food
    };
}

export function addMeal(name, calories, persons){
    return{
        type: 'MEAL_ADDED',
        payload: {
            name,
            calories,
            persons
        }
    }
}