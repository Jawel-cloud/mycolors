import React, { useContext } from 'react';
import { CheckContext } from './checkContext';
const Filter=()=> {

        //context
    const {redCheckbox, greenCheckbox, blueCheckbox, HSLCheckbox,
            toggleRed, toggleGreen, toggleBlue, toggleHSL} = useContext(CheckContext);

        return (
            <>
        <h3>Filter</h3>
        <div>
        <label htmlFor="redCheckbox">Red &#62; 50%: 
        <input name="redCheckbox" id='redCheckbox' type="checkbox" value={redCheckbox}
        onChange={toggleRed}></input></label><br/>
        <label htmlFor="greenCheckbox">Green &#62; 50%: 
        <input name="greenCheckbox" id='greenCheckbox' type="checkbox" value={greenCheckbox}
        onChange={toggleGreen}></input></label><br/>
        <label htmlFor="blueCheckbox">Blue &#62; 50%: 
        <input name="blueCheckbox" id='blueCheckbox' type="checkbox" value={blueCheckbox}
        onChange={toggleBlue}></input></label><br/>
        <label htmlFor="HSLCheckbox">Saturation &#62; 50%: 
        <input name="HSLCheckbox" id='HSLCheckbox' type="checkbox" value={HSLCheckbox}
        onChange={toggleHSL}></input></label> 
        </div>
        </>
        );
    }
 
export default Filter;
