<template>
	<div id="main-content" >
		<div class="main-clinic-container">
		  <div class="navbar">
		  	<div class="nav-logo">
		  		<img :src="'../assets/img/logo_white.png'">
		  	</div>
		  	<div class="nav-items">
		  		<ul class="nav-ul">
		  			<router-link tag="li" to="/clinic/dashboard"><a href="#">Dashboard</a></router-link>
		  			<router-link tag="li" to="/clinic/claim"><a href="#">Claim</a></router-link>
		  			<router-link tag="li" to="/clinic/calendar"><a href="#">Calendar</a></router-link>
		  		</ul>
		  	</div>
		  	<div class="need-help-container" v-click-outside="closeLogout">
		  		<a href="#" class="need-help-text">Need help?</a>
		  		<div class="need-help-drop-container">
			  		<p class="title">We're here to help.</p>
			  		<p class="subtitle">You may ring us</p>
			  		<p>+65 6254 7889</p>
			  		<p>Mon - Fri 10:00 to 19:00</p>

			  		<div class="white-space-30"></div>
			  		<p class="subtitle">Drop us a note, anytime</p>
			  		<p>happiness@mednefits.com</p>
			  	</div>	

		  		<img :src="'../assets/img/user_white.png'" v-on:click="toggleLogout()">

		  		<div v-if="isLogoutDropShow" class="logout-drop">
		  			<ul>
		  				<li><a @click.prevent="toggleUpdatePass()">SMS</a></li>
		  				<li><a @click.prevent="toggleUpdatePass()">Settings</a></li>
		  				<li><a @click.prevent="logout()">Logout</a></li>
		  			</ul>
		  		</div>
		  	</div>
		  </div>

		  <div class="child-content">
		  	<router-view></router-view>
		  </div>


		  <transition name="fade">		
			  <div v-if="showLoader" class="main-loader">
					<!-- <div class="loader">
						<img :src="'../assets/img/mednefits_icon_blue.png'" style="	width: 25px;margin-top: 20px;">
					</div> -->
					<div class="circle-loader">
						<div class="preloader-container">
							<div class="preloader-wrapper big active">
						    <div class="spinner-layer spinner-blue-only">
						      <div class="circle-clipper left">
						        <div class="circle"></div>
						      </div><div class="gap-patch">
						        <div class="circle"></div>
						      </div><div class="circle-clipper right">
						        <div class="circle"></div>
						      </div>
						    </div>
						  </div>
						</div>
					</div>
				</div>
			</transition>

			<transition name="fade">
			  <div v-if="showIconLoader" class="logo-preloader-container">
			  	<div class="logo-preload-wrapper">
						<img :src="'../assets/img/mednefits_icon_blue.png'">
						<div class="white-space-20"></div>
						<div class="logo-preloader-box">
							<div class="logo-preloader-bar"></div>
						</div>
					</div>
				</div>
			</transition>
		</div>
  </div>
  
</template>

<script>
	import dashboard from '@/components/clinic/dashboard'
	export default dashboard
</script>
