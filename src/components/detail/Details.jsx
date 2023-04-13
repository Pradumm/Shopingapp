
import React, { useContext, useState } from 'react'
import { Dataprovider } from '../../context/AppContext'
import "./detail.css";
import { ImBin } from "react-icons/im"

const Details = () => {
    const [list, setlist] = useState([])
    const { totalAmout, cart, DeleteItem, incresBtn, decresBtn } = useContext(Dataprovider)

    return (
        <>
            <div className='Co_wraper'>
                <div class="shopping-cart">
                    {/* <!-- Title --> */}
                    <div class="title">
                        Shopping Bag
                    </div>

                    {/* <!-- Product #1 --> */}
                    {

                        cart.map((item) => {
                            return (
                                <>
                                    <div class="item">
                                        <div class="buttons_wrap">
                                            <span class="delete-btn"></span>
                                            <span class="like-btn"></span>
                                        </div>

                                        <div class="image">
                                            <img src={item.image} alt="" width={"100px"} />
                                        </div>

                                        <div class="description">
                                            <span>Common Projects</span>
                                            <span>Bball High</span>
                                            <span>White</span>
                                        </div>

                                        <div class="quantity">
                                            <span class=" me-3 plus-btn" type="button-lp" name="button" onClick={() => decresBtn(item.id)} >
                                                <img src="plus.svg" alt="" /> -
                                            </span>

                                            <input type="text" name="name" disabled value={item.quantity} />

                                            <span class="  ms-3 minus-btn" type="button" name="button" onClick={() => incresBtn(item.id)}>
                                                <img src="minus.svg" alt="" />+
                                            </span>
                                        </div>

                                        <div class="total-price">Rs.{item.price}</div>
                                        <div className=' ps-5 mt-4'>
                                            <span onClick={() => DeleteItem(item.id)} ><ImBin className='text-danger' /></span>
                                        </div>
                                    </div>

                                </>
                            )
                        })


                    }

                    <div>
                        <div class="float-end  p-3">
                            <strong>
                                Total Amount Rs. <span className='text-warning'>{totalAmout}</span>
                            </strong>
                        </div>
                    </div>


                </div>


                {/* <div className="container">
                    <div className="row">
                        <div className="col-md-8 py-5">
                            {
                                Cart.map((item) => {
                                    console.log(item)
                                    return (
                                        <>
                                            <div className='d-flex justify-content-evenly bg-white shadow px-3 my-3' style={{ height: "150px" }}>
                                                <img src={item.image} className='' alt='...ff' />
                                                <div className='d-flex justify-content-center align-items-center' >
                                                    <p>{item.title}</p>
                                                </div>
                                                <div className='d-flex justify-content-center align-items-center'>
                                                    <span className=''>
                                                        <span className='fs-1' >-</span>
                                                        0

                                                        <span className='fs-1'>+</span>
                                                    </span>

                                                </div>
                                                <div className='d-flex justify-content-center align-items-center'>
                                                    <p> RS.{item.price}</p>
                                                </div>
                                                <div className='d-flex justify-content-center align-items-center'>
                                                    <span><AiFillDelete className='text-danger' /></span>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div
                        <div className="col-md-4"></div>
                    </div>
                </div> */}


            </div>
        </>
    )
}

export default Details