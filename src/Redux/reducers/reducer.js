const INIT_STATE = {
    carts: []
}
export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'ADD_CART':
            const itemIndex = state.carts.findIndex((iteam) => iteam.Id === action.payload.Id)
            if (itemIndex >= 0) {
                state.carts[itemIndex].qnty += 1;
            }
            else {
                const temp = { ...action.payload, qnty: 1 }
                return {
                    ...state,
                    carts: [...state.carts, temp]
                }
            }
        case 'RMV_CART':
            const data = state.carts.filter((el) => el.Id !== action.payload)
            return {
                ...state,
                carts: data
            }
        case 'RMV_ONE':
                const itemIndexdec = state.carts.findIndex((iteam) => iteam.id === action.payload.id)
                if (state.carts[itemIndexdec].qnty >= 1) {
                    const dltItem = state.carts[itemIndexdec].qnty -= 1
                    console.log([...state.carts, dltItem]);

                    return {
                        ...state,
                        carts: [...state.carts]
                    }
                }
                else if (state.carts[itemIndexdec].qnty === 1) {
                    const data = state.carts.filter((el) => el.Id !== action.payload)
                    return {
                        ...state,
                        carts: data
                    }
            } 

        default:
            return state
    }
}