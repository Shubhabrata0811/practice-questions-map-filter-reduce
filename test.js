import filterFunctions from "./filter.js";
import mapFunctions from "./map.js";
import reduceFunctions from "./reduce.js";

const {
  filterEvenNumbers,
  filterLongWords,
  filterAdults,
  filterActiveUsers,
  filterNumbersGreaterThanTen,
  filterLongBooks,
  filterIncompleteProfiles,
  filterHighGrades,
  filterInStockProducts,
  filterRecentOrders,
  filterBelowAveragePrice,
  filterRecentActiveUsers,
  filterStudentsWithAllSubjectsPassed,
  filterBirthdaysThisMonth,
  filterHighValueOrders,
  filterTopRatedBooks,
  filterHighSalaryEmployees,
  filterCitiesAboveMedianPopulation,
  filterPopularPosts,
  filterActiveUsersByPostCount,
  filterByAge,
  filterByPrice,
  filterByMathGrade,
  filterByDate,
  filterBySalary,
  filterByQuantity,
  filterByYear,
  filterBySubjectGrade,
  filterByLikes,
  filterByPostCount,
  filterDiscountedItems,
  filterLongProductNames,
  filterAgeGroups,
  filterPassingGrades,
  filterHighPriceWithVAT,
  filterLongNames,
  filterNormalizedScores,
  filterRecentBooks,
  filterActivePosters,
  filterSpecificGrade,
  filterByCategoryAndPrice,
  filterActiveUsersByDate,
  filterOrdersByBalanceAndTotal,
  filterArticlesByAuthorAndDate,
  filterCoursesByInstructorAndRating,
  filterProjectsByTeamSizeAndStatus,
  filterCandidatesByExperienceAndSkills,
  filterEventsByLocationAndDate,
  filterCustomersByRegionAndStatus,
  filterTasksByRoleAndPriority,
  filterTeamsByDepartment,
  filterProductsByReviewRating,
  filterOrdersByItemPrice,
  filterEventsBySpeaker,
  filterStudentsByClassGrade,
  filterEmployeesByCompletedProject,
  filterCoursesByCompletedModule,
  filterOrganizationsByBranchRating,
  filterCandidatesByIndustryExperience,
  filterCarsByFeatureType,
  filterTeamsBySkill,
  filterStudentsByGrade,
  filterBooksByAward,
  filterUsersByPostLikes,
  filterCitiesByAttractionCategory,
  filterCoursesByMultipleEnrollments,
  filterRestaurantsByVegetarianMenuItem,
  filterEmployeesByHighPriorityProject,
  filterOrdersByCategory,
  filterEventsBySpeakerExpertise,
  filterUsersByPostComments,
  filterUsersByPostCategory,
  filterRecentlyActiveUsers,
  filterPostsByHashtags,
  filterUsersByMinPostLikes,
  filterPostsByCommentsAndLocation,
  filterUsersByPostCaption,
  filterUsersByFollowingAndRecentPosts,
  filterPostsByUserFollowersAndComments,
  filterUsersByHashtagAndLikes,
  filterByMembership,
  filterStringsByMembership,
  filterObjectsById,
  filterGreaterThanThresholdByMembership,
  filterStringsByLengthAndMembership,
  filterByExclusion,
  filterObjectsByProperties,
  filterStringsBySubstringMembership,
  filterByRange,
  filterEvenNumbersByMembership,
  findCountriesThatExist,
  findValidNumbers,
  findActiveUsers,
  findStringsAboveThreshold,
  findAffordableProducts,
  findHighScoringStudents,
  findLongTermEmployees,
  findLargeCities,
  findInStockItems,
  findAnimalsByHabitat,
} = filterFunctions;

