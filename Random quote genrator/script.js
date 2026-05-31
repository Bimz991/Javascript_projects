const quotes = [
  "All our dreams can come true, if we have the courage to pursue them — Walt Disney",
  "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
  "Dreams come true. Without that possibility, nature would not incite us to have them. — John Updike,",
  "All our dreams can come true, if we have the courage to pursue them — Walt Disney",
  "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
  "Dreams come true. Without that possibility, nature would not incite us to have them. — John Updike,",
  "All our dreams can come true, if we have the courage to pursue them — Walt Disney",
  "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
  "Dreams come true. Without that possibility, nature would not incite us to have them. — John Updike,",
  "All our dreams can come true, if we have the courage to pursue them — Walt Disney",
  "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
  "Dreams come true. Without that possibility, nature would not incite us to have them. — John Updike,",
];

const button = document.querySelector("button");
const quote = document.querySelector("h1");

button.addEventListener("click", () => {
  const index = Math.floor(Math.random() * 12);
  quote.textContent = quotes[index];
});
