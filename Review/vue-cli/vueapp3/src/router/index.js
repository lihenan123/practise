import Vue from 'vue'
// import Router from 'vue-router';
import VueRouter from 'vue-router'
import Movie from '../views/Movie.vue'
import Music from '../views/Music.vue'
import Book from '../views/Book.vue'
import Photo from '../views/Photo.vue'
import MovieDetail from '../views/MovieDetail.vue'
import PhotoDetail from '../views/PhotoDetail.vue'
import MusicDetail from '../views/MusicDetail.vue'



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
    path:'/music',
    name:'music',
    component:Music
  },
  {
    path:'/music/music-detail',
    name:'music-detail',
    component:MusicDetail
  },
  {
    path:'/book',
    name:'book',
    component:Book
  },
  {
    path:'/photo',
    name:'photo',
    component:Photo,
  },{
    path:'/photo/photo-detail',
    component:PhotoDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
