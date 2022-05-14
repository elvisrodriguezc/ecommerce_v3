import { createSlice } from "@reduxjs/toolkit";
import { getAPIData } from "../../Services/getAPIData";

export const prodSlice = createSlice({
    name: "ecommerce",
    initialState: {
        categories: [{
            id: 0,
            name: "empty"
        }],
        products: [{
            id: 0,
            name: "empty",
            price: 0,
            description: "",
            images: [{ url: "" }]
        }],
        trendings: [{
            id: 0,
            name: "empty",
            price: 0,
            description: "",
            images: [{ url: "" }]
        }],
        promotions: [{
            id: 0,
            name: "empty",
            price: 0,
            description: "",
            images: [{ url: "" }]
        }],
        latest: [{
            id: 0,
            name: "empty",
            price: 0,
            description: "",
            images: [{ url: "" }]
        }],
        cart: [],
        isLoaded: false
    },
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload;
        },  // reducers are defined as functions
        setProducts: (state, action) => {
            state.products = action.payload;
            state.trendings = []
            for (let i = 0; i < 6; i++) {
                let index = Math.floor(Math.random() * state.products.length);
                state.trendings.push(state.products[index]);
            }
            state.promotions = []
            for (let i = 0; i < 5; i++) {
                let index = Math.floor(Math.random() * state.products.length);
                state.promotions.push(state.products[index]);
            }
            state.latest = []
            for (let i = 0; i < 4; i++) {
                let index = Math.floor(Math.random() * state.products.length);
                state.latest.push(state.products[index]);
            }
        },
        setCart: (state, action) => {
            state.cart = action.payload;
            state.isLoaded = true;
        },  // reducers are defined as functions
    }
})

export const { setCategories, setProducts, setCart } = prodSlice.actions;
export default prodSlice.reducer;

export const fetchCategories = () => (dispatch) => {
    const data = {
        type: "categories",
        method: 'GET',
        params: {},
        data: {}
    }
    getAPIData(data)
        .then(res => {
            dispatch(setCategories(res));
        })
        .catch(err => {
            console.log(err);
        })
}
export const fetchProducts = () => (dispatch) => {
    const data = {
        type: "products",
        method: 'GET',
        params: {},
        data: {}
    }
    getAPIData(data)
        .then(res => {
            dispatch(setProducts(res));
        })
        .catch(err => {
            console.log(err);
        })
}
export const fetchCart = () => (dispatch) => {
    const data = {
        type: "cart",
        method: 'GET',
        params: {},
        data: {}
    }
    getAPIData(data)
        .then(res => {
            dispatch(setCart(res));
        })
        .catch(err => {
            console.log(err);
        })
}
export const addToCart = (item) => (dispatch) => {
    const data = {
        type: "cart_add_product",
        method: 'POST',
        params: {},
        data: { product: item.id, quantity: item.quantity }
    }
    getAPIData(data)
        .then(res => {
            fetchCart();
        })
        .catch(err => {
            console.log(err);
        })
}
export const deleteCartItem = (id) => (dispatch) => {
    const data = {
        type: "cart_item_delete",
        method: 'DELETE',
        params: {},
        data: {},
        id: id
    }
    getAPIData(data)
        .then(res => {
            fetchCart();
        })
        .catch(err => {
            console.log(err);
        })
}
