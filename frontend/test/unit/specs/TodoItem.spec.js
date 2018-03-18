import { mount, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'
import TodoItem from '@/components/TodoItem'
import sinon from 'sinon'

const localVue = createLocalVue()
localVue.use(Vuex)

function mountItem (status) {
  const wrapper = mount(TodoItem, {
    propsData: {
      id: 1,
      desc: 'Walk the dog',
      status: status || 'todo'
    }
  })

  return wrapper
}

const todoItem = mountItem('todo')
const doingItem = mountItem('doing')
const doneItem = mountItem('done')

describe('TodoItem', () => {
  it('should render correct contents', () => {
    expect(doneItem.find('.item-text').text()).to.contain('Walk the dog (done)')
  })

  it('sets todo-text class when status is "todo"', () => {
    expect(todoItem.find('.item-text').classes()).to.contain('todo-text')
  })

  it('sets doing-text class when status is "doing"', () => {
    expect(doingItem.find('.item-text').classes()).to.contain('doing-text')
  })

  it('sets done-text class when status is "done"', () => {
    expect(doneItem.find('.item-text').classes()).to.contain('done-text')
  })

  describe('buttons', () => {
    let store
    let setTodoStub, setDoingStub, setDoneStub, deleteTodoStub

    beforeEach(() => {
      setTodoStub = sinon.stub()
      setDoingStub = sinon.stub()
      setDoneStub = sinon.stub()
      deleteTodoStub = sinon.stub()

      const mutations = {
        setTodo: setTodoStub,
        setDoing: setDoingStub,
        setDone: setDoneStub,
        deleteTodo: deleteTodoStub
      }

      store = new Vuex.Store({
        state: { },
        mutations
      })
    })

    it('should call setTodo mutation with correct id when "todo" button is clicked', () => {
      var wrapper = mount(TodoItem, { propsData: {id: 2, desc: 'Buy milk', status: 'todo'}, store, localVue })
      wrapper.find('button.todo-btn').trigger('click')
      expect(setTodoStub.calledWith({}, 2)).to.equal(true)
    })

    it('should call setDoing mutation with correct id when "doing" button is clicked', () => {
      var wrapper = mount(TodoItem, { propsData: {id: 2, desc: 'Buy milk', status: 'todo'}, store, localVue })
      wrapper.find('button.doing-btn').trigger('click')
      expect(setDoingStub.calledWith({}, 2)).to.be.equal(true)
    })

    it('should call setDone mutation with correct id when "done" button is clicked', () => {
      var wrapper = mount(TodoItem, { propsData: {id: 2, desc: 'Buy milk', status: 'todo'}, store, localVue })
      wrapper.find('button.done-btn').trigger('click')
      expect(setDoneStub.calledWith({}, 2)).to.be.equal(true)
    })

    it('should call deleteTodo with correct id when "delete" button is clicked', () => {
      var wrapper = mount(TodoItem, { propsData: {id: 2, desc: 'Buy milk', status: 'todo'}, store, localVue })
      wrapper.find('button.delete-btn').trigger('click')
      expect(deleteTodoStub.calledWith({}, 2)).to.be.equal(true)
    })
  })
})
