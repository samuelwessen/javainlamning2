import React from 'react'
import logo from '../assets/images/todolist.svg'

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand d-flex align-items-center" href="/">
                <img src={logo} alt="" width="30" height="24" className="d-inline-block align-top"/>
                <span className="ms-2" >To do List</span>
                </a>
            </div>
        </nav> 
    )
}

export default Navbar
