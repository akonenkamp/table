var states = [
  { "name": "New Mexico", "myRating": "3", "deleteRow": "delete"},
  { "name": "Utah", "myRating": "1", "deleteRow": "delete"},
  { "name": "Oregon", "myRating": "10", "deleteRow": "delete"},
  { "name": "Florida", "myRating": "1", "deleteRow": "delete"},
];

function displayStates() {
    var tbody = $('#states tbody');
    var props = ["name", "myRating", "deleteRow"];
    $.each(states, function(i, movie) {
        var tr = $('<tr>');
        $.each(props, function(i, prop) {
            $('<td>').html(movie[prop]).appendTo(tr);  
        });
        tbody.append(tr);
    });  
}

$(document).ready(function(){
    displayStates();
    
    $( "#myForm" ).submit(function( event ) {
        var values = {};
        $.each($('#myForm').serializeArray(), function(i, field) {
            values[field.name] = field.value;
        });
        states.push(values);
        console.log(states);
        var tbody = $('#states tbody');
        tbody.empty();
        displaystates();
        event.preventDefault();
    });
});



$(document).ready(function(){
    $("#form").hide();
    $("#goodbutton").click(function(){
        $("#table").hide();
    });
    $("#goodbutton").click(function(){
        $("#form").show();
    });
});

$(document).ready(function(){
    $("#submit").click(function(){
        $("#form").hide();
    });
    $("#submit").click(function(){
        $("#table").show();
    });
});