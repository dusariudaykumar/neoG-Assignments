const baselineContainer = document.querySelector(".baseline-position");
const leadingContainer = document.querySelector(".leading-position");
const stackedContainer = document.querySelector(".stacked-position");

const baseline = document.querySelector(".baseline");
const leading = document.querySelector(".leading");
const stacked = document.querySelector(".stacked");

baselineContainer.style.display = "none";
leadingContainer.style.display = "none";
stackedContainer.style.display = "none";

baseline.addEventListener("click", () => {
  baselineContainer.style.display = "flex";
  setTimeout(() => {
    baselineContainer.style.display = "none";
  }, 5000);
});

leading.addEventListener("click", () => {
  leadingContainer.style.display = "flex";
  setTimeout(() => {
    leadingContainer.style.display = "none";
  }, 5000);
});

stacked.addEventListener("click", () => {
  stackedContainer.style.display = "flex";
  setTimeout(() => {
    stackedContainer.style.display = "none";
  }, 5000);
});
