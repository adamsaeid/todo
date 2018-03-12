import Vue from 'vue'
import TodoItem from '@/components/TodoItem'

// helper function that mounts and returns the rendered text
function getRenderedText (Component, propsData) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({ propsData: propsData }).$mount()
  return vm.$el.textContent
}

describe('TodoItem.vue', () => {
  it('should render correct contents', () => {
    expect(getRenderedText(TodoItem, {
      desc: 'Walk the dog',
      status: 'todo'
    })).to.contain('Walk the dog (todo)')
  })
})
