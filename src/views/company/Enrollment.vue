<template>
  <div>
  	<div class="enrollment-method-wrapper">
  		<div class="container">
  			<div>
  				<h1 class="enrollment-method-title">Pick your preferred enrollment method.</h1>
  				<div class="pick-enrollment-method">
  					<button>
              <img :src="'../assets/img/excel.png'">
              <h4>EXCEL IMPORT</h4>     
            </button>
            <button>
              <img :src="'../assets/img/web-input.png'">
              <h4>WEB INPUT</h4>
            </button>
  				</div>
          <div class="pick-enrollment-text">
            <div class="enrollment-method-box-text">
              <p class="below-text download-below-text">Upload employee details in a<br>excel file using the template<br>provided by us in the next step</p>
            </div>
            <div class="enrollment-method-box-text">
              <p class="below-text download-below-text">Input employee details<br>using our web enrollment form.</p>
            </div>
          </div>
  			</div>
  		</div>

      <div class="prev-next-button-container">
        <div class="button-container">
          <button>Back</button>
          <button>Next</button>
        </div>
      </div>
  	</div>
  </div>
</template>

<script>
import enrollment from "@/components/company/enrollment";

export default enrollment;
</script>

