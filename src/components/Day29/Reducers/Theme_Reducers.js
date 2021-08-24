const ThemeReducer = (state=false , action)=>{

    if(action.type === "Toogle_Theme"){

        return !state;
    }
    return state;
};
export default ThemeReducer;