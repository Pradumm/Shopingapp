import React, { useContext } from 'react'
import CartList from '../CartList/CartList'
import Manu from '../header/Manu'
import { Dataprovider } from '../../context/AppContext'
import './Home.css'

const Home = () => {
    const { item } = useContext(Dataprovider);
    //  console.log(product)
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                <Manu />
                    <div className="col-md-10 mx-auto">
                        <h1 className='product_heading mt-3 border'>Top Popular products  </h1>
                        <div className='product_wrap pb-5'>

                            {
                                item.map((item, index) => {
                                    // console.log(item, "___________itme")
                                    return (
                                        <CartList item={item} />
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home