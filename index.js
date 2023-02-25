document.addEventListener("DOMContentLoaded", function () {
  // Find #emojis
  var emojis = document.getElementById("emojis");

  // Emoji list
  var emojiList = [
    "🍊",
    "🍋",
    "🍇",
    "🍅",
    "🍐",
    "🥭",
    "🍉",
    "🍌",
    "🥥",
    "🍍",
    "🥝",
    "🍓",
    "🫐",
    "🍏",
    "🍒",
    "🍑",
    "🍈",
  ];

  // Create a span for each emoji
  for (var i = 0; i < emojiList.length; i++) {
    // Create a span
    var span = document.createElement("div");

    span.classList.add("emoji");

    // Set the innerHTML to the emoji
    span.innerHTML = emojiList[i];

    // Append the span to #emojis
    emojis.appendChild(span);
  }

  // Clone the emojis
  for (var i = 0; i < 30; i++) {
    // Clone the emojis
    var clone = emojis.cloneNode(true);

    // Add the clone to the body
    document.body.appendChild(clone);
  }

  // Find all the spans
  var spans = document.querySelectorAll("#emojis div");

  // Loop through the spans
  for (var i = 0; i < spans.length; i++) {
    // Get the span
    var span = spans[i];

    // Position it randomly
    span.style.left = Math.random() * 100 + "%";
    span.style.top = Math.random() * 100 + "%";
  }
});
