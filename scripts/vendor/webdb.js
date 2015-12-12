var webDB = {};
webDB.sqlResult = null;

webDB.verbose = function (verbose) {
  var msg;
  if (verbose) {
    html5sql.logInfo = true;
    html5sql.logErrors = true;
    html5sql.putSelectResultsInArray = true;
    msg = 'html5sql verbosity on';
  } else {
    html5sql.logInfo = false;
    html5sql.logErrors = false;
    html5sql.putSelectResultsInArray = false;
    msg = 'html5sql verbosity off';
  }
  console.log(msg);
};

webDB.init = function() {
  // Open and init DB
  try {
    if (openDatabase) {
      webDB.verbose(true);
      webDB.connect('triviaDB', 'Trivia Content Database', 5*1024*1024);
      console.log('database connected successfully');
    } else {
      console.log('Web Databases not supported.');
    }
  } catch (e) {
    console.error('Error occured during DB init. Web Database may not be supported.');
  }
};

webDB.connect = function (database, title, size) {
  html5sql.openDatabase(database, title, size);
};

webDB.setupTables = function (data) {
  html5sql.process(
    'CREATE TABLE IF NOT EXISTS profiles (id INTEGER PRIMARY KEY, name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, location VARCHAR (255) NOT NULL, time VARCHAR(255) NOT NULL, specialty VARCHAR(255) NOT NULL, comment VARCHAR(255) NOT NULL);',
    function() {
      // on success
      webDB.insertAllRecords(data);
    }
  );
};
webDB.insertAllRecords = function (articles) {
  articles.forEach(webDB.insertRecord);
};
webDB.insertRecord = function (a) {
  // insert article record into database
  html5sql.process(
    [
      {
        'sql': 'INSERT INTO profiles (name, email, location, time, specialty, comment) VALUES (?, ?, ?, ?, ?, ?);',
        'data': [a.name, a.email, a.location, a.time, a.specialty, a.comment],
      }
    ],
    function () {
    }
  );
};
webDB.execute = function (sql, callback) {
  callback = callback || function() {};
  html5sql.process(
    sql,
    function (tx, result, resultArray) {
      callback(resultArray);
    }
  );
};
