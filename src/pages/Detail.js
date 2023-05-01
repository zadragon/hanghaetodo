import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Divider, Header, Segment } from "semantic-ui-react";
import { todoInit } from "../redux/modules/todos";

const Detail = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const todos = useSelector((state) => state.todos);
	const [article, setArticle] = useState(null);

	useEffect(() => {
		const article = todos.filter((item) => {
			return item.id === id;
		});
		if (article.length !== 0) {
			setArticle(article[0]);
		} else {
			navigate("/");
		}
	}, []);

	const movePrev = () => {
		navigate("/");
	};

	return (
		<>
			{article ? (
				<div>
					<Segment>
						<Header
							as="h2"
							floated="right"
							style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between" }}
						>
							<Button basic color="gray" style={{ height: "50px" }} onClick={movePrev}>
								⬅ 이전으로
							</Button>

							<div>
								<div style={{ textAlign: "right" }}> {article.title}</div>
								<div style={{ fontSize: "11px" }}>{article.date}</div>
							</div>
						</Header>
						<Divider clearing />
						ID | {article.id}
						<div>{article.body}</div>
					</Segment>
				</div>
			) : null}
		</>
	);
};

export default Detail;
