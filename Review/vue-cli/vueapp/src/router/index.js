import Vue from 'vue'
import VueRouter from 'vue-router'
import Movie from '../views/Movie.vue'
import Music from '../views/Music'
import Book from '../views/Book'
import Picture from '../views/Picture'
import MovieDetail from '../views/MovieDetail.vue'
import MusicDetail from '../views/MusicDetail.vue'
import Error from '../views/Error.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'movie',
    component: Movie
  },
  {
    path: '/movie/moviedetail',
    name: 'moviedetail',
    component: MovieDetail,
  },
  {
    path: '/music',
    name: 'music',
    component: Music
  },
  {
    path: '/music/musicdetail',
    name: 'musicdetail',
    component: MusicDetail,
  },
  {
    path: '/book',
    name: 'book',
    component: Book
  },
  {
    path: '/picture',
    name: 'picture',
    component: Picture
  },
  {
    path:'*',
    name:'error',
    component:Error
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
