// add item to store
export const ADD =(item)=>{
    return{
        type:"ADD_CART",
        payload:item
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
// addmultiple
export const ADDMULTIPLE =(mul)=>{
    return{
        type:"ADDMUL",
        payload:mul
    }
}