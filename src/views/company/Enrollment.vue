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
        <div class="excel-import-wrapper" v-if="false">

          <div class="download-template-wrapper" v-if="stepperState == 'download'">
            <h1>Download template.</h1>
            <p>We've put together the fields that are needed for enrollements in the excel template file, first row (aka
              header). Please download, complete and submit the excel file on the step 3 (Upload).</p>
            <div class="download-template-btn">
              <button @click=" empBtnType('empOnly')" v-bind:class="{'active': empType === 'empOnly'}" class=""><img
                  :src="'../assets/img/download-gray.png'"> Employees only</button>
              <button @click=" empBtnType('empDependents')" v-bind:class="{'active': empType === 'empDependents'}"
                lass=""><img :src="'../assets/img/download-gray.png'">Employees + Dependents</button>
            </div>
          </div>


          <!-- Employees only-->
          <div class="review-with-dependents" v-if="stepperState === 'empOnly'">
            <h1>Let us help you with the review before upload.</h1>
            <div class="review-tick-container">
              <p class="review-tick-title">Review your file type:</p>
              <label class="review-container">
                <input type="checkbox" value="1" v-model="checkedlistEmpOnly">
                <span class="review-prepare-template-text">Save the file .xlsx or .xls format. </span>
                <span class="review-checkmark"></span>
              </label>
              <p class="review-tick-title">Review the data in your file:</p>
              <label class="review-container">
                <input type="checkbox" value="2" v-model="checkedlistEmpOnly">
                <span class="review-prepare-template-text">Employee's first name and last name are separated.</span>
                <span class="review-prepare-template-subtext">Separate the full name to first name as given name; last
                  name as family name.</span>
                <span class="review-checkmark"></span>
              </label>
              <label class="review-container">
                <input type="checkbox" value="3" v-model="checkedlistEmpOnly">
                <span class="review-prepare-template-text">Input employee's date of birth according to the format
                  (dd/mm/yyyy).</span>
                <span class="review-prepare-template-subtext">Our system will only pick and capture date in the stated
                  format.</span>
                <span class="review-checkmark"></span>
              </label>
              <label class="review-container">
                <input type="checkbox" value="4" v-model="checkedlistEmpOnly">
                <span class="review-prepare-template-text">A valid employee's email address.</span>
                <span class="review-prepare-template-subtext">Login credential will be sent to this email address once
                  account is set up.</span>
                <span class="review-checkmark"></span>
              </label>
              <label class="review-container">
                <input type="checkbox" value="5" v-model="checkedlistEmpOnly">
                <span class="review-prepare-template-text">Input employee's 6 digit postal code</span>
                <span class="review-prepare-template-subtext">It should be the local residential postal code where the
                  employee reside.</span>
                <span class="review-checkmark"></span>
              </label>
            </div>
          </div>


          <!-- Employee + Dependents-->
          <div class="review-with-dependents" v-if="stepperState === 'empDependents'">
            <h1>Let us help you with the review before upload.</h1>
            <div class="review-tick-container">
              <p class="review-tick-title">Review your file type:</p>
              <label class="review-container">
                <input type="checkbox" value="1" v-model="checkedlistEmpDependents">
                <span class="review-prepare-template-text">Save the file .xlsx or .xls format. </span>
                <span class="review-checkmark"></span>
              </label>
              <p class="review-tick-title">Review the data in your file:</p>
              <label class="review-container">
                <input type="checkbox" value="2" v-model="checkedlistEmpDependents">
                <span class="review-prepare-template-text">Employee, dependent/s first name and last name are
                  separated.</span>
                <span class="review-prepare-template-subtext">Separate the full name to first name as given name; last
                  name as family name.</span>
                <span class="review-checkmark"></span>
              </label>
              <label class="review-container">
                <input type="checkbox" value="3" v-model="checkedlistEmpDependents">
                <span class="review-prepare-template-text">Input employee, dependent/s date of birth according to the
                  format (dd/mm/yyyy).</span>
                <span class="review-prepare-template-subtext">Our system will only pick and capture date in the stated
                  format.</span>
                <span class="review-checkmark"></span>
              </label>
              <label class="review-container">
                <input type="checkbox" value="4" v-model="checkedlistEmpDependents">
                <span class="review-prepare-template-text">A valid employee's email address.</span>
                <span class="review-prepare-template-subtext">Login credential will be sent to this email address once
                  account is set up.</span>
                <span class="review-checkmark"></span>
              </label>
              <label class="review-container">
                <input type="checkbox" value="5" v-model="checkedlistEmpDependents">
                <span class="review-prepare-template-text">Input employee's 6 digit postal code</span>
                <span class="review-prepare-template-subtext">It should be the local residential postal code where the
                  employee reside.</span>
                <span class="review-checkmark"></span>
              </label>
              <label class="review-container">
                <input type="checkbox" value="6" v-model="checkedlistEmpDependents">
                <span class="review-prepare-template-text">Under dependent/s relationship column only select from drop
                  down list.</span>
                <span class="review-checkmark"></span>
              </label>
            </div>
          </div>

          <div class="upload-file-wrapper" v-if="stepperState === 'upload'">
            <h1>Upload your file</h1>
            <div class="upload-box">
              <input type="file" id="upload">
              <label class="fileupload-text ng-scope" for="upload">
                <img :src="'../assets/img/Upload-Receipt.png'" class="upload-icon center-block">

                <!-- upload file-->
                <div v-if="true">
                  <span>
                    Drag and drop an Excel file here to upload
                    <br>
                    or
                    <br>
                  </span>
                  <span>Select file</span>
                </div>

                <!-- successfully upload -->
                <div v-if="false">
                  <span>
                    Successfully Uploaded.
                    <br>
                  </span>
                  <span>Change file</span>
                </div>

                <!-- change the file -->
                <div v-if="false">
                  <span>Change file</span>
                </div>

              </label>
            </div>
          </div>

        </div>

        <!-------- WEB INPUT -------->
        <!-- <WebInput v-if="isState === 'web'"></WebInput> -->

        <div v-if="false" class="web-input-wrapper">
          
          <div v-if="isState === 'web' && selected_emp_dep_tab  == 1" class="employee-details-wrapper">
            <div class="employee-tier-title">
              EMPLOYEE
              <span>17</span> OF
              <span>27</span>
            </div>
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
                    <input type="radio" name="id_status" value="nric" v-model="employeeDetails.idType">
                    NRIC
                  </label>
                  <label>
                    <input type="radio" name="id_status" value="fin" v-model="employeeDetails.idType">
                    FIN
                  </label>
                  <input type="text" name="nric-fin" v-model="employeeDetails.nricFinNo">
                </div>
                <div class="employee-input-wrapper dob">
                  <label for="fname">Date of Birth</label>
                  <v-date-picker :max-date='new Date()' v-model="employeeDetails.dob"
                    :input-props='{class: "vDatepicker", placeholder: "MM/DD/YYYY", readonly: true, }'>
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
                  <v-date-picker :date='new Date()' v-model="employeeDetails.startDate"
                    :input-props='{class: "vDatepicker", placeholder: "MM/DD/YYYY", readonly: true, }'>
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
              DEPENDENT
              <span>4</span> OF
              <span>4</span>
            </div>
            <div class="employee-details-header">
              <h1>Dependent details</h1>
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
                  <label>
                    <input type="radio" name="id_status" value="nric"> NRIC
                  </label>
                  <label>
                    <input type="radio" name="id_status" value="fin"> FIN
                  </label>
                  <input type="text" name="nric-fin" v-model="dependentDetails.nricFinNo">
                </div>
                <div class="employee-input-wrapper dob">
                  <label for="">Date of Birth</label>
                  <v-date-picker :max-date='new Date()' v-model="dependentDetails.dob"
                    :input-props='{class: "vDatepicker", placeholder: "MM/DD/YYYY", readonly: true, }'>
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
                  <v-date-picker :max-date='new Date()' v-model="dependentDetails.startDate"
                    :input-props='{class: "vDatepicker", placeholder: "MM/DD/YYYY", readonly: true, }'>
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
                <button class="btn-add" @click="prevNextEmp('add', 1)">ADD</button>
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
                    <span>{{summary.fname}} </span>
                    <span>{{summary.lname}}</span>
                  </div>
                  <div v-if="summary.dependents[0] !=null">
                    <div class="summary-dependent" v-for="(dependent, letter) in summary.dependents[0]"
                      :key="dependent.id">
                      <span>{{ String.fromCharCode('a'.charCodeAt() + letter) }}</span>.
                      <span>{{dependent.fname}}</span>
                      <span>{{dependent.lname}}</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>

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
          <!-- <button v-if="isState === 'web' || isState === 'excel' && stepperState == 'download'"
            @click="back('enrollment')" class="back-btn">Back</button> -->
          <!-- <button v-if="stepperState == 'empOnly' || stepperState == 'empDependents' || stepperState == 'upload'"
            @click="back('download')" class="back-btn">Back</button> -->
          <!-- <button v-if="isState === 'dependent'" :disabled="true" class="back-btn btn-disabled">Back</button> -->
          <!-- <button v-if="isState === 'enrollsum'" @click="$router.go(-1)" class="back-btn">Back</button> -->
          <!-- <button v-if="isState == 'successEnroll'" class="back-btn" @click="$router.push('dashboard')">BACK TO
            HOME</button> -->
          <!-- <button v-if="isChecked.length !=0" class="delete-btn" @click="remove('fromCheck')">Delete</button> -->

          <div class="btn-enroll-container">
            <!-- <button v-if="false" class="btn-employee" >DELETE</button>
            <button v-if="employeeStorage.length != 0 && isState === 'web'" :disabled="prevDisabled"
              class="btn-employee" @click="prevNextEmp('prev', 0)">PREVIOUS EMPLOYEE</button> -->
            <!-- <button v-if="isState === 'web'" class="btn-employee" @click="prevNextEmp('next', 0)">NEXT EMPLOYEE</button> -->
            <!-- <button class="next-btn" v-if="isState === 'enrollment' && isState === 'web'"
              v-on:click="next">Next</button> -->
            <button class="next-btn" v-if="isState === 'enrollment'" @click="next">Next</button>
            <!-- <button class="next-btn" v-if="isState === 'web'" @click="enroll('enrollsum')">Enroll</button> -->
            <!-- <button class="btn-download-template" v-if="isState === 'excel' && stepperState == 'download'">DOWNLOAD
              TEMPLATE</button> -->
            <!-- <button class="next-btn" v-if="isState === 'excel' && stepperState == 'download' "
              @click="excel(empType)">Next</button> -->
            <!-- <button class="next-btn" v-if="stepperState == 'empOnly' || stepperState == 'empDependents'"
              @click="excel('upload')">Next</button> -->
            <!-- <button class="next-btn" v-if="stepperState == 'upload'" @click="excel('enrollsum')">Next</button> -->
           
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