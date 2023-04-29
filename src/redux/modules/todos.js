const INIT = "todos/INIT";
const ADD = "todos/ADD";
const DONE = "todos/DONE";
const DELETE = "todos/DELETE";

export const todoInit = (payload) => {
	return {
		type: INIT,
		payload: payload,
	};
};

export const todoAdd = (payload) => {
	return {
		type: ADD,
		payload: payload,
	};
};

export const todoDone = () => {
	return {
		type: DONE,
	};
};

export const todoDelete = () => {
	return {
		type: DELETE,
	};
};

const initialState = [
	{
		id: 0,
		title: "타이틀",
		body: "행동경제학 읽기",
		isDone: false,
		date: "2023-3-29-19:36",
	},
];

// 리듀서
const todos = (state = initialState, action) => {
	switch (action.type) {
		case INIT:
			return;
		case ADD:
			//return [...state, action.payload];
			return;
		case DONE:
			return;
		case DELETE:
			return;
		default:
			return state;
	}
};

// 모듈파일에서는 리듀서를 export default 한다.
export default todos;
