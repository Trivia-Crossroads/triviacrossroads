var fbPerson = new Firebase('https://trivia-crossroads.firebaseio.com/Person');
var $profileData = $('#profileData');

function NewProfile(name, email, location, day, specialty, other){
  this.name = name;
  this.email = email;
  this.location = location;
  this.day = day;
  this.specialty = specialty;
  this.other = other;
}

var storeProfile = {
  onSubmit: function() {
    event.preventDefault();
    var $response = $('#response');
    $response.removeAttr('class', 'hidden');
    var name = $('input[name="name"]').val();
    var email = $('input[name="email"]').val();
    var location = $('#locations option:selected').attr('value');
    var time = $('#times option:selected').attr('value');
    var specialty = $('#specialties option:selected').attr('value');
    var comment = $('textarea[name="comment"]').val();

    var profileString = JSON.stringify(new NewProfile(name, email, location, time, specialty, comment));
    fbPerson.push(profileString);
    var $join = $('#join');
    $join.attr('class', 'hidden');
  }
};

$profileData.on('submit', storeProfile.onSubmit);
