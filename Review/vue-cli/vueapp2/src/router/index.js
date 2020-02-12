import Vue from 'vue'
import VueRouter from 'vue-router'
import Movie from '../views/Movie'
import Music from '../views/Music'
import Book from '../views/Book'
import Picture from '../views/Picture'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Movie',
    component: Movie
  },
  {
    path: '/music',
    name: 'Music',
    component: Music
  },
  {
    path: '/book',
    name: 'Book',
    component: Book
  },
  {
    path: '/picture',
    name: 'Picture',
    component: Picture
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
