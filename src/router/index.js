import { createRouter, createWebHistory } from 'vue-router'
import Ex00View from '@/views/Ex00View.vue'
import IndexView from '@/views/main/IndexView.vue'
import LoginForm from '@/views/user/LoginForm.vue'
import JoinForm from '@/views/user/JoinForm.vue'
import JoinSuccess from '@/views/user/JoinSuccess.vue'
import BlogMain from '@/views/blog/BlogMain.vue'

const routes = [
  {
    path : '/00',
    name : '/00',
    component : Ex00View
  },
  {
    path : '/jblog',
    name : '/jblog',
    component : IndexView
  },
  {
    path : '/jblog/user/loginform',
    name : '/jblog/user/loginform',
    component : LoginForm
  },
  {
    path : '/jblog/user/joinform',
    name : '/jblog/user/joinform',
    component : JoinForm
  },
  {
    path : '/jblog/user/join',
    name : '/jblog/user/join',
    component : JoinSuccess
  },
  {
    path : '/jblog/:id',
    name : '/jblog/:id',
    component : BlogMain
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
