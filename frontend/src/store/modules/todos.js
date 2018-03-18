const state = {
  todoList: []
}

function findTodo (state, todoId) {
  return state.todoList.find(todo => todo.id === todoId)
}

export const getters = {
  getTodoById: (state) => (todoId) => {
    return findTodo(state, todoId)
  }
}

export const mutations = {
  resetTodos (state) {
    state.todoList = []
  },
  setTodos (state, todoList) {
    state.todoList = todoList
  },
  setTodo (state, todoId) {
    findTodo(state, todoId).status = 'todo'
  },
  setDoing (state, todoId) {
    findTodo(state, todoId).status = 'doing'
  },
  setDone (state, todoId) {
    findTodo(state, todoId).status = 'done'
  },
  addTodo (state, newTodo) {
    state.todoList.push(newTodo)
  }
}

export default {
  state,
  getters,
  mutations
}
