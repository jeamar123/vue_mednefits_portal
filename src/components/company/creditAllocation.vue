<script>
//Methods here
import Modal from "../../views/company/modal/Modal.vue";

let creditAllocation = {
	components: {
    Modal
  },
  data() {
    return {
    	emp: {
    		creditAllocSpendingType: 0,
	    	creditAllocTransactionType: 0,
	    	creditAllocSpendingTypeText: "",
	    	creditAllocTransactionTypeText: "add",
    	}
    };
  },
  methods: {
  	setSpendType( opt ) {
  		this.emp.creditAllocSpendingType = opt;
  		this.emp.creditAllocSpendingTypeText = opt == 0 ? 'medical' : 'wellness';
  		console.log(this.emp.creditAllocSpendingTypeText);
  	},
  	setTransType ( opt ) {
  		this.emp.creditAllocTransactionType = opt;
  		this.emp.creditAllocTransactionTypeText = opt == 0 ? 'add' : 'deduct';
  		console.log(this.emp.creditAllocTransactionTypeText);
  	}
  }
};

export default creditAllocation
</script>

