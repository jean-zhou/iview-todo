<template>
  <div>
    <Modal
      v-model="modalstatus"
      title="确认框"
      @on-ok="ok"
      @on-cancel="cancel"
      >
      <p>确认是否创建新的todo</p>
    </Modal>
  </div>
</template>
<script>
import { saveTodo } from '@/api'
export default {
  data () {
    return {
      // 父子组件中都定义了modalstatus，在父组件定义，所以在子组件中直接使用就可以
      // modalstatus: false,
    }
  },
  name: 'AddPop',
  // props的数组里面的值，需要时字符串，是数据的名字，英文需要用引号包起来，否则就是未定义的变量
  props: ['modaldata', 'modalstatus'],
  methods: {
    ok () {
      var todo = JSON.stringify(this.modaldata)
      console.log('是否拿到父组件传过来的数据', todo)
      saveTodo(todo).then(res => {
        console.log('发送的ajsx是否成功', res)
        this.$Message.info({
          title: '处理结果',
          content: `${res.data.message}`
        })
        this.$router.push({ name: 'todolist' })
      })
    },
    cancel () {
      this.$Message.info('点击取消')
      this.$router.push({ name: 'todolist' })
    }
  }
}
</script>
