import React, { useEffect, useState, createContext, useReducer } from 'react'
import { reducer } from './Readucer'
import axios from 'axios'
// let url = 'https://fakestoreapi.com/products'
// let url = 'https://dummyjson.com/products'
import { product } from './Data'

const init = {
    item: product,
    cart: [],
    total: 0,
    totalAmout:0
}
export const Dataprovider = createContext()
const AppContext = ({ children }) => {
    const [product, setproduct] = useState()
    const [first, setfirst] = useState()


    // const [Cart, setCart] = useState([])

    // const Datahanadler = async () => {
    //     await axios.get(url).then((res) => {
    //         let result = (res.data)
    //         // setproduct(result)
    //         console.log(result)
    //         dispatch({
    //             type: "GET_DATA",
    //             payload: result
    //         })

    //     })
    // }

    

    const [state, dispatch] = useReducer(reducer, init);

    // console.log((state.product))
    const AddtoCard = (id) => {
        console.log(id, "_____data qu")

        dispatch({
            type: "ADD_ITEM",
            payload: id

        })
    }
    // console.log(Cart, "____--Cart")
    const DeleteItem = (id) => {
        console.log(id)
        dispatch({
            type: "delete_ITEM",
            payload: id,


        })
    }

    const incresBtn = (id) => {
        dispatch({
            type: "INCREMENT",
            payload: id
        })

    }

    const decresBtn = (id) => {
        dispatch({
            type: "DECREMENT",
            payload: id

        })
    }



    useEffect(() => {
        dispatch({
            type: "TotalAmount"
        })
    }, [state.cart])


    return (
        <Dataprovider.Provider value={{ ...state, AddtoCard, DeleteItem, incresBtn, decresBtn }}>{children}</Dataprovider.Provider>
    )
}


export { AppContext }

