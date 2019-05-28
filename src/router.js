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
  import CompanyEmployee from './views/company/Employee.vue'
  import CompanyActivity from './views/company/Activity.vue'
  import CompanyClaim from './views/company/Claim.vue'
  import CompanyCreateTeamBenefitsTier from './views/company/enrollment/Create-team-benefits-tier.vue'
  import CompanyStatement from './views/company/Statement.vue'
  import CompanyAccount from './views/company/Account.vue'
  import CompanyOverview from './views/company/Overview.vue'
  import CompanyCreditAllocation from './views/company/CreditAllocation.vue'
  import CompanyEnrollment from './views/company/Enrollment.vue'
  import CompanyEnrollmentOptions from './views/company/enrollment/Enrollment-options.vue'
// CLINIC views



Vue.use(Router)
Vue.use(axios)


export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  linkActiveClass: 'router-active',
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
      meta: { auth: true },
      children: [
        { name: 'MemberHome', path: '/member/dashboard', component: MemberHome },
        { name: 'MemberActivity', path: '/member/activity', component: MemberActivity },
        { name: 'MemberEclaim', path: '/member/eclaim', component: MemberEclaim },
      ]
    },
    {
      path: '/company',
      name: 'company-dashboard',
      redirect: '/company/auth',
      component: CompanyDashboard,
      meta: { auth: true },
      children: [
        { name: 'CompanyIntro', path: '/company/intro', component: CompanyIntro },
        { name: 'CompanyHome', path: '/company/dashboard', component: CompanyOverview },
        { name: 'CompanyEmployee', path: '/company/employee-overview', component: CompanyEmployee },
        { name: 'CompanyActivity', path: '/company/activity', component: CompanyActivity },
        { name: 'CompanyClaim', path: '/company/claim', component: CompanyClaim },
        { name: 'CompanyCreateTeamBenefitsTier', path: '/company/create-team-benefits-tier', component: CompanyCreateTeamBenefitsTier },
        { name: 'CompanyStatement', path: '/company/statement', component: CompanyStatement },
        { name: 'CompanyAccount', path: '/company/account', component: CompanyAccount },
        // { name: 'CompanyOverview', path: '/company/overview', component: CompanyOverview },
        { name: 'CompanyCreditAllocation', path: '/company/credit-allocation', component: CompanyCreditAllocation },
        { name: 'CompanyEnrollment', path: '/company/enrollment', component: CompanyEnrollment },
        { name: 'CompanyEnrollmentOptions', path: '/company/enrollment-options', component: CompanyEnrollmentOptions },
      ]
    },
    
  ]
})
