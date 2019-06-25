<template>
  <div class="account-wrapper">
  	<div class="container">

  		<div class="account-billing-header">
  			<h3>Account & Billing</h3>
  		</div>

  		<div class="account-billing-info-wrapper">
  			<div class="account-biling-link-list">
  				<ul>
						<li v-bind:class="{'active': showBillingListInfo.value === 0}">
							<a @click="accountBillingList(0, 'company-contacts')" >Company &amp; Contacts</a>
						</li>
						<li v-bind:class="{'active': showBillingListInfo.value === 1}">
							<a @click="accountBillingList(1, 'transactions')" >Transactions</a>
						</li>
						<li v-bind:class="{'active': showBillingListInfo.value === 2}">
							<a @click="accountBillingList(2, 'document-center')" >Document Center</a>
						</li>
						<li v-bind:class="{'active': showBillingListInfo.value === 3}">
							<a @click="accountBillingList(3, 'account-payment')" >Account &amp; Payment</a>
						</li>
						<li v-bind:class="{'active': showBillingListInfo.value === 4}">
							<a @click="accountBillingList(4, 'benefits-tier')" >Team Benefits Tier</a>
						</li>
					</ul>
  			</div>

  			<div class="info-container">
  				<div v-if="showBillingListInfo.value === 0" class="list-info-container company-contacts-container">
  					<div class="business-info">
  						<h3>Business Information</h3>
  						<table>
  							<tbody>
  								<tr>
  									<td colspan="2">
  										<h4>Company Name</h4>
  										<span>Mednefits</span>
  									</td>
  								</tr>

  								<tr>
  									<td>
  										<h4>Company Address</h4>
  										<h6>7 Temasek Boulevard #18-02 Suntec T</h6>
  									</td>

  									<td class="edit-container">
  										<button class="edit-button-in-table">Edit</button>
  									</td>
  								</tr>
  							</tbody>
  						</table>
  					</div>	
  				</div>
  				<div v-if="showBillingListInfo.value === 1" class="list-info-container transactions-container">
  					<h3>Plan Transactions</h3>
  				</div>
  				<div v-if="showBillingListInfo.value === 2" class="list-info-container document-center-container">
  					<h3>Document Center</h3>
  				</div>
  				<div v-if="showBillingListInfo.value === 3" class="list-info-container account-payment-container">
  					<h3>Plan Subscription</h3>
  				</div>
  				<div v-if="showBillingListInfo.value === 4" class="list-info-container benefits-tier-container">
  					<h1>Team benefits tiers.</h1>
  				</div>
  			</div>
  		</div>

  	</div>
  </div>
</template>

<script>
import account from "@/components/company/account";

export default account;
</script>

