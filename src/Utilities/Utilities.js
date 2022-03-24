const addToLocal = (id) => {

    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    const quantity = cart[id];
    if (quantity) {
        cart[id] = quantity + 1;
    }
    else {
        cart[id] = 1;
    }

    localStorage.setItem('cart', JSON.stringify(cart))
}

const getFromLocal=()=>{
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    return cart;
    
}

export {
    addToLocal,
    getFromLocal
}