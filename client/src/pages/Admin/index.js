import React from "react";
import styles from "./styles.css";
import { Link, Outlet, Route, Routes, useMatch } from "react-router-dom";

function Admin() {
	return (
        <div>
        <nav>
            <ul className='admin-menu'>
                <li>
                    <Link to={"/admin/home"}>Home</Link>
                </li>
                <li>
                    <Link to={"/admin/orders"}>Orders</Link>
                </li>
                <li>
                    <Link to={'/admin/products'}>Products</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </div>
	);
}

export default Admin;
