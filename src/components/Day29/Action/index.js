const UpdatePlace=(place)=>
{
    return{
        type :"Update_Place",
        payload:place,
    }
};

const UpdatePlaceData=(place)=>
{
    return(dispatch)=>
    {
        fetch(`https://api.weatherapi.com/v1/current.json?key=9fe6e9d7752f46be8e9192156210308&q=${place}`)
        .then(res => res.json())
        .then(data =>
          {
              dispatch({
                  type: "Update_Place_Data",
                  payload:data,
              })
          });
    }
}

const ToogleTheme = ()=>
{
    return{
         type: "Toogle_Theme",
    }
}

export {UpdatePlace , UpdatePlaceData , ToogleTheme};