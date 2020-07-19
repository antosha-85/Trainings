import React from 'react'
import classes from './PizzaImage.module.css'
import Pizza_Image from '../../assets/pizza.jpg'
const PizzaImage = () => {
    return (
        <div className={classes.PizzaImage}>
            <img src={Pizza_Image} className={classes.PizzaImg}/>
        </div>
    )
}

export default PizzaImage
