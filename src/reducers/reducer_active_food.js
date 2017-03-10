/**
 * Created by leah on 2017-02-15.
 */

//State argugemt is not application state, only the state this reducer is responsible for
export default function (state = null, action){

    switch(action.type){
        case 'FOOD_SELECTED':
            return action.payload
    }
    return state;

}