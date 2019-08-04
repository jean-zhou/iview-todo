<template>
    <div>
      <h1>creactTodo</h1>
      <div>
        <template>
        <Form>
          <FormItem label="日期">
            <Col span="12">
              <DatePicker type="date" v-model='formItem.time' placeholder="Select date" style="width: 200px"></DatePicker>
            </Col>
          </FormItem>
          <FormItem label="事项">
            <Input v-model="formItem.todothing" placeholder="Edit todothing" style="width: 200px" />
          </FormItem>
        </Form>
      </template>
      </div>
      <div>
        <Button type="primary" @click="todoback">创建</Button>
      </div>
    </div>
</template>

<script>
import { saveTodo } from '@/api'
export default {
  data () {
    return {
      formItem: {
        time: '',
        todothing: ''
      }
    }
  },
  methods: {
    todoback () {
      var todo = JSON.stringify(this.formItem)
      console.log('todo', todo)
      saveTodo(todo).then(res => {
        console.log('请求成功, res', res.data)
        this.$Modal.info({
          title: '处理结果',
          content: `
          ${res.data.message}
          `
        })
        console.log('返回todolist')
        this.$router.push({
          name: 'todolist'
        })
      })
    }
  }
}
</script>
