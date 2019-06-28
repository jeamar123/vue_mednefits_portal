<template>
  <div class="list-info-container company-contacts-container">
    <h3>Plan Subscription</h3>
    <table>
      <tbody>
        <tr>
          <td>
            <h5>Plan</h5>
            <span>Mednefits Care (Corporate)</span>
          </td>
          <td>
            <h5>Start Date</h5>
            <span>04 August 2018</span>
          </td>
          <td>
            <h5>End Date</h5>
            <span>02 August 2019</span>
          </td>
          <td>
            <h5>Days to Expiry</h5>
            <span>39</span>
          </td>
          <td>
            <h5>Employees</h5>
            <span>68</span>
          </td>
          <td>
            <h5>Dependents</h5>
            <span>9</span>
          </td>
        </tr>
      </tbody>
    </table>

    <table>
      <thead>
        <tr>
          <th>Account</th>
          <th></th>
        </tr>
      </thead>
      <tbody class="account-and-payment-table-tbody">
        <tr>
          <td>Update Password</td>
          <td class="account-payment-btn-container">
            <button class="edit-button-in-table" @click="companyContactsModal('password')">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>

    <h3 class="current-active-title">Current Active Plans:</h3>

    <div class="active-plan-container">
      <div class="active-plan-text-container">
        <label>
          Active Plan #
          <span>1</span>
        </label>
      </div>
      <div class="active-plan-text-container">
        <label>
          Active Plan ID #
          <span>44</span>
        </label>
      </div>
      <div class="active-plan-wrapper">
        <div class="account-title">
          <span>Employee Account</span>
        </div>
        <div class="account-container">
          <label>Plan Type:</label>
          <span>Insurance Bundle</span>
        </div>
        <div class="account-container">
          <label>Start Date:</label>
          <span>04 August 2018</span>
        </div>
        <div class="account-container">
          <label>Plan Duration:</label>
          <span>12 months</span>
        </div>
        <div class="account-container">
          <label>Total Seats:</label>
          <span>51</span>
        </div>
        <div class="account-container">
          <label>Occupied Seats:</label>
          <span>51</span>
        </div>
        <div class="account-container">
          <label>Vacant Seats:</label>
          <span>0</span>
        </div>
        <div class="account-container">
          <label>Plan Amount:</label>
          <span>
            S$
            <span>5,049.00</span>
          </span>
        </div>
        <div class="account-container">
          <label>Payment Status:</label>
          <span>PAID</span>
        </div>
      </div>

      <div class="active-plan-wrapper dependent-account-list-container">
        <div class="account-title">
          <span>Dependent Account</span>
        </div>
        <div>
          <div class="account-container">
            <label>Plan Account Type:</label>
            <span>Lite Plan</span>
          </div>
          <div class="account-container">
            <label>Start Date:</label>
            <span>2019-02-28</span>
          </div>
          <div class="account-container">
            <label>Total Seats:</label>
            <span>8</span>
          </div>
          <div class="account-container">
            <label>Occupied Seats:</label>
            <span>7</span>
          </div>
          <div class="account-container">
            <label>Vacant Seats:</label>
            <span>1</span>
          </div>
          <div class="account-container">
            <label>Plan Amount:</label>
            <span>
              S$
              <span>40.00</span>
            </span>
          </div>
          <div class="account-container">
            <label>Payment Status:</label>
            <span>PENDING</span>
          </div>
        </div>
        <div>
          <div class="account-container">
            <label>Plan Account Type:</label>
            <span>Lite Plan</span>
          </div>
          <div class="account-container">
            <label>Start Date:</label>
            <span>2019-03-05</span>
          </div>
          <div class="account-container">
            <label>Total Seats:</label>
            <span>10</span>
          </div>
          <div class="account-container">
            <label>Occupied Seats:</label>
            <span>0</span>
          </div>
          <div class="account-container">
            <label>Vacant Seats:</label>
            <span>10</span>
          </div>
          <div class="account-container">
            <label>Plan Amount:</label>
            <span>
              S$
              <span>0.00</span>
            </span>
          </div>
          <div class="account-container">
            <label>Payment Status:</label>
            <span>PAID</span>
          </div>
        </div>
        <div>
          <div class="account-container">
            <label>Plan Account Type:</label>
            <span>Lite Plan</span>
          </div>
          <div class="account-container">
            <label>Start Date:</label>
            <span>2019-03-05</span>
          </div>
          <div class="account-container">
            <label>Total Seats:</label>
            <span>10</span>
          </div>
          <div class="account-container">
            <label>Occupied Seats:</label>
            <span>0</span>
          </div>
          <div class="account-container">
            <label>Vacant Seats:</label>
            <span>10</span>
          </div>
          <div class="account-container">
            <label>Plan Amount:</label>
            <span>
              S$
              <span>0.00</span>
            </span>
          </div>
          <div class="account-container">
            <label>Payment Status:</label>
            <span>PAID</span>
          </div>
        </div>
      </div>

      <div class="medical-wellness-account-container">
        <div class="active-plan-wrapper">
          <div class="account-title">
            <span>Medical Spending Account:</span>
          </div>
          <div class="account-container">
            <label>Total:</label>
            <span>
              S$
              <span>10,000.00</span>
            </span>
          </div>
          <div class="account-container">
            <label>Unallocated:</label>
            <span>
              S$
              <span>0.00</span>
            </span>
          </div>
        </div>

        <div class="active-plan-wrapper">
          <div class="account-title">
            <span>Wellness Spending Account:</span>
          </div>
          <div class="account-container">
            <label>Total:</label>
            <span>
              S$
              <span>20,000.00</span>
            </span>
          </div>
          <div class="account-container">
            <label>Unallocated:</label>
            <span>
              S$
              <span>0.00</span>
            </span>
          </div>
        </div>
      </div>

      <div class="btn-view-plan-container">
        <button class="btn-view-plan" @click="companyContactsModal('active_plans')">View Plan</button>
      </div>
    </div>

    <div class="active-plan-container">
      <div class="active-plan-text-container">
        <label>
          Active Plan #
          <span>1</span>
        </label>
      </div>
      <div class="active-plan-text-container">
        <label>
          Active Plan ID #
          <span>44</span>
        </label>
      </div>
      <div class="active-plan-wrapper">
        <div class="account-title">
          <span>Employee Account</span>
        </div>
        <div class="account-container">
          <label>Plan Type:</label>
          <span>Insurance Bundle</span>
        </div>
        <div class="account-container">
          <label>Start Date:</label>
          <span>04 August 2018</span>
        </div>
        <div class="account-container">
          <label>Plan Duration:</label>
          <span>12 months</span>
        </div>
        <div class="account-container">
          <label>Total Seats:</label>
          <span>51</span>
        </div>
        <div class="account-container">
          <label>Occupied Seats:</label>
          <span>51</span>
        </div>
        <div class="account-container">
          <label>Vacant Seats:</label>
          <span>0</span>
        </div>
        <div class="account-container">
          <label>Plan Amount:</label>
          <span>
            S$
            <span>5,049.00</span>
          </span>
        </div>
        <div class="account-container">
          <label>Payment Status:</label>
          <span>PAID</span>
        </div>
      </div>

      <div class="active-plan-wrapper">
        <div class="account-title">
          <span>Dependent Account</span>
        </div>
        <div class="account-container">
          <label>Plan Account Type:</label>
          <span>Lite Plan</span>
        </div>
        <div class="account-container">
          <label>Start Date:</label>
          <span>2019-02-28</span>
        </div>
        <div class="account-container">
          <label>Total Seats:</label>
          <span>8</span>
        </div>
        <div class="account-container">
          <label>Occupied Seats:</label>
          <span>7</span>
        </div>
        <div class="account-container">
          <label>Vacant Seats:</label>
          <span>1</span>
        </div>
        <div class="account-container">
          <label>Plan Amount:</label>
          <span>
            S$
            <span>40.00</span>
          </span>
        </div>
        <div class="account-container">
          <label>Payment Status:</label>
          <span>PENDING</span>
        </div>
      </div>

      <div class="medical-wellness-account-container">
        <div class="active-plan-wrapper">
          <div class="account-title">
            <span>Medical Spending Account:</span>
          </div>
          <div class="account-container">
            <label>Total:</label>
            <span>
              S$
              <span>10,000.00</span>
            </span>
          </div>
          <div class="account-container">
            <label>Unallocated:</label>
            <span>
              S$
              <span>0.00</span>
            </span>
          </div>
        </div>

        <div class="active-plan-wrapper">
          <div class="account-title">
            <span>Wellness Spending Account:</span>
          </div>
          <div class="account-container">
            <label>Total:</label>
            <span>
              S$
              <span>20,000.00</span>
            </span>
          </div>
          <div class="account-container">
            <label>Unallocated:</label>
            <span>
              S$
              <span>0.00</span>
            </span>
          </div>
        </div>
      </div>

      <div class="btn-view-plan-container">
        <button class="btn-view-plan">View Plan</button>
      </div>
    </div>

    <div class="active-plan-container">
      <div class="active-plan-text-container">
        <label>
          Active Plan #
          <span>1</span>
        </label>
      </div>
      <div class="active-plan-text-container">
        <label>
          Active Plan ID #
          <span>44</span>
        </label>
      </div>
      <div class="active-plan-wrapper">
        <div class="account-title">
          <span>Employee Account</span>
        </div>
        <div class="account-container">
          <label>Plan Type:</label>
          <span>Insurance Bundle</span>
        </div>
        <div class="account-container">
          <label>Start Date:</label>
          <span>04 August 2018</span>
        </div>
        <div class="account-container">
          <label>Plan Duration:</label>
          <span>12 months</span>
        </div>
        <div class="account-container">
          <label>Total Seats:</label>
          <span>51</span>
        </div>
        <div class="account-container">
          <label>Occupied Seats:</label>
          <span>51</span>
        </div>
        <div class="account-container">
          <label>Vacant Seats:</label>
          <span>0</span>
        </div>
        <div class="account-container">
          <label>Plan Amount:</label>
          <span>
            S$
            <span>5,049.00</span>
          </span>
        </div>
        <div class="account-container">
          <label>Payment Status:</label>
          <span>PAID</span>
        </div>
      </div>

      <div class="active-plan-wrapper">
        <div class="account-title">
          <span>Dependent Account</span>
        </div>
        <div class="account-container">
          <label>Plan Account Type:</label>
          <span>Lite Plan</span>
        </div>
        <div class="account-container">
          <label>Start Date:</label>
          <span>2019-02-28</span>
        </div>
        <div class="account-container">
          <label>Total Seats:</label>
          <span>8</span>
        </div>
        <div class="account-container">
          <label>Occupied Seats:</label>
          <span>7</span>
        </div>
        <div class="account-container">
          <label>Vacant Seats:</label>
          <span>1</span>
        </div>
        <div class="account-container">
          <label>Plan Amount:</label>
          <span>
            S$
            <span>40.00</span>
          </span>
        </div>
        <div class="account-container">
          <label>Payment Status:</label>
          <span>PENDING</span>
        </div>
      </div>

      <div class="medical-wellness-account-container">
        <div class="active-plan-wrapper">
          <div class="account-title">
            <span>Medical Spending Account:</span>
          </div>
          <div class="account-container">
            <label>Total:</label>
            <span>
              S$
              <span>10,000.00</span>
            </span>
          </div>
          <div class="account-container">
            <label>Unallocated:</label>
            <span>
              S$
              <span>0.00</span>
            </span>
          </div>
        </div>

        <div class="active-plan-wrapper">
          <div class="account-title">
            <span>Wellness Spending Account:</span>
          </div>
          <div class="account-container">
            <label>Total:</label>
            <span>
              S$
              <span>20,000.00</span>
            </span>
          </div>
          <div class="account-container">
            <label>Unallocated:</label>
            <span>
              S$
              <span>0.00</span>
            </span>
          </div>
        </div>
      </div>

      <div class="btn-view-plan-container">
        <button class="btn-view-plan">View Plan</button>
      </div>
    </div>

    <div class="active-plan-container">
      <div class="active-plan-text-container">
        <label>
          Active Plan #
          <span>1</span>
        </label>
      </div>
      <div class="active-plan-text-container">
        <label>
          Active Plan ID #
          <span>44</span>
        </label>
      </div>
      <div class="active-plan-wrapper">
        <div class="account-title">
          <span>Employee Account</span>
        </div>
        <div class="account-container">
          <label>Plan Type:</label>
          <span>Insurance Bundle</span>
        </div>
        <div class="account-container">
          <label>Start Date:</label>
          <span>04 August 2018</span>
        </div>
        <div class="account-container">
          <label>Plan Duration:</label>
          <span>12 months</span>
        </div>
        <div class="account-container">
          <label>Total Seats:</label>
          <span>51</span>
        </div>
        <div class="account-container">
          <label>Occupied Seats:</label>
          <span>51</span>
        </div>
        <div class="account-container">
          <label>Vacant Seats:</label>
          <span>0</span>
        </div>
        <div class="account-container">
          <label>Plan Amount:</label>
          <span>
            S$
            <span>5,049.00</span>
          </span>
        </div>
        <div class="account-container">
          <label>Payment Status:</label>
          <span>PAID</span>
        </div>
      </div>

      <div class="active-plan-wrapper">
        <div class="account-title">
          <span>Dependent Account</span>
        </div>
        <div class="account-container">
          <label>Plan Account Type:</label>
          <span>Lite Plan</span>
        </div>
        <div class="account-container">
          <label>Start Date:</label>
          <span>2019-02-28</span>
        </div>
        <div class="account-container">
          <label>Total Seats:</label>
          <span>8</span>
        </div>
        <div class="account-container">
          <label>Occupied Seats:</label>
          <span>7</span>
        </div>
        <div class="account-container">
          <label>Vacant Seats:</label>
          <span>1</span>
        </div>
        <div class="account-container">
          <label>Plan Amount:</label>
          <span>
            S$
            <span>40.00</span>
          </span>
        </div>
        <div class="account-container">
          <label>Payment Status:</label>
          <span>PENDING</span>
        </div>
      </div>

      <div class="medical-wellness-account-container">
        <div class="active-plan-wrapper">
          <div class="account-title">
            <span>Medical Spending Account:</span>
          </div>
          <div class="account-container">
            <label>Total:</label>
            <span>
              S$
              <span>10,000.00</span>
            </span>
          </div>
          <div class="account-container">
            <label>Unallocated:</label>
            <span>
              S$
              <span>0.00</span>
            </span>
          </div>
        </div>

        <div class="active-plan-wrapper">
          <div class="account-title">
            <span>Wellness Spending Account:</span>
          </div>
          <div class="account-container">
            <label>Total:</label>
            <span>
              S$
              <span>20,000.00</span>
            </span>
          </div>
          <div class="account-container">
            <label>Unallocated:</label>
            <span>
              S$
              <span>0.00</span>
            </span>
          </div>
        </div>
      </div>

      <div class="btn-view-plan-container">
        <button class="btn-view-plan">View Plan</button>
      </div>
    </div>

    <!-- modals here -->
    <!-- Account & Payment -->
    <Modal v-if="modals.account.password" class="update-password-modal">
      <div slot="header">
        <h4>Update Account</h4>
        <img @click="companyContactsModal('password')" :src="'../assets/img/icons/close.svg'">
      </div>
      <div slot="body">
        <form>
          <div class="form-group">
            <label>Current Password</label>
            <input type="password">
          </div>
          <div class="form-group">
            <label>New Password</label>
            <input type="password">
          </div>
          <div class="form-group">
            <label>Re-type Password</label>
            <input type="password">
          </div>
        </form>
      </div>
      <div slot="footer">
        <button>CANCEL</button>
        <button>UPDATE</button>
      </div>
    </Modal>
    <Modal v-if="modals.account.active_plans" class="active-plan-modal">
      <div slot="header">
        <h4>Active Plan Details</h4>
        <img @click="companyContactsModal('active_plans')" :src="'../assets/img/icons/close.svg'">
      </div>
      <div slot="body">
        <div class="transactions-container">
          <div class="modal-title-header transactions-title-header">
            <span>Transactions</span>
          </div>
          <div class="modal-body-info transactions-body-info">
            <div class="col-1-body-info">
              <div>
                Plan Account:
                <span>Insurance Bundle</span>
              </div>
              <div>
                Invoice:
                <span>OMC000152</span>
              </div>
              <div>
                Plan Duration:
                <span>12 months</span>
              </div>
              <div>
                Employees:
                <span>51</span>
              </div>
              <div>
                Plan Amount: S$
                <span>5,049.00</span>
              </div>
              <div>
                Payment Status:
                <span>PAID</span>
              </div>
              <div>
                Plan Duration:
                <span>12 months</span>
              </div>
            </div>
            <div class="col-2-body-info">
              <button class="btn-trans-dl-incove">DOWNLOAD INVOICE</button>
              <button class="btn-trans-pending-enrollment">
                <span>0</span>PENDING ENROLLMENT
              </button>
              <button class="btn-trans-download-receipt">DOWNLOAD RECEIPT</button>
            </div>
          </div>
        </div>
        <div class="dependent-plans-container">
          <div class="modal-title-header dependent-title-header">
            <span>Dependent Plans</span>
          </div>
          <div class="modal-body-info dependent-body-info">
            <div class="col-1-body-info">
              <div>
                Dependent Plan Account Type:
                <span>Lite Plan</span>
              </div>
              <div>
                Active Plan Type:
                <span>Active Plan</span>
              </div>
              <div>
                Plan Duration:
                <span>5 months</span>
              </div>
              <div>
                Total Seats:
                <span>11</span>
              </div>
              <div>
                Occupied Seats:
                <span>7</span>
              </div>
              <div>
                Vacant Seats:
                <span>4</span>
              </div>
              <div>
                Plan Amount: S$
                <span>0.00</span>
              </div>
              <div>
                Payment Status:
                <span>PENDING</span>
              </div>
            </div>
            <div class="col-2-body-info">
              <button class="btn-trans-dl-incove">DOWNLOAD INVOICE</button>
              <button class="btn-trans-pending-enrollment">
                <span>4</span>PENDING ENROLLMENT
              </button>
              <!-- <button class="btn-trans-download-receipt">DOWNLOAD RECEIPT</button> -->
            </div>
          </div>
        </div>
        <div class="spending-account-container">
          <div class="modal-title-header spending-account-title-header">
            <span>Spending Account</span>
          </div>
          <div class="modal-body-info spending-account-body-info">
            <div class="col-1-body-info">
              <div>
                Invoce:
                <span>DEP000002</span>
              </div>
              <div>
                Total Credits: S$
                <span>1,000.00</span>
              </div>
              <div>(Wellness)</div>
              <div>
                Deposit: S$
                <span>50.00</span>
              </div>
              <div>
                Payment Status:
                <span>PENDING</span>
              </div>
            </div>
            <div class="col-2-body-info">
              <button class="btn-trans-dl-incove">DOWNLOAD INVOICE</button>
            </div>
          </div>
          <div class="modal-body-info spending-account-body-info">
            <div class="col-1-body-info">
              <div>
                Invoce:
                <span>DEP000013</span>
              </div>
              <div>
                Total Credits: S$
                <span>1,000.00</span>
              </div>
              <div>(Medical)</div>
              <div>
                Deposit: S$
                <span>5.00</span>
              </div>
              <div>
                Payment Status:
                <span>PENDING</span>
              </div>
            </div>
            <div class="col-2-body-info">
              <button class="btn-trans-dl-incove">DOWNLOAD INVOICE</button>
            </div>
          </div>
          <div class="modal-body-info spending-account-body-info">
            <div class="col-1-body-info">
              <div>
                Invoce:
                <span>DEP000091</span>
              </div>
              <div>
                Total Credits: S$
                <span>2,808.00</span>
              </div>
              <div>(Medical)</div>
              <div>
                Deposit: S$
                <span>70.20</span>
              </div>
              <div>
                Payment Status:
                <span>PENDING</span>
              </div>
            </div>
            <div class="col-2-body-info">
              <button class="btn-trans-dl-incove">DOWNLOAD INVOICE</button>
            </div>
          </div>
        </div>
      </div>
      <div slot="footer">
        <button @click="companyContactsModal('active_plans')">CLOSE</button>
      </div>
    </Modal>
  </div>
</template>

<script>
import AccountPayments from "@/components/company/account/account-payments";

export default AccountPayments;
</script>

