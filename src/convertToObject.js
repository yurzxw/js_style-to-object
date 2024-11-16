'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const objResult = {};
  const result = sourceString.split(';').map((style) => style.split(':'));

  for (let i = 0; i < result.length; i++) {
    if (result[i].length === 2) {
      objResult[result[i][0].trim()] = result[i][1].trim();
    }
  }

  return objResult;
}

module.exports = convertToObject;
