var fbPerson = new Firebase('https://trivia-crossroads.firebaseio.com/Person');
var profileList = [];
var sortArray = [];
var $dayDrop = $('#day');
var $specialtyDrop = $('#specialty');
var $locationDrop = $('#locations');
var display = {
  generateTable: function(dataArray) {
    var $table = $('#profileTable');
    var $tbody = $('<tbody class="profileDataTable">');
    for(var i = 0; i < dataArray.length; i++) {
      var $tr = $('<tr>');
      for(var j in dataArray[i]) {
        var $td = $('<td>');
        $td.text(dataArray[i][j]);
        $tr.append($td);
      }
      $tbody.append($tr);
    }
    $table.children().remove();
    $table.append($tbody);
  },
  storagePull: function() {
    fbPerson.once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        profileList.push(JSON.parse(childSnapshot.val()));
      });
      display.generateTable(profileList);
      $dayDrop.on('change', sort.day);
      $specialtyDrop.on('change', sort.specialty);
      $locationDrop.on('change', sort.location);
      webDB.init();
      webDB.setupTables(profileList);
    });
  }
};
var sort = {
  day: function(e) {
    var pickedDay = $dayDrop.find('option:selected').attr('value');
    $specialtyDrop.val('all');
    $locationDrop.val('all');
    if (pickedDay == 'all') {
      sortArray = profileList;
    }
    else {
      sortArray = profileList.filter(function av(v) {
        if (v.day === 'all') {
          return true;
        }
        else if (typeof(v.day) === 'undefined') {
          return false;
        }
        else {
          return v.day.toLowerCase() === pickedDay.toLowerCase();
        }
      });
    }
    display.generateTable(sortArray);
  },
  specialty: function(e) {
    var pickedSpecialty = $specialtyDrop.find('option:selected').attr('value');
    $dayDrop.val('all');
    $locationDrop.val('all');
    if (pickedSpecialty == 'all') {
      sortArray = profileList;
    }
    else {
      sortArray = profileList.filter(function av(v) {
        if (v.specialty === 'all') {
          return true;
        }
        else if (typeof(v.specialty) === 'undefined') {
          return false;
        }
        else {
          return v.specialty.toLowerCase() === pickedSpecialty.toLowerCase();
        }
      });
    }
    display.generateTable(sortArray);
  },
  location: function(e) {
    var pickedLocation = $locationDrop.find('option:selected').attr('value');
    $dayDrop.val('all');
    $specialtyDrop.val('all');
    if (pickedLocation == 'all') {
      sortArray = profileList;
    }
    else {
      sortArray = profileList.filter(function av(v) {
        if (v.location === 'all') {
          return true;
        }
        else if (typeof(v.location) === 'undefined') {
          return false;
        }
        else {
          return v.location.toLowerCase() === pickedLocation.toLowerCase();
        }
      });
    }
    display.generateTable(sortArray);
  }
};
display.storagePull();
