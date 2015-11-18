var fbPerson = new Firebase('https://trivia-crossroads.firebaseio.com/Person');

function NewProfile(name, email, location, day, specialty, other){
  this.name = name;
  this.email = email;
  this.location = location;
  this.day = day;
  this.specialty = specialty;
  this.other = other;
}

function onSubmit(event) {
  var name = event.target.name.value;
  var email = event.target.email.value;
  var location = event.target.location.value;
  var time = event.target.time.value;
  var specialty = event.target.specialty.value;
  var comment = event.target.comment.value;
  var profileString = JSON.stringify(new NewProfile(name, email, location, time, specialty, comment));
  var UUID = fbPerson.push(profileString);
  document.cookie="UUID=" + UUID.key() + "; expires=Thu, 25 Dec 2020 12:00:00 UTC";
}

var profileData = document.getElementById("profileData");
profileData.addEventListener("submit", onSubmit);
