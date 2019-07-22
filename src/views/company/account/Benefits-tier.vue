<template>
  <div class="list-info-container benefits-tier-container">
    <h1>Team benefits tiers.</h1>

    <div v-if="false" class="tier-item-wrapper">
      <div class="tier-item-form">
        <div class="tier-item-header">
          <h4>
            Tier
            <span>{{tierCounter}}</span>
          </h4>
          <img :src="'../assets/img/icons/close.svg'">
        </div>
        <div class="tier-item-body">
          <div class="input-wrapper">
            <label>Medical annual cap</label>
            <div class="input-container">
              <input type="number" min="0">
              <div class="icon-item">
                S
                <i class="fa fa-usd icon"></i>
              </div>
            </div>
          </div>
          <div class="input-wrapper">
            <label>Wellness annual cap</label>
            <div class="input-container">
              <input type="number" min="0">
              <div class="icon-item">
                S
                <i class="fa fa-usd icon"></i>
              </div>
            </div>
          </div>
          <div class="input-wrapper gp-toggle">
            <label>Add GP cap per visit?</label>
            <div class="btn-wrapper">
              <button
                v-bind:class="{'active' : gp_cap_status == true }"
                @click="toggleGPcapStatus(true)"
              >Yes</button>
              <button
                v-bind:class="{'active' : gp_cap_status == false }"
                @click="toggleGPcapStatus(false)"
              >No</button>
            </div>
          </div>
          <div v-if="gp_cap_status" class="input-wrapper">
            <label>GP cap per visit</label>
            <div class="input-container">
              <input type="number" min="0">
              <div class="icon-item">
                S
                <i class="fa fa-usd icon"></i>
              </div>
            </div>
          </div>
          <div class="input-wrapper">
            <label>Employee headcount</label>
            <div class="input-container">
              <input type="number" min="0">
              <div class="icon-item">
                <i class="fa fa-users icon"></i>
              </div>
            </div>
          </div>
          <div class="input-wrapper">
            <label>Dependent headcount</label>
            <div class="input-container">
              <input type="number" min="0">
              <div class="icon-item">
                <i class="fa fa-users icon"></i>
              </div>
            </div>
          </div>
          <div class="tier-item-button">
            <button v-if="false" class="btn-delete-tier">Remove</button>
            <button>Save &amp; Continue</button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="true" class="tier-summary-wrapper">
      <h4>Manage your team benefits tiers here.</h4>
      <div class="summary-details-wrapper">
        <div class="summary-details">
          <div class="tier-summary-btn">
            <input type="radio" name="radio">
            <label>
              <div>
                Tier
                <span>1</span>
                <br>
                <span>0</span>/<span>2</span>
              </div>
            </label>
            <span>Edit</span>
          </div>
          <div class="clinic-type-wrapper">
            <div class="clinic-type-container">
              <span class="label">Medical annual cap:</span>
              <span class="text">
                S$
                <span>1</span>
              </span>
            </div>
            <div class="clinic-type-container">
              <span class="label">Wellness annual cap:</span>
              <span class="text">
                S$
                <span>1</span>
              </span>
            </div>
            <div class="clinic-type-container">
              <span class="label">GP cap per visit:</span>
              <span class="text">
                S$
                <span>0</span>
              </span>
            </div>
          </div>
        </div>
        <div class="summary-details">
          <div class="tier-summary-btn">
            <input type="radio" name="radio">
            <label>
              <div>
                Tier
                <span>1</span>
                <br>
                <span>0</span>/<span>2</span>
              </div>
            </label>
            <span>Edit</span>
          </div>
          <div class="clinic-type-wrapper">
            <div class="clinic-type-container">
              <span class="label">Medical annual cap:</span>
              <span class="text">
                S$
                <span>1</span>
              </span>
            </div>
            <div class="clinic-type-container">
              <span class="label">Wellness annual cap:</span>
              <span class="text">
                S$
                <span>1</span>
              </span>
            </div>
            <div class="clinic-type-container">
              <span class="label">GP cap per visit:</span>
              <span class="text">
                S$
                <span>0</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="add-tier-wrapper">
        <h4>Add a tier</h4>
        <button>
          <img :src="'../assets/img/plus-gray.png'">
        </button>
      </div>
    </div>

    <!-- modals here -->
  </div>
</template>

<script>
import BenefitsTier from "@/components/company/account/benefits-tier";

export default BenefitsTier;
</script>

