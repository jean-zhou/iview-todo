<template>
    <div>
      <h1>editTodo</h1>
      <div>
        <template>
        <Form>
          <FormItem label="日期">
            <Col span="12">
              <DatePicker type="date" v-model='formItem.time' style="width: 200px"></DatePicker>
            </Col>
          </FormItem>
          <FormItem label="事项">
            <Input v-model="formItem.todothing"  style="width: 200px" />
          </FormItem>
        </Form>
      </template>
      </div>
      <div>
        <Button type="primary" @click="todoSubmit">提交</Button>
        <Button type="success" @click="todoBack">返回</Button>
      </div>
    </div>
</template>

<script>
import { updateTodo } from '@/api'
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
    showTodo () {
      // 使用sessionstorage存储每一个row的内容
      // var row = sessionStorage.getItem('showInEdit')
      // this.formItem = JSON.parse(row)
      // console.log('rowTodo', this.formItem)

      // 使用路由传参拿到row的内容
      this.formItem = this.$route.params.item
      console.log(this.formItem)
    },
    todoSubmit () {
      let todoEdit = this.formItem
      // todoEdit.id = this.$route.params.id
      // todoEdit.time = this.formItem.time
      // todoEdit.todothing = this.formItem.todothing

      // todoEdit.id = this.formItem.id
      // todoEdit.time = this.formItem.time
      // todoEdit.todothing = this.formItem.todothing
      var data = JSON.stringify(todoEdit)
      console.log('data', data)
      updateTodo(todoEdit).then(res => {
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
    },
    todoBack () {
      console.log('返回todolist')
      this.$router.push({
        name: 'todolist'
      })
    }
  },
  mounted () {
    this.showTodo()
  }
}
</script>
