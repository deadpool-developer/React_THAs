
const placeDataReducer=(state={} , action)=>
{
    if(action.type === "Update_Place_Data")
    {
        return action.payload;
    }

    return state;
}
export default placeDataReducer;