import React from 'react';
import '../Styles/CustomDropDown.css';

const CustomDropDown=()=>
{
    const onChangeHandler=(event)=>{
        window.open(
            event.value,
            '_blank' // <- This is what makes it open in a new window.
          );
    }
    // return(
       
    // );
}

export default CustomDropDown;