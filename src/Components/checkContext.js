import React, { createContext, useState } from 'react';



export const CheckContext = createContext();
const CheckProvider = ({ children }) => {

    const [redCheckbox, setRedCheckbox] = useState(false);
    const toggleRed = () => {setRedCheckbox(!redCheckbox);};

    const [greenCheckbox, setGreenCheckbox] = useState(false);
    const toggleGreen = () => { setGreenCheckbox(!greenCheckbox) };

    const [blueCheckbox, setBlueCheckbox] = useState(false);
    const toggleBlue = () => { setBlueCheckbox(!blueCheckbox) };

    const [HSLCheckbox, setHSLCheckbox] = useState(false);
    const toggleHSL = () => { setHSLCheckbox(!HSLCheckbox) };


    return (
        <CheckContext.Provider value={{redCheckbox, greenCheckbox, blueCheckbox, HSLCheckbox,
            toggleRed, toggleGreen, toggleBlue, toggleHSL}}>
            {children}
        </CheckContext.Provider>
    )
}
export default CheckProvider;