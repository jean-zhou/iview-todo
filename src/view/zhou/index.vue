<template>
    <div>
      <h1>TodoList</h1>
      <div>
        <Button type="primary" @click="createTodo">创建日程</Button>
        <br>
        <br>
        <Table border :columns="columns" :data="datas">
          <!-- <template slot-scope="{ row, index }" slot="time">
              <strong>{{ row.time }}</strong>
          </template> -->
          <template v-slot:time='{row}'>
              <strong>{{ row.time }}</strong>
          </template>

          <!-- <template slot-scope="{ row, index }" slot="action">
              <Button type="primary" style="margin-right: 5px" @click="show(row)">View</Button>
              <Button type="primary" style="margin-right: 5px" @click="edit(row)">Edit</Button>
              <Button type="primary" @click="remove(row)">Delete</Button>
          </template> -->
            <template v-slot:action='{row}'>
              <Button type="primary" style="margin-right: 5px" @click="show(row)">View</Button>
              <Button type="primary" style="margin-right: 5px" @click="edit(row)">Edit</Button>
              <Button type="primary" @click="remove(row)">Delete</Button>
          </template>
        </Table>
      </div>
    </div>
</template>

<script>
import { getTodoList, deleteTodo } from '@/api'

export default {
  data () {
    return {
      columns: [
        {
          title: '时间',
          slot: 'time',
          sortable: true
        },
        {
          title: '事件',
          key: 'todothing'
        },
        {
          title: '操作',
          slot: 'action'
        }
      ],
      datas: [
        // {
        //   id: 1,
        //   time: '2016-10-02',
        //   todothing: '吃饭'
        // }
      ]
    }
  },
  methods: {
    getData () {
      // 显示todolist
      getTodoList().then(res => {
        console.log('请求成功', res)
        var todos = res.data
        this.datas = todos
      })
    },
    init () {
      this.getData()
    },
    show (row) {
      // 弹出对话框显示
      console.log('show on', row)
      this.$Modal.info({
        title: '日程事项',
        content: `
        时间：${row.time}
        事件：${row.todothing}
        `
      })
      console.log('this.$Modal.info = ', this.$Modal.info)
    },
    // edit (row) {
    //   var itemId = row.id
    //   sessionStorage.setItem('showInEdit', JSON.stringify(row))
    //   this.$router.push({
    //     name: 'edit_todo',
    //     params: {
    //       id: itemId
    //     }
    //   })
    // },
    edit (row) {
      this.$router.push({
        name: 'edit_todo',
        params: {
          item: row
        }
      })
    },
    remove (row) {
      var itemId = row.id
      console.log('itemId', itemId)
      console.log('路由参数', this)
      deleteTodo(itemId).then(res => {
        console.log('delete 成功')
        // 删除以后重新获取新的列表
        this.getData()
      })
    },
    createTodo () {
      console.log('跳转createlist界面')
      this.$router.push('createlist')
    }
  },
  mounted: function () {
    this.init()
  }
}
</script>
