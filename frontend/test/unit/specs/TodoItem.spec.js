import { mount } from 'vue-test-utils'
import TodoItem from '@/components/TodoItem'

function mountItem (status) {
  const wrapper = mount(TodoItem, {
    propsData: {
      desc: 'Walk the dog',
      status: status
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

  it ('sets doing-text class when status is "doing"', () => {
    expect(doingItem.find('.item-text').classes()).to.contain('doing-text')
  })

  it('sets done-text class when status is "done"', () => {
    expect(doneItem.find('.item-text').classes()).to.contain('done-text')
  })
})
