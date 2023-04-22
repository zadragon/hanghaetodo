import { Button, Header, Icon, Input } from "semantic-ui-react";
import "./App.css";
import { useRef, useState } from "react";
import CardTemp from "./components/CardTemp";

function App() {
	let initialState = [
		//{ id: 0, title: "", body: "", isDone: false, date: "" }
	];
	const [state, setState] = useState(initialState);
	const [inputs, setInputs] = useState({
		title: "",
		body: "",
	});
	const { title, body } = inputs; // 비구조화 할당을 통해 값 추출
	const nextId = useRef(0);

	const onChangeHandler = (e) => {
		const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
		setInputs({
			...inputs, // 기존의 input 객체를 복사한 뒤
			[name]: value, // name 키를 가진 값을 value 로 설정
		});
	};

	const onSubmitHandler = (e) => {
		const today = new Date();
		console.log(title, body);
		if (title === "") {
			alert("제목을 입력해주세요.");
			return;
		} else if (body === "") {
			alert("내용을 입력해주세요.");
			return;
		}
		const todo = {
			id: nextId.current,
			title: title,
			body: body,
			isDone: false,
			date: `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}-${today.getHours()}:${today.getMinutes()}`,
		};

		setState([...state, todo]);

		setInputs({
			title: "",
			body: "",
		});
		nextId.current += 1;
	};

	const onToggle = (id) => {
		setState(state.map((item) => (item.id === id ? { ...item, isDone: !item.isDone } : item)));
	};

	const onDelete = (id) => {
		setState(state.filter((item) => item.id !== id));
	};

	return (
		<div id="content">
			<Header as="h1" className="line">
				<p>My Todo List</p>
				<span className="brand" icon="react">
					react
					<Icon name="react" inverted circular link style={{ marginLeft: "5px" }} />
				</span>
			</Header>

			<div className="inputArea">
				<Input onChange={onChangeHandler} name="title" value={title} label="제목" placeholder="제목을 입력해주세요." />
				<Input onChange={onChangeHandler} name="body" value={body} label="내용" placeholder="내용을 입력해주세요." />
				<Button onClick={onSubmitHandler} basic color="black" content="Black">
					추가하기
				</Button>
			</div>

			<div className="todoListArea">
				<Header as="h3">Working  🍭</Header>
				<div className="todoList">
					{state.map((item) => {
						if (!item.isDone) {
							return (
								<CardTemp
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
			</div>

			<div className="todoListArea">
				<Header as="h3">Done 🥰</Header>
				<div className="todoList">
					{state.map((item) => {
						if (item.isDone) {
							return (
								<CardTemp
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
			</div>
		</div>
	);
}

export default App;
