function showInfo(region) {
  const info = {
    australia: "🐔 Australia has the highest population of desert chickens. They survive purely on chaos and snacks.",
    europe: "🐓 Europe chickens are highly intellectual and often debate philosophy.",
    asia: "🐣 Asia is home to the legendary fast-running 'Ninja Chickens'.",
    americas: "🐔 The Americas have the largest chicken farms, ruled by the Supreme Rooster Council."
  };

  document.getElementById("map-info").innerText = info[region];
}
