const titles = [
    "oi/neitam",
    "highWaterMark",
    "ビッグ・アップル",
    "kainai industries",
    "el final de la tradición",
    "trivia",
    "last walk around mirror lake",
    "鼓風機",
    "sixtyniner",
    "deconstruction",
    "fqu97behty5tjuktqfia",
    "minipops 67",
    "chib", "Wilwatikta",
    "بناءةٌ",
    "how do you turn this on",
    "Comantsi",
    "Thread.sleep",
    "[object object]",
    "localhost:3000",
    "Veritas vincit",
    "nlogaX",
    "edit your friends",
    "\"test\"",
    "Gonggyeokjeonida",
    "AC/DC",
    "LF/CRLF"
];

$(document).ready(function(){
    //mobile menu toggling
    $(".logo a").text(
        titles[Math.floor((Math.random()*titles.length))]
    );
});