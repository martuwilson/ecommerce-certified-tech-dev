import { CartProduct } from "../interfaces";

export interface CartState {
    cartItems: CartProduct[];
}

export const initialState: CartState = {
    cartItems: [],
}

export interface CartAction {
    type: "ADD_TO_CART" | "REMOVE_FROM_CART" | "CLEAR_CART";
    payload: CartProduct;
}

export const cartReducer = (state:CartState, action: CartAction): CartState => {
    switch (action.type) {
        case "ADD_TO_CART":{
            const { id } = action.payload;

            // Validar si es el primer ítem del carrito o agregar uno más a algo que ya existe
            const existingItem = state.cartItems.find((item) => item.id === id);

            if (existingItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) =>
                        item.id === id ? { ...existingItem, quantity: existingItem.quantity + 1 } : item
                    ),
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload],
                };
            }
        }
        
        case "REMOVE_FROM_CART":{
            
            const { id: removeItemId } = action.payload;
            
            // Validar si el ítem existe en el carrito
            const itemToRemove = state.cartItems.find((item) => item.id === removeItemId);

                if(itemToRemove){
                    if (itemToRemove.quantity === 1) {
                        return {
                            ...state,
                            cartItems: state.cartItems.filter((item) => item.id !== removeItemId),
                        };
                    } else {
                        return {
                            ...state,
                            cartItems: state.cartItems.map((item) => 
                                item.id === removeItemId ? { ...itemToRemove, quantity: itemToRemove.quantity - 1 } : item),
                        };
                    }
                }
                return state;
        
        }
        
        case "CLEAR_CART":{
            return {
                ...state,
                cartItems: [],
            }
        }
        
        default:
            return state;
    }
};
