var fbPerson = new Firebase('https://trivia-crossroads.firebaseio.com/Person');
var profileList = [];
var dayDrop = document.getElementById('day');
var specialtyDrop = document.getElementById('specialty');
var locationDrop = document.getElementById('locations');
var toggle = document.getElementById('toggle');

var display = {
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

  togglePeople: function(event){
    display.generateTable(profileList);
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
  },

  storagePull: function(){
    fbPerson.once("value", function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        profileList.push(JSON.parse(childSnapshot.val()));
      });
      display.generateTable(profileList);
      var sortArray = [];
      dayDrop.addEventListener('change', sort.day);
      specialtyDrop.addEventListener('change', sort.specialty);
      locationDrop.addEventListener('change', sort.location);
    });
  }
};

var sort = {
  day: function(e){
    var pickedDay = dayDrop.options[dayDrop.selectedIndex].text;
    if (pickedDay == "--"){
      sortArray = profileList;
    } else {
      sortArray = profileList.filter(function av(v){return v.day === pickedDay;});
    }
    display.generateTable(sortArray);
  },

  specialty: function(e){
    var pickedSpecialty = specialtyDrop.options[specialtyDrop.selectedIndex].text;
    if (pickedSpecialty === 'Sorcery, Phrenology, and Chiromancy') {
      pickedSpecialty = 'Sorcery';
    }
    if (pickedSpecialty == "--"){
      sortArray = profileList;
    } else {
      sortArray = profileList.filter(function av(v){return v.specialty === pickedSpecialty;});
    }
    display.generateTable(sortArray);
  },

  location: function(e){
    var pickedLocation = locationDrop.options[locationDrop.selectedIndex].text;
    if (pickedLocation == "--"){
      sortArray = profileList;
    } else {
      sortArray = profileList.filter(function av(v){return v.location === pickedLocation;});
    }
    display.generateTable(sortArray);
  }
}

display.storagePull();
toggle.addEventListener('click', display.togglePeople);
