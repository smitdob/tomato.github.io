const ITEMDETAIL = {
    itemdetail: []
}
export const itemdetail = (state = ITEMDETAIL, action) => {
    switch (action.type) {
        case 'SET_DATA':
            return {
                itemdetail: [action.payload]
            }
        default:
            return state
    }
}