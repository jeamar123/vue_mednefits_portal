<script>
/* eslint-disable */
import ImgPreview from "../../views/company/modal/ImagePreview";
// import Modal from "../../../views/company/modal/Modal.vue";
import { error } from "util";
import axios from "axios";
import moment, { locale } from "moment";

import $ from "jquery";
import { setTimeout } from "timers";
window.$ = $;
// methods here
let activity = {
	components: {
		ImgPreview
	},
	data() {
		return {
			formats: {
				input: ["DD/MM/YYYY"],
				data: ["DD/MM/YYYY"]
			},
			spendingType: {
				value: 0,
				text: 'medical'
			},
			networkType: {
				value: 0,
				text: ""
			},
			toggleSidebar: { in: false,
				out: false
			},
			showPreview: false,
			date: new Date(),
			timeFrame: {
				rangePicker_start: null,
				rangePicker_end: null,
			},

			search: {},
			total_allocation: null,
			fetch_ctr: 0,
			fetching_data: {},

			activity: {},
			activity_dates: [],
			credits: {},
			progressBar: {
				width: '0'
			},
			in_network_transactions: null,
			e_claim_transactions: null,
			currentPage: 1,

		};
	},
	created() {

		this.timeFrame.rangePicker_start = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
		this.timeFrame.rangePicker_end = this.date;

	},
	mounted() {
		let activity_search = {
			start: moment(this.timeFrame.rangePicker_start, 'DD/MM/YYYY').format('YYYY-MM-DD'),
			end: moment(this.timeFrame.rangePicker_end, 'DD/MM/YYYY').format('YYYY-MM-DD'),
		}

		this.getAllocation(activity_search);
		this.dashCredits();
	},
	methods: {
		showPreviewTesting() {
			console.log(this.showPreview);
		},
		spendType(value, text) {
			//spending either medical or wellness
			this.spendingType.value = value;
			this.spendingType.text = text;


			let activity_search = {
				start: moment(this.timeFrame.rangePicker_start, 'DD/MM/YYYY').format('YYYY-MM-DD'),
				end: moment(this.timeFrame.rangePicker_end, 'DD/MM/YYYY').format('YYYY-MM-DD'),
			}

			this.$parent.showLoading();
			this.currentPage = 1;
			if (this.search.user_id) {
				this.searchEmployeeActivity(this.search.user_id);
			} else {
				this.searchActivity(activity_search);
				this.searchActivityPagination();
			}
		},
		netType(value, text) {
			//spending either medical or wellness
			this.networkType.value = value;
			this.networkType.text = text;
			this.toggleSidebar.in = false;
			this.toggleSidebar.out = false;
		},
		toggleShowSidebar(data) {
			// toggle show sidebar content
			if (this.networkType.value === 0) {
				this.toggleSidebar.in = !this.toggleSidebar.in;

			} else if (this.networkType.value === 1) {
				this.toggleSidebar.out = !this.toggleSidebar.out;
			}
		},
		applyDates() {
			let activity_search = {
				start: moment(this.timeFrame.rangePicker_start, 'DD/MM/YYYY').format('YYYY-MM-DD'),
				end: moment(this.timeFrame.rangePicker_end, 'DD/MM/YYYY').format('YYYY-MM-DD'),
			};

			if (this.search.user_id) {
				this.searchEmployeeActivity(this.search.user_id);
			} else {
				// this.searchActivity( activity_search );
				this.getAllocation(activity_search);
				this.searchActivityPagination();
			}
		},

		//api calls
		getAllocation(date) {
			let data = {
				start: date.start,
				end: date.end
			}
			this.$parent.showLoading();
			axios.get(`${axios.defaults.serverUrl}/hr/total_credits_allocation?start=${data.start}&end=${data.end}`)
				.then(res => {
					this.total_allocation = res.data;
					let activity_search = {
						start: moment(this.timeFrame.rangePicker_start, 'DD/MM/YYYY').format('YYYY-MM-DD'),
						end: moment(this.timeFrame.rangePicker_end, 'DD/MM/YYYY').format('YYYY-MM-DD'),
					}

					if (this.search.user_id) {
						console.log('searchEmployeeActivity()');
						this.searchEmployeeActivity(this.search.user_id);
					} else {
						console.log('searchActivity()');
						this.searchActivity(activity_search);
						// this.searchActivityPagination( );
					}
				})
				.catch(err => {
					console.log(err);
					this.$parent.hideLoading();
					this.$parent.swal("Error!", err, "error");
				});
		},
		searchEmployeeActivity(data) {
			console.log('searchEmployeeActivity()', data);
		},
		searchActivity(data) {
			console.log('searchActivity()', data);
			data.page = 1;
			data.spending_type = this.spendingType.text;
			this.fetch_ctr = 1;
			this.fetching_data = {
				from: 0,
				to: 0
			}
			axios.get(`${axios.defaults.serverUrl}/hr/get_activity?page=${data.page}&start=${data.start}&end=${data.end}&spending_type=${data.spending_type}`)
				.then(res => {

					if (res.status == 200) {
						this.activity = {};
						this.activity.total_lite_plan_consultation = 0;

						this.activity = res.data.data;
						console.log('activity data', this.activity);

						this.fetching_data = {
							from: res.data.from,
							to: res.data.total
						}

						if (this.activity.spending_type == "medical") {
							this.activity.total_allocation = this.total_allocation.total_allocation;
						} else {
							this.activity.total_allocation = this.total_allocation.total_wellness_allocation;
						}
						this.in_network_transactions = res.data.data.in_network_transactions;
						this.e_claim_transactions = res.data.data.e_claim_transactions;
						this.activity.total_lite_plan_consultation = res.data.data.total_lite_plan_consultation;

						let spent_progress_percentage;
						if (this.activity.total_spent_format_number > 0) {
							spent_progress_percentage = (this.activity.in_network_spending_format_number / this.activity.total_spent_format_number) * 100;

						} else {
							spent_progress_percentage = 0;
						}
						this.progressBar.width = `${spent_progress_percentage}%`;

						if (res.data.last_page > 0 && this.currentPage != res.data.last_page) {
							this.fetchNextPage(data);
						} else {
							this.fetching_data.from = res.data.total;
						}
					}
				});
		},
		searchActivityPagination() {
			console.log('searchActivityPagination()');
		},
		fetchNextPage(data) {
			console.log('fetchNextPage()', data);

			this.currentPage = this.currentPage + 1;
			data.page = this.currentPage;

			axios.get(`${axios.defaults.serverUrl}/hr/get_activity?page=${data.page}&start=${data.start}&end=${data.end}&spending_type=${data.spending_type}`)
				.then(res => {
					if (res.status == 200) {
						this.fetching_data = {
							from: res.data.from,
							to: res.data.total
						}
						let in_network_transactions = res.data.data.in_network_transactions;

						in_network_transactions.map((value, key) => {
							this.in_network_transactions.push(value);
						});

						let e_claim_transactions = res.data.data.e_claim_transactions;

						e_claim_transactions.map((value, key) => {
							this.e_claim_transactions.push(value);
						});

						this.activity.e_claim_spending_format_number += res.data.data.e_claim_spending_format_number;
						this.activity.in_network_spending_format_number += res.data.data.in_network_spending_format_number;
						this.activity.total_in_network_spent_format_number += res.data.data.total_in_network_spent_format_number;
						this.activity.total_lite_plan_consultation += res.data.data.total_lite_plan_consultation;
						this.activity.total_in_network_transactions += res.data.data.total_in_network_transactions;
						this.activity.total_spent_format_number += res.data.data.total_spent_format_number;

						let spent_progress_percentage;
						if (this.activity.total_spent_format_number > 0) {
							spent_progress_percentage = (this.activity.in_network_spending_format_number / this.activity.total_spent_format_number) * 100;
							this.progressBar.width = `${spent_progress_percentage}%`;
						}

						if (this.currentPage != res.data.last_page) {
							while (this.fetch_ctr < res.data.to) {
								this.fetching_data.from = this.fetch_ctr;
								this.fetch_ctr = this.fetch_ctr + 1;
								if (this.fetch_ctr == res.data.to) {
									this.fetchNextPage(data);
								}
							}
						} else {
							this.fetching_data.from = res.data.total;

							this.$parent.hideLoading();

							// this.togglePointerEvents();
							this.currentPage = 1;
						}
					}
				});


		},
		dashCredits() {
			axios.get(`${axios.defaults.serverUrl}/hr/check_balance`)
				.then(res => {
					console.log(res);
					this.credits = res.data;

				});
		},

	},
	filters: {
		decimalTwo(value) {
			let n = parseFloat(value).toFixed(2)
			return Number(n).toLocaleString('en');
		},
		formatDate(value, format) {
			if (value != 0) {
				return moment(String(value)).format(format);
			} else {
				return "N/A";
			}
		}
	}
};

export default activity;
</script>


<style lang="scss">
@import "./src/assets/css/company/activity.scss";
</style>
