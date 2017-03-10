/**
 * Created by leah on 2017-02-17.
 */
import React from 'react';
import { Circle } from 'rc-progress';

function getPercent(currentCal, goalCal) {
    return (currentCal / goalCal) * 100;
}

export default function (props) {
    return (
        <div className="profile">
            <h1>{props.name}'s Profile</h1>
            <h3>Meals ------- Calories</h3>

            <div className="food-list">
                <ul>
                    {props.meals.map(meal => <h3>{meal.name} ------ {meal.calories}</h3>)}
                </ul>
            </div>

            <Circle
                percent={getPercent(props.meals.map(meal => meal.calories).reduce((a, b) => a + b, 0), 1500)}
                className="progress-circle"
                strokeColor="#aa00b4"
                strokeWidth="4"
                trailColor="#D3D3D3"
            />


        </div>)
}