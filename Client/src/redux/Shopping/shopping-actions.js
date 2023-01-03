import { types } from "./shopping-types";


export const addToCart = (sneaker) => {
    return {
        type: types.ADD_TO_CART,
        payload: {
            sneaker: sneaker,
            id: sneaker._id
        }
    }
};

export const removeFromCart = (itemID) => {
    return {
        type: types.REMOVE_FROM_CART,
        payload: {
            id: itemID
        }
    }
};

export const adjustQuantity = (itemID, quantity) => {
    return {
        type: types.ADJUST_QUANTITY,
        payload: {
            id: itemID,
            quantity,
        }
    }
};

export const loadCurrentItem = (item) => {
    return {
        type: types.LOAD_CURRENT_ITEM,
        payload: item
    }
};

export const emptyCart = () => {
    return {
        type: types.EMPTY_CART,
    }
}