const initState = {
    ids:[],
    count:0
}
const cartReducer= (state = initState,action)=>{
    
    if(action.type == 'ADD_CART') {
        state.ids.push(action.id)
        state.count++;
    }
    
    return state;

}
export default cartReducer;