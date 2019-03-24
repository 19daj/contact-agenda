var count = 0;

function getContactData() {
    var name = $("#contact-name").val();
    var $phone = $("#contact-phone");
    //console.log(name, phone);
    addContactData(name, $phone.val());

    //Llimpiar input
    $("#contact-name").val("");
    $phone.val("");
}


var template = '<div class="row">' + 
                '<div class="col offset-s3 s6">' +
                    '<div class="card blue-grey darken-1">' + 
                        '<div class="card-content">' +
                            '<h3>__name__</h3>' + //dos guiones bajos
                            '<span>__phone__</span>' +
                            '<a class="waves-effect waves-light btn right" onClick="deleteContact()"><i class="material-icons left">delete</i>Delete</a>' +
                        '</div>' +
                    '</div>' +
                    '</div>' +
               '</div>';


function addContactData(name, phone) {
    count++;
    var finalTemplate= ""; //declarar variable
    finalTemplate = template.replace("__name__", name)//primero lo que se a quitar, segundo por lo que se va a reemplazar
        .replace("__phone__", phone);
    
     $("main").append(finalTemplate);  
     $("h5").html("Total contactos: " + count); 
     swal("Yei!", "Contacto agregado", "success");
}

function deleteContact() {
    count--;
    var item = $(event.currentTarget);
    var card = item.parent();
    var colCard = card.parent();
    var rowCard = colCard.parent();
    rowCard.remove();

    $("h5").html("Total contactos: " + count); 
}


$(document).ready(function(){
    $('.modal').modal();
    $("#add-contact").click(getContactData);
});



