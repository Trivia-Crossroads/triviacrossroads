$(function() {
  var $dayFilter = $('#dayFilter');
  var $locationFilter = $('#locations');
  var $toggle = $('#toggle');

  var EventObject = function (name, location, day, time){
    this.name = name;
    this.location = location;
    this.day = day;
    this.time = time;
  };

  var eventList = [
    new EventObject('Blue Star Cafe & Pub', 'Wallingford', 'Monday', '8p'),
    new EventObject('Lost Lake', 'Capitol Hill', 'Monday', '8p'),
    new EventObject('Red Papaya', 'Lower Queen Anne', 'Monday', '8p'),
    new EventObject('Bauhaus Green Lake', 'Green Lake', 'Monday', '7p'),
    new EventObject('Kate\'s Pub', 'University District', 'Monday', '9p'),
    new EventObject('500 East', 'Capitol Hill', 'Tuesday', '7:30p'),
    new EventObject('Ballard Loft', 'Ballard', 'Tuesday', '8p'),
    new EventObject('Buckley\'s in Belltown', 'Belltown', 'Tuesday', '7:30p'),
    new EventObject('O\'Maille\'s Irish Pub', 'SLU', 'Tuesday', '8p'),
    new EventObject('Pies and Pints', 'Roosevelt', 'Tuesday', '8p'),
    new EventObject('Tarasco', 'Ballard', 'Tuesday', '8p'),
    new EventObject('The Old Pequiliar', 'Ballard', 'Tuesday', '7p'),
    new EventObject('The Park Pub', 'Phinney Ridge', 'Tuesday', '8p'),
    new EventObject('The Retro Restaurant and Lounge', 'Belltown', 'Tuesday', '8p'),
    new EventObject('Celtic Swell', 'West Seattle', 'Tuesday', '8:30p'),
    new EventObject('The Lookout', 'Capitol Hill', 'Tuesday', '7p'),
    new EventObject('95 Slide', 'Capitol Hill', 'Wednesday', '8p'),
    new EventObject('Big Time Brewing Company', 'University District', 'Wednesday', '7p'),
    new EventObject('Fado Irish Pub', 'Pioneer Square', 'Wednesday', '6:30p'),
    new EventObject('HotelHotel PizzaBar', 'Fremont', 'Wednesday', '8p'),
    new EventObject('Magnolia Village Pub', 'Magnolia', 'Wednesday', '8p'),
    new EventObject('Marco Polo Bar & Grill', 'Georgetown', 'Wednesday', '8p'),
    new EventObject('Ozzie\'s', 'Lower Queen Anne', 'Wednesday', '7p'),
    new EventObject('The Canterbury Ale House', 'Capitol Hill', 'Wednesday', '7p'),
    new EventObject('Kangaroo and Kiwi Pub', 'Ballard', 'Wednesday', '7:30p'),
    new EventObject('Paddy Coyne\'s Waterfront', 'Waterfront', 'Wednesday', '8p'),
    new EventObject('Georgetown Liquor Company', 'Georgetown', 'Thursday', '8:30p'),
    new EventObject('The Unicorn', 'Capitol Hill', 'Thursday', '7:30p'),
    new EventObject('The Ould Triangle', 'Greenwood', 'Thursday', '8:30p'),
    new EventObject('Earl\'s on the Ave', 'University District', 'Thursday', '9p'),
  ];

  var eventObject =  {
    filterDay: function(day) {
      var pickedDay = $dayFilter.find('option:selected').attr('value');
      if(pickedDay === '--') {
        eventObject.makeTable(eventList);
      }
      else {
        var sortedArray = eventList.filter(function isEqualTo(v){
          return v.day.toLowerCase() === pickedDay.toLowerCase();
        });
        eventObject.makeTable(sortedArray);
      }
    },


    filterLocation: function() {
      var pickedLocation = $locationFilter.find('option:selected').attr('value');
      if(pickedLocation === '--') {
        eventObject.makeTable(eventList);
      } else {
        var sortedArray = eventList.filter(function isEqualTo(v){
          return v.location.toLowerCase() === pickedLocation.toLowerCase();
        });
        eventObject.makeTable(sortedArray);
      }
    },

    makeTable: function(tableData) {
      var $eventTable = $('#eventTable');
      var $newTable = $('<tbody class="eventTableBody">');

      for(var i = 0; i < tableData.length; i++){
        var $tr = $('<tr>');
        for(var j in tableData[i]){
          var $td = $('<td>');
          $td.text(tableData[i][j]);
          $tr.append($td);
        }
        $newTable.append($tr);
      }
      $eventTable.children().remove();
      $eventTable.append($newTable);
    }
  };
  eventObject.makeTable(eventList);
  $dayFilter.on('change', function() {
    console.log('day filter triggered');
    $locationFilter.val('all');
    eventObject.filterDay($dayFilter.val());
  });
  $locationFilter.on('change', function() {
    console.log('location filter triggered');
    $dayFilter.val('all');
    eventObject.filterLocation();
  });
});
