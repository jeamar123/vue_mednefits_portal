<template>
  <div>
    <div class="employee-overview-container">
      <div class="employee-overview-header">
      	<div class="overview-title">
      		<h1>Employee Overview</h1>
      		<h4>
      			<span>12</span> total members
      		</h4>
      	</div>
      	<div class="overview-menu">
      		<div class="overview-input-wrapper">
      			<input type="text" placeholder="Search for a member">
      			<img class="magnifying-img" :src="'../assets/img/icons/magnifying-glass.png'">
      		</div>
      		<button class="btn-export-members">
      			<img class="download-img" :src="'../assets/img/coverage/Download.png'">
      			Export members details
      		</button>
      		<button class="btn-enroll-employees">
      			Enroll employees
      		</button>
      	</div>
      </div>
      <div class="employee-overview-table">
      	<table>
      		<thead>
      			<tr>
      				<th class="name-title">
      					Name
      					<div class="name-chevron-icon">
      						
      					</div>
      				</th>
      				<th class="status-title">Status</th>
      				<th class="nric-fin-title">NRIC/FIN</th>
      				<th class="plan-details-title">Plan details</th>
      				<th class="family-coverage-title">Family coverage</th>
      				<th class="spending-account-medical-title">
      					Spending account <span>(medical)</span>
      				</th>
      				<th class="spending-account-wellness-title">
      					Spending account <span>(wellness)</span>
      				</th>
      			</tr>
      		</thead>
      		<tbody>
      			<tr>
      				<td class="emp-name-container">
      					<strong>allan cheam alzula</strong>
      				</td>
      				<td class="status-details-container">
      					<div class="status-details">
      						<span class="status-color active"></span>
      						<span>Active</span>
      					</div>
      					<div class="status-expired-details">
      						<span>Removed on 14/03/2019</span>
      					</div>
      				</td>
      				<td class="nric-fin-container">S1349508D</td>
      				<td class="plan-start-container">
      					<span>Tier 1</span>
      					<div class="plan-details">
      						<strong>Plan type:</strong>
      						<span>Pro Plan</span>
      					</div>
      					<div class="plan-details">
      						<strong>Start date:</strong>
      						<span>01/01/2018</span>
      					</div>
      				</td>
      				<td class="family-coverage-container">
      					<div class="family-dependent-details">
      						<strong>Dependent:</strong>
      						<span>0</span>
      					</div>
      				</td>
      				<td class="medical-details-container">
      					<div class="medical-details">
      						<strong>Allocation:</strong>
      						<span>S$ <span>100.00</span></span>
      					</div>
      					<div class="plan-details">
      						<strong>Balance:</strong>
      						<span>S$ <span>100.00</span></span>
      					</div>
      				</td>
      				<td class="wellness-details-container">
      					<div class="wellness-details">
      						<strong>Allocation:</strong>
      						<span>S$ <span>100.00</span></span>
      					</div>
      					<div class="wellness-details">
      						<strong>Balance:</strong>
      						<span>S$ <span>100.00</span></span>
      					</div>
      				</td>
      			</tr>
      		</tbody>
      	</table>
      </div>
      <div class="employee-pagination-wrapper">
      	<div class="employee-pagination">
      		<div class="prev-pagination">
      			<img :src="'../assets/img/icons/right-arrow-angle-blue.svg'">
      			<span>Prev</span>
      		</div>
      		<span class="numeric-pagination active">1</span>
      		<span class="numeric-pagination">2</span>
      		<span class="numeric-pagination">3</span>
      		<span class="numeric-pagination">4</span>
      		<div class="next-pagination">
      			<img :src="'../assets/img/icons/right-arrow-angle-blue.svg'">
      			<span>Next</span>
      		</div>
      		<div class="per-page-pagination">
      			<span>
      				<span>5</span> per page
      			</span>
      			<img :src="'../assets/img/icons/right-arrow-angle-blue.svg'">
      		</div>
      	</div>
      </div>
    </div>

    <div class="employee-overview-wrapper">
      <div class="employee-information-container">
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
              <span>S$ <span>100.00</span></span>
            </div>
            <div class="usage-container-wrapper">
              <div class="usage-container">
                <strong>Usage</strong>
                <span>S$ <span>10.00</span></span>
              </div>
              <img :src="'../assets/img/icons/right.png'">
              <div class="usage-dropdown-details">
                <div class="usage-details">
                  <span>Spent:</span>
                  <span>S$ <span>0.00</span></span>
                </div>
                <div class="usage-details">
                  <span>Pending claim:</span>
                  <span>S$ <span>0.00</span></span>
                </div>
              </div>
            </div>
            <div class="balance-container">
              <strong>Balance</strong>
              <span>S$ <span>100.00</span></span>
            </div>
          </div>
          <div class="wellness-spending-account">
            <h4>
              <strong>Wellness Spending Account</strong>
            </h4>
            <div class="allocation-container">
              <strong>Allocation</strong>
              <span>S$ <span>100.00</span></span>
            </div>
            <div class="usage-container-wrapper">
              <div class="usage-container">
                <strong>Usage</strong>
                <span>S$ <span>0.00</span></span>
              </div>
              <img :src="'../assets/img/icons/right.png'">
              <div class="usage-dropdown-details">
                <div class="usage-details">
                  <span>Spent:</span>
                  <span>S$ <span>0.00</span></span>
                </div>
                <div class="usage-details">
                  <span>Pending claim:</span>
                  <span>S$ <span>0.00</span></span>
                </div>
              </div>
            </div>
            <div class="balance-container">
              <strong>Balance</strong>
              <span>S$ <span>100.00</span></span>
            </div>
          </div>
          <div class="btn-person-info-container">
            <button class="btn-remove-employee">Remove Employee</button>
            <button class="btn-health-spending">Health Spending Account Summary</button>
          </div>
        </div>
        <div class="employee-information-wrapper">
          <div class="employee-info-selection">
            <div class="employee-selection active">Employee</div>
            <div class="employee-selection">Dependent</div>
            <div class="employee-selection">Settings</div>
          </div>
          <div class="employee-information">
            <div class="employee-details-wrapper">
              <h3 class="employee-details-title">Employee Information</h3>
              <div class="dependent-btn-container">
                <button>
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
                <button class="btn-add-seat"><img :src="'../assets/img/icons/add-employee.svg'">Add</button>
              </div>
            </div>
          </div>
          <div class="dependent-information">
            <div class="employee-details-wrapper">
              <h3 class="employee-details-title">Dependent Information</h3>
              <div class="dependent-btn-container">
                <button>
                  <img :src="'../assets/img/icons/dustbin.png'">Remove
                </button>
                <button>
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
          <div class="settings-information">
            <div class="employee-settings-wrapper">
              <button>Resend/Reset Account</button>
            </div>
          </div>
        </div>
      </div>

      <div class="employee-prev-next-button">
        <button class="employee-btn-back">Back to employee overview</button>
        <div class="pull-right">
          <button class="employee-btn-prev disabled">Previous</button>
          <button class="employee-btn-next">Next employee</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import employee from "@/components/company/employee";

export default employee;
</script>

