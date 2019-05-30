<template>
  <div>
    <div class="enrollment-wrapper">
      <div class="container">

        <!-- Enrollment -->
        <div v-if="isState === 'enrollment'" class="enrollment-method-wrapper">
          <h1 class="enrollment-method-title">Pick your preferred enrollment method.</h1>
          <div class="pick-enrollment-method">
            <button v-on:click="type('excel')" v-bind:class="{'active': isType === 'excel'}"
              class="enrollment-method-box">
              <img :src="'../assets/img/excel.png'">
              <h4>EXCEL IMPORT</h4>
            </button>
            <button v-on:click="type('web')" v-bind:class="{'active': isType === 'web'}" class="enrollment-method-box">
              <img :src="'../assets/img/web-input.png'">
              <h4>WEB INPUT</h4>
            </button>
          </div>
          <div class="pick-enrollment-text">
            <div class="enrollment-method-box-text">
              <p class="below-text download-below-text">
                Upload employee details in a
                <br>excel file using the template
                <br>provided by us in the next step
              </p>
            </div>
            <div class="enrollment-method-box-text">
              <p class="below-text download-below-text">
                Input employee details
                <br>using our web enrollment form.
              </p>
            </div>
          </div>
        </div>


        <!-------- EXCEL IMPORT -------->
        <!-- isState === 'excel' -->

        <!-------- WEB INPUT -------->
        <!-- for shared components -->
        <!-- details enroll summary -->
        <div class="details-enroll-wrapper" v-if="isState === 'enrollsum'">
          <h1>Please check the details below before we enroll them.</h1>
          <!-- table summary -->
          <table>
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
                <th>Start Date</th>
              </tr>
            </thead>
            <tbody>
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
                    <span class="fname">{{enroll.fname}}</span>
                    <button @click="editEmployee('edit', index)" class="dependent-hover-btn">Edit</button>
                  </div>
                </td>
                <td>{{enroll.lname}}</td>
                <td>{{enroll.nricFinNo}}</td>
                <td>{{enroll.dob | formatDate}}</td>
                <td>{{enroll.email}}</td>
                <td>{{enroll.mNumber}}</td>
                <td>{{enroll.mCredits}}</td>
                <td>{{enroll.wCredits}}</td>
                <td>{{enroll.startDate | formatDate}}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- succesfully enroll -->
        <div class="successfully-enrolled-wrapper" v-if="isState == 'successEnroll'">
          <h1>We've succesfully enrolled
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
                <v-date-picker popoverDirection="top" :max-date='new Date()' v-model="employeeDetails.dob"
                  :input-props='{class: "vDatepicker", placeholder: "MM/DD/YYYY", readonly: true, }'>
                </v-date-picker>
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
                <v-date-picker popoverDirection="top" :date='new Date()' v-model="employeeDetails.startDate"
                  :input-props='{class: "vDatepicker", placeholder: "MM/DD/YYYY", readonly: true, }'>
                </v-date-picker>
                <!-- <input type="text" v-model="employeeDetails.startDate"> -->
              </div>
            </form>
          </div>
          <div slot="footer">
            <button @click="remove('fromEdit')">REMOVE</button>
            <button @click="update">UPDATE</button>
          </div>
        </Modal>
        <!-- for shared components  -->

      </div> 
      <!-- end container div -->

      <div class="prev-next-button-container">
        <div class="button-container">
          <button v-if="isState === 'enrollment'" @click="$router.go(-1)" class="back-btn">Back</button>
          <!-- <button v-if="isState === 'enrollsum'" @click="$router.go(-1)" class="back-btn">Back</button> -->
          <!-- <button v-if="isState == 'successEnroll'" class="back-btn" @click="$router.push('dashboard')">BACK TO
            HOME</button> -->
          <!-- <button v-if="isChecked.length !=0" class="delete-btn" @click="remove('fromCheck')">Delete</button> -->

          <div class="btn-enroll-container">
            <button class="next-btn" v-if="isState === 'enrollment'" @click="next">Next</button>
            <!-- <div v-if="isState === 'enrollsum'" class="btn-summary-enroll-container">
              <span class="pending-enroll-text">
                <span>7</span> PENDING TO ENROLL
              </span>
              <button class="btn-enroll" @click="enroll('successEnroll')">
                ENROLL
                <span class="enroll-badge">4</span>
              </button>
            </div> -->
            <!-- <div class="btn-successfully-enrolled-container" v-if="isState == 'successEnroll'">
              <button @click="$router.push('enrollment-options')">CONTINUE WITH ENROLLMENT</button>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import enrollment from "@/components/company/enrollment";

  export default enrollment;
</script>