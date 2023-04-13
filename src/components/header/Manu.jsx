import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Dataprovider } from '../../context/AppContext'
import "./menu.css"


const Manu = () => {
    const { cart } = useContext(Dataprovider)
    console.log(cart, "_________-cart")
    const [show, setshow] = useState(true)

    return (
        <>
            <nav class="navbar navbar-expand-lg  bg-primary shadow">
                <div class="container">
                    <Link class="navbar-brand" to="/Home">
                        Shop<span className='store'>STORE</span>

                    </Link>
                    <button class="navbar-toggler" type="button" onClick={() => { setshow(!show) }} >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class={show ? "collapse navbar-collapse" : "navbar-collapse active"}>
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="#">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Home">Product</Link>
                            </li>

                            <Link to="/Details">

                                <li class="nav-item">
                                    <span class=" cart_btn position-relative">
                                        Card
                                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                            {cart.length}
                                            <span class="visually-hidden">unread messages</span>
                                        </span>
                                    </span>
                                </li>

                            </Link>

                        </ul>
                    </div>
                </div>
            </nav>





        </>
    )
}

export default Manu