const api = "https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json&key=";

var _getQuote = function () {
    var key = Math.floor(Math.random() * (999999 - 1 + 1)) + 1;

    $.getJSON(api + key, function (quoteJson) {
        $(".quote").html("\"" + quoteJson["quoteText"] + "\"");
        $(".quoteAuthor").html("- " + quoteJson["quoteAuthor"]);
    });
};

$("div .newQuoteButton").on("click", function () {
    _getQuote();
});