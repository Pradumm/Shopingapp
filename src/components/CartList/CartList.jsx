
import React, { useContext } from 'react'
import { Dataprovider } from '../../context/AppContext'

const CartList = ({ item, }) => {
    // console.log(item, "_______product")
    const { AddtoCard } = useContext(Dataprovider)

    return (
        <>

            <div className="shadow mt-5 mx-2" style={{ width: "20rem" }}>
                <div>
                    <div className='text-center'>
                        <img src={item.image} class="img-fluid py-2" alt="..." style={{ width: "300px", height: "15rem" }} />
                    </div>
                    <div class=" text-center">
                        <h5 class="">{item.title}</h5>
                       <strong> <span className='text-primary'> Rs. {item.price}</span></strong>
                    </div>
                    <div className='text-center'>
                    <span>{item.description}</span>
                    </div>

                </div>
                <button class=" btn btn-secondary w-100" onClick={() => AddtoCard(item)}>Add to cart</button>
            </div>
        </>
    )
}

export default CartList