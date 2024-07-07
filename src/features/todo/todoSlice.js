import { createSlice, nanoid } from "@reduxjs/toolkit";
//nonoid unique ids generate krta h 

//store ke andar initially kya hoga 
const initialState = {
    todos: [{id: 1, text: "Hello World!"}]

}

// function sayHello(){
//     console.log("Hello World");
// }
//ek methde banaya uske andar objects aayenge 
export const todoSlice = createSlice({
    //property ka naam h 
    //reducers ke andar property aur functions aate h
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            //todo action se hi milega 
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
             state.todos = state.todos.filter((todo) => 
                todo.id !== action.payload)
        },  
        updateTodo: (state, action) => {
            const {id, text} = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if(todo){
                todo.text = text;
            }
        }
    }
})
//todoSlice.actions se values mil jayengi
export  const {addTodo, removeTodo, updateTodo} = todoSlice.actions

//iske saare reducers ka access chahiye hota h 
export default todoSlice.reducer 