<template>
  <div class="list-info-container">
    <div class="plan-transactions">
      <h3>Plan Transactions</h3>
      <table>
        <thead>
          <tr>
            <th>Transaction</th>
            <th>Date Issue</th>
            <th>Type</th>
            <th>Amount</th>
            <th colspan="2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Invoice - OMC000040</td>
            <td>09/01/2019</td>
            <td>Invoice</td>
            <td class="amount-text">S$2,673.00</td>
            <td>Paid</td>
            <td>
              <a class="edit-button-in-table anchor-btn">Download</a>
              <a class="edit-button-in-table anchor-btn">Receipt</a>
            </td>
          </tr>
          <tr>
            <td>Invoice - OMC000010</td>
            <td>17/01/2018</td>
            <td>Invoice</td>
            <td class="amount-text">S$2,871.00</td>
            <td>Not Paid</td>
            <td>
              <a class="edit-button-in-table anchor-btn">Download</a>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="pagination-plan-transactions-container">
        <div class="arrows">
          <i class="fa fa-caret-left"></i>
        </div>
        <div class="page-status">
          <span>15</span> of
          <span>20</span>
        </div>
        <div class="arrows">
          <i class="fa fa-caret-right"></i>
        </div>
      </div>
    </div>

    <div class="benefits-spending-account-container">
      <h3>Benefits Spending Account Transactions</h3>
      <table>
        <thead>
          <tr>
            <th>Transaction</th>
            <th>Date Issue</th>
            <th>Type</th>
            <th>Amount</th>
            <th colspan="2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Invoice - MC00000001</td>
            <td>04/01/2018</td>
            <td>Invoice</td>
            <td class="amount-text">S$3,618.40</td>
            <td>Not Paid</td>
            <td>
              <a class="edit-button-in-table anchor-btn">Download</a>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="pagination-plan-transactions-container">
        <div class="arrows">
          <i class="fa fa-caret-left"></i>
        </div>
        <div class="page-status">
          <span>1</span> of
          <span>20</span>
        </div>
        <div class="arrows">
          <i class="fa fa-caret-right"></i>
        </div>
      </div>
    </div>

    <div class="spending-account-container">
      <h3>Spending Account Deposits</h3>

      <table>
        <thead>
          <tr>
            <th>Transaction</th>
            <th>Date Issue</th>
            <th>Type</th>
            <th>Amount</th>
            <th colspan="2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Invoice - DEP000015</td>
            <td>14/09/2018</td>
            <td>Invoice</td>
            <td class="amount-text">S$1,000.00</td>
            <td>Not Paid</td>
            <td>
              <a class="edit-button-in-table anchor-btn">Download</a>
            </td>
          </tr>
          <tr>
            <td>Invoice - DEP000026</td>
            <td>15/02/2019</td>
            <td>Invoice</td>
            <td class="amount-text">S$0.00</td>
            <td>Not Paid</td>
            <td>
              <a class="edit-button-in-table anchor-btn">Download</a>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="pagination-plan-transactions-container">
        <div class="arrows">
          <i class="fa fa-caret-left"></i>
        </div>
        <div class="page-status">
          <span>1</span> of
          <span>1</span>
        </div>
        <div class="arrows">
          <i class="fa fa-caret-right"></i>
        </div>
      </div>
    </div>

    <div class="refund-container">
      <h3>Refund</h3>
      <table>
        <thead>
          <tr>
            <th>Items</th>
            <th>Date Withdraw</th>
            <th>Amount</th>
            <th colspan="3">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Withdraw -
              <span>1</span> employee
            </td>
            <td>16/01/2018</td>
            <td class="amount-text">S$66.26</td>
            <td>Pending</td>
            <td>
              <a class="edit-button-in-table anchor-btn">Download</a>
            </td>
            <td>
              <button class="edit-button-in-table" @click="companyContactsModal('refund')">View</button>
            </td>
          </tr>
          <tr>
            <td>
              Withdraw -
              <span>1</span> employee
            </td>
            <td>24/01/2018</td>
            <td class="amount-text">S$64.74</td>
            <td>Pending</td>
            <td>
              <a class="edit-button-in-table anchor-btn">Download</a>
            </td>
            <td>
              <button class="edit-button-in-table">View</button>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="pagination-plan-transactions-container">
        <div class="arrows">
          <i class="fa fa-caret-left"></i>
        </div>
        <div class="page-status">
          <span>1</span> of
          <span>1</span>
        </div>
        <div class="arrows">
          <i class="fa fa-caret-right"></i>
        </div>
      </div>
    </div>

    <!-- modals here -->
    <!-- Transactions -->
    <Modal v-if="modals.transactions.refund" class="edit-refund-modal">
      <div slot="header">
        <div class="refund-info-header">
          <h4>Olivia Koh</h4>
          <br>
          <h6>Mednefits</h6>
        </div>
        <img @click="companyContactsModal('refund')" :src="'../assets/img/icons/close.svg'">
      </div>
      <div slot="body">
        <div class="employee-active-text">
          EMPLOYEE
          <span>1</span> OF
          <span>1</span>
        </div>
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
            <label>NRIC/FIN</label>
            <input type="number">
          </div>
          <div class="modal-input-wrapper">
            <label>Work Email</label>
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
            </select>
          </div>
        </form>
      </div>
    </Modal>
    <!-- End Transactions -->
  </div>
</template>

<script>
import Transaction from "@/components/company/account/transaction";

export default Transaction;
</script>

