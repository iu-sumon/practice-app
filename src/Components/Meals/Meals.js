import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css"
import Meal from '../Meal/Meal';
import './Meals.css'
import Order from '../Order/Order';
import { addToLocal, getFromLocal } from '../../Utilities/Utilities';
const Meals = () => {

    const [products, setProducts] = useState([])
    const [order, setOrder] = useState([])

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=A')
            .then(res => res.json())
            .then(data => setProducts(data.meals))
    }, [])


    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {
        const getCart = getFromLocal();

        let quantity = 0;
        for (const id in getCart) {
            quantity = quantity + getCart[id]
        }
        setCounter(quantity)
    }, [products])
 


    const handler = (selectedMeal) => {

        setOrder(selectedMeal)
        setCounter(counter + 1)
        addToLocal(selectedMeal.idMeal)

    }


    return (
        <div className='container'>

            <div className='meal-container'>

                {
                    products.map(product => <Meal

                        product={product}
                        key={product.idMeal}
                        handler={handler}
                    ></Meal>)
                }
            </div>

            <div className='meal-details'>
                <Order
                    counter={counter}
                    order={order}
                ></Order>
            </div>


        </div>
    );
};

export default Meals;