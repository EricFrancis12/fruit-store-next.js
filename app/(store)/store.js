import { create } from 'zustand';

const useCart = create((set, get) => ({
    cart: [],
    product: {},
    openModal: false,
    setOpenModal: () => {
        set(state => {
            return {
                ...state,
                openModal: !state.openModal
            }
        });
    },
    setProduct: (params) => {
        const { newProduct } = params;
        set(state => {
            return {
                ...state,
                product: newProduct
            }
        });
    },
    addItemToCart: (params) => {
        const { newItem } = params;
        set(state => {
            const newCart = [...state.cart, newItem];
            return {
                ...state,
                cart: newCart
            }
        });
    },
    removeItemFromCart: (params) => {
        const { itemIndex } = params;
        set(state => {
            const newCart = state.cart.filter((element, index) => itemIndex !== index);
            return {
                ...state,
                cart: newCart
            }
        });
    },
    emptyCart: () => {
        const newCart = [];
        set(state => {
            return {
                ...state,
                cart: newCart
            }
        });
    }
})
)

export default useCart;