const {
  squaresOf,
  lengthsOf,
  uppercaseOf,
  firstCharactersOf,
  truthValuesOf,
  reversedStringsOf,
  doubleLettersOf,
  negatedBooleansOf,
  charCodesOf,
  domainNamesOf,
  splitWordsOf,
  joinedArraysOf,
  repeatedStringsOf,
  countVowelsOf,
  reversedArraysOf,
  withoutVowelsOf,
  cumulativeSumsOf,
  reversedWordsOf,
  uniqueCharactersOf,
  rangesOf,
  capitalizedFirstLettersOf,
  wordLengthsOf,
  flattenedArraysOf,
  sortedLettersOf,
  wrappedStringsOf,
  extractNames,
  extractAges,
  firstLettersOfNames,
  calculateAreas,
  extractFlags,
  fullNames,
  totalPrices,
  isAdult,
  abbreviations,
  mathScores,
  extractCoordinates,
  fullNameAndAge,
  extractScores,
  keyValuePairs,
  splitFullNames,
  normalizeScores,
  percentageContributions,
  subtractMin,
  calculateRanks,
  normalizeStringLengths,
  centerJustifyStrings,
  scaleToMax100,
  differencesFromMean,
  stringFrequencies,
  markLargestNumber,
  normalizeWithCurve,
  groupByGrade,
  sortByLengthAndAlphabet,
  normalizeByRange,
  percentageOfTotalSorted,
  sortStudentsByAverage,
  mapToBinaryAndGroup,
  flattenAndFilterEven,
  filterAdultsAndSort,
  totalSalesByMonth,
  totalSalaryByDepartment,
  highestGradeByStudent,
  categorizeBooksByYear,
  totalSpentByUser,
  finalPriceAfterDiscount,
  flattenOrderItems,
  uniqueCourses,
  urgentMessages,
  allTags,
  allFriends,
  prefixWithIndex,
  multiplyByIndex,
  discountByIndex,
  formatNamesWithIndex,
  formatNamesWithAge,
  extractHashtags,
  countFollowers,
  addReplyNoteToComments,
  capitalizeCommentsIfPopular,
  tagCount,
  multiply,
  add,
  divide,
  power,
  applyDiscount,
  combineNameAndTitle,
  multiplyByCorresponding,
  calculateRetirement,
  filterGreaterThanEqual,
  addPunctuation,
  greetUsers,
  checkAdultStatus,
  applySalesTax,
  getUserPostTitles,
  formatProductTags,
  getCategoryItems,
  summarizeOrderProducts,
  getStudentCourses,
  summarizeBookChapters,
  getEventAttendees,
} = mapFunctions;

const {
  sumOf,
  productOf,
  averageOf,
  minOf,
  maxOf,
  sumPositiveNumbers,
  sumOfSquares,
  sumOfOddNumbers,
  countNegativeNumbers,
  findSumOfEvenSquares,
  concatenateWords,
  longestWord,
  shortestWord,
  joinWithComma,
  reverseWords,
  joinWordsWithSpace,
  concatenateNames,
  countVowelsInWords,
  makeCamelCase,
  reverseString,
  duplicateNumbers,
  concatenateArrays,
  flattenArray,
  uniqueNumbers,
  groupByLength,
  countOccurrences,
  mergeObjects,
  zip,
  makeObject,
  invertObject,
  mergeArrays,
  groupByProperty,
  ascendingGroups,
  flattenToObject,
  longestString,
  mergeIntervals,
  sumAndCount,
  deepFlatten,
  findMax,
  cumulativeSum,
  equalChunksOfAtLeast,
  groupByType,
  runningAverages,
  flattenObject,
  splitIntoSubarrays,
  groupByFirstLetter,
  findFirstNonRepeated,
  countVowels,
  mergeConsecutiveDuplicates,
  longestConsecutiveSubsequence,
  topKFrequent,
  nestedAverage,
  cartesianProduct,
  groupByDate,
  findMinMax,
  sumByCategory,
} = reduceFunctions;

const testLog = [];

const testFunc = function (func, expected, ...args) {
  const result = func(args[0]);

  const toString = function(ele) {
    let str = "";

    if(typeof ele === 'object'){
      str += "KEYS: " + Object.keys(ele) + " VALUES: " + Object.values(ele);
    } else {
      str += ele;
    }

    return str;
  }

  const resultStr = "" + result.map(toString);
  const expectedStr = "" + expected.map(toString);
  const visual = resultStr === expectedStr ? "✅" : "❌";
  testLog.push({
    Function: func.name,
    Args: args.join(" | "),
    Result: resultStr,
    Expected: expectedStr,
    Visual: visual,
  });
};

function testFilterFunctions() {

  testFunc(filterEvenNumbers, [2, 4], [1, 2, 3, 4, 5]);
  testFunc(filterEvenNumbers, [], [1, 3, 5]);

  testFunc(filterLongWords, ["banana"], ["apple", "banana", "kiwi", "grape"]);
  testFunc(filterLongWords, [], ["apple", "kiwi"]);

  testFunc(filterAdults, [{name: "Bob", age: 35}], [{name: "Alice", age: 25}, {name: "Bob", age: 35}]);
  testFunc(filterAdults, [], [{name: "Alice", age: 25}]);

  testFunc(filterActiveUsers, [{username: "alice", active: true}], [{username: "alice", active: true}, {username: "bob", active: false}]);
  testFunc(filterActiveUsers, [], [{ username: "bob", active: false }]);

  testFunc(filterNumbersGreaterThanTen, [12, 18], [5, 12, 7, 18, 3]);
  testFunc(filterNumbersGreaterThanTen, [12, 18], [12, 18]);
  testFunc(filterNumbersGreaterThanTen, [], [5, 7, 3]);

  testFunc(filterLongBooks, [{title: "Book 2", pages: 250}], [{title: "Book 1", pages: 150}, {title: "Book 2", pages: 250}]);
  testFunc(filterLongBooks, [], [{title: "Book 1", pages: 150}]);

  testFunc(filterIncompleteProfiles, [{username: "bob", profileComplete: false}], [{username: "alice", profileComplete: true}, {username: "bob", profileComplete: false}]);
  testFunc(filterIncompleteProfiles, [], [{username: "alice", profileComplete: true}]);

  testFunc(filterHighGrades, [{name: "Jane", grade: 85}], [{name: "John", grade: 75}, {name: "Jane", grade: 85}]);
  testFunc(filterHighGrades, [], [{ name: "John", grade: 75 }]);

  testFunc(filterInStockProducts, [{product: "apple", inStock: true}], [{product: "apple", inStock: true}, {product: "banana", inStock: false}]);
  testFunc(filterInStockProducts, [], [{product: "banana", inStock: false}]);


  testFunc(filterRecentOrders, [{orderDate: "2024-12-01"}], [{orderDate: "2024-11-01"}, {orderDate: "2024-12-01"}]);
  testFunc(filterRecentOrders, [{orderDate: "2024-12-01"}], [{orderDate: "2025-01-01"}, {orderDate: "2024-12-01"}]);
  testFunc(filterRecentOrders, [], [{ orderDate: "2024-11-01" }]);

}

