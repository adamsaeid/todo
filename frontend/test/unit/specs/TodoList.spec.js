import { mount, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'
import TodoList from '@/components/TodoList'
import TodoItem from '@/components/TodoItem'

const localVue = createLocalVue()
localVue.use(Vuex)

const mockState = {
  todos: {
    todoList: [
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
  }
}

describe('TodoList', () => {
  let store
  let wrapper

  beforeEach(() => {
    store = new Vuex.Store({
      state: mockState
    })

    wrapper = mount(TodoList, { store, localVue })
  })

  it('should have a TodoList component for each todo item in store', () => {
    var todoItems = wrapper.findAll(TodoItem)
    expect(todoItems.length).to.equal(3)
  })

  it('should pass correct props to TodoItem component', () => {
    var todoItemWrapper = wrapper.findAll(TodoItem).at(0)
    var expectedProps = { id: 1, desc: 'Walk the dog', status: 'todo' }
    expect(todoItemWrapper.props()).to.deep.equal(expectedProps)
  })
})
