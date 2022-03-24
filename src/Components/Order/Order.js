import React from 'react';
import './Order.css';
const Order = (props) => {
    const { strMeal, strArea, strMealThumb } = props.order;
    return (
        <div className='order-cart'>
            <h2 className='meal-title'>PurChase Info</h2>

            <div className='order-info'>
                <img className='order-img' src={strMealThumb} alt="" />
                <p>Quantity: {props.counter}</p>
                <p>Name: {strMeal}</p>
                <p>Area: {strArea}</p>
            </div>
            <div>
                <button className='btn-remove'>Remove Oder <i className="fa-regular fa-trash-can"></i></button>
                <button className='btn-review'>Review <i className="fa-solid fa-arrow-right"></i></button>
            </div>

        </div>
    );
};

export default Order;