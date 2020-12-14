<template>
  <q-page class="flex column">
  	<q-banner class="bg-grey-4 text-center">
      User is offline.
    </q-banner>
  	<div class="q-pa-md column col justify-end">
  		<q-chat-message
  			v-for="message in messages"
  			:key="message.text"
  		  :name="message.from"
  		  :text="[message.text]"
  		  :sent="message.from == 'me' ? true : false"
  		/>
  	</div>
  	<q-footer elevated>
  	  <q-toolbar>
  	  	<q-form 
  	  		@submit="sendMessage"
  	  		class="full-width">
	  	    <q-input
	  	    	v-model="newMessage"
	  	    	bg-color="white"
	  	    	outlined
	  	    	rounded
	  	    	label="Message"
	  	    	dense>

	  	      <template v-slot:after>
	  	        <q-btn
	  	        	round
	  	        	dense
	  	        	flat
	  	        	type="submit"
	  	        	color="white"
	  	        	icon="send" />
	  	      </template>
	  	    </q-input>
  	  	</q-form>
  	  </q-toolbar>
  	</q-footer>
  </q-page>
</template>

<script>
	export default {
	  data() {
	  	return {
	  		newMessage: '',
	  		messages: [
	  			{
	  				text: 'Hey Jim, how are you?',
	  				from: 'me'
	  			},
	  			{
	  				text: 'Good thanks, Danny! How are you?',
	  				from: 'them'
	  			},
	  			{
	  				text: 'Pretty good!',
	  				from: 'me'
	  			}
	  		]
	  	}
	  },
	  methods: {
	  	sendMessage() {
	  		this.messages.push({
	  			text: this.newMessage,
	  			from: 'me'
	  		})
	  	}
	  }
	}
</script>

<style>
</style>
