var fbPerson = new Firebase('https://trivia-crossroads.firebaseio.com/Person');
var profileList = [];

fbPerson.once("value", function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    profileList.push(JSON.parse(childSnapshot.val()));
  });
  var table = document.getElementById('profileDisplay');
  for(var i = 0; i < profileList.length; i++){
    var tr = document.createElement('tr');

    for(var j in profileList[i]){
      var td = document.createElement('td');
      td.textContent = profileList[i][j];
      tr.appendChild(td);
    }
  table.appendChild(tr);
  }
});
