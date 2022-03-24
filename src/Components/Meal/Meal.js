import React from 'react';
import './Meal.css'
const Meal = (props) => {
    const { strMeal, strArea, strMealThumb, strInstructions } = props.product;
    return (
        <div
            data-aos="fade-down"
            className='meal-cart'>

            <img src={strMealThumb} alt="" />
            <div>
                <h4 className='cart-name'>Name: {strMeal}</h4>
                <p className='cart-area'>Area: {strArea}</p>
                <p className='cart-info'>{strInstructions.slice(0, 200)}</p>
            </div>
            <div>
                <button onClick={() => props.handler(props.product)} className='cart-btn'>Add To Cart <i className="fa-solid fa-cart-plus"></i></button>
            </div>

        </div>
    );
};

export default Meal;