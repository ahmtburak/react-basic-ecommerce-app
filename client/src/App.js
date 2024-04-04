import "./App.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Signin from "./pages/Auth/Signin";
import ProductDetail from "./pages/ProductDetail";
import ProtectedRoute from "./pages/ProtectedRoute";
import Products from "./pages/Products";
import Signup from "./pages/Auth/Signup";
import Profile from "./pages/Profile";
import Basket from "./pages/Basket";
import Error404 from "./pages/Error404";
import Admin from "./pages/Admin";
import ProtectedAdmin from "./pages/ProtectedAdmin";
import Home from "./pages/Admin/Home";
import Orders from "./pages/Admin/Orders";
import AdminProducts from "./pages/Admin/Products";
import AdminProductDetail from "./pages/Admin/ProductDetail";
import NewProduct from "./pages/Admin/Products/new";

function App() {
	return (
		<div>
			<Navbar/>
			<div id="content">
				<Routes>
					<Route path="/" exact Component={Products}/>
					<Route path="/product/:product_id" Component={ProductDetail}/>
					<Route path="/signin" Component={Signin}/>
					<Route path="/signup" Component={Signup}/>
					<Route path="/basket" Component={Basket}/>
					<Route element={<ProtectedRoute/>}>
						<Route path="/profile" element={<Profile/>}/>
					</Route>
					<Route element={<ProtectedAdmin/>}>
						<Route path="/admin" element={<Admin/>}>
							<Route path="home" element={<Home/>}/>
							<Route path="orders" element={<Orders/>}/>
							<Route path="products" element={<AdminProducts/>}/>
							<Route path="products/new" element={< NewProduct/>}/>
							<Route path="products/:product_id" element={<AdminProductDetail/>}/>
						</Route>
					</Route>
					<Route path="*" Component={Error404}/>
				</Routes>
			</div>
		</div>
	);
}

export default App;
