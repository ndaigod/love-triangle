/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var countOfPeople = preferences.length;
  var countOfTriangles = 0;
  for (var i = 0; i < countOfPeople - 1; i++)
  {
      let j = preferences[i] - 1;
      let k = preferences[j] - 1;
      if ((preferences[i] == j + 1) & (preferences[j] == k + 1) & (preferences[k] == i + 1) & (i < j) & (i < k))
          countOfTriangles++;
  }
  return (countOfTriangles);
};
