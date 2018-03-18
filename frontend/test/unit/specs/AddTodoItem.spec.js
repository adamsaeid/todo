import { mount, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'
import AddTodoItem from '@/components/AddTodoItem'
import sinon from 'sinon'

var localVue = createLocalVue()
localVue.use(Vuex)

describe('AddTodoItem', () => {
  let wrapper
  let store
  let addTodoStub

  beforeEach(() => {
    addTodoStub = sinon.stub()

    const mutations = {
      addTodo: addTodoStub
    }

    store = new Vuex.Store({
      state: { },
      mutations
    })

    wrapper = mount(AddTodoItem, { localVue, store })
  })

  it('should render input box', () => {
    expect(wrapper.contains('.new-todo-input')).to.equal(true)
  })

  it('should render "add" button', () => {
    expect(wrapper.contains('.new-todo-btn')).to.equal(true)
  })

  it('should disable "add" button if input empty', () => {
    wrapper.vm.newTodoDesc = ''
    wrapper.update()
    var addButton = wrapper.find('.new-todo-btn')
    expect(addButton.attributes().disabled).to.equal('disabled')
  })

  it('should enable "add" button if input not empty', () => {
    wrapper.vm.newTodoDesc = 'Buy milk'
    wrapper.update()
    var addButton = wrapper.find('.new-todo-btn')
    expect(addButton.attributes().disabled).to.equal(undefined)
  })

  it('input box should update newTodoDesc value', () => {
    var newTodoBox = wrapper.find('.new-todo-input')
    newTodoBox.element.value = 'Walk the dog'
    newTodoBox.trigger('input')
    expect(wrapper.vm.newTodoDesc).to.equal('Walk the dog')
  })

  it('should call onAddTodo when "add" button clicked', () => {
    var onAddTodoStub = sinon.stub()
    wrapper.vm.onAddTodo = onAddTodoStub

    var addButton = wrapper.find('.new-todo-btn')
    addButton.trigger('click')
    expect(onAddTodoStub.called).to.equal(true)
  })

  describe('onAddTodo', () => {
    it('should commit addTodo mutation with correct value', () => {
      var mockCurrentTime = 1521374720012
      var clock = sinon.useFakeTimers(mockCurrentTime)

      wrapper.vm.newTodoDesc = 'Buy milk'
      wrapper.vm.onAddTodo()

      var expectedNewTodo = {
        id: mockCurrentTime,
        desc: 'Buy milk',
        status: 'todo'
      }

      expect(addTodoStub.calledWith({}, expectedNewTodo)).to.equal(true)

      clock.restore()
    })

    it('should clear newTodoDesc', () => {
      wrapper.vm.newTodoDesc = 'Buy milk'
      wrapper.vm.onAddTodo()

      expect(wrapper.vm.newTodoDesc).to.equal('')
    })
  })
})
