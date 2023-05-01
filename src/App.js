import React, { useEffect } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { Header, Icon } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { todoInit } from "./redux/modules/todos";

const App = () => {
	return (
		<div id="content">
			<Header as="h1" className="line">
				<p>My Todo List</p>
				<span className="brand" icon="react">
					react
					<Icon name="react" inverted circular link style={{ marginLeft: "5px" }} />
				</span>
			</Header>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/detail/:id" element={<Detail />} />
			</Routes>
		</div>
	);
};

export default App;
