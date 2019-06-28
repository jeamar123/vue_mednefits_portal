<template>
  <div class="list-info-container company-contacts-container">
    <div class="business-info">
      <h3 class="business-info-title">Business Information</h3>
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
              <button
                class="edit-button-in-table"
                @click="companyContactsModal('business_info')"
              >Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="business-contact">
      <h3>Business Contact</h3>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Address</th>
            <th colspan="2">Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fillbert</td>
            <td>Singapore</td>
            <td>filbert@mednefits.com</td>
            <td>62547889</td>
            <td>
              <button
                class="edit-button-in-table"
                @click="companyContactsModal('business_contact')"
              >Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="billing-contact-address">
      <h3>Billing Contact & Address</h3>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th colspan="2">Email Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fillbert</td>
            <td>Singapore</td>
            <td>filbert@mednefits.com</td>
            <td>
              <button
                class="edit-button-in-table"
                @click="companyContactsModal('Billing_contacts')"
              >Edit</button>
            </td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Billing Address</th>
            <th colspan="2">Payment Method</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mednefits</td>
            <td class="biliing-address-text">
              <span>7 Temasek Boulevard #18-02 Suntec T</span>
            </td>
            <td>Cheque</td>
            <td>
              <button
                class="edit-button-in-table"
                @click="companyContactsModal('Billing_address')"
              >Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- modals here -->
    <!-- Company -->
    <Modal v-if="modals.company.business_info" class="edit-business-info-modal">
      <div slot="header">
        <h4>Edit Business Information</h4>
        <img @click="companyContactsModal('business_info')" :src="'../assets/img/icons/close.svg'">
      </div>
      <div slot="body">
        <form>
          <div class="form-group">
            <label>Company Address</label>
            <textarea></textarea>
          </div>
          <div class="form-group">
            <label>Postal Code</label>
            <textarea></textarea>
          </div>
        </form>
      </div>
      <div slot="footer">
        <button>CANCEL</button>
        <button>UPDATE</button>
      </div>
    </Modal>
    <Modal v-if="modals.company.business_contact">
      <div slot="header">
        <h4>Edit Business Contact</h4>
        <img
          @click="companyContactsModal('business_contact')"
          :src="'../assets/img/icons/close.svg'"
        >
      </div>
      <div slot="body">
        <form>
          <div class="modal-input-wrapper">
            <label>First Name</label>
            <input type="text">
          </div>
          <div class="modal-input-wrapper">
            <label>Last Name</label>
            <input type="text">
          </div>
          <div class="modal-input-wrapper">
            <label>Email Address</label>
            <input type="text">
          </div>
          <div class="modal-input-wrapper">
            <label>Phone</label>
            <input type="number">
          </div>
          <div class="modal-input-wrapper">
            <label>Mobile</label>
            <input type="number">
          </div>
          <div class="modal-input-wrapper">
            <label>Job Title</label>
            <select>
              <option>Marketing</option>
              <option>Accounting, Audit, Finance</option>
              <option>Administration Support</option>
              <option>Arts/Culture/Heritage</option>
              <option>Building and Estate Management</option>
              <option>Corporate Strategy/Top Management</option>
            </select>
          </div>
        </form>
      </div>
      <div slot="footer">
        <button>CANCEL</button>
        <button>UPDATE</button>
      </div>
    </Modal>
    <Modal v-if="modals.company.Billing_contacts">
      <div slot="header">
        <h4>Edit Billing Contact & Address</h4>
        <img
          @click="companyContactsModal('Billing_contacts')"
          :src="'../assets/img/icons/close.svg'"
        >
      </div>
      <div slot="body">
        <form>
          <div class="modal-input-wrapper">
            <label>First Name</label>
            <input type="text">
          </div>
          <div class="modal-input-wrapper">
            <label>Last Name</label>
            <input type="text">
          </div>
          <div class="modal-input-wrapper">
            <label>Email Address</label>
            <input type="text">
          </div>
        </form>
      </div>
      <div slot="footer">
        <button>CANCEL</button>
        <button>UPDATE</button>
      </div>
    </Modal>
    <Modal v-if="modals.company.Billing_address">
      <div slot="header">
        <h4>Edit Billing Contact & Address</h4>
        <img
          @click="companyContactsModal('Billing_address')"
          :src="'../assets/img/icons/close.svg'"
        >
      </div>
      <div slot="body">
        <form>
          <div class="modal-input-wrapper">
            <label>Company Name</label>
            <input type="text">
          </div>
          <div class="modal-input-wrapper">
            <label>Billing Address</label>
            <input type="text">
          </div>
          <div class="modal-input-wrapper">
            <label>Postal Code</label>
            <input type="number">
          </div>
        </form>
      </div>
      <div slot="footer">
        <button>CANCEL</button>
        <button>UPDATE</button>
      </div>
    </Modal>
    <!-- end Company -->
  </div>
</template>

<script>
import AccountCompany from "@/components/company/account/company-contacts";

export default AccountCompany;
</script>

