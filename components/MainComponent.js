import React, { Component } from 'react'
import MenuComponent from './MenuComponent'
import {DISHES} from '../shared/dishes.js'
import { View } from 'react-native'

import DishItemComponent from './DishItemComponent'

export class MainComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             dishes: DISHES,
             selectedDish: null
        }
    }

    dishSelected(dishId){
        
        this.setState({
            selectedDish: dishId
        }, () => {
            console.log(this.state.dishes.filter( (dish) => dish.id === 0)[0])
        })
    }
    
    render() {
        return (
            <View>

                <MenuComponent dishes={this.state.dishes} onPress = {(dishId) => this.dishSelected(dishId)}/>
                <DishItemComponent dish = {this.state.dishes.filter( (dish) => dish.id === this.state.selectedDish)[0]} />

            </View>
        )
    }
}

export default MainComponent
