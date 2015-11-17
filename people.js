var fbPerson = new Firebase('https://trivia-crossroads.firebaseio.com/Person');
var profileList = [];
var parsedProfileList = [];

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
