const mysql = require('mysql');
const util = require('util');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'new_world',
});

const connect = util.promisify(connection.connect.bind(connection));
const execQuery = util.promisify(connection.query.bind(connection));

connect()
  .then(() => {
    const populationOver8Million = execQuery(
      'SELECT name FROM country WHERE population > 8000000;',
    ); // Q-1
    return populationOver8Million;
  })
  .then((result1) => {
    console.table(result1);
    const nameIncludesLand = execQuery('SELECT name FROM country WHERE name LIKE "%land%";'); // Q-2
    return nameIncludesLand;
  })
  .then((result2) => {
    console.table(result2);
    const populationBetweenHalfAndOneMillion = execQuery(
      'SELECT name FROM city WHERE population BETWEEN 500000 AND 1000000;',
    ); // Q-3
    return populationBetweenHalfAndOneMillion
  })
  .then((result3) => {
    console.table(result3);
    const countriesInEurope = execQuery('SELECT name FROM country WHERE continent = "Europe";'); // Q-4
    return countriesInEurope
  })
  .then((result4) => {
    console.table(result4);
    const countriesDescendingSurfaceAreas = execQuery(
      'SELECT name FROM country ORDER BY SurfaceArea DESC;',
    ); // Q-5
    return countriesDescendingSurfaceAreas
  })
  .then((result5) => {
    console.table(result5);
    const cityNamesInTheNetherlands = execQuery('SELECT name FROM city WHERE countrycode = "NLD";'); // Q-6
    return cityNamesInTheNetherlands
  })
  .then((result6) => {
    console.table(result6);
    const populationOfRotterdam = execQuery(
      'SELECT population FROM city WHERE name LIKE "Rotterdam";',
    ); // Q-7
    return populationOfRotterdam
  })
  .then((result7) => {
    console.table(result7);
    const top10SurfaceCountries = execQuery(
      'SELECT name FROM country ORDER BY SurfaceArea DESC LIMIT 10;',
    ); // Q-8
    return top10SurfaceCountries
  })
  .then((result8) => {
    console.table(result8);
    const top10MostPopulatedCities = execQuery(
      'SELECT name FROM city ORDER BY population DESC LIMIT 10;',
    ); // Q-9
    return top10MostPopulatedCities
  })
  .then((result9) => {
    console.table(result9);
    const populationOfTheWorld = execQuery('SELECT SUM(population) FROM country;'); // Q-10
    return populationOfTheWorld
  })
  .then((result10) => console.table(result10))
  .catch(err => {
    console.error('error: ', err);
  })
  .finally(() => {
    connection.end();
  });