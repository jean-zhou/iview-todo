import axios from '@/libs/api.request'

export const getTodoList = () => {
  return axios.request({
    url: '/api/todo/all',
    method: 'get'
  })
}

export const deleteTodo = (id) => {
  return axios.request({
    url: '/api/todo/delete',
    method: 'get',
    params: { 'id': id }
  })
}

export const saveTodo = info => {
  return axios.request({
    url: '/api/todo/add',
    data: info,
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  })
}

export const updateTodo = data => {
  return axios.request({
    url: '/api/todo/update',
    data: data,
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  })
}
