<template>
  <div class="main-ui-container">
    <div v-if="$route.name != 'CompanyIntro'" class="top-navbar-wrapper">
      <div class="top-navbar">
        <img class="top-logo" :src="'../assets/img/mednefits_logo_v3_(white).png'">

        <div class="need-help-wrapper">
          <a href="#" class="need-help-text-container">
            <h3 class="need-help-text">Need help?</h3>

            <div class="tooltip-container">
              <h3 class="tooltip-title">We're here to help.</h3>

              <div class="tooltip-phone-container">
                <h3 class="tooltip-phone-email-title">You may ring us</h3>

                <h3 class="tooltip-phone-email-details">+65 6254 7889</h3>

                <h3 class="tooltip-phone-email-details">Mon - Fri 10:00 to 19:00</h3>
              </div>

              <h3 class="tooltip-phone-email-title">Drop us a note, anytime</h3>

              <h3 class="tooltip-phone-email-details">happiness@mednefits.com</h3>
            </div>
          </a>
        </div>

        <div class="account-dropdown">
          <img class="user-icon" :src="'../assets/img/user-nav.png'">

          <img class="arrow-down" :src="'../assets/img/icons/down-arrow.svg'">

          <div class="account-list-container">
            <ul>
              <li>
                <a href="#">Account &amp; Billing</a>
              </li>

              <li>
                <a href>Plan Coverage</a>
              </li>

              <li>
                <!-- <a href="/company-benefits-dashboard-logout">Log Out</a> -->

                <a href id="logout-btn">Log Out</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="navbar-blue-bg">
        <div class="container">
          <div v-if="$route.name != 'CompanyEnrollment'" class="dashboard-navbar-container">
            <div class="welcome-container">
              <router-link to="/company/dashboard">
                <h4>Overview</h4>
              </router-link>
            </div>

            <div class="welcome-container">
              <a
                v-bind:class="{ 'router-active': ($route.name == 'CompanyEmployee') }"
                ref="dropdownMenu"
              >
                <h4 @click="dropdownClicked">Employee</h4>
              </a>

              <ul v-show="isDropdown" class="dropdown-menu">
                <li>
                  <router-link to="/company/employee-overview">
                    <a @click="dropdownClicked">Overview</a>
                  </router-link>
                </li>

                <li>
                  <router-link to="/company/credit-allocation">
                    <a @click="dropdownClicked">Credit Allocation</a>
                  </router-link>
                </li>
              </ul>
            </div>

            <div class="welcome-container">
              <router-link to="/company/activity">
                <h4>Activity</h4>
              </router-link>
            </div>

            <div class="welcome-container">
              <router-link to="/company/claim">
                <h4>Claim</h4>
              </router-link>
            </div>

            <div class="welcome-container">
              <router-link to="/company/statement">
                <h4>Statement</h4>
              </router-link>
            </div>

            <div class="welcome-container">
              <router-link to="/company/account">
                <h4>Account</h4>
              </router-link>
            </div>
          </div>
          <div v-if="$route.name === 'CompanyEnrollment'" class="enrollment-navbar-container welcome-container">
            <h4 v-if="$route.name === 'CompanyEnrollment' && isState === 'enrollment'">Enrollment</h4>
            <h4 v-if="isState === 'web' && $route.name != 'CompanyHome'" class="web-input-title">WEB INPUT</h4>
            <div class="line-bottom"></div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="$route.name === 'CompanyIntro'" class="welcome-top-navbar-wrapper">
      <div class="top-navbar">
        <img class="top-logo" :src="'../assets/img/mednefits_logo_v3_(white).png'">

        <div class="need-help-wrapper">
          <a href="#" class="need-help-text-container">
            <h3 class="need-help-text">Need help?</h3>

            <div class="tooltip-container">
              <h3 class="tooltip-title">We're here to help.</h3>

              <div class="tooltip-phone-container">
                <h3 class="tooltip-phone-email-title">You may ring us</h3>

                <h3 class="tooltip-phone-email-details">+65 6254 7889</h3>

                <h3 class="tooltip-phone-email-details">Mon - Fri 10:00 to 19:00</h3>
              </div>

              <h3 class="tooltip-phone-email-title">Drop us a note, anytime</h3>

              <h3 class="tooltip-phone-email-details">happiness@mednefits.com</h3>
            </div>
          </a>
        </div>

        <div
          v-if="$route.name === 'CompanyEnrollment' && isState === 'enrollment' || isState === 'web' "
          class="account-dropdown"
        >
          <img class="user-icon" :src="'../assets/img/user-nav.png'">

          <img class="arrow-down" :src="'../assets/img/icons/down-arrow.svg'">

          <div class="account-list-container">
            <ul>
              <li>
                <a href="#">Account &amp; Billing</a>
              </li>

              <li>
                <a href>Plan Coverage</a>
              </li>

              <li>
                <!-- <a href="/company-benefits-dashboard-logout">Log Out</a> -->

                <a href id="logout-btn">Log Out</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="navbar-blue-bg">
        <div class="container">
          <div class="welcome-container">
            <h4 v-if="$route.name === 'CompanyIntro'">Welcome</h4>
          </div>
        </div>
      </div>
    </div>

    <router-view v-on:enrollmentData="enrollmentData" v-on:overviewData="overviewData"></router-view>
  </div>
</template>

<script>
/* eslint-disable */
import dashboard from "@/components/company/dashboard";

export default dashboard;
</script>

