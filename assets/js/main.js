
//Google API Auto complete, Note this one to display beautiful dropdown, I plan to use static but styling can consume my time.
var autocomplete;
function initAutocomplete() {
    autocomplete = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
        {types: ['geocode']});    
}


// Check if value is empty, if empty not proceed.
$(document).ready(function () {
    
    $('#categorySelect').change(function () {
        if($(this).val() != "" && $('#autocomplete').val() != "") {
            $('#categoryModal').modal('show');
        } else {
            $('#categorySelect').selectpicker('val', '');
            alert('Enter Zip Code or City first!');
        }
    });
    
});