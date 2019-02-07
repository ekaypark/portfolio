
var getTime = function() {
	(new Date().getTime());
	},
	interval = setInterval(getTime, 1000);



//
// NAMESPACE (namespace)
//
// Self Executing Anonymous Function:
// -Enables use of private and public properties/methods
// -Also protects jQuery $ and undefined from conflicts
//
(function( NAMESPACE, $, undefined ) {

	// -----------------------------------------
	// PUBLIC
	//
	// Properties
	//
	NAMESPACE.property = '';


	// -----------------------------------------
	// PRIVATE
	//
	// Properties
	//
	var privateProperty  = '';


	// -----------------------------------------
	// PRIVATE
	//
	// Methods
	//
	



	//
	// getUrlParam
	//
	// Utility function to snag a query string value when passed the parameter
	//
	function getUrlParam(name) {
		var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
		if (!results) {
			return 0;
		}
		return results[1] || 0;
	}


	// -----------------------------------------
	// PUBLIC
	//
	// Methods
	//


	//
	// init
	//
	NAMESPACE.init = function() {

		// Put document ready code here!
		// console.log('Document Ready!');
        // EK PUT SHIT HERE

        
	};


//For when you need to log in in order to updat firebase//
//pcc email pw demotest
		// firebase.auth().signInWithEmailAndPassword(email, password)
		// 			.then(user => {
		// 				firebase.database().ref('messages').push({
		// 					title,
		// 				});
		// 			})
		// 			.catch(error => {
		// 				console.log(error);
		// 			});












        //FIREBASE FORM//


    	

	  		// const email = $('#jsEmail').val();
	  		// const password = $('#jsPassword').val();
	  		// const message = $('#jsMessage').val();
	  		// const title = $('#jsTitle').val();


	  

	  		// console.log(email, password, message, title);


	  		





  	// $('.js-form').on('submit', event => {

  	// 		var firebaseRef = firebase.database().ref();

  	// 		firebaseRef.child("text").set("some value");
	  // 	});





	// -----------------------------------------
	// DOCUMENT READY
	//
	$(document).ready(function() { NAMESPACE.init(); });



}(window.NAMESPACE = window.NAMESPACE || {}, jQuery));