function testMapFunctions() {

  testFunc(squaresOf, [1, 4, 9], [1, 2, 3]);
  testFunc(squaresOf, [1, 4, 9], [-1, -2, -3]);
  testFunc(squaresOf, [], []);

  testFunc(lengthsOf, [5, 6, 4], ["apple", "banana", "kiwi"]);
  testFunc(lengthsOf, [0, 0], ["", ""]);

  testFunc(uppercaseOf, ["HELLO", "WORLD"], ["hello", "world"]);
  testFunc(uppercaseOf, ["", ""], ["", ""]);

  testFunc(firstCharactersOf, ["a", "b", "k"], ["apple", "banana", "kiwi"]);
  testFunc(firstCharactersOf, ["", "a"], ["", "apple"]);

  testFunc(truthValuesOf, [false, true, true, true], [0, 1, 2, 3]);

  testFunc(reversedStringsOf, ["olleh", "dlrow"], ["hello", "world"]);
  testFunc(reversedStringsOf, ["", "tenet"], ["", "tenet"]);

  testFunc(doubleLettersOf, ["ccaatt", "ddoogg", "bbaatt"], ["cat", "dog", "bat"]);
  testFunc(doubleLettersOf, ["", "ccccaaaatttt"], ["", "ccaatt"]);

  testFunc(negatedBooleansOf, [false, true, false], [true, false, true]);

  testFunc(charCodesOf, [97, 98, 99], ["a", "b", "c"]);

  testFunc(domainNamesOf, ["gmail.com", "yahoo.com"], ["user1@gmail.com", "admin@yahoo.com"]);

  testFunc(splitWordsOf, [["hello", "world"], ["goodbye", "moon"]], ["hello world", "goodbye moon"]);

  testFunc(joinedArraysOf, ["ab", "cd"], [["a", "b"], ["c", "d"]]);

  testFunc(repeatedStringsOf, ["hihi", "byebye"], ["hi", "bye"]);

  testFunc(countVowelsOf, [2, 3, 2], ["apple", "banana", "kiwi"]);

  testFunc(reversedArraysOf, [[3, 2, 1], [6, 5, 4]], [[1, 2, 3], [4, 5, 6]]);

  testFunc(withoutVowelsOf, ["ppl", "bnn", "kw"], ["apple", "banana", "kiwi"]);

  testFunc(cumulativeSumsOf, [[1, 3, 6], [4, 9, 15]], [[1, 2, 3], [4, 5, 6]]);
  testFunc(cumulativeSumsOf, [[], [4, 9, 15]], [[], [4, 5, 6]]);

  testFunc(reversedWordsOf, ["olleh dlrow", "eybdoog noom"], ["hello world", "goodbye moon"]);

  testFunc(uniqueCharactersOf, ["aple", "ban", "grape"], ["apple", "banana", "grape"]);

  testFunc(rangesOf, [[0, 1, 2], [0, 1, 2, 3, 4], [0, 1]], [3, 5, 2]);

  testFunc(capitalizedFirstLettersOf, ["Hello World", "Goodbye Moon"], ["hello world", "goodbye moon"]);

  testFunc(wordLengthsOf, [[5, 3], [6, 5]], ["apple pie", "banana split"]);

  testFunc(flattenedArraysOf, [[1, 2, 3], [4, 5, 6]], [[1, [2, 3]], [4, [5, 6]]]);

  testFunc(sortedLettersOf, ["act", "abt", "art"], ["cat", "bat", "rat"]);

}

function testReduceFunctions() {}

function test(){
  testFilterFunctions();
  testMapFunctions();
  testReduceFunctions();

  console.table(testLog);
}

test();