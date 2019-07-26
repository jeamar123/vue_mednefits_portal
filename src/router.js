import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

axios.defaults.baseURL = process.env.BASE_URL;
axios.defaults.serverUrl = 'http://staging.medicloud.sg';
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
  import CompanyEmployeeDetails from './views/company/employee/Employee-details.vue'
  import CompanyRemoveEmployee from './views/company/employee/Remove-employee.vue'
  import CompanyActivity from './views/company/Activity.vue'
  import CompanyClaim from './views/company/Claim.vue'
  import CompanyCreateTeamBenefitsTier from './views/company/enrollment/Create-team-benefits-tier.vue'
  import CompanyStatement from './views/company/Statement.vue'
  import CompanyAccount from './views/company/Account.vue'
  import CompanyOverview from './views/company/Overview.vue'
  import CompanyCreditAllocation from './views/company/CreditAllocation.vue'
  import CompanyEnrollment from './views/company/Enrollment.vue'
  import CompanyEnrollmentOptions from './views/company/enrollment/Enrollment-options.vue'
  import CompanyWebInput from './views/company/enrollment/Web-input.vue'
  import CompanyExcel from './views/company/enrollment/Excel.vue'
  import CompanyEnroll from './views/company/enrollment/Enroll-summary.vue'
// accounts
  import AccountCompany from './views/company/account/Company-contacts.vue'
  import AccountTransaction from './views/company/account/Transaction.vue'
  import AccountDocument from './views/company/account/Document-center.vue'
  import AccountPayments from './views/company/account/Account-payments.vue'
  import AccountBenefits from './views/company/account/Benefits-tier.vue'

  import CompanyPlanCoverage from './views/company/Plan-coverage.vue'
  import PlanBenefits from './views/company/planCoverage/Benefits.vue'
  import PlanLocalNetwork from './views/company/planCoverage/LocalNetwork.vue'

// CLINIC views
  import ClinicAuth from './views/clinic/Auth.vue'
  import ClinicDashboard from './views/clinic/Dashboard.vue'
  import ClinicClaim from './views/clinic/Claim.vue'


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
    { path: '/clinic/auth', name: 'ClinicAuth', component: ClinicAuth },
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
        //dashboard
        { name: 'CompanyIntro', path: '/company/intro', component: CompanyIntro},
        { name: 'CompanyHome', path: '/company/dashboard', component: CompanyOverview },
        //employee
        { name: 'CompanyEmployee', path: '/company/employee/overview', component: CompanyEmployee },
        { name: 'CompanyCreditAllocation', path: '/company/employee/credit-allocation', component: CompanyCreditAllocation },
        { name: 'CompanyEmployeeDetails', path: '/company/employee/:id/', component: CompanyEmployeeDetails, props: true},
        { name: 'CompanyRemoveEmployee', path: '/company/employee-details/remove-employee', component: CompanyRemoveEmployee },
        //acitivity
        { name: 'CompanyActivity', path: '/company/activity', component: CompanyActivity },
        //company claim
        { name: 'CompanyClaim', path: '/company/claim', component: CompanyClaim },
        //enrollment
        { name: 'CompanyCreateTeamBenefitsTier', path: '/company/create-team-benefits-tier', component: CompanyCreateTeamBenefitsTier },
        { name: 'CompanyEnrollment', path: '/company/enrollment', component: CompanyEnrollment },
        { name: 'CompanyEnrollmentOptions', path: '/company/enrollment-options', component: CompanyEnrollmentOptions },
        { name: 'CompanyWebInput', path: '/company/enrollment/web-input', component: CompanyWebInput },
        { name: 'CompanyExcel', path: '/company/enrollment/excel', component: CompanyExcel },
        { name: 'CompanyEnroll', path: '/company/enrollment/summary', component: CompanyEnroll, props: true },
        //company statement
        { name: 'CompanyStatement', path: '/company/statement', component: CompanyStatement },
        { name: 'CompanyAccount', 
          path: '/company/account',
          component: CompanyAccount,
          redirect: '/company/account/company-contacts',
          children: [
            { 
              name: 'AccountCompany', path: '/company/account/company-contacts', components: {account: AccountCompany}
            },
            { 
              name: 'AccountTransaction', path: '/company/account/transactions', components: {account: AccountTransaction}
            },
            { 
              name: 'AccountDocument', path: '/company/account/document-center', components: {account: AccountDocument} 
            },
            { 
              name: 'AccountPayments', path: '/company/account/account-payments', components: {account: AccountPayments} 
            },
            { 
              name: 'AccountBenefits', path: '/company/account/team-benefits-tier', components: {account: AccountBenefits}
            },
          ]
        },
        { name: 'CompanyPlanCoverage', 
          path: '/company/plan', 
          redirect: '/company/plan-coverage',
          component: CompanyPlanCoverage,
            children: [
              { name: 'PlanBenefits', path: '/company/plan-coverage', components: {plan:PlanBenefits} },
              { name: 'PlanLocalNetwork', path: '/company/local-network-partners', components: {plan:PlanLocalNetwork} },
            ]
        },
        // { name: 'CompanyOverview', path: '/company/overview', component: CompanyOverview },
        
      ]
    },
    {
      path: '/clinic',
      name: 'clinic-dashboard',
      redirect: '/clinic/claim',
      component: ClinicDashboard,
      meta: { auth: true },
      children: [
        { name: 'MemberHome', path: '/clinic/claim', component: ClinicClaim },
      ]
    },
  ]
})
