<template>
  <div>
    <div class="enrollment-wrapper">
      <div class="container">
        <!-- Enrollment -->
        <FadeTransition>
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
        </FadeTransition>

         <!-------- EXCEL IMPORT -------->
        
        <div class="excel-import-wrapper" v-if="isState === 'excel'">
          <FadeTransition>
            <div class="download-template-wrapper" v-if="false">
              <h1>Download template.</h1>
              <p>We've put together the fields that are needed for enrollements in the excel template file, first row (aka header). Please download, complete and submit the excel file on the step 3 (Upload).</p>
              <div class="download-template-btn">
                <button class="active"><img :src="'../assets/img/download-gray.png'"> Employees only</button>
                <button class=""><img :src="'../assets/img/download-gray.png'">Employees + Dependents</button>
              </div>
            </div>
            <div class="review-with-dependents" v-if="false">
              <h1>Let us help you with the review before upload.</h1>
              <div class="review-tick-container">
                <p class="review-tick-title">Review your file type:</p>
                <label class="review-container">
                  <input type="checkbox">
                  <span class="review-prepare-template-text">Save the file .xlsx or .xls format. </span>
                  <span class="review-checkmark"></span>
                </label>
                <p class="review-tick-title">Review the data in your file:</p>
                <label class="review-container">
                  <input type="checkbox">
                  <span class="review-prepare-template-text">Employee, dependent/s first name and last name are separated.</span>
                  <span class="review-prepare-template-subtext">Separate the full name to first name as given name; last name as family name.</span>
                  <span class="review-checkmark"></span>
                </label>
                <label class="review-container">
                  <input type="checkbox">
                  <span class="review-prepare-template-text">Input employee, dependent/s date of birth according to the format (dd/mm/yyyy).</span>
                  <span class="review-prepare-template-subtext">Our system will only pick and capture date in the stated format.</span>
                  <span class="review-checkmark"></span>
                </label>
                <label class="review-container">
                  <input type="checkbox">
                  <span class="review-prepare-template-text">A valid employee's email address.</span>
                  <span class="review-prepare-template-subtext">Login credential will be sent to this email address once account is set up.</span>
                  <span class="review-checkmark"></span>
                </label>
                <label class="review-container">
                  <input type="checkbox">
                  <span class="review-prepare-template-text">Input employee's 6 digit postal code</span>
                  <span class="review-prepare-template-subtext">It should be the local residential postal code where the employee reside.</span>
                  <span class="review-checkmark"></span>
                </label>
                <label class="review-container">
                  <input type="checkbox">
                  <span class="review-prepare-template-text">Under dependent/s relationship column only select from drop down list.</span>
                  <span class="review-checkmark"></span>
                </label>
              </div>
            </div>
            <div class="upload-file-wrapper">
              <h1>Upload your file</h1>
              <div class="upload-box">
                <label class="fileupload-text ng-scope">
                  <img :src="'../assets/img/Upload-Receipt.png'" class="upload-icon center-block">
                  <div v-if="false">
                    <span>
                      Drag and drop an Excel file here to upload
                      <br>
                      or
                      <br>
                    </span>
                    <span>Select file</span>
                  </div>
                  <div>
                    <span>
                      Successfully Uploaded.
                      <br>
                    </span>
                    <span>Change file</span>
                  </div>
                </label>
              </div>
            </div>
          </FadeTransition>
        </div>

        <!-------- WEB INPUT -------->
        <div class="web-input-wrapper">
          <FadeTransition>
            <div v-if="isState === 'web'" class="employee-details-wrapper">
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
                    <v-date-picker v-model='date'/>
                    <!-- <input type="text" name="lname" placeholder="DD/MM/YYYY"> -->
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
          </FadeTransition>
          <!-- Add dependent section -->
          <FadeTransition>
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
                    <label for="">Date of Birth</label>
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
                <button @click="cancelDep" class="btn-cancel">CANCEL</button>
                <div class="btn-right-container">
                  <button class="btn-add" @click="addDependentDetails()">ADD</button>
                  <button class="btn-save-continue">SAVE & CONTINUE</button>
                </div>
              </div>
            </div>
          </FadeTransition>
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
                    <div
                      class="summary-dependent"
                      v-for="(dependent, letter) in summary.dependents[0]"
                      :key="dependent.id"
                    >
                      <span>{{ String.fromCharCode('a'.charCodeAt() + letter) }}</span>.
                      <span>{{dependent.fname}}</span>
                      <span>{{dependent.lname}}</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- details enroll summary -->
          <FadeTransition>
            
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
                  <tr class="dependent-hover-container" v-for="enroll in employeeStorage" v-bind:key="enroll.id">
                    <td>
                      <input type="checkbox">
                    </td>
                    <td>
                      <!-- <span class="icon">
                          <i class="fa fa-check" style="display: none;"></i>
                          <i class="fa fa-times" style="display: none;"></i>
                          <i class="fa fa-circle-o-notch fa-spin" style="display: none;"></i>
                      </span>-->
                      <span class="fname">{{enroll.fname}}</span>
                      <button @click="modalTrigger('edit')" class="dependent-hover-btn">Edit</button>
                    </td>
                    <td>{{enroll.lname}}</td>
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
              <!-- modal edit -->
              <ModalTransition>
                <div class="modal-mask" v-if="modalEdit">
                  <div class="modal-wrapper">
                    <div class="modal-container">
                      <div class="modal-header">
                        <slot name="header">
                          <h4>Edit Employee Details</h4>
                          <img @click="modalTrigger('close')" :src="'../assets/img/icons/close.svg'">
                        </slot>
                      </div>

                      <div class="modal-body">
                        <slot name="body">
                          <form>
                            <div class="modal-input-wrapper">
                              <label>First Name</label>
                              <input type="text">
                            </div>
                            <div class="modal-input-wrapper">
                              <label>Last Name</label>
                              <input type="text">
                            </div>
                            <div class="modal-input-wrapper">
                              <label>NRIC/FIN</label>
                              <input type="text">
                            </div>
                            <div class="modal-input-wrapper">
                              <label>Date of Birth</label>
                              <input type="text">
                            </div>
                            <div class="modal-input-wrapper">
                              <label>Work Email</label>
                              <input type="text">
                            </div>
                            <div class="modal-input-wrapper">
                              <label>Mobile</label>
                              <input type="text">
                            </div>
                            <div class="modal-input-wrapper">
                              <label>Mobile Area Code</label>
                              <input type="text">
                            </div>
                            <div class="modal-input-wrapper">
                              <label>Medical Credits</label>
                              <input type="text">
                            </div>
                            <div class="modal-input-wrapper">
                              <label>Wellness Credits</label>
                              <input type="text">
                            </div>
                            <div class="modal-input-wrapper">
                              <label>Start Date</label>
                              <input type="text">
                            </div>
                          </form>
                        </slot>
                      </div>

                      <div class="modal-footer">
                        <slot name="footer">
                          <button>REMOVE</button>
                          <button>UPDATE</button>
                        </slot>
                      </div>
                    </div>
                  </div>
                </div>
              </ModalTransition>
            </div>
          </FadeTransition>
        </div>
      </div>

      <div class="prev-next-button-container">
        <div class="button-container">
          <button v-if="isState === 'enrollment'" @click="$router.go(-1)" class="back-btn">Back</button>
          <button v-if="isState === 'web' || isState === 'excel'"  @click="back('enrollment')" class="back-btn">Back</button>
          <button v-if="isState === 'dependent'" :disabled="true" class="back-btn btn-disabled">Back</button>
          <button v-if="isState === 'enrollsum'" @click="back('web')" class="back-btn">Back</button>
          <button class="back-btn">BACK TO HOME</button>
          <button v-if="false" class="delete-btn">Delete</button>

          <div class="btn-enroll-container">
            <button v-if="isState === 'false'" class="btn-employee">DELETE</button>
            <button v-if="isState === 'false'" class="btn-employee">PREVIOUS EMPLOYEE</button>
            <button v-if="isState === 'web'" class="btn-employee" @click="getEmployeeDetails">NEXT EMPLOYEE</button>
            <button class="next-btn" v-if="isState === 'enrollment'" v-on:click="next">Next</button>
            <button class="next-btn" v-if="isState === 'web'" @click="enroll">Enroll</button>
            <button class="btn-download-template" v-if="isState === 'excel'">DOWNLOAD TEMPLATE</button>
            <button class="next-btn" v-if="isState === 'excel'" v-on:click="excel">Next</button>
            <div v-if="isState === 'enrollsum'" class="btn-summary-enroll-container">
              <span class="pending-enroll-text">
                <span>7</span> PENDING TO ENROLL
              </span>
              <button class="btn-enroll">
                ENROLL
                <span class="enroll-badge">4</span>
              </button>
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

