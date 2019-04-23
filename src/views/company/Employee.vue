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
    <div class="employee-information-wrapper">
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
                <span>Employee</span>
                <span>Pro Plan</span>
              </div>
               <div>
                <span>Dependents</span>
                <span>Lite Plan</span>
              </div>
            </div>
          </div>
          <div class="medical-spending-account">
            
          </div>
          <div class="wellness-spending-accoung">
            
          </div>
        </div>
        <div class="employee-information">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import employee from "@/components/company/employee";

export default employee;
</script>

