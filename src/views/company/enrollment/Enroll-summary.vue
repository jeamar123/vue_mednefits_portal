<template>
  <transition name="fade">
    <div class="enrollment-wrapper">
      <div class="container">
        <div class="details-enroll-wrapper" v-if="isState == 'enrollsum'">
          <h1>Please check the details below before we enroll them.</h1>
          <!-- table summary -->
          <div>
            <table class="">
              <thead>
                <tr>
                  <th>
                    <input type="checkbox">
                  </th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>NRIC/FIN</th>
                  <th>Date of Birth</th>
                  <th>Work Email</th>
                  <th>Mobile</th>
                  <th>Medical Credits</th>
                  <th>Wellness Credits</th>
                </tr>
              </thead>
              <tbody>
                <!-- <tr class="dependent-hover-container" v-for="(enroll, index) in employeeStorage" v-bind:key="enroll.id"> -->
                <tr class="dependent-hover-container" v-for="(enroll, index) in employeeStorage" v-bind:key="enroll.id">
                  <td>
                    <input type="checkbox" v-model="isChecked" :value="index">
                  </td>
                  <td>
                    <div class="fname-container">
                      <!-- <span class="icon">
                            <i class="fa fa-check" style="display: none;"></i>
                            <i class="fa fa-times" style="display: none;"></i>
                            <i class="fa fa-circle-o-notch fa-spin" style="display: none;"></i>
                      </span>-->
                      <!-- <span class="fname">{{enroll.fname}}</span> -->
                      <span class="fname">{{enroll.fname}}</span>
                      <button @click="editEmployee('edit', index)" class="dependent-hover-btn">Edit</button>
                    </div>
                  </td>
                  <!-- <td>{{enroll.lname}}</td> -->
                  <td>{{enroll.lname}}</td>
                  <td>{{enroll.nricFinNo}}</td>
                  <td>{{enroll.dob | formatDate}}</td>
                  <td>{{enroll.email}}</td>
                  <td>{{enroll.mNumber}}</td>
                  <td>{{enroll.mCredits}}</td>
                  <td>{{enroll.wCredits}}</td>
                 
                  
                </tr>
              </tbody>
            </table>

            <table class="dependent-table-container" v-show="maxDep !=0">
              <thead>
                <tr>
                  <div v-for="depTh in maxDep" :key="depTh.id">
                    <th>Dependent <span>{{depTh}}</span> First Name</th>
                    <th>Dependent <span>{{depTh}}</span> Last Name</th>
                    <th>Dependent <span>{{depTh}}</span> NRIC/FIN</th>
                    <th>Dependent <span>{{depTh}}</span> Date of Birth</th>
                    <th>Dependent <span>{{depTh}}</span> Relationship</th>
                    <th>Dependent {{depTh}} Start Date</th>
                  </div>
                </tr>
              </thead>
              <tbody>
                <tr v-for="emp in employeeStorage" :key="emp.id">
                  <template v-for="list in emp.dependents[0]">
                    <td> {{list.fname}} </td>
                    <td> {{list.lname}} </td>
                    <td> {{list.nricFinNo}} </td>
                    <td> {{list.dob | formatDate}} </td>
                    <td> {{list.relation}}</td>
                  </template>
                </tr>
              </tbody>
            </table>

            <table class="start-date-container">
              <thead>
                <tr>
                  <th class="start-date-header">Start Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01/02/2019</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- succesfully enroll -->
        <div class="successfully-enrolled-wrapper" v-if="isState == 'successEnroll'">
          <h1>
            We've succesfully enrolled
            <span>1</span> employees and
            <span>0</span> dependents to the selected tier plan
          </h1>
          <div class="successfully-enrolled-img">
            <img :src="'../assets/img/successful.png'">
          </div>
        </div>

        <!-- modal edit -->
        <Modal v-if="modalEdit">
          <div slot="header">
            <h4>Edit Employee Details</h4>
            <img @click="editEmployee('close')" :src="'../assets/img/icons/close.svg'">
          </div>

          <div slot="body">
            <form>
              <div class="modal-input-wrapper">
                <label>First Name</label>
                <input type="text" v-model="employeeDetails.fname">
              </div>
              <div class="modal-input-wrapper">
                <label>Last Name</label>
                <input type="text" v-model="employeeDetails.lname">
              </div>
              <div class="modal-input-wrapper">
                <label>NRIC/FIN</label>
                <input type="text" v-model="employeeDetails.nricFinNo">
              </div>
              <div class="modal-input-wrapper">
                <label>Date of Birth</label>
                <v-date-picker
                  popoverDirection="top"
                  :max-date="new Date()"
                  v-model="employeeDetails.dob"
                  :input-props='{class: "vDatepicker", placeholder: "MM/DD/YYYY", readonly: true, }'
                  popover-visibility="focus"
                ></v-date-picker>
                <!-- <input type="text"  v-model="employeeDetails.dob"> -->
              </div>
              <div class="modal-input-wrapper">
                <label>Work Email</label>
                <input type="text" v-model="employeeDetails.email">
              </div>
              <div class="modal-input-wrapper">
                <label>Mobile</label>
                <input type="text" v-model="employeeDetails.mNumber">
              </div>
              <div class="modal-input-wrapper">
                <label>Mobile Area Code</label>
                <input type="text" v-model="employeeDetails.mAreaCode">
              </div>
              <div class="modal-input-wrapper">
                <label>Medical Credits</label>
                <input type="number" v-model="employeeDetails.mCredits">
              </div>
              <div class="modal-input-wrapper">
                <label>Wellness Credits</label>
                <input type="number" v-model="employeeDetails.wCredits">
              </div>
              <div class="modal-input-wrapper">
                <label>Start Date</label>
                <v-date-picker
                  popoverDirection="top"
                  :date="new Date()"
                  v-model="employeeDetails.startDate"
                  :input-props='{class: "vDatepicker", placeholder: "MM/DD/YYYY", readonly: true, }'
                  popover-visibility="focus"
                ></v-date-picker>
                <!-- <input type="text" v-model="employeeDetails.startDate"> -->
              </div>
            </form>
          </div>
          <div slot="footer">
            <button @click="remove('fromEdit')">REMOVE</button>
            <button @click="update">UPDATE</button>
          </div>
        </Modal>
      </div>

      <div class="prev-next-button-container">
        <div class="button-container">
          <button v-if="isState === 'enrollsum'" @click="back" class="back-btn">Back</button>
          <router-link to="/company/dashboard">
            <button v-if="isState == 'successEnroll'" class="back-btn">BACK TO HOME</button>
          </router-link>
          <button v-if="isChecked.length !=0" class="delete-btn" @click="remove('fromCheck')">Delete</button>

          <div class="btn-enroll-container">
            <div v-if="isState === 'enrollsum'" class="btn-summary-enroll-container">
              <span class="pending-enroll-text">
                <span>7</span> PENDING TO ENROLL
              </span>
              <button class="btn-enroll" @click="enroll('successEnroll')">
                ENROLL
                <span class="enroll-badge">4</span>
              </button>
            </div>
            <div class="btn-successfully-enrolled-container" v-if="isState == 'successEnroll'">
              <button @click="$router.push('enrollment-options')">CONTINUE WITH ENROLLMENT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import enrollSumamary from "@/components/company/enrollment/enroll-summary";

export default enrollSumamary;
</script>