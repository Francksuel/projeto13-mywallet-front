import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadaster from "./components/Cadaster";
import GlobalStyle from "./components/GlobalStyle";
import Login from "./components/Login";
import Home from "./components/Home";
export default function App() {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
                    <Route path="/cadaster" element={<Cadaster />} />
                    <Route path="/home" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}
