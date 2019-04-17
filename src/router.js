import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

axios.defaults.baseURL = process.env.BASE_URL;
axios.defaults.serverUrl = 'http://medicloud.local';
axios.defaults.user_id = null;

import Portal from './views/Portal.vue'

// MEMBER views 
  import MemberAuth from './views/member/Auth.vue'
  import MemberDashboard from './views/member/Dashboard.vue'
  import MemberHome from './views/member/Home.vue'
  import MemberActivity from './views/member/Activity.vue'
  import MemberEclaim from './views/member/Eclaim.vue'
// COMPANY views
  import CompanyAuth from './views/company/Auth.vue'
  import CompanyIntro from './views/company/Intro.vue'
  import CompanyDashboard from './views/company/Dashboard.vue'
// CLINIC views

Vue.use(Router)
Vue.use(axios)


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    { path: '*', redirect: '/portal'},
    { path: '/portal', name: 'portal', component: Portal },
    { path: '/member/auth', name: 'MemberAuth', component: MemberAuth },
    { path: '/company/auth', name: 'CompanyAuth', component: CompanyAuth },
    {
      path: '/member',
      name: 'member-dashboard',
      redirect: '/member/dashboard',
      component: MemberDashboard,
      // meta: { auth: true },
      children: [
        { name: 'MemberHome', path: '/member/dashboard', component: MemberHome },
        { name: 'MemberActivity', path: '/member/activity', component: MemberActivity },
        { name: 'MemberEclaim', path: '/member/eclaim', component: MemberEclaim },
      ]
    },
    {
      path: '/company',
      name: 'company-dashboard',
      redirect: '/company/dashboard',
      component: CompanyDashboard,
      // meta: { auth: true },
      children: [
        { name: 'CompanyIntro', path: '/company/intro', component: CompanyIntro },
      ]
    },
    
  ]
})
