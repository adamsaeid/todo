import { shallow } from 'vue-test-utils'
import TodoList from '@/components/TodoList'

var todosArray = [
  {
    id: 1,
    desc: 'walk the dog',
    status: 'todo'
  },
  {
    id: 2,
    desc: 'clean the kitchen',
    status: 'doing'
  },
  {
    id: 3,
    desc: 'change the lightbulb',
    status: 'done'
  }
]

describe('TodoList', () => {
  it('Should update task status when statusChanged event is received', () => {
    var wrapper = shallow(TodoList)
    wrapper.setData({
      todos: todosArray
    })

    wrapper.vm.$emit('statusChanged', {id: 2, newStatus: 'done'})
    console.log(wrapper.vm.data)
    expect(wrapper.vm.todos[2]).to.deep.equal({id: 2, desc: 'clean the kitchen', status: 'done'})
  })
})
