import { mount } from 'vue-test-utils'
import TodoItem from '@/components/TodoItem'
import sinon from 'sinon'

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

  describe('setTodo()', () => {
    it('should be called when "todo" button clicked', () => {
      var wrapper = mountItem()
      var setTodoStub = sinon.stub()
      wrapper.setMethods({setTodo: setTodoStub})

      wrapper.find('button.todo-btn').trigger('click')
      expect(setTodoStub.called).to.equal(true)
    })

    it('should emit correct statusChanged event', () => {
      var wrapper = mountItem()
      wrapper.find('button.todo-btn').trigger('click')
      expect(wrapper.emitted().statusChanged[0]).to.deep.equal([{id: 1, newStatus: 'todo'}])
    })
  })

  describe('setDoing()', () => {
    it('should be called when "doing" button clicked', () => {
      var wrapper = mountItem()

      var setDoingStub = sinon.stub()
      wrapper.setMethods({setDoing: setDoingStub})

      wrapper.find('button.doing-btn').trigger('click')
      expect(setDoingStub.called).to.equal(true)
    })

    it('should emit correct statusChanged event', () => {
      var wrapper = mountItem()
      wrapper.find('button.doing-btn').trigger('click')
      expect(wrapper.emitted().statusChanged[0]).to.deep.equal([{id: 1, newStatus: 'doing'}])
    })
  })

  describe('setDone()', () => {
    it('should be called when "done" button clicked', () => {
      var wrapper = mountItem()

      var setDoneStub = sinon.stub()
      wrapper.setMethods({setDone: setDoneStub})

      wrapper.find('button.done-btn').trigger('click')
      expect(setDoneStub.called).to.equal(true)
    })

    it('should emit correct statusChanged event', () => {
      var wrapper = mountItem()
      wrapper.find('button.done-btn').trigger('click')
      expect(wrapper.emitted().statusChanged[0]).to.deep.equal([{id: 1, newStatus: 'done'}])
    })
  })
})
