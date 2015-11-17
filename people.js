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
var profiles = [];

fbPerson.once("value", function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    parsedProfileList.push(JSON.parse(childSnapshot.val()));
  });
  var table = document.getElementById('profileDisplay');
  for(var i = 0; i < parsedProfileList.length; i++){
    var tr = document.createElement('tr');

    for(var j in parsedProfileList[i]){
      var td = document.createElement('td');
      td.textContent = parsedProfileList[i][j];
      tr.appendChild(td);
    }
  table.appendChild(tr);
  }
});
