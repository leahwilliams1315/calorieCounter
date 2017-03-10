/**
 * Created by leah on 2017-02-10.
 */
import React, { Component} from 'react';
import FlatButton from 'material-ui/FlatButton';

import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';

let mealInput;
let calorieInput;

let leahInput;
let dellaInput;


let userList = [{userName: 'Della', isChecked: false},{userName: 'Leah', isChecked: false}];


function userCheckedUpdated(userName, isChecked) {
    userList = userList.map(user => user.userName === userName ? Object.assign({}, {userName, isChecked}) : user);

}

function saveMeal(cb, name, calories, user){
    cb(name, calories, user);
    mealInput.value = '';
    calorieInput.value = 0;
}

function getEaters(...inputs) {
    return inputs.filter(inp => inp.checked).map(inp => inp.parentNode.textContent);
}

const FoodInput = (props) => (

    <div>
        <div className="food-input">
            <div className="meal-input">
                Enter meal...
                <input type="text" ref={(input) => mealInput = input}/>
            </div>

            <div className="calorie-input">
                Enter calories...
                <input type="number" ref={(input) => calorieInput = input}/>
            </div>
        </div>


        <div className="buttons">

            <Checkbox label="Della" onCheck={(e, isChecked) => userCheckedUpdated('Della', isChecked)}
            />


            <Checkbox label="Leah" onCheck={(e, isChecked) => userCheckedUpdated('Leah', isChecked)}/>




        </div>

        <div className="save">
            <FlatButton label="Add Meal" primary={true} onClick={() => saveMeal(props.saveMeal, mealInput.value, calorieInput.valueAsNumber, userList.filter(user => user.isChecked).map(user => user.userName))} />
        </div>

    </div>
);


export default FoodInput;

