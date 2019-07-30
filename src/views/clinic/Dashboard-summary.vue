<template>
	<div class="dashboard-summary-wrapper">
		<div class="time-frame-container">
			<div class="select-frame-wrapper">
				<div class="activity-date-header">
					<span>Select a timeframe:</span>
					<span class="year-selector">This year</span>
					<span class="year-selector">Last year</span>
					<span class="year-selector">Custom</span>
					<span class="year-selector">Today</span>
				</div>
			</div>
			<div class="values-wrapper">
				<div class="values-container">
					<div class="value-box">
						<h4>486</h4>
						<span>Transactions</span>
					</div>
					<div class="value-box">
						<h4>
							<span>S$</span>
							<span>18,642.93</span>
						</h4>
						<span>Mednefits Wallet</span>
					</div>
				</div>
			</div>
		</div>

		<div class="dash-trans-history-wrapper">
			<div class="dash-trans-history-container">
				<div class="trans-history-header">
					<h4>Transaction History</h4>
				</div>

				<table class="trans-history-tbl">
					<thead>
						<tr>
							<th>DATE</th>
							<th>TRANSACTION ID</th>
							<th>NAME</th>
							<th>NRIC</th>
							<th>SERVICE/S</th>
							<th>MEDNEFITS FEE</th>
							<th>MEDNEFITS CREDIT</th>
							<th>CASH</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<span>25 July 2019, 09:29 am</span>
							</td>
							<td>
								<span>STA001866</span>
							</td>
							<td>
								<span>Dhonald Lite</span>
							</td>
							<td>
								<span>S8788703J</span>
							</td>
							<td>
								<span>Consultation and Sample Service	</span>
							</td>
							<td>
								<span>S$</span>
								<span>13.91</span>
							</td>
							<td>
								<span>S$</span>
								<span>0.20</span>
							</td>
							<td>
								<span>S$</span>
								<span>0.00</span>
							</td>
						</tr>
					</tbody>
				</table>	
			</div>
		</div>
	</div>
</template>

<script>
	import dashboardSummary from '@/components/clinic/dashboard-summary'
	export default dashboardSummary
</script>