import { Button, Header, Icon, Input } from "semantic-ui-react";
import "../App.css";
import { useEffect, useRef, useState } from "react";
import CardTemp from "../components/CardTemp";
import { useDispatch, useSelector } from "react-redux";
import { todoInit, todoAdd, todoDone, todoDelete } from "../redux/modules/todos";
import * as S from "../styles/index";
import uuid from "react-uuid";

function Home() {
	const dispatch = useDispatch();
	useEffect(() => {
		const getData = JSON.parse(localStorage.getItem("appTodo"));
		if (getData !== null) {
			dispatch(todoInit(getData));
		}
	}, []);
	const todos = useSelector((state) => state.todos);
	const idRef = useRef("");
	const bodyRef = useRef("");

	//const [state, setState] = useState(todos);
	const [inputs, setInputs] = useState({
		title: "",
		body: "",
	});
	const { title, body } = inputs; // 비구조화 할당을 통해 값 추출

	useEffect(() => {
		const getData = JSON.parse(localStorage.getItem("appTodo"));
		if (todos.length > 0) {
			localStorage.setItem("appTodo", JSON.stringify(todos));
		} else {
			localStorage.setItem("appTodo", JSON.stringify([]));
		}
	}, [todos]);

	const onChangeHandler = (e) => {
		const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
		if (name === "title") {
			if (value.length > 10) {
				bodyRef.current.focus();
			}
		}
		setInputs({
			...inputs, // 기존의 input 객체를 복사한 뒤
			[name]: value, // name 키를 가진 값을 value 로 설정
		});
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();
		const today = new Date();
		if (title === "") {
			alert("제목을 입력해주세요.");
			return;
		} else if (body === "") {
			alert("내용을 입력해주세요.");
			return;
		}
		const todo = {
			id: uuid(),
			title: title,
			body: body,
			isDone: false,
			date: `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}-${today.getHours()}:${today.getMinutes()}`,
		};

		setInputs({
			title: "",
			body: "",
		});

		dispatch(todoAdd(todo));

		idRef.current.focus();
	};

	const onToggle = (id) => {
		dispatch(todoDone(id));
	};

	const onDelete = (id) => {
		dispatch(todoDelete(id));
	};

	return (
		<div id="content">
			<S.InputArea>
				<form>
					<Input
						onChange={onChangeHandler}
						name="title"
						ref={idRef}
						value={title}
						label="제목"
						placeholder="제목을 입력해주세요."
					/>
					<Input
						onChange={onChangeHandler}
						name="body"
						ref={bodyRef}
						value={body}
						label="내용"
						placeholder="내용을 입력해주세요."
					/>
					<Button type="submit" onClick={onSubmitHandler} basic color="black">
						추가하기
					</Button>
				</form>
			</S.InputArea>

			<S.TodoListArea>
				<Header as="h3">Working  🍭</Header>
				<div className="todoList">
					{todos.length > 0 &&
						todos.map((item) => {
							if (!item.isDone) {
								return (
									<CardTemp
										key={item.id}
										id={item.id}
										title={item.title}
										date={item.date}
										body={item.body}
										isDone={item.isDone}
										onToggle={onToggle}
										onDelete={onDelete}
									/>
								);
							}
						})}
				</div>
			</S.TodoListArea>

			<S.TodoListArea>
				<Header as="h3">Done 🥰</Header>
				<div className="todoList">
					{todos.length > 0 &&
						todos.map((item) => {
							if (item.isDone) {
								return (
									<CardTemp
										key={item.id}
										id={item.id}
										title={item.title}
										date={item.date}
										body={item.body}
										isDone={item.isDone}
										onToggle={onToggle}
										onDelete={onDelete}
									/>
								);
							}
						})}
				</div>
			</S.TodoListArea>
		</div>
	);
}

export default Home;
