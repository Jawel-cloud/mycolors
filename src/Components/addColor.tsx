import React, { useState } from 'react';
const AddColor = (props: { colors: { hex: string; }[]; add: (arg0: string) => any; }) => {
    const [hex, setHex] = useState('');
    const handleChangeHex = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setHex(e.target.value);
        console.log(e.target.value);
    }
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        const index = props.colors.findIndex((color: { hex: string; }) => color.hex === hex)
        if (index === -1) {
            console.log(index);
            let hexCopy = hex;
            hexCopy = hex.replace(/[^0123456789ABCDEF#]/gi, '');
            if (hexCopy.length === 7 && hex.length === 7 && hexCopy[0] === '#') {
                for (let i = 1; i <= 7; i++) {
                    if (hex[i] === '#') {
                        console.log('to many # characters');
                        return;
                    }

                    else {
                        const add = props.add(hex.toUpperCase());
                    }
                }
            }

            else {
                console.log('Type in valid hex code');
                console.log(hexCopy);
            }
        }
        else { console.log('This color exist in the data base'); }
    }

    return (
        <>
            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="hex">Type in hex value of your color: <input type="text" id="hex" value={hex}
                    onChange={handleChangeHex} /></label>
                <button className='addButton'>Add</button>
            </form>
        </>
    );
}

export default AddColor;