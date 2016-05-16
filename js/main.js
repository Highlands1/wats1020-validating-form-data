/* Custom JS goes here. */

// For this assignment you'll need to do a few things:
// 1. Create a document ready handler.
$(document).on('ready', function () {
    
    // 2. Define a validation object for use on your page.
    $('#order-form').validate({
        submitHandler: function (form) {
            form.submit();},
        
                rules: {
                    "your-name": {
                        required: true,
                        maxlength: 128,
                        },

                    "your-address": {
                        required: true        
                    },

                    "your-city": {
                        required: true
                    },
                    
                     "your-state": {
                         required: true
                     },

                    "your-zip": {
                        digits: true,
                        required: true,
                        maxlength: 5
                    },

                    "card-holder-name": {
                        required: true,
                        maxlength: 128,
                    },

                    "card-number": {
                        required: true,
                        creditcard: true
                    },
                    
                    "expiry-month": {
                        required: true
                    },
                    
                    "expiry-year": {
                        required: true
                    },

                    "cvv": {
                        required: true,
                        maxlength: 3,
                        digits: true
                    },
                    
                      "shipping-method": {
                        required: true
                        },
                }, 
        
            messages: {
                "your-name": {
                required: "Please enter your first and last",
         }
        }
    });       
      
    // 3. Connect the validation object to an event handler tied to the submit button.
  $('label span.glyphicon').tooltip();

// Refer to the `index.html` file for the validation rules that must be enforced.
});