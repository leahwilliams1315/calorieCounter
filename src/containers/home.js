/**
 * Created by leah on 2017-02-14.
 */
import React, { Component } from 'react';
import FoodInput from '../components/food_input.js';
import { connect } from 'react-redux';
import { selectFood, addMeal} from '../actions/index';
import { bindActionCreators } from 'redux';
import Profile from'../components/profile';
import AppBar from 'material-ui/AppBar';


class Home extends Component {
    render() {
        return (

            <div className="App">

                <AppBar title="Calorie Counter"/>

                <FoodInput saveMeal={this.props.addMeal}/>

                <div className="profile-container">
                    <Profile name='Leah' meals={this.props.leahMeals}/>
                    <Profile name='Della' meals={this.props.dellaMeals}/>

                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectFood, addMeal}, dispatch);
}

function mapStateToProps(state) {
    return {
        allMeals: state.meals,
        leahMeals: state.meals.filter(meal => meal.persons.includes('Leah')),
        dellaMeals: state.meals.filter(meal => meal.persons.includes('Della'))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

