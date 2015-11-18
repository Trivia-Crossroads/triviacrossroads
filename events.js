var dayFilter = document.getElementById('dayFilter');
var locationFilter = document.getElementById('locations');
function Event(name, location, day, time, fee){
  this.name = name;
  this.location = location;
  this.day = day;
  this.time = time;
  this.fee = fee;
}

var eventList = [
  new Event("Blue Star Cafe & Pub", "Wallingford", "Monday", "8p"),
  new Event("Lost Lake", "Capitol Hill", "Monday", "8p"),
  new Event("Red Papaya", "Lower Queen Anne", "Monday", "8p"),
  new Event("Bauhaus Green Lake", "Green Lake", "Monday", "7p"),
  new Event("Kate's Pub", "University District", "Monday", "9p"),
  new Event("500 East", "Capitol Hill", "Tuesday", "7:30p"),
  new Event("Ballard Loft", "Ballard", "Tuesday", "8p"),
  new Event("Buckley's in Belltown", "Belltown", "Tuesday", "7:30p"),
  new Event("O'Maille's Irish Pub", "SLU", "Tuesday", "8p"),
  new Event("Pies and Pints", "Roosevelt", "Tuesday", "8p"),
  new Event("Tarasco", "Ballard", "Tuesday", "8p"),
  new Event("The Old Pequiliar", "Ballard", "Tuesday", "7p"),
  new Event("The Park Pub", "Phinney Ridge", "Tuesday", "8p"),
  new Event("The Retro Restaurant and Lounge", "Belltown", "Tuesday", "8p"),
  new Event("Celtic Swell", "West Seattle", "Tuesday", "8:30p"),
  new Event("The Lookout", "Capitol Hill", "Tuesday", "7p"),
  new Event("95 Slide", "Capitol Hill", "Wednesday", "8p"),
  new Event("Big Time Brewing Company", "University District", "Wednesday", "7p"),
  new Event("Fado Irish Pub", "Pioneer Square", "Wednesday", "6:30p"),
  new Event("HotelHotel PizzaBar", "Fremont", "Wednesday", "8p"),
  new Event("Magnolia Village Pub", "Magnolia", "Wednesday", "8p"),
  new Event("Marco Polo Bar & Grill", "Georgetown", "Wednesday", "8p"),
  new Event("Ozzie's", "Lower Queen Anne", "Wednesday", "7p"),
  new Event("The Canterbury Ale House", "Capitol Hill", "Wednesday", "7p"),
  new Event("Kangaroo and Kiwi Pub", "Ballard", "Wednesday", "7:30p"),
  new Event("Paddy Coyne's Waterfront", "Waterfront", "Wednesday", "8p"),
  new Event("Georgetown Liquor Company", "Georgetown", "Thursday", "8:30p"),
  new Event("The Unicorn", "Capitol Hill", "Thursday", "7:30p"),
  new Event("The Ould Triangle", "Greenwood", "Thursday", "8:30p"),
  new Event("Earl's on the Ave", "University District", "Thursday", "9p"),
];

function filterDay(event) {
  var pickedDay = dayFilter.options[dayFilter.selectedIndex].text;
  if(pickedDay === '--') {
    makeTable(eventList)
  } else {
    var sortedArray = eventList.filter(function isEqualTo(v){return v.day === pickedDay});
    makeTable(sortedArray);
 }
}

function filterlocation(event) {
  var pickedLocation = locationFilter.options[locationFilter.selectedIndex].text;
  if(pickedLocation === '--') {
    makeTable(eventList)
  } else {
    var sortedArray = eventList.filter(function isEqualTo(v){return v.location === pickedLocation});
    makeTable(sortedArray);
 }
}

function makeTable(tableData) {

  var eventTable = document.getElementById('eventTable');
  var newTable = document.createElement('tbody');
  for(var i = 0; i < tableData.length; i++){
    var tr = document.createElement('tr');
    for(var j in tableData[i]){
      var td = document.createElement('td');
      td.textContent = tableData[i][j];
      tr.appendChild(td);
    }
  newTable.appendChild(tr);
  }
  eventTable.appendChild(newTable);
  eventTable.removeChild(newTable.previousSibling);

}
makeTable(eventList);
dayFilter.addEventListener('change', filterDay);
locationFilter.addEventListener('change', filterlocation);
