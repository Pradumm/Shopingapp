
export const reducer = (state, action) => {

    if (action.type === "ADD_ITEM") {
        return {
            ...state,
            cart: [...state.cart, action.payload]
        }

    }
    if (action.type === "delete_ITEM") {
        return {
            ...state,
            cart: state.cart.filter((elemet) => {
                return elemet.id !== action.payload
            })

        }
    }

    if (action.type === "INCREMENT") {

        let updateCart = state.cart.map((currentElement) => {
            // console.log(currentElement, "______cree")
            // console.log(currentElement.quantity,"______________qua")
            if (currentElement.id === action.payload) {
                return { ...currentElement, quantity: currentElement.quantity + 1 }
            }
            return currentElement
        })
        return { ...state, cart: updateCart }

    }
    if (action.type === "DECREMENT") {

        let updateCart = state.cart.map((currentElement) => {
            if (currentElement.id === action.payload) {
                return { ...currentElement, quantity: currentElement.quantity - 1 }
            }
            return currentElement
        }).filter((currentElement) => {
            return currentElement.quantity !== 0
        })
        return { ...state, cart: updateCart }

    }

    if (action.type === "TotalAmount") {

        let { total, totalAmout } = state.cart.reduce((acc, current) => {
            let { price, quantity } = current;
            console.log(price, "____________price")

            let updateAmout = price * quantity

            console.log(updateAmout, "----------sdkd")
            acc.totalAmout += updateAmout
            acc.total += quantity
            return acc

        }, {
            total: 0,
            totalAmout: 0
        })


        return { ...state, total, totalAmout }

    }

    return state
}

