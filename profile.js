var fbPerson = new Firebase('https://trivia-crossroads.firebaseio.com/Person');
var profileData = document.getElementById('profileData');
var UUID = '';

function NewProfile(name, email, location, day, specialty, other){
  this.name = name;
  this.email = email;
  this.location = location;
  this.day = day;
  this.specialty = specialty;
  this.other = other;
}

var storeProfile = {
  onSubmit: function(event) {
    event.preventDefault();
    response.removeAttribute('class', 'hidden');
    var name = event.target.name.value;
    var email = event.target.email.value;
    var location = event.target.location.value;
    var time = event.target.time.value;
    var specialty = event.target.specialty.value;
    var comment = event.target.comment.value;
    var profileString = JSON.stringify(new NewProfile(name, email, location, time, specialty, comment));
    UUIDObject = fbPerson.push(profileString);
    UUID = UUIDObject.key();
    localStorage.setItem("triviaCrossroadsUUID", UUID);
    var join = document.getElementById('join');
    join.setAttribute('class', 'hidden');
  }
}

profileData.addEventListener('submit', storeProfile.onSubmit);
