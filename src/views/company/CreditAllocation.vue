<template>
  <div class="credit-allocation-wrapper">
    <div class="container">
    	<div class="benefits-cred-header">
    		<h3>Benefits Credit Allocation</h3>
    		<h5>Allocate your team's Benefits Credit</h5>
    	</div>
    	<div class="employee-details-search-wrapper">
    		<div class="spending-account-wrapper">
    			<div class="spending-account-container">
    				<span>Medical Spending Account</span>
    				<div>
    					<div class="total-container">
    						<div>Total: <span>S$ 80,000.00</span></div>
    					</div>
    					<div class="alocated-container">
    						<div>Allocated: <span>S$ 5,880.86</span></div>
    					</div>
    				</div>
    			</div>
    			<div class="spending-account-container">
    				<span>Wellness Spending Account</span>
    				<div>
    					<div class="total-container">
    						<div>Total: <span>S$ 0.00</span></div>
    					</div>
    					<div class="alocated-container">
    						<div>Allocated: <span>S$ 3,200.00</span></div>
    					</div>
    				</div>
    			</div>
    		</div>
    		<div class="employee-search-container">
    			<span>1 Employee</span>
    			<div>
    				<input type="text" placeholder="Enter Employee and press enter..">
    				<i class="fa fa-search"></i>
    			</div>	
    		</div>
    	</div>
    	<div class="cred-details-wrapper">
    		<div class="cred-emp-wrapper">
    			<div class="cred-header-container">
    				<span>Filbert Tan</span>	
    			</div>
    			<div class="cred-body-container">
    				<div class="email-address-container">
    					<label>Email Address:</label>
    					<span>filbert@mednefits.com</span>
    				</div>
    				<div class="job-title-container">
    					<label>Job Title:</label>
    					<span>Marketing</span>
    				</div>
    				<div class="credit-allocation-container">
    					<label>Credit Allocation:</label>
    					<div class="credit-allocation-btn-container">
    						<button v-bind:class="{'active' : emp.creditAllocSpendingType == 0}" @click="setSpendType(0)">Medical</button>
    						<button v-bind:class="{'active' : emp.creditAllocSpendingType == 1}" @click="setSpendType(1)">Wellness</button>
    					</div>
    					<div class="allocated-spent-wrapper">
    						<div class="allocated-spent-container">
    							<div>
    								<span>S$116.48</span>
    								<span>Allocated</span>
    							</div>
    							<div>
    								<span>S$81.21</span>
    								<span>Spent</span>
    							</div>
    						</div>
    						<div class="trans-btn-container">
    							<button v-bind:class="{'active' : emp.creditAllocTransactionType == 0}" @click="setTransType(0)" class="btn-add">Add</button>
    							<button v-bind:class="{'active' : emp.creditAllocTransactionType == 1}" @click="setTransType(1)" class="btn-deduct">Deduct</button>
    						</div>
    					</div>
    					<div class="credits-add-input-wrapper">
    						<label>Credits to <span>{{ emp.creditAllocTransactionTypeText }}*</span> </label>
    						<input tpye="number" placeholder="0"> 
    					</div>
    					<div calss="update-btn-container">
    						<button class="btn-update">Update</button>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    	<div class="cred-allocation-pagination-wrapper">
    		<div class="global-pagination">
      		<div class="prev-pagination">
      			<i class="fa fa-angle-left"></i>
      			<!-- <img :src="'../assets/img/icons/right-arrow-angle-blue.svg'"> -->
      			<span>Prev</span>
      		</div>
      		<span class="numeric-pagination active">1</span>
      		<span class="numeric-pagination">2</span>
      		<span class="numeric-pagination">3</span>
      		<span class="numeric-pagination">4</span>
      		<div class="next-pagination">
      			<i class="fa fa-angle-right"></i>
      			<!-- <img :src="'../assets/img/icons/right-arrow-angle-blue.svg'"> -->
      			<span>Next</span>
      		</div>
      		<div class="per-page-pagination">
      			<span>
      				<span>5</span> per page
      			</span>
      			<i class="fa fa-angle-down"></i>
      			<!-- <img :src="'../assets/img/icons/right-arrow-angle-blue.svg'"> -->
            <div v-if="false" class="per-page">
              <ul class="nav">
                <li><a href="">5</a></li>
                <li><a href="">10</a></li>
                <li><a href="">20</a></li>
                <li><a href="">50</a></li>
                <li><a href="">100</a></li>
              </ul>
            </div>
      		</div>
        </div>
    	</div>
    </div>

    <Modal class="credit-allocation-modal" v-if="false">
    	<div slot="header">
    		<h1>Sample Header</h1>
    	</div>
    </Modal>
  </div>
</template>

<script>
import creditAllocation from "@/components/company/creditAllocation";

export default creditAllocation;
</script>