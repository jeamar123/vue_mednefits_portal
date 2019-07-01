<template>
  <div class="list-info-container benefits-info-container">
    <h3>Benefits</h3>
    <div class="benefits-wrapper">
      <div class="col-1-benefits-info">
        <div class="benefits-each-container">
          <img :src="'../assets/img/Health-Screening.png'">
          <h3>HEALTH SCREENING</h3>
          <h4 class="benefits-body-details">
            We provide on complementary
            <br>basic health screening per
            <br>subscription year.
          </h4>
          <h4 class="benefits-body-details">
            You may upgrade to premium health
            <br>screening package at a lower rate
            <br>exclusively just for you and your team.
          </h4>
        </div>
      </div>
      <div class="col-2-benefits-info">
        <div class="benefits-each-container">
          <img :src="'../assets/img/GP.png'">
          <h3>OUTPATIENT GP</h3>
          <h4 class="benefits-body-details">
            100% cosultation cost will be
            <br>covered under Mednefits network
            <br>GP clinic
          </h4>
          <h4 class="benefits-body-details">
            You and your team only need to pay
            <br>for medicine or any treatment done
            <br>in the clinic.
          </h4>
        </div>
      </div>
    </div>
    <div class="benefits-wrapper">
      <div class="col-1-benefits-info">
        <div class="benefits-each-container">
          <img :src="'../assets/img/Dental.png'">
          <h3>DENTAL CARE</h3>
          <h4 class="benefits-body-details">
            You and your team will recieve
            <br>up to 30% selected basic dental
            <br>services under Mednefits network
            <br>dental clinics. Services include such
            <br>as scaling and polishing, tooth fillings,
            <br>and gum treatments.
          </h4>
        </div>
      </div>
      <div class="col-2-benefits-info">
        <div class="benefits-each-container">
          <img :src="'../assets/img/Specialist.png'">
          <h3>HEALT SPECIALIST</h3>
          <h4 class="benefits-body-details">
            You and your team will recieve up to
            <br>60% off on specialist consultation
            <br>under Mednefits network specialist.
            <br>Services included such as
            <br>ophthalmology, orthopaedic,
            <br>physiotherapy, and more.
          </h4>
        </div>
      </div>
    </div>
    <div class="benefits-wrapper">
      <div class="col-1-benefits-info">
        <div class="benefits-each-container">
          <img :src="'../assets/img/TCM.png'">
          <h3>TRADITIONAL CHINESE MEDICINE</h3>
          <h4 class="benefits-body-details">
            100% consultation cost will be
            <br>covered under Mednefits network
            <br>TCM partners.
          </h4>
          <h4 class="benefits-body-details">
            You and your team only need to pay
            <br>for medicine or any treatment done
            <br>in the clinic.
          </h4>
        </div>
      </div>
      <div class="col-2-benefits-info">
        <div class="benefits-each-container">
          <img :src="'../assets/img/Wellness.png'">
          <h3>WELLNESS BENEFITS</h3>
          <h4 class="text-center benefits-body-details">
            You and your team can save up to
            <br>40% on wellness services such as
            <br>beauty and body treatment, massage
            <br>therapy, fitness classes(coming soon).
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import benefits from "@/components/company/planCoverage/benefits.vue";

export default benefits;
</script>
