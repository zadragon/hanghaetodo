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

export const todoDone = (id) => {
	return {
		type: DONE,
		id,
	};
};

export const todoDelete = (id) => {
	return {
		type: DELETE,
		id,
	};
};

const initialState = [
	// {
	// 	id: 0,
	// 	title: "타이틀",
	// 	body: "행동경제학 읽기",
	// 	isDone: false,
	// 	date: "2023-3-29-19:36",
	// },
];

// 리듀서
const todos = (state = initialState, action) => {
	switch (action.type) {
		case INIT:
			return [...action.payload];
		case ADD:
			return [...state, action.payload];
		case DONE:
			return state.map((item) => (item.id === action.id ? { ...item, isDone: !item.isDone } : item));
		case DELETE:
			return state.filter((item) => item.id !== action.id);
		default:
			return state;
	}
};

// 모듈파일에서는 리듀서를 export default 한다.
export default todos;
