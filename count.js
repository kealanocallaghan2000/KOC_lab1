//including spaces
function wordCount(word) {
    var count = word.replace(/\s/g, "").length;
    return count;
}
var myCount = wordCount("Test 1");
console.log(myCount);
// combine both functions into one which accepts an optimal parameter, so character count on input string can include or exclude spaces.
function space_or_not(value, spaces) {
    var num;
    if (spaces) {
        num = value.replace(/\s+/, "").length;
    }
    else {
        num = value.length;
    }
    return num;
}
console.log("spaces", false);
console.log("spaces", true);
