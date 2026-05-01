
const texts = ["Cow", "Goat", "Sheep"];
let i = 0;

setInterval(() => {
  console.log(texts[i]);
  i = (i + 1) % texts.length;
}, 2000);