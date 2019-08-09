<template>
    <div>
      <h1>creact & edit Todo</h1>
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
        <Button type="primary" @click="clickconfirm">创建
        </Button>
        <!-- 父组件传给子组件的值，直接使用data里面数据的名称‘formItem’表示，不需要this.formItem -->
        <add  :modaldata='formItem' :modalstatus='modalstatus'></add>
      </div>
    </div>
</template>

<script>
// import 引入的内容不能添加大括号，错误语法，会导致引入内容无法识别
import AddPop from './add'

export default {
  data () {
    return {
      modalstatus: false,
      formItem: {
        time: '',
        todothing: ''
      }
    }
  },
  components: {
    // 定义的子组件需要挂载在父组件上，把子组件重新在父组件中引用
    // 对于组件的名字，一定要使用字符串，使用字符串一定要用引号包裹
    'add': AddPop
  },
  methods: {
    showTodo () {
      this.formItem = this.$route.params.item
      console.log(this.formItem)
    },
    clickconfirm () {
      // 弹窗的显示和取消，
      this.modalstatus = !this.modalstatus
      // console.log('modalstatus', modalstatus)
      console.log('点击按键', this.modalstatus)
      // 说明可以拿到子组件，没有打印是因为没有触发打印的事件
      console.log('组件', AddPop)
    }
  },
  mounted () {
    this.showTodo()
  }
}
</script>
