const countries = require('./countries.json');

/** Get all the data of one single country given the ISO3 code.
 * @param  {string} isoCode
 * @returns {Object}
 */
function getCountryByIso3(isoCode) {
  // Complete with your code
  return countries.find((element) => element.iso3 === isoCode);
}

/**
 * Get a country translated name given his ISO3 code and tranlated language.
 * @param  {string} isoCode
 * @param  {string} language example: "es"
 * @returns {string}
 */
function getCountryTranslatedName(isoCode, language) {
  // Complete with your code
  const country = countries.find((element) => element.iso3 === isoCode);
  const translatedName = country.translations[language];
  return translatedName;
}
/** Get an array of all the countries with the specified subregion
 * @param  {string} subregion
 * @returns {Array}
 */
function getCountriesBySubregion(subregion) {
  // Complete with your code

  const countrySubRegion = [];
  countries.forEach((element) => {
    if (element.subregion === subregion) {
      countrySubRegion.push(element); // For "all the countries"
      // I understan the complete country object
      // countrySubRegion.push(element.nome); ---> If it is only the name of the  country
    }
  });

  return countrySubRegion;
}

function main() {
  console.log(
    '///// Ejercicio 1 /////\n',
    getCountryByIso3('ARG'),
    '\n',
  );
  console.log(
    '///// Ejercicio 2 /////\n',
    getCountryTranslatedName('ARG', 'ja'),
    '\n',
  );
  console.log(
    '///// Ejercicio 3 /////\n',
    getCountriesBySubregion('South America'),
    '\n',
  );
}

main();
