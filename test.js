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

const isPrimitiveValue = (ele) => typeof ele !== "object";

const toString = function (ele) {
  if (isPrimitiveValue(ele)) {
    return String(ele);
  }

  if (Array.isArray(ele)) {
    return "[" + ele.map(toString).join(", ") + "]";
  }

  const entries = Object.entries(ele);
  entries.sort((a, b) => a[0].localeCompare(b[0]));

  const result = entries.map(([key, value]) => key + ": " + toString(value));

  return "{" + result.join(", ") + "}";
};

const areValuesEquivalent = function (item1, item2) {
  if (typeof item1 !== typeof item2) {
    return false;
  }

  if (typeof item1 !== "object" || item1 === null || item2 === null) {
    String(item1) === "NaN" && (item1 += "") && (item2 += "");
    return item1 === item2;
  }

  if (Array.isArray(item1) || Array.isArray(item2)) {
    return (
      Array.isArray(item1) &&
      Array.isArray(item2) &&
      item1.every((_, idx) => areValuesEquivalent(item1[idx], item2[idx]))
    );
  }

  return (
    Object.keys(item1).length === Object.keys(item2).length &&
    Object.keys(item1).every((key) =>
      areValuesEquivalent(item1[key], item2[key])
    )
  );
};

const testFunc = function (func, expected, ...args) {
  const result = func(...args);

  const resultStr = isPrimitiveValue(result)
    ? String(result)
    : "" + result.map(toString);

  const expectedStr = isPrimitiveValue(expected)
    ? String(expected)
    : "" + expected.map(toString);

  const visual = areValuesEquivalent(result, expected) ? "✅" : "❌";

  testLog.push({
    Function: func.name,
    Arguments: args.map(toString).join(" | "),
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

  testFunc(
    filterAdults,
    [{ name: "Bob", age: 35 }],
    [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 35 },
    ]
  );
  testFunc(filterAdults, [], [{ name: "Alice", age: 25 }]);

  testFunc(
    filterActiveUsers,
    [{ username: "alice", active: true }],
    [
      { username: "alice", active: true },
      { username: "bob", active: false },
    ]
  );
  testFunc(filterActiveUsers, [], [{ username: "bob", active: false }]);

  testFunc(filterNumbersGreaterThanTen, [12, 18], [5, 12, 7, 18, 3]);
  testFunc(filterNumbersGreaterThanTen, [12, 18], [12, 18]);
  testFunc(filterNumbersGreaterThanTen, [], [5, 7, 3]);

  testFunc(
    filterLongBooks,
    [{ title: "Book 2", pages: 250 }],
    [
      { title: "Book 1", pages: 150 },
      { title: "Book 2", pages: 250 },
    ]
  );
  testFunc(filterLongBooks, [], [{ title: "Book 1", pages: 150 }]);

  testFunc(
    filterIncompleteProfiles,
    [{ username: "bob", profileComplete: false }],
    [
      { username: "alice", profileComplete: true },
      { username: "bob", profileComplete: false },
    ]
  );
  testFunc(
    filterIncompleteProfiles,
    [],
    [{ username: "alice", profileComplete: true }]
  );

  testFunc(
    filterHighGrades,
    [{ name: "Jane", grade: 85 }],
    [
      { name: "John", grade: 75 },
      { name: "Jane", grade: 85 },
    ]
  );
  testFunc(filterHighGrades, [], [{ name: "John", grade: 75 }]);

  testFunc(
    filterInStockProducts,
    [{ product: "apple", inStock: true }],
    [
      { product: "apple", inStock: true },
      { product: "banana", inStock: false },
    ]
  );
  testFunc(filterInStockProducts, [], [{ product: "banana", inStock: false }]);

  testFunc(
    filterRecentOrders,
    [{ orderDate: "2024-12-01" }],
    [{ orderDate: "2024-11-01" }, { orderDate: "2024-12-01" }]
  );
  testFunc(
    filterRecentOrders,
    [{ orderDate: "2024-12-01" }],
    [{ orderDate: "2025-01-01" }, { orderDate: "2024-12-01" }]
  );
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

  testFunc(
    doubleLettersOf,
    ["ccaatt", "ddoogg", "bbaatt"],
    ["cat", "dog", "bat"]
  );
  testFunc(doubleLettersOf, ["", "ccccaaaatttt"], ["", "ccaatt"]);

  testFunc(negatedBooleansOf, [false, true, false], [true, false, true]);

  testFunc(charCodesOf, [97, 98, 99], ["a", "b", "c"]);

  testFunc(
    domainNamesOf,
    ["gmail.com", "yahoo.com"],
    ["user1@gmail.com", "admin@yahoo.com"]
  );

  testFunc(
    splitWordsOf,
    [
      ["hello", "world"],
      ["goodbye", "moon"],
    ],
    ["hello world", "goodbye moon"]
  );

  testFunc(
    joinedArraysOf,
    ["ab", "cd"],
    [
      ["a", "b"],
      ["c", "d"],
    ]
  );

  testFunc(repeatedStringsOf, ["hihi", "byebye"], ["hi", "bye"]);

  testFunc(countVowelsOf, [2, 3, 2], ["apple", "banana", "kiwi"]);

  testFunc(
    reversedArraysOf,
    [
      [3, 2, 1],
      [6, 5, 4],
    ],
    [
      [1, 2, 3],
      [4, 5, 6],
    ]
  );

  testFunc(withoutVowelsOf, ["ppl", "bnn", "kw"], ["apple", "banana", "kiwi"]);

  testFunc(
    cumulativeSumsOf,
    [
      [1, 3, 6],
      [4, 9, 15],
    ],
    [
      [1, 2, 3],
      [4, 5, 6],
    ]
  );
  testFunc(cumulativeSumsOf, [[], [4, 9, 15]], [[], [4, 5, 6]]);

  testFunc(
    reversedWordsOf,
    ["olleh dlrow", "eybdoog noom"],
    ["hello world", "goodbye moon"]
  );

  testFunc(
    uniqueCharactersOf,
    ["aple", "ban", "grape"],
    ["apple", "banana", "grape"]
  );

  testFunc(
    rangesOf,
    [
      [0, 1, 2],
      [0, 1, 2, 3, 4],
      [0, 1],
    ],
    [3, 5, 2]
  );

  testFunc(
    capitalizedFirstLettersOf,
    ["Hello World", "Goodbye Moon"],
    ["hello world", "goodbye moon"]
  );

  testFunc(
    wordLengthsOf,
    [
      [5, 3],
      [6, 5],
    ],
    ["apple pie", "banana split"]
  );

  testFunc(
    flattenedArraysOf,
    [
      [1, 2, 3],
      [4, 5, 6],
    ],
    [
      [1, [2, 3]],
      [4, [5, 6]],
    ]
  );

  testFunc(sortedLettersOf, ["act", "abt", "art"], ["cat", "bat", "rat"]);

  testFunc(wrappedStringsOf, [["apple"], ["banana"]], ["apple", "banana"]);

  testFunc(
    extractNames,
    ["Alice", "Bob"],
    [{ name: "Alice" }, { name: "Bob" }]
  );

  testFunc(extractAges, [25, 30], [{ age: 25 }, { age: 30 }]);

  testFunc(
    firstLettersOfNames,
    ["A", "B"],
    [{ name: "Alice" }, { name: "Bob" }]
  );
  testFunc(firstLettersOfNames, [""], [{ name: "" }]);

  testFunc(
    calculateAreas,
    [6, 20],
    [
      { width: 2, height: 3 },
      { width: 4, height: 5 },
    ]
  );

  testFunc(extractFlags, [true, false], [{ active: true }, { active: false }]);

  testFunc(
    fullNames,
    ["Alice Smith", "Bob Brown"],
    [
      { firstName: "Alice", lastName: "Smith" },
      { firstName: "Bob", lastName: "Brown" },
    ]
  );

  testFunc(
    totalPrices,
    [20, 20],
    [
      { price: 10, quantity: 2 },
      { price: 5, quantity: 4 },
    ]
  );

  testFunc(
    isAdult,
    [false, true],
    [
      { name: "Alice", age: 17 },
      { name: "Bob", age: 22 },
    ]
  );

  testFunc(
    abbreviations,
    ["NY, USA", "LA, USA"],
    [
      { city: "New York", country: "USA" },
      { city: "Los Angeles", country: "USA" },
    ]
  );

  testFunc(
    mathScores,
    [90, 80],
    [
      { name: "Alice", scores: { math: 90, english: 85 } },
      { name: "Bob", scores: { math: 80, english: 75 } },
    ]
  );

  testFunc(
    extractCoordinates,
    [
      [1, 2],
      [3, 4],
    ],
    [
      { x: 1, y: 2 },
      { x: 3, y: 4 },
    ]
  );

  testFunc(
    fullNameAndAge,
    [
      ["Alice Smith", 25],
      ["Bob Brown", 30],
    ],
    [
      { firstName: "Alice", lastName: "Smith", age: 25 },
      { firstName: "Bob", lastName: "Brown", age: 30 },
    ]
  );

  testFunc(
    extractScores,
    [
      [90, 85],
      [80, 75],
    ],
    [
      { name: "Alice", scores: { math: 90, english: 85 } },
      { name: "Bob", scores: { math: 80, english: 75 } },
    ]
  );

  testFunc(
    keyValuePairs,
    [
      ["a", 1],
      ["b", 2],
    ],
    [
      { key: "a", value: 1 },
      { key: "b", value: 2 },
    ]
  );

  testFunc(
    splitFullNames,
    [
      ["Alice", "Smith"],
      ["Bob", "Brown"],
    ],
    [{ name: "Alice Smith" }, { name: "Bob Brown" }]
  );

  testFunc(
    normalizeScores,
    [0.8, 1],
    [
      { name: "Alice", score: 80 },
      { name: "Bob", score: 100 },
    ]
  );

  testFunc(
    normalizeScores,
    [1, 0.8],
    [
      { name: "Alice", score: 125 },
      { name: "Bob", score: 100 },
    ]
  );

  testFunc(percentageContributions, [16.67, 33.33, 50.00], [10, 20, 30]);

  testFunc(subtractMin, [2, 7, 0], [3, 8, 1]);

  testFunc(
    calculateRanks,
    [3, 1, 2],
    [
      { name: "Alice", score: 80 },
      { name: "Bob", score: 100 },
      { name: "Charlie", score: 90 },
    ]
  );

  testFunc(
    normalizeStringLengths,
    ["cat     ", "elephant", "dog     "],
    ["cat", "elephant", "dog"]
  );

  testFunc(centerJustifyStrings, ["  a  ", " abc ", "abcdef"], ["a", "abc", "abcdef"]);

  testFunc(
    centerJustifyStrings,
    ["  cat   ", "elephant", "  dog   "],
    ["cat", "elephant", "dog"]
  );

  testFunc(scaleToMax100, [25, 62.5, 100], [20, 50, 80]);

  //testFunc(differencesFromMean, [-1, 0, 1], [1, 2, 3]);
  testFunc(differencesFromMean, [-10, 0, 10], [10, 20, 30]);

  testFunc(
    stringFrequencies,
    [3, 2, 3, 3, 2],
    ["apple", "banana", "apple", "apple", "banana"]
  );

  testFunc(markLargestNumber, [false, true, false], [1, 2, 1]);
  testFunc(markLargestNumber, [false, true, false, false], [1, 3, 2, 0]);

}

function testReduceFunctions() {}

function test() {
  testFilterFunctions();
  testMapFunctions();
  testReduceFunctions();

  console.table(testLog);
}

test();
