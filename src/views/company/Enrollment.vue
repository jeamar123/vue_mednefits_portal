<template>
  <div>
    <div class="enrollment-wrapper">
      <div class="container">
        <!-- Enrollment -->
        <transition name="fade">
          <div v-if="isState === 'enrollment'" class="enrollment-method-wrapper">
            <h1 class="enrollment-method-title">Pick your preferred enrollment method.</h1>
            <div class="pick-enrollment-method">
              <button
                v-on:click="type('excel')"
                v-bind:class="{'active': isType === 'excel'}"
                class="enrollment-method-box"
              >
                <img :src="'../assets/img/excel.png'">
                <h4>EXCEL IMPORT</h4>
              </button>
              <button
                v-on:click="type('web')"
                v-bind:class="{'active': isType === 'web'}"
                class="enrollment-method-box"
              >
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
        </transition>
        <!-------- WEB INPUT -------->
        <transition name="fade">
          <div class="web-input-wrapper">
            <div v-if="isState === 'web' && true" class="employee-details-wrapper">
              <span class="employee-tier-title">
                EMPLOYEE
                <span>17</span> OF
                <span>27</span>
              </span>
              <div class="employee-details-header">
                <h1>Employee Details</h1>
                <div class="add-dependent-btn">
                  <h4>Add a Dependent?</h4>
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
                    <label>
                      <input type="radio" name="id_status">
                      NRIC
                    </label>
                    <label>
                      <input type="radio" name="id_status">
                      FIN
                    </label>
                    <input type="text" name="nric-fin">
                  </div>
                  <div class="employee-input-wrapper dob">
                    <label for="fname">Date of Birth</label>
                    <input type="text" name="lname" placeholder="DD/MM/YYYY">
                  </div>
                </div>
                <div class="employee-input-container">
                  <div class="employee-input-wrapper">
                    <label for="fname">Work Email</label>
                    <input type="text" name="work-email">
                  </div>
                  <div class="employee-input-wrapper">
                    <label for="fname">Mobile</label>
                    <input type="text" name="mobile">
                  </div>
                </div>
                <div class="employee-input-container">
                  <div class="employee-input-wrapper">
                    <label for="fname">Postal Code</label>
                    <input type="text" name="postal-code">
                  </div>
                  <div class="employee-input-wrapper">
                    <label for="fname">Start Date</label>
                    <input type="text" name="start-date">
                  </div>
                </div>
                <div class="employee-input-container">
                  <div class="employee-input-wrapper">
                    <label for="fname" class="medical-text">Medical Credits</label>
                    <label class="subtext">*If there are no credits to allocate, please key in 0</label>
                    <input type="number" min="0" value="0" name="medical-credits">
                  </div>
                  <div class="employee-input-wrapper">
                    <label for="fname" class="wellness-text">Wellness Credits</label>
                    <label class="subtext">*If there are no credits to allocate, please key in 0</label>
                    <input type="number" min="0" value="0" name="wellness-credits">
                  </div>
                </div>
              </form>
            
            </div>
            <!-- Add dependent section -->
            <div class="dependent-details-wrapper" v-if="dependentState">
              <span class="employee-tier-title">
                DEPENDENT
                <span>4</span> OF
                <span>4</span>
              </span>
              <div class="employee-details-header">
                <h1>Dependent details</h1>
                <button v-if="false" class="btn-remove">
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
                    <input type="text" name="nric-fin">
                  </div>
                  <div class="employee-input-wrapper dob">
                    <label for="fname">Date of Birth</label>
                    <input type="text" name="lname" placeholder="DD/MM/YYYY">
                  </div>
                </div>
                <div class="employee-input-container">
                  <div class="employee-input-wrapper">
                    <label for="fname">Relationship</label>
                    <select>
                      <option>Spouse</option>
                      <option>Child</option>
                      <option>Family</option>
                    </select>
                    <img :src="'../assets/img/icons/down-arrow.svg'">
                  </div>
                  <div class="employee-input-wrapper">
                    <label for="fname">Start Date</label>
                    <input type="text" name="stard-date">
                  </div>
                </div>
              </form>
              <div class="summary-left-right-btn" v-if="false">
                <img :src="'../assets/img/icons/left.png'">
                <img :src="'../assets/img/icons/right.png'">
              </div>
              <div class="dependent-details-btn">
                <button @click="addDependent" class="btn-cancel">CANCEL</button>
                <div class="btn-right-container">
                  <button class="btn-add" @click="addDependentDetails()">ADD</button>
                  <button class="btn-save-continue">SAVE & CONTINUE</button>
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
                      <span>{{summary.fname}} </span> 
                      <span>{{summary.lname}}</span>
                    </div>
                    <div v-if="summary.dependents[0] !=null">
                      <div class="summary-dependent" v-for="(dependent, letter) in summary.dependents[0]" :key="dependent.id">
                        <span>{{ String.fromCharCode('a'.charCodeAt() + letter) }}</span>.
                        <span>{{dependent.fname}} </span>
                        <span>{{dependent.lname}}</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <!-- details enroll summary -->
            <div class="details-enroll-wrapper" v-if="false">
              <h1>Please check the details below before we enroll them.</h1>
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
                  <tr class="dependent-hover-container">
                    <td>
                      <input type="checkbox">
                    </td>
                    <td>
                      <!-- <span class="icon">
                        <i class="fa fa-check" style="display: none;"></i>
                        <i class="fa fa-times" style="display: none;"></i>
                        <i class="fa fa-circle-o-notch fa-spin" style="display: none;"></i>
                      </span> -->
                      <span class="fname">Garth</span>
                      <button class="dependent-hover-btn">Edit</button>
                    </td>
                    <td>Billedo</td>
                    <td>S4687955D</td>
                    <td>21/05/2019</td>
                    <td>garth@gmail.com</td>
                    <td>0912786581</td>
                    <td>1.00</td>
                    <td>1.00</td>
                    <td>03/01/2018</td>
                  </tr>
                </tbody>
              </table>
              <div class="modal-mask" v-if="false">
                <div class="modal-wrapper">
                  <div class="modal-container">

                    <div class="modal-header">
                      <slot name="header">
                        <h4>Edit Employee Details</h4>
                        <img :src="'../assets/img/icons/close.svg'">
                      </slot>
                    </div>

                    <div class="modal-body">
                      <slot name="body">
                        <div class="modal-input-wrapper">
                          <label>First Name</label>
                          <input type="text">
                        </div>
                      </slot>
                    </div>

                    <div class="modal-footer">
                      <slot name="footer">
                        default footer
                        <button class="modal-default-button" @click="$emit('close')">
                          OK
                        </button>
                      </slot>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <div class="prev-next-button-container">
        <div class="button-container">
          <button v-if="isState === 'enrollment'" @click="back('enrollment')" class="back-btn">Back</button>
          <button v-if="isState === 'web' || isState === 'excel'" @click="back('enrollment')" class="back-btn">Back</button>
          <button v-if="isState === 'dependent'" :disabled="true" class="back-btn btn-disabled">Back</button>
          <button v-if="false" class="delete-btn">Delete</button>

          <div class="btn-enroll-container">
            <button v-if="isState === 'false'" class="btn-employee">DELETE</button>
            <button v-if="isState === 'false'" class="btn-employee">PREVIOUS EMPLOYEE</button>
            <button v-if="isState === 'web'" class="btn-employee" @click="getEmployeeDetails">NEXT EMPLOYEE</button>
            <button class="next-btn" v-if="isState === 'enrollment'" v-on:click="next">Next</button>
            <button class="next-btn" v-if="isState === 'web'">Enroll</button>
            <button class="next-btn" v-if="isState === 'excel'" v-on:click="excel">Next</button>
            <button v-if="isState === 'web' && false" class="btn-enroll">ENROLL</button>
            <div v-if="false" class="btn-summary-enroll-container">
              <span class="pending-enroll-text">
                <span>7</span> PENDING TO ENROLL
              </span>
              <button class="btn-enroll">ENROLL<span class="enroll-badge">4</span></button>
            </div>
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

