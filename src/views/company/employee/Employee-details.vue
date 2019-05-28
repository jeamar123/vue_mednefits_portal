<template>
  <div>
    <div v-if="!showAddDependents && !showRemoveEmployee" class="employee-information-container">
      <div class="person-information">
        <div class="person-image-name-info">
          <img :src="'../assets/img/user-new.png'">
          <h1>Allan Cheam Alzula</h1>
          <div class="status-information">
            <div class="status-active-container">
              <div class="status-label-container">
                <span class="status-label">Status</span>
              </div>
              <div class="status-text-container">
                <span class="status-text active">Active</span>
              </div>
            </div>
          </div>
        </div>
        <div class="plan-information">
          <h4>
            <strong>Plan Information</strong>
          </h4>
          <div class="employee-plan">
            <strong>
              <span>Plan</span>
            </strong>
            <div>
              <span>Employee</span> -
              <span>Pro Plan</span>
            </div>
            <div>
              <span>Dependents</span> -
              <span>Lite Plan</span>
            </div>
          </div>
          <div class="employee-plan-cover">
            <strong>Plan Covers</strong>
            <span>
              <span>4</span> People
            </span>
          </div>
          <div class="employee-info-start-date">
            <strong>Start Date</strong>
            <span>01/01/2018</span>
          </div>
          <div class="employee-info-end-date">
            <strong>End Date</strong>
            <span>01/01/2020</span>
          </div>
        </div>
        <div class="medical-spending-account">
          <h4>
            <strong>Medical Spending Account</strong>
          </h4>
          <div class="allocation-container">
            <strong>Allocation</strong>
            <span>
              S$
              <span>100.00</span>
            </span>
          </div>
          <div class="usage-container-wrapper">
            <div @click="toggleMedicalUsage()" class="usage-container">
              <strong>Usage</strong>
              <span>
                S$
                <span>10.00</span>
              </span>
            </div>
            <img v-if="!isMedicalUsageShow" @click="toggleMedicalUsage()" :src="'../assets/img/arrow-right.png'">
            <img v-if="isMedicalUsageShow" @click="toggleMedicalUsage()" :src="'../assets/img/arrow-down.png'">
            <div v-if="isMedicalUsageShow" class="usage-dropdown-details">
              <div class="usage-details">
                <span>Spent:</span>
                <span>
                  S$
                  <span>0.00</span>
                </span>
              </div>
              <div class="usage-details">
                <span>Pending claim:</span>
                <span>
                  S$
                  <span>0.00</span>
                </span>
              </div>
            </div>
          </div>
          <div class="balance-container">
            <strong>Balance</strong>
            <span>
              S$
              <span>100.00</span>
            </span>
          </div>
        </div>
        <div class="wellness-spending-account">
          <h4>
            <strong>Wellness Spending Account</strong>
          </h4>
          <div class="allocation-container">
            <strong>Allocation</strong>
            <span>
              S$
              <span>100.00</span>
            </span>
          </div>
          <div class="usage-container-wrapper">
            <div @click="toggleWellnessUsage()" class="usage-container">
              <strong>Usage</strong>
              <span>
                S$
                <span>0.00</span>
              </span>
            </div>
            <img v-if="!isWellnessUsageShow" @click="toggleWellnessUsage()" :src="'../assets/img/arrow-right.png'">
            <img v-if="isWellnessUsageShow" @click="toggleWellnessUsage()" :src="'../assets/img/arrow-down.png'">
            <div v-if="isWellnessUsageShow" class="usage-dropdown-details">
              <div class="usage-details">
                <span>Spent:</span>
                <span>
                  S$
                  <span>0.00</span>
                </span>
              </div>
              <div class="usage-details">
                <span>Pending claim:</span>
                <span>
                  S$
                  <span>0.00</span>
                </span>
              </div>
            </div>
          </div>
          <div class="balance-container">
            <strong>Balance</strong>
            <span>
              S$
              <span>100.00</span>
            </span>
          </div>
        </div>
        <div class="btn-person-info-container">
          <button @click="removeEmployee( 'showRemove' )" v-if="true" class="btn-remove-employee">Remove
            Employee</button>
          <button @click="viewEmployeeSpendingSummary( )" v-if="false" class="btn-health-spending">Health Spending
            Account Summary</button>
        </div>
      </div>
      <div class="employee-information-wrapper">
        <div class="employee-info-selection">
          <div v-bind:class="{'active' : toggle_overiew_type == 1}" v-on:click="toggleTabOverview(1)"
            class="employee-selection">Employee</div>
          <div v-bind:class="{'active' : toggle_overiew_type == 2}" v-on:click="toggleTabOverview(2)"
            class="employee-selection">Dependent</div>
          <div v-bind:class="{'active' : toggle_overiew_type == 3}" v-on:click="toggleTabOverview(3)"
            class="employee-selection">Settings</div>
        </div>

        <transition name="fade">
          <div class="employee-information" v-if="toggle_overiew_type == 1">
            <div class="employee-details-wrapper">
              <h3 class="employee-details-title">Employee Information</h3>
              <div class="dependent-btn-container">
                <button @click="modalEdit.employee = true">
                  <img :src="'../assets/img/icons/edit.png'">Edit
                </button>
              </div>
              <div class="employee-info-details">
                <div class="col-1-employee-information-details">
                  <div>
                    <strong>First Name</strong>
                    <span>unique</span>
                  </div>
                  <div>
                    <strong>Last Name</strong>
                    <span>nina</span>
                  </div>
                  <div>
                    <strong>NRIC/FIN</strong>
                    <span>S7506591D</span>
                  </div>
                  <div>
                    <strong>Member ID</strong>
                    <span>000003</span>
                  </div>
                  <div>
                    <strong>Date of Birth</strong>
                    <span>08/08/1993</span>
                  </div>
                </div>
                <div class="col-2-employee-information-details">
                  <div>
                    <strong>Work Email</strong>
                    <span>allan.alzula@gmail.com</span>
                  </div>
                  <div>
                    <strong>Mobile Number</strong>
                    <span>63906431792</span>
                  </div>
                  <div>
                    <strong>Postal Code</strong>
                    <span>9000</span>
                  </div>
                  <div>
                    <strong>Job Title</strong>
                    <span>Building and Estate Management</span>
                  </div>
                  <div>
                    <strong>Bank Account Number</strong>
                    <span>Building and Estate Management</span>
                  </div>
                </div>
              </div>
              <div class="employee-btn-add-seat-wrapper">
                <h3>Add a Dependent?</h3>
                <button @click="toggleAddDependents( 'add' )" class="btn-add-seat">
                  <img :src="'../assets/img/icons/add-employee.svg'">Add
                </button>
              </div>
            </div>
          </div>
        </transition>

        <transition name="fade">
          <div class="dependent-information" v-if="toggle_overiew_type == 2">
            <h3 class="employee-details-title">Dependent Information</h3>
            <div class="employee-details-wrapper">
              <div class="dependent-btn-container">
                <button>
                  <img :src="'../assets/img/icons/dustbin.png'">Remove
                </button>
                <button @click="modalEdit.dependent = true">
                  <img :src="'../assets/img/icons/edit.png'">Edit
                </button>
              </div>
              <div class="employee-info-details">
                <div class="col-1-employee-information-details">
                  <div>
                    <strong>First Name</strong>
                    <span>unique</span>
                  </div>
                  <div>
                    <strong>Last Name</strong>
                    <span>nina</span>
                  </div>
                  <div>
                    <strong>NRIC/FIN</strong>
                    <span>S7506591D</span>
                  </div>
                </div>
                <div class="col-2-employee-information-details">
                  <div>
                    <strong>Date of Birth</strong>
                    <span>06/03/1996</span>
                  </div>
                  <div>
                    <strong>Relationship</strong>
                    <span>family</span>
                  </div>
                  <div>
                    <strong>Member ID</strong>
                    <span>000308</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </transition>

        <transition name="fade">
          <div class="settings-information" v-if="toggle_overiew_type == 3">
            <div class="employee-settings-wrapper">
              <button @click="reset()">
                <img :src="'../assets/img/open-wrench-tool.png'">Resend/Reset Account
              </button>
            </div>
          </div>
        </transition>

        <div v-if="healthSpendingAccountTabIsShow" class="account-summary-wrapper">
          <span class="account-summary-name">Serene Song</span>
          <h1>Health Spending Account Summary</h1>
          <div class="credits-summary-container">
            <div class="account-summary-pro-rated">
              Pro-rated allocation from
              <span>
                <strong>Start</strong> -
                <span class="account-summary-date">01/01/2019</span>
              </span> to
              <span>
                <strong>End</strong> -
                <span class="account-summary-date">08/04/2019</span>
              </span>
            </div>
            <div class="account-summary-usage">
              Usage from
              <span>
                <strong>Start</strong> -
                <span class="account-summary-date">01/01/2019</span>
              </span> to
              <span>
                <strong>Current</strong> -
                <span class="account-summary-date">19/03/2019</span>
              </span>
            </div>
          </div>
          <div class="medical-wellness-wrapper">
            <div class="medical-container">
              <h4>Medical Spending Account</h4>
              <div class="spending-account-details">
                <div class="bills-spending-container">
                  <strong>Initial Allocation</strong>
                  <div>
                    S$
                    <span>0.00</span>
                  </div>
                </div>
                <div class="bills-spending-container pro-rated">
                  <strong>Pro-rated Allocation</strong>
                  <div>
                    S$
                    <span>0.00</span>
                  </div>
                </div>
                <div class="bills-spending-container current-usage">
                  <strong>Current Usage</strong>
                  <div>
                    S$
                    <span>0.00</span>
                  </div>
                </div>
                <div class="current-usage-details">
                  <div class="bills-spending-container">
                    <span>Spent</span>
                    <div>
                      S$
                      <span>0.00</span>
                    </div>
                  </div>
                  <div class="bills-spending-container">
                    Pending claim
                    <div>
                      S$
                      <span>0.00</span>
                    </div>
                  </div>
                </div>
                <div class="bills-spending-container balance">
                  <strong>Balance</strong>
                  <div>
                    S$
                    <span>0.00</span>
                  </div>
                </div>
              </div>
              <div class="spending-account-status on-track">On Track</div>
            </div>
            <div class="separator"></div>
            <div class="wellness-container">
              <h4 class="font-helvetica-medium">Wellness Spending Account</h4>
              <div class="spending-account-details">
                <div class="bills-spending-container">
                  <strong>Initial Allocation</strong>
                  <div>
                    S$
                    <span>0.00</span>
                  </div>
                </div>
                <div class="bills-spending-container pro-rated">
                  <strong>Pro-rated Allocation</strong>
                  <div>
                    S$
                    <span>0.00</span>
                  </div>
                </div>
                <div class="bills-spending-container current-usage">
                  <strong>Current Usage</strong>
                  <div>
                    S$
                    <span>0.00</span>
                  </div>
                </div>
                <div class="current-usage-details">
                  <div class="bills-spending-container">
                    <span>Spent</span>
                    <div>
                      S$
                      <span>0.00</span>
                    </div>
                  </div>
                  <div class="bills-spending-container">
                    <span>Pending claim</span>
                    <div>
                      S$
                      <span>0.00</span>
                    </div>
                  </div>
                </div>
                <div class="bills-spending-container balance">
                  <strong>Balance</strong>
                  <div>
                    S$
                    <span>0.00</span>
                  </div>
                </div>
              </div>
              <div class="spending-account-status exceed">Exceed</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- add dependents -->
    <div class="add-dependent-wrapper" v-if="showAddDependents">
      <div class="dependent-details">
        <div class="employee-name">Filbert Tan</div>
        <div class="employee-details-header">
          <h1>Add a dependent</h1>
        </div>
        <div class="employee-tier-title">
          DEPENDENT
          <span>4</span> OF
          <span>4</span>
        </div>
        <form class="form-input-container">
          <div class="employee-input-container">
            <div class="employee-input-wrapper">
              <label for="fname">First / Given Name</label>
              <input type="text" name="fname">
            </div>
            <div class="employee-input-wrapper">
              <label for="fname">Last / Family Name</label>
              <input type="text" name="lname">
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
              <input type="text" name="nric-fin">
            </div>
            <div class="employee-input-wrapper dob">
              <label for>Date of Birth</label>
              <v-date-picker :max-date="new Date()"
                :input-props='{class: "vDatepicker", placeholder: "MM/DD/YYYY", readonly: true, }'></v-date-picker>
            </div>
          </div>
          <div class="employee-input-container">
            <div class="employee-input-wrapper">
              <label for="fname">Relationship</label>
              <select>
                <option value="Spouse">Spouse</option>
                <option value="Child">Child</option>
                <option value="Family">Family</option>
              </select>
              <img :src="'../assets/img/icons/down-arrow.svg'">
            </div>
            <div class="employee-input-wrapper">
              <label for="fname">Start Date</label>
              <v-date-picker :max-date="new Date()"
                :input-props='{class: "vDatepicker", placeholder: "MM/DD/YYYY", readonly: true, }'></v-date-picker>
            </div>
          </div>
        </form>
        <div class="summary-left-right-btn" v-if="false">
          <img class="summary-left-btn" :src="'../assets/img/icons/left.png'">
          <img class="summary-right-btn" :src="'../assets/img/icons/right.png'">
        </div>
        <div class="dependent-details-btn">
          <button @click="toggleAddDependents( 'cancel' )" class="btn-cancel">CANCEL</button>
          <div class="btn-right-container">
            <button class="btn-add">ADD</button>
            <button class="btn-save-continue">SAVE & CONTINUE</button>
          </div>
        </div>
      </div>
    </div>

    <!-- remove employee-->
    <div class="remove-employee-wrapper" v-if="showRemoveEmployee">
      <img @click="removeEmployee( 'cancel' )" :src="'../assets/img/icons/cancel.png'">

      <div v-if="false" class="remove-container">
        <h1>Remove employee</h1>
        <form class="form-input-container">
          <div class="employee-input-container">
            <div class="employee-input-wrapper">
              <label for="fname">First / Given Name</label>
              <input type="text" name="fname">
            </div>
            <div class="employee-input-wrapper">
              <label for="fname">Last / Family Name</label>
              <input type="text" name="lname">
            </div>
          </div>
          <div class="employee-input-container">
            <div class="employee-input-wrapper remove-dob">
              <label for="">Date of Birth</label>
              <v-date-picker
                  :max-date='new Date()'
                  :input-props='{class: "vDatepicker", placeholder: "MM/DD/YYYY", readonly: true, }'
              >
              </v-date-picker>
            </div>
          </div>
        </form>
      </div>

      <div v-if="false" class="employee-outcome-wrapper">
        <h1>How would you like to proceed?</h1>
        <div class="employee-outcome-container">
          <div class="outcome-title">Please select one of the outcome:</div>
          <label class="review-container">
            <input type="checkbox">
            <span class="review-prepare-template-text">To replace the leaving employee, I would like to pre-enroll the new joiner. </span>
            <span class="review-checkmark"></span>
          </label>
          <label class="review-container">
            <input type="checkbox">
            <span class="review-prepare-template-text">I'm not ready to pre-enroll the new joiner, please hold the seat for future hire. </span>
            <span class="review-prepare-template-subtext">*Note: Once this employee is removed, the occupied seat will move to a vacant seat.</span>
            <span class="review-checkmark"></span>
          </label>
          <label class="review-container">
            <input type="checkbox">
            <span class="review-prepare-template-text">Please remove the seat completely, and proceed for refund.</span>
            <span class="review-checkmark"></span>
          </label>
        </div>
      </div>

      <!-- Replacement Employee Details-->
      <div v-if="true" class="replacement-employee-wrapper">
        <div class="employee-details-wrapper">
          <div class="employee-tier-title">Replacement</div>
          <div class="employee-details-header">
            <h1>Employee Details</h1>
          </div>
          <form>
            <div class="employee-input-container">
              <div class="employee-input-wrapper">
                <label for="fname">First / Given Name</label>
                <input type="text" name="fname"></div>
              <div class="employee-input-wrapper">
                <label for="fname">Last / Family Name</label>
                <input type="text" name="lname"></div>
            </div>
            <div class="employee-input-container">
              <div class="employee-input-wrapper nric">
                <label>
                  <input type="radio" name="id_status" value="nric">
                NRIC
                </label>
                <label>
                  <input type="radio" name="id_status" value="fin">
                FIN
                </label>
                <input type="text" name="nric-fin">
              </div>
              <div class="employee-input-wrapper dob">
                <label>Date of Birth</label>
                <v-date-picker
                    popoverDirection="top"
                    :max-date='new Date()'
                    :input-props='{class: "vDatepicker", placeholder: "MM/DD/YYYY", readonly: true, }'
                >
                </v-date-picker>
              </div>
            </div>
            <div class="employee-input-container">
              <div class="employee-input-wrapper">
                <label for="fname">Work Email</label>
                <input type="email" name="work-email">
              </div>
              <div class="employee-input-wrapper">
                <label for="fname">Mobile</label>
                <input type="number" name="mobile">
              </div>
            </div>
            <div class="employee-input-container">
              <div class="employee-input-wrapper">
                <label for="fname">Postal Code</label>
                <input type="text" name="postal-code">
              </div>
              <div class="employee-input-wrapper">
                <label>Start Date</label>
                <v-date-picker
                    popoverDirection="top"
                    :date='new Date()'
                    :input-props='{class: "vDatepicker", placeholder: "MM/DD/YYYY", readonly: true, }'
                >
                </v-date-picker>
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
      </div>

      <!-- Health Spending Account Summary -->
      <div v-if="false" class="">
        
      </div>

      <div class="prev-next-button-container">
        <div class="button-container">
          <button class="back-btn">Back</button>
          <button class="next-btn">Next</button>
        </div>
      </div>
    </div>

    <div class="global-modal-wrapper">
      <!-- modal edit for employee -->
      <Modal v-if="modalEdit.employee">
        <div slot="header">
          <span>allan cheam alzula</span>
          <img @click="modalEdit.employee = false" :src="'../assets/img/icons/close-blue.svg'">
          <h1>Edit employee details</h1>
        </div>
        <div slot="body">
          <form>
            <div class="employee-input-container">
              <div class="employee-input-wrapper">
                <label for="fname">First Name</label>
                <input type="text" name="fname">
              </div>
              <div class="employee-input-wrapper">
                <label for="work-email">Work Email</label>
                <input type="text" name="work-email">
              </div>
            </div>
            <div class="employee-input-container">
              <div class="employee-input-wrapper">
                <label for="lname">Last Name</label>
                <input type="text" name="lname">
              </div>
              <div class="employee-input-wrapper">
                <label for="number">Mobile Number</label>
                <input type="number" name="number">
              </div>
            </div>
            <div class="employee-input-container">
              <div class="employee-input-wrapper">
                <label>NRIC</label>
                <input type="text" name="nric-fin">
              </div>
              <div class="employee-input-wrapper">
                <label for="postal-code">Postal Code</label>
                <input type="number" name="postal-code">
              </div>
            </div>
            <div class="employee-input-container">
              <div class="employee-input-wrapper">
                <label>Member ID</label>
                <input type="number" name="member-id">
              </div>
              <div class="employee-input-wrapper">
                <label for="postal-code">Postal Code</label>
                <select>
                  <option>Building and Estate Management</option>
                  <option>Education</option>
                  <option>Engineering</option>
                </select>
                <img :src="'../assets/img/icons/down-arrow.svg'">
              </div>
            </div>
            <div class="employee-input-container">
              <div class="employee-input-wrapper dob">
                <label for="fname">Date of Birth</label>
                <v-date-picker :max-date="new Date()"
                  :input-props='{class: "vDatepicker", placeholder: "MM/DD/YYYY", readonly: true, }'></v-date-picker>
              </div>
              <div class="employee-input-wrapper">
                <label>Bank Account Number</label>
                <input type="number" name="bank-account-number">
              </div>
            </div>
          </form>
        </div>
        <div slot="footer">
          <button>CANCEL</button>
          <button>SAVE & CONTINUE</button>
        </div>
      </Modal>

      <!-- modal edit  for dependent-->
      <Modal v-if="modalEdit.dependent">
        <div slot="header">
          <img @click="modalEdit.dependent = false" :src="'../assets/img/icons/close-blue.svg'">
          <h1>Edit dependent details</h1>
        </div>
        <div slot="body">
          <form>
            <div class="employee-input-container">
              <div class="employee-input-wrapper">
                <label for="fname">First Name</label>
                <input type="text" name="fname">
              </div>
              <div class="employee-input-wrapper dob">
                <label for="fname">Date of Birth</label>
                <v-date-picker :max-date="new Date()"
                  :input-props='{class: "vDatepicker", placeholder: "MM/DD/YYYY", readonly: true, }'>
                </v-date-picker>
              </div>
            </div>
            <div class="employee-input-container">
              <div class="employee-input-wrapper">
                <label for="lname">Last Name</label>
                <input type="text" name="lname">
              </div>
              <div class="employee-input-wrapper">
                <label for="postal-code">Relationship</label>
                <select>
                  <option>Spouse</option>
                  <option>Child</option>
                  <option>Family</option>
                  <option>Parent</option>
                </select>
                <img :src="'../assets/img/icons/down-arrow.svg'">
              </div>
            </div>
            <div class="employee-input-container">
              <div class="employee-input-wrapper">
                <label>Member ID</label>
                <input type="number" name="member-id">
              </div>
              <div class="employee-input-wrapper">
                <label>NRIC/FIN</label>
                <input type="number" name="member-id">
              </div>
            </div>
          </form>
        </div>
        <div slot="footer">
          <button>CANCEL</button>
          <button>SAVE & CONTINUE</button>
        </div>
      </Modal>
    </div>

  </div>
</template>

<script>
  import employeeDetails from "@/components/company/employee/employee-details";

  export default employeeDetails;
</script>