import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home';
import Dashboard from '../views/Dashboard';
import EditNote from '../views/EditNote';
import Login from '../views/Login';
import Note from '../views/Note';
import Profile from '../views/Profile';
import Register from '../views/Register';
import New from '../views/New';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  // Para agregar nueva nota
  {
    path: '/new',
    name: 'New',
    component: New,
    meta: {requiresAuth: true},
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {requiresAuth: true},
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {requiresAuth: true},
  },
  {
    path: '/note/:id',
    name: 'Note',
    component: Note,
    meta: {requiresAuth: true},
    props: true,
  },
  {
    path: '/note/:id',
    name: 'EditNote',
    component: EditNote,
    meta: {requiresAuth: true},
    props: true,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;


  

