<template>
  <div>
  	<div class="enrollment-wrapper">
  		<div class="container">
  			<div class="enrollment-method-wrapper">
  				<h1 class="enrollment-method-title">Pick your preferred enrollment method.</h1>
  				<div class="pick-enrollment-method">
  					<button class="enrollment-method-box">
              <img :src="'../assets/img/excel.png'">
              <h4>EXCEL IMPORT</h4>     
            </button>
            <button class="enrollment-method-box active">
              <img :src="'../assets/img/web-input.png'">
              <h4>WEB INPUT</h4>
            </button>
  				</div>
          <div class="pick-enrollment-text">
            <div class="enrollment-method-box-text">
              <p class="below-text download-below-text">Upload employee details in a<br>excel file using the template<br>provided by us in the next step</p>
            </div>
            <div class="enrollment-method-box-text">
              <p class="below-text download-below-text">Input employee details<br>using our web enrollment form.</p>
            </div>
          </div>
  			</div>
        <!-------- WEB INPUT -------->
        <div class="employee-details-wrapper">
          <span class="employee-tier-title">EMPLOYEE 
            <span>17</span> OF <span>27</span>
          </span>
          <div class="employee-details-header">
            <h1>Employee Details</h1>
            <div class="add-dependent-btn">
              <h4>Add a Dependent?</h4>
              <button> <img :src="'../assets/img/icons/add-employee.svg'"> Add</button>
            </div>
          </div>
          <form>
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
           <div class="summary-right-container">
            <button class="summary-right-button">SUMMARY</button>
            <div class="list-of-employee list-employee-active">
              <h4>Employee Summary</h4>
            </div>
          </div>
        </div>
  		</div>

      <div class="prev-next-button-container">
        <div class="button-container">
          <button>Back</button>
          <button>Next</button>
        </div>
      </div>
  	</div>

  </div>
</template>

<script>
import enrollment from "@/components/company/enrollment";

export default enrollment;
</script>

