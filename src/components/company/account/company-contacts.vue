<script>
/* eslint-disable */

import Modal from "../../../views/company/modal/Modal";
// Methods here
let accountCompany = {
  components: {
    Modal
  },
  data() {
    return {
      modals: {
        company: {
          business_info: false,
          business_contact: false,
          Billing_contacts: false,
          Billing_address: false
        }
      }
    };
  },
  methods: {
    companyContactsModal(data,id) {
      // company
      let business_info = this.modals.company.business_info;
      let business_contact = this.modals.company.business_contact;
      let Billing_contacts = this.modals.company.Billing_contacts;
      let Billing_address = this.modals.company.Billing_address;

      if( data == 'business_info'){
        this.modals.company.business_info = !business_info;
        console.log("ni gana", this.modals.company.business_info);
      }
      else if( data == 'business_contact'){
        this.modals.company.business_contact = !business_contact;
        console.log("ni gana", this.modals.company.business_contact);
      }
      else if( data == 'Billing_contacts'){
        this.modals.company.Billing_contacts = !Billing_contacts;
        console.log("ni gana", this.modals.company.Billing_contacts);
      }
      else if( data == 'Billing_address'){
        this.modals.company.Billing_address = !Billing_address;
        console.log("ni gana", this.modals.company.Billing_address);
      }
      // end company & contacts
    }
  }
};

export default accountCompany
</script>
