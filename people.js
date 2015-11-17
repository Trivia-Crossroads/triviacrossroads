var fbPerson = new Firebase('https://trivia-crossroads.firebaseio.com/Person');

function ExistingProfiles(name, email, neighborhood, day, specialty){
  this.name = name;
  this.email = email;
  this.neighborhood = neighborhood;
  this.day = day;
  this.specialty = specialty;
}

var profileList = [];
var parsedProfileList = [];

fbPerson.orderByChild("name").on("child_added", function(snapshot) {
  profileList.push(snapshot.val());
  parsedProfileList.push(JSON.parse(profileList.pop()));
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});


