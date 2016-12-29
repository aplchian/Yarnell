$(document).ready(function() {
    var txt = $('.post-main-body-content')[0].textContent
    wordCount = txt.replace( /[^\w ]/g, "" ).split( /\s+/ ).length
    console.log(wordCount)

    var readingTimeInMinutes = Math.floor(wordCount / 250) + 1;
    var readingTimeAsString = readingTimeInMinutes + " min read";
    console.log(readingTimeAsString)
    $('.time-read').text(readingTimeAsString);
});
