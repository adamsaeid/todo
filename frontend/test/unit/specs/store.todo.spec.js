import { mutations, getters } from '../../../src/store/modules/todos'

var todos = [
  {
    id: 1,
    desc: 'Walk the dog',
    status: 'todo'
  },
  {
    id: 2,
    desc: 'Buy milk',
    status: 'done'
  },
  {
    id: 3,
    desc: 'Replace heatsink',
    status: 'doing'
  }
]

function cloneTodos () {
  var todosCopy = JSON.parse(JSON.stringify(todos))
  return todosCopy
}

describe('store.todos', () => {
  describe('Mutations', () => {
    var state
    beforeEach(() => {
      state = { todoList: cloneTodos() }
    })
    describe('setTodos', () => {
      it('should set state.todoList to given array', () => {
        state = { todoList: [] }
        mutations.setTodos(state, cloneTodos())
        expect(state).to.deep.equal({ todoList: todos })
      })
    })

    describe('resetTodos', () => {
      it('should set state.todoList to empty array', () => {
        mutations.resetTodos(state)
        expect(state).to.deep.equal({ todoList: [] })
      })
    })

    describe('setTodo', () => {
      it('should set given item status to "todo"', () => {
        mutations.setTodo(state, 2)
        var changedItem = state.todoList.find(item => item.id === 2)
        expect(changedItem.status).to.equal('todo')
      })
    })

    describe('setDoing', () => {
      it('should set given item status to "doing"', () => {
        mutations.setDoing(state, 1)
        var changedItem = state.todoList.find(item => item.id === 1)
        expect(changedItem.status).to.equal('doing')
      })
    })

    describe('setDone', () => {
      it('should set given item status to "done"', () => {
        mutations.setDone(state, 1)
        var changedItem = state.todoList.find(item => item.id === 1)
        expect(changedItem.status).to.equal('done')
      })
    })

    describe('addTodo', () => {
      it('should add a new item to the todo list', () => {
        var newItem = { id: 4, desc: 'Unpack the boxes', status: 'todo' }
        mutations.addTodo(state, newItem)
        var newItemFromState = state.todoList.find(item => item.id === 4)
        expect(newItemFromState).to.equal(newItem)
      })
    })
  })

  describe('Getters', () => {
    var state
    beforeEach(() => {
      state = { todoList: cloneTodos() }
    })
    describe('getTodoById', () => {
      var todoId = 2
      it('should return todo with given id', () => {
        var todo = getters.getTodoById(state, getters)(todoId)
        expect(todo).to.deep.equal(todos[1])
      })
    })
  })
})
