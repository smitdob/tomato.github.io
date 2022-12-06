// add item to store
export const ADD =(item)=>{
    return{
        type:"ADD_CART",
        payload:item
    }
}
export const SETDATA =(i)=>{
    return{
        type:"SET_DATA",
        payload:i
    }
}
//remove item in store                                                                                                                                                                                                        // 
export const DLT =(id)=>{
    return{
        type:"RMV_CART",
        payload:id
    }
}
// remove indeviual item 

export const REMOVE =(iteam)=>{
    return{
        type:"RMV_ONE",
        payload:iteam
    }
}

// add items to new cart
export const ADDTOCHECK =(che)=>{
    return{
        type:"ADD_CHECKOUT",
        payload:che
    }
}