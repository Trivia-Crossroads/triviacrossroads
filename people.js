var fbPerson = new Firebase('https://trivia-crossroads.firebaseio.com/Person');
var profileList = [];
var dayDrop = document.getElementById('day');
var specialtyDrop = document.getElementById('specialty');
var locationDrop = document.getElementById('locations');
var toggle = document.getElementById('toggle');

var peopleTable = {
   generateTable: function(dataArray){
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
  },

   sortDay: function(e){
    var pickedDay = dayDrop.options[dayDrop.selectedIndex].text;
    if (pickedDay == "--"){
      sortArray = profileList;
    } else {
      sortArray = profileList.filter(function av(v){return v.day === pickedDay;});
    }
    peopleTable.generateTable(sortArray);
  },

   sortSpecialty: function(e){
    var pickedSpecialty = specialtyDrop.options[specialtyDrop.selectedIndex].text;
    if (pickedSpecialty === 'Sorcery, Phrenology, and Chiromancy') {
      pickedSpecialty = 'Sorcery';
    }
    if (pickedSpecialty == "--"){
      sortArray = profileList;
    } else {
      sortArray = profileList.filter(function av(v){return v.specialty === pickedSpecialty;});
    }
    peopleTable.generateTable(sortArray);
  },

   sortLocation: function(e){
    var pickedLocation = locationDrop.options[locationDrop.selectedIndex].text;
    if (pickedLocation == "--"){
      sortArray = profileList;
    } else {
      sortArray = profileList.filter(function av(v){return v.location === pickedLocation;});
    }
    peopleTable.generateTable(sortArray);
  },

   storagePull: function(){
    fbPerson.once("value", function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        profileList.push(JSON.parse(childSnapshot.val()));
      });
      peopleTable.generateTable(profileList);
      var sortArray = [];
      dayDrop.addEventListener('change', peopleTable.sortDay);
      specialtyDrop.addEventListener('change', peopleTable.sortSpecialty);
      locationDrop.addEventListener('change', peopleTable.sortLocation);
    });
  },

   togglePeople: function(event){
    if (event.target.id == 'dayButton') {
     dayDrop.removeAttribute('class', 'hidden');
      specialtyDrop.setAttribute('class', 'hidden');
      locationDrop.setAttribute('class', 'hidden');
    } else if (event.target.id == 'specialtyButton') {
    specialtyDrop.removeAttribute('class', 'hidden');
      dayDrop.setAttribute('class', 'hidden');
      locationDrop.setAttribute('class', 'hidden');
    } else if (event.target.id == 'locationButton') {
    locationDrop.removeAttribute('class', 'hidden');
      dayDrop.setAttribute('class', 'hidden');
      specialtyDrop.setAttribute('class', 'hidden');
    }

  }
}

peopleTable.storagePull();
toggle.addEventListener('click', peopleTable.togglePeople);

