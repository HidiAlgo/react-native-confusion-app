import React, { Component } from 'react'
import MenuComponent from './MenuComponent'
import {DISHES} from '../shared/dishes'

export class MainComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             dishes: DISHES
        }
    }
    
    render() {
        return (
            <MenuComponent dishes={this.state.dishes}/>
        )
    }
}

export default MainComponent
