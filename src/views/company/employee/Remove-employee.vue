<template>
	<div class="overview-info-wrapper">
		
    <!-- remove employee-->
    <div class="remove-employee-wrapper">
      <img @click="$router.go(-1)" :src="'../assets/img/icons/cancel.png'">

      <div v-if="true" class="remove-details-wrapper">
        <h1>Remove employee</h1>
        <form class="form-input-container">
          <div class="employee-input-container">
            <div class="employee-input-wrapper">
              <label class="remove-label" for="fname">First / Given Name</label>
              <input type="text" name="fname">
            </div>
            <div class="employee-input-wrapper">
              <label class="remove-label" for="fname">Last / Family Name</label>
              <input type="text" name="lname">
            </div>
          </div>
          <div class="employee-input-container">
            <div class="employee-input-wrapper remove-dob">
              <label class="remove-label" for="">Date of Birth</label>
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
      <div v-if="false" class="replacement-employee-wrapper">
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

      <!-- Health Spending Account Summary -->
      <div v-if="false" class="account-summary-wrapper">
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

      <!-- Health Spending Account -->
      <div v-if="false" class="health-spending-wrapper">

        <!-- Health Spending Account -->
        <div v-if="false" class="account-summary-wrapper">
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

        <div v-if="false" class="health-spending-account-container">
          <span class="account-summary-name">Serene Song</span>
          <h1>Health Spending Account</h1>
          <p class="members-wallet-text">Do you want us to update the member’s wallet by reflecting the
          pro-rated credits amount and balance?</p>
          <p class="members-wallet-note">(note: by doing so, this member might not be able to pay with credits if the current usage exceeded the pro-rated allocation)
          </p>
          <div class="spending-account-btn-container">
            <button class="active">NO</button>
            <button>YES</button>
          </div>
        </div>
      </div>

      <div class="prev-next-button-container">
        <div class="button-container">
          <button class="back-btn">Back</button>
          <button v-if="true" class="next-btn">Next</button>
          <button v-if="false" class="next-btn confirm-btn">Confirm</button>
        </div>
      </div>
    </div>

	</div>
</template>

<script>
  import removeEmployee from "@/components/company/employee/remove-employee";

  export default removeEmployee;
</script>