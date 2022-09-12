import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadaster from "./components/Cadaster/Cadaster";
import GlobalStyle from "./components/common/GlobalStyle";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import AddMovement from "./components/AddMovement/AddMovement";

export default function App() {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/cadaster" element={<Cadaster />} />
					<Route path="/home" element={<Home />} />
					<Route path="/addmovement" element={<AddMovement />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}