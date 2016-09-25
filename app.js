const api = "https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json&key=";
const twitter = "https://twitter.com/intent/tweet?text=";

var _getQuote = function () {
    var key = Math.floor(Math.random() * (999999 - 1 + 1)) + 1;

    $.getJSON(api + key, function (quoteJson) {
        $(".quote").html("\"" + quoteJson["quoteText"] + "\"");
        $(".quoteAuthor").html(" - " + quoteJson["quoteAuthor"]);
    });
};

var tweetQuote = function () {
    var tweetEncode = encodeURI($(".quote").html() + " " + $(".quoteAuthor").html());

    $(".tweetButton").attr("href", twitter + tweetEncode);
};

$("div .newQuoteButton").on("click", function () {
    _getQuote();
});

$("div .tweetButton").on("click", function () {
    tweetQuote();
});

$(document).ready(_getQuote());