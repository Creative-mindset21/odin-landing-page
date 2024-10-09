// ! BUBBLE RIPPLE EFFECT

const btnEl = document.querySelector(".btn");
const btn2El = document.querySelector(".btn1");

btnEl.addEventListener("mouseover", (e) => {
  const x = e.pageX - btnEl.offsetLeft;
  const y = e.pageY - btnEl.offsetTop;

  btnEl.style.setProperty("--xPos", x + "px");
  btnEl.style.setProperty("--yPos", y + "px");
});

btn2El.addEventListener("mouseover", (e) => {
  const a = e.pageX - btn2El.offsetLeft;
  const b = e.pageY - btn2El.offsetTop;

  btn2El.style.setProperty("--aPos", a + "px");
  btn2El.style.setProperty("--bPos", b + "px");
});
