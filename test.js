import filterModule from "./filter.js";
import mapModule from "./map.js";
import reduceModule from "./reduce.js";

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
} = filterModule;

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
} = mapModule;

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
} = reduceModule;

const testLog = [];

const testFunc = function (func, expected,...args){
  const result = func(args[0])
  const resultStr = "" + result;
  const expectedStr = "" + expected;
  const visual = resultStr === expectedStr ? "✅" : "❌";
  testLog.push({"Function" : func.name, "Args" : args.join(" | "), "Result" : result, "Expected" : expected, "Visual": visual});
}

function test(){

  
  console.table(testLog);
}

test();