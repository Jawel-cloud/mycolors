import React, { useState } from 'react';
import ColorList from './colorList';
import AddColor from './addColor.tsx';
import Filter from './filter';
const Homepage = () => {

    const colorsBasic = [
        {hex:'#FFFFFF', r:255, g:255, b:255, name:'White', removable:false, s:0},
        {hex:'#000000', r:0, g:0, b:0, name:'Black', removable:false, s:0},
        {hex:'#FF0000', r:255, g:0, b:0, name:'Red', removable:false, s:100},
        {hex:'#00FF00', r:0, g:255, b:0, name:'Green', removable:false, s:100},
        {hex:'#0000FF', r:0, g:0, b:255, name:'Blue', removable:false, s:100},
        {hex:'#00FFFF', r:0, g:255, b:255, name:'Cyan', removable:false, s:100},
        {hex:'#FF00FF', r:255, g:0, b:255, name:'Magenta', removable:false, s:100},
        {hex:'#FFFF00', r:255, g:255, b:0, name:'Yellow', removable:false, s:100},
        // {hex:'#D09D95', r:208, g:157, b:149, name:'Eunry', removable:true, s:39},
        // {hex:'#B095D0', r:176, g:149, b:208, name:'EastSide', removable:true, s:39},
    ];

    const unique = (array)=> {
        let a = array.concat();
        for(let i=0; i<a.length; ++i) {
            for(let j=i+1; j<a.length; ++j) {
                if(a[i].hex === a[j].hex)
                    a.splice(j--, 1);
            }
        }
        return a;
    }
    let storageColors = localStorage.getItem("storageColors") !== null? JSON.parse(localStorage.getItem('storageColors')): colorsBasic;
    const allColorswithDups = colorsBasic.concat(storageColors)
    const allColors = unique(allColorswithDups);
    const [colors,setColors] = useState(allColors);

    const handleDelete =(hex)=>{
        console.log('delete color with id: '+hex);
        const colorsCopy = colors.filter(color=> color.hex!==hex)
        setColors(colorsCopy);
        window.localStorage.clear();
        window.localStorage.setItem('storageColors', JSON.stringify(colorsCopy));
    }

    const RGBToHSL = (r, g, b) => {
        r /= 255;
        g /= 255;
        b /= 255;   
        const l = Math.max(r, g, b);
        const s = l - Math.min(r, g, b);
        const h = s? l === r? (g - b) / s : l === g? 2 + (b - r) / s : 4 + (r - g) / s : 0;
        return [
          60 * h < 0 ? 60 * h + 360 : 60 * h,
          Math.floor(100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0)),
          (100 * (2 * l - s)) / 2,
        ];};

    const addColor = (hex)=>{
        console.log('dodany kolor');
        const num = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        const re = parseInt(num[1], 16);
        const gr = parseInt(num[2], 16);
        const bl = parseInt(num[3], 16);
        const HSL = RGBToHSL(re, gr, bl);

        const newColor = {
            hex:hex,
            r:re,
            g:gr,
            b:bl,
            removable:true,
            hsl:HSL,
            s:HSL[1]
        }
        const colorsNew = [...colors, newColor];
        setColors(colorsNew);
        window.localStorage.clear();
        window.localStorage.setItem('storageColors', JSON.stringify(colorsNew));
        return true;
    }
    return (
        <>
        <h1>My Colors</h1>
        <AddColor add={addColor} colors={colors} setColors={setColors} />
        <Filter colors={colors}/>
        <ColorList colors={colors} delete={handleDelete}/>
        </>
    );
}
export default Homepage;