import {useState} from 'react'

export default function useProductStates() {
    const [totCount, setTotCount] = useState(0);
    
    const [shoes, setShoes] = useState([
        {img:"", name:"Shoe1", count:0},
        {img:"", name:"Shoe2", count:0},
        {img:"", name:"Shoe3", count:0},
        {img:"", name:"Shoe4", count:0},
        {img:"", name:"Shoe5", count:0},
        {img:"", name:"Shoe6", count:0},
        {img:"", name:"Shoe7", count:0},
        {img:"", name:"Shoe8", count:0},
        {img:"", name:"Shoe9", count:0},
        {img:"", name:"Shoe10", count:0},
        {img:"", name:"Shoe11", count:0},
        {img:"", name:"Shoe12", count:0},
        {img:"", name:"Shoe13", count:0},
        {img:"", name:"Shoe14", count:0},
        {img:"", name:"Shoe15", count:0},
    ]);

    return {
        cartCount: totCount,
        products: shoes,
        setCartCount: setTotCount,
        setProducts: setShoes
    }
}