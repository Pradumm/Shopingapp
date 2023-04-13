import React from 'react'
import "./HomeStore.css"
import Manu from '../header/Manu'
import Typed from 'react-typed'
import { Link } from 'react-router-dom'
const HomeStore = () => {
    return (
        <>
            <div className='container-fluid home_bgIamge'>
                <Manu />
                <div className="row mx-auto  ps-5 py-5">
                    <div className="col-auto text-white">
                        <h1>We're Creating Perfect<br />
                            Digital Praduct To <br />
                            <span className='text-warning'>
                                <Typed

                                    strings={[
                                        " Promote Your Brand ",
                                        " Promote Your Service",

                                    ]}
                                    typeSpeed={80}
                                    backDelay={1100}
                                    backSpeed={30}
                                    loop
                                />
                            </span>
                        </h1>
                        
                        <div className='py-3'>
                            <Link to="/Home">
                            <button
                                type="button" className="btn btn-outline-primary me-4">Get Started Now
                            </button>
                            </Link>
                            <Link to="/Home">
                            <button type="button" className="btn btn-outline-success">Discover More</button>
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default HomeStore