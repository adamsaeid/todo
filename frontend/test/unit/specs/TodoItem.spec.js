import { mount } from 'vue-test-utils'
import TodoItem from '@/components/TodoItem'

describe('TodoItem.vue', () => {
  it('should render correct contents', () => {
    const wrapper = mount(TodoItem, {
      propsData: {
        desc: 'Walk the dog',
        status: 'todo'
      }
    })

    expect(wrapper.html()).to.contain('Walk the dog (todo)')
  })
})
