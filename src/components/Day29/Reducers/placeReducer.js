
const placeReducer=(state="" , action)=>
{
    if(action.type === "Update_Place")
    {
        return action.payload;
    }

    return state;
}
export default placeReducer;