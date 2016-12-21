const api = "https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?&key=";
const twitter = "https://twitter.com/intent/tweet?text=";

var getQuote = function () {
    var key = Math.floor(Math.random() * (999999 - 1 + 1)) + 1;

    $.getJSON(api + key, function (quoteJson) {
        $(".quote").html("\"" + quoteJson["quoteText"] + "\"");

        if (quoteJson["quoteAuthor"] != "") {
            $(".quoteAuthor").html(" - " + quoteJson["quoteAuthor"]);
        }

        $(".quoteFrame").fadeIn(600);
    });
};

var tweetQuote = function () {
    var tweetEncode = encodeURI($(".quote").html() + " " + $(".quoteAuthor").html());

    $(".tweetButton").attr("href", twitter + tweetEncode);
};

$("div .newQuoteButton").on("click", function () {
    $(".quoteFrame").fadeOut(600, getQuote);
});

$("div .tweetButton").on("click", function () {
    tweetQuote();
});

$(document).ready(function () {
    $(".quoteFrame").hide().animate({opacity: 100}, 600, getQuote);
});
