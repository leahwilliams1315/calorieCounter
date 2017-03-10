/**
 * Created by leah on 2017-02-15.
 */
export default function(state = [], action){

    switch(action.type){
        case 'MEAL_ADDED':
            return state.concat(action.payload);

        default:
            return state;
    }

}