<template>
  <transition name="fade">
    <div class="enrollment-wrapper">
      <div class="employee-dependent-header" v-if="isState === 'web' && empDepNavState">
        <span v-bind:class="{'active' : selected_emp_dep_tab  == 1}" @click="selectEmpDepTab(1)">Employee</span>
        <span v-bind:class="{'active' : selected_emp_dep_tab  == 2}" @click="selectEmpDepTab(2)">Dependent</span>
      </div>
      <div class="container">
        <div class="web-input-wrapper">
          <div v-if="isState === 'web' && selected_emp_dep_tab  == 1" class="employee-details-wrapper">
            <div class="employee-tier-title">
              {{ isTiering ? 'TIER ' + (activeTier.index + 1) + ' :' : ''}}
              EMPLOYEE
              <span v-if="isTiering">{{ tierEmployeeCountIndex }} OF {{ activeTier.member_head_count + 1 }}</span>
              <span v-if="!isTiering">{{ employeeCountIndex }} OF {{ enrollment_progress.total_employees }}</span>
            </div>

            <div class="employee-details-header">
              <h1>Employee Details</h1>
              <div class="add-dependent-btn">
                <h4 class="add-dependent-title-header">Add a Dependent?</h4>
                <button @click="addDependent">
                  <img :src="'../assets/img/icons/add-employee.svg'"> Add
                </button>
              </div>
            </div>
            <form>
              <div class="employee-input-container">
                <div class="employee-input-wrapper">
                  <label for="fname">First / Given Name</label>
                  <input type="text" name="fname" v-model="employeeDetails.fname">
                </div>
                <div class="employee-input-wrapper">
                  <label for="fname">Last / Family Name</label>
                  <input type="text" name="lname" v-model="employeeDetails.lname">
                </div>
              </div>
              <div class="employee-input-container">
                <div class="employee-input-wrapper nric">
                  <label for="nric-fin">NRIC/FIN</label>
                  <input type="text" name="nric-fin" v-model="employeeDetails.nricFinNo">
                </div>
                <div class="employee-input-wrapper dob">
                  <label for="fname">Date of Birth</label>
                  <v-date-picker v-model="employeeDetails.dob"
                    :input-props='{class: "vDatepicker", placeholder: "MM/DD/YYYY", readonly: true}'
                    popover-visibility='focus'>
                  </v-date-picker>
                </div>
              </div>
              <div class="employee-input-container">
                <div class="employee-input-wrapper">
                  <label for="fname">Work Email</label>
                  <input type="email" name="work-email" v-model="employeeDetails.email">
                </div>
                <div class="employee-input-wrapper">
                  <label for="fname">Mobile</label>
                  <input type="number" name="mobile" v-model="employeeDetails.mNumber">
                </div>
              </div>
              <div class="employee-input-container">
                <div class="employee-input-wrapper">
                  <label for="fname">Postal Code</label>
                  <input type="text" name="postal-code" v-model="employeeDetails.postal">
                </div>
                <div class="employee-input-wrapper">
                  <label for="fname">Start Date</label>
                  <v-date-picker v-model="employeeDetails.startDate"
                    :input-props='{class: "vDatepicker", placeholder: "MM/DD/YYYY", readonly: true, }'
                    popover-visibility='focus' popover-direction='top'>
                  </v-date-picker>
                </div>
              </div>
              <div class="employee-input-container">
                <div class="employee-input-wrapper">
                  <label for="fname" class="medical-text">Medical Credits</label>
                  <label class="subtext">*If there are no credits to allocate, please key in 0</label>
                  <input type="number" min="0" value="0" name="medical-credits" v-model="employeeDetails.mCredits">
                </div>
                <div class="employee-input-wrapper">
                  <label for="fname" class="wellness-text">Wellness Credits</label>
                  <label class="subtext">*If there are no credits to allocate, please key in 0</label>
                  <input type="number" min="0" value="0" name="wellness-credits" v-model="employeeDetails.wCredits">
                </div>
              </div>
            </form>
          </div>

          <!-- View dependent sercion-->
          <div class="dependent-details-wrapper" v-if="selected_emp_dep_tab  == 2">
            <div class="employee-tier-title">
              DEPENDENT
              <span>4</span> OF
              <span>4</span>
            </div>
            <div class="employee-details-header">
              <h1>Dependent details</h1>
              <button class="btn-remove">
                <img :src="'../assets/img/icons/dustbin.png'">Remove
              </button>
            </div>
            <form class="form-input-container">
              <div class="employee-input-container">
                <div class="employee-input-wrapper">
                  <label for="fname">First / Given Name</label>
                  <input type="text" name="fname" v-model="dependentDetails.fname">
                </div>
                <div class="employee-input-wrapper">
                  <label for="fname">Last / Family Name</label>
                  <input type="text" name="lname" v-model="dependentDetails.lname">
                </div>
              </div>
              <div class="employee-input-container">
                <div class="employee-input-wrapper nric">
                  <label>NRIC</label>
                  <label>FIN</label>
                  <input type="text" name="nric-fin" v-model="dependentDetails.nricFinNo">
                </div>
                <div class="employee-input-wrapper dob">
                  <label for="">Date of Birth</label>
                  <input type="text" name="lname" placeholder="DD/MM/YYYY" v-model="dependentDetails.dob">
                </div>
              </div>
              <div class="employee-input-container">
                <div class="employee-input-wrapper">
                  <label for="fname">Relationship</label>
                  <select v-model="dependentDetails.relation">
                    <option value="Spouse">Spouse</option>
                    <option value="Child">Child</option>
                    <option value="Family">Family</option>
                  </select>
                  <img :src="'../assets/img/icons/down-arrow.svg'">
                </div>
                <div class="employee-input-wrapper">
                  <label for="fname">Start Date</label>
                  <input type="text" name="stard-date" v-model="dependentDetails.startDate">
                </div>
              </div>
            </form>
            <div class="summary-left-right-btn" v-if="true">
              <img v-show="depPrevChevronState && dependentStorage.length === 0" class="summary-left-btn"
                @click="prevNextEmp('prev', 2)" :src="'../assets/img/icons/left.png'">
              <img v-show="depPrevChevronState && dependentStorage.length != 0" class="summary-left-btn"
                @click="prevNextEmp('prev', 1)" :src="'../assets/img/icons/left.png'">
              <img v-show="depNextChevronState && dependentStorage.length === 0" class="summary-right-btn"
                @click="prevNextEmp('next', 2)" :src="'../assets/img/icons/right.png'">
              <img v-show="depNextChevronState && dependentStorage.length != 0" class="summary-right-btn"
                @click="prevNextEmp('next', 1)" :src="'../assets/img/icons/right.png'">
            </div>
          </div>

          <!-- Add dependent section -->
          <div class="dependent-details-wrapper" v-if="dependentState ">
            <div class="employee-tier-title">
              {{ isTiering ? 'TIER ' + (activeTier.index + 1) + ' :' : ''}}
              DEPENDENT
              <span v-if="isTiering">{{ tierDependentCountIndex }} OF {{ activeTier.dependent_head_count }}</span>
              <span v-if="!isTiering">{{ dependentCountIndex }} OF {{ dependent_progress.total_number_of_seats }}</span>
            </div>
            <div class="employee-details-header">
              <h1>Dependent details</h1>
            </div>
            <form ref="formDep" class="form-input-container">
              <div class="employee-input-container">
                <div class="employee-input-wrapper">
                  <label for="fname">First / Given Name</label>
                  <input type="text" name="fname" v-model="dependentDetails.fname">
                </div>
                <div class="employee-input-wrapper">
                  <label for="fname">Last / Family Name</label>
                  <input type="text" name="lname" v-model="dependentDetails.lname">
                </div>
              </div>
              <div class="employee-input-container">
                <div class="employee-input-wrapper nric">
                  <label>NRIC/FIN</label>
                  <input type="text" name="nric-fin" v-model="dependentDetails.nricFinNo">
                </div>
                <div class="employee-input-wrapper dob">
                  <label for="">Date of Birth</label>
                  <v-date-picker v-model="dependentDetails.dob"
                    :input-props='{class: "vDatepicker", placeholder: "MM/DD/YYYY", readonly: true, }'
                    popover-visibility='focus'>
                  </v-date-picker>
                  <!-- <input type="text" name="lname" placeholder="DD/MM/YYYY"> -->
                </div>
              </div>
              <div class="employee-input-container">
                <div class="employee-input-wrapper">
                  <label for="fname">Relationship</label>
                  <select v-model="dependentDetails.relation">
                    <option value="Spouse">Spouse</option>
                    <option value="Child">Child</option>
                    <option value="Family">Family</option>
                  </select>
                  <img :src="'../assets/img/icons/down-arrow.svg'">
                </div>
                <div class="employee-input-wrapper">
                  <label for="fname">Start Date</label>
                  <v-date-picker v-model="dependentDetails.startDate"
                    :input-props='{class: "vDatepicker", placeholder: "MM/DD/YYYY", readonly: false}'
                    popover-visibility='focus'>
                  </v-date-picker>
                  <!-- <input type="text" name="stard-date"> -->
                </div>
              </div>
            </form>
            <div class="summary-left-right-btn" v-if="dependentStorage.length !=0">
              <img v-show="depPrevChevronState" class="summary-left-btn" @click="prevNextEmp('prev', 1)"
                :src="'../assets/img/icons/left.png'">
              <img v-show="depNextChevronState" class="summary-right-btn" @click="prevNextEmp('next', 1)"
                :src="'../assets/img/icons/right.png'">
            </div>
            <div class="dependent-details-btn">
              <button @click="cancelDep" class="btn-cancel">CANCEL</button>
              <div class="btn-right-container">
                <button v-show="( tierDependentCountIndex < activeTier.dependent_head_count ) || ( dependentCountIndex == dependent_progress.total_number_of_seats )" class="btn-add" @click="prevNextEmp('add', 1)">ADD</button>
                <button class="btn-save-continue" @click="addDependentStorage('save')">SAVE & CONTINUE</button>
              </div>
            </div>
          </div>

          <!-- side content summary -->
          <div v-if="isState === 'web' || isState === 'dependent'" class="summary-right-container">
            <button id="summary-btn" class="summary-right-button" @click="toggleSummary">SUMMARY</button>
            <div id="summary-content" class="list-of-employee list-employee-active">
              <h4>Employee Summary</h4>
              <ul class="list-of-employee-details">
                <li v-for="(summary,index) in employeeStorage" v-bind:key="summary.id">
                  <div>
                    <span>{{index + 1}}</span>.
                    <span>{{summary.first_name}} </span>
                    <span>{{summary.last_name}}</span>
                  </div>
                  <div v-if="summary.dependents[0] !=null">
                    <div class="summary-dependent" v-for="(dependent, letter) in summary.dependents[0]"
                      :key="dependent.id">
                      <span>{{ String.fromCharCode('a'.charCodeAt() + letter) }}</span>.
                      <span>{{dependent.first_name}}</span>
                      <span>{{dependent.last_name}}</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="prev-next-button-container">
        <div class="button-container">
          <button v-if="isState === 'web'" @click="$router.go(-1)" class="btn-back-web back-btn">
            <span class="text">Back</span>
          </button>
          <button v-if="isState === 'dependent'" :disabled="true" class="back-btn btn-disabled"><span>Back</span></button>

          <div class="btn-enroll-container">
            <button v-if="false" class="btn-employee">DELETE</button>
            <button v-if="employeeStorage.length != 0 && isState === 'web'" :disabled="prevDisabled"
              class="btn-prev-emp btn-employee" @click="prevNextEmp('prev', 0)">
              <span class="text">PREVIOUS <span class="text-employee">EMPLOYEE</span></span>
            </button>
            <button v-if="isState === 'web'" class="btn-next-emp btn-employee" :disabled="( tierEmployeeCountIndex == activeTier.member_head_count + 1 ) || ( employeeCountIndex == enrollment_progress.total_employees )" @click="prevNextEmp('next', 0)">
              <span class="text">NEXT <span class="text-employee">EMPLOYEE</span></span>
            </button>
            <button class="btn-enroll-web next-btn" v-if="isState === 'web'" @click="enroll('enrollsum')">Enroll</button>
          </div>
        </div>
      </div>
    </div>

  </transition>
</template>

<script>
  import webInput from "@/components/company/enrollment/web-input";

  export default webInput;
</script>