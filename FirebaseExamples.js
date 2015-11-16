// Example of referencing the Person DB in Firebase
var fbPerson = new Firebase('https://trivia-crossroads.firebaseio.com/Person');

//Example of pulling the objects from Person
fbPerson.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

//Example of pushing new content to People
//Do NOT use .set, as it will overwrite all existing data with what you're setting.
var UUID = fbPerson.push({name: 'Selena', gender: 'female'});
document.cookie="UUID=" + UUID.key() + "; expires=Thu, 18 Dec 2016 12:00:00 UTC";

// By setting the URL to a specific FB UUID, we can access that object directly
//var fbPerson = new Firebase('https://trivia-crossroads.firebaseio.com/Person/-K3H95UMwdDSzN0ZbH9d');

// Here's an example of filtering by key/value when querying FB
fbPerson.orderByChild("gender").equalTo('male').on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
