import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Divider, Header, Segment } from "semantic-ui-react";
import { todoInit } from "../redux/modules/todos";

const Detail = () => {
	// const dispatch = useDispatch();
	// useEffect(() => {
	// 	const getData = JSON.parse(localStorage.getItem("appTodo"));
	// 	console.log("getData", getData);
	// 	if (getData !== null) {
	// 		dispatch(todoInit(getData));
	// 	}
	// }, []);
	const { id } = useParams();
	const todos = useSelector((state) => state.todos);
	const article = todos.filter((item) => {
		return item.id === id;
	});
	const { id: todoId, title, date, body } = article[0];

	return (
		<div>
			<Segment>
				<Header as="h2" floated="right">
					<div style={{ textAlign: "right" }}>{title}</div>
					<div style={{ fontSize: "11px" }}>{date}</div>
				</Header>
				<Divider clearing />
				ID | {todoId}
				<div>{body}</div>
			</Segment>
		</div>
	);
};

export default Detail;
