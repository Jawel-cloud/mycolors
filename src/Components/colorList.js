import React, { useContext } from 'react';
import OneColor from './oneColor';
import { CheckContext } from './checkContext';
const ColorList = (props) => {

    //context
    const {redCheckbox, greenCheckbox, blueCheckbox, HSLCheckbox} = useContext(CheckContext);
    const colors = props.colors;

    const sorted = colors.sort((a,b)=>{
        if(a.r>b.r){return 3}
        else if(a.r<b.r){return -3}
        else {
            if(a.g>b.g){return 2}
            else if(a.g<b.g){return -2}
            else {
                if(a.b>b.b){return 1}
                else if(a.b<b.b){return -1}
                else {return 0}
        }
    }})
    const redCheck = redCheckbox? sorted.filter(color=>color.r>127) : sorted;
    const greenCheck = greenCheckbox? redCheck.filter(color=>color.g>127) : redCheck;
    const blueCheck = blueCheckbox? greenCheck.filter(color=>color.b>127) : greenCheck;
    const HSLCheck = HSLCheckbox? blueCheck.filter(color=>color.s>50) : blueCheck;

    const myColors = HSLCheck.map(color=> 
    <OneColor key={color.hex} color={color} delete={props.delete}/>)

    return (
        <>
            <h3>Color list:</h3>
                {myColors}
        </>
    );
}
 
export default ColorList;
