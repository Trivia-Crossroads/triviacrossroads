var fbPerson = new Firebase('https://trivia-crossroads.firebaseio.com/Person');
var profileList = [];
var timeDrop = document.getElementById('time');

function generateTable(dataArray){
  var table = document.getElementById('profileDisplay');
  var tbody = document.createElement('tbody');
  for(var i = 0; i < dataArray.length; i++){
    var tr = document.createElement('tr');

    for(var j in dataArray[i]){
      var td = document.createElement('td');
      td.textContent = dataArray[i][j];
      tr.appendChild(td);
    }
  tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  table.removeChild(tbody.previousSibling);
}

function sortDay(e){
  var pickedDay = timeDrop.options[timeDrop.selectedIndex].text;
  sortArray = profileList.filter(function av(v){return v.day === pickedDay;});
  generateTable(sortArray);
}


fbPerson.once("value", function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    profileList.push(JSON.parse(childSnapshot.val()));
  });
  var sortArray = [];
  generateTable(profileList);
  timeDrop.addEventListener('change', sortDay);
});

