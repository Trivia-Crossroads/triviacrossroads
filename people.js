var fbPerson = new Firebase('https://trivia-crossroads.firebaseio.com/Person');
var profileList = [];
var timeDrop = document.getElementById('time');
var specialtyDrop = document.getElementById('specialty');

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
  if (pickedDay == "--"){
    sortArray = profileList;
  } else {
    sortArray = profileList.filter(function av(v){return v.day === pickedDay;});
  }
  generateTable(sortArray);
}

function sortSpecialty(e){
  var pickedSpecialty = specialtyDrop.options[specialtyDrop.selectedIndex].text;
  if (pickedSpecialty === 'Sorcery, Phrenology, and Chiromancy') {
    pickedSpecialty = 'Sorcery';
  }
  if (pickedSpecialty == "--"){
    sortArray = profileList;
  } else {
    console.log(profileList);
    sortArray = profileList.filter(function av(v){return v.specialty === pickedSpecialty;});
    console.log(sortArray);
    profileList.filter(function av(v){console.log(v.specialty);});
    // console.log(v.specialty);
    console.log(pickedSpecialty);
  }
  generateTable(sortArray);
}


fbPerson.once("value", function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    profileList.push(JSON.parse(childSnapshot.val()));
  });
  var sortArray = [];
  generateTable(profileList);
  timeDrop.addEventListener('change', sortDay);
  specialtyDrop.addEventListener('change', sortSpecialty);
});

