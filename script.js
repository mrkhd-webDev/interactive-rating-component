const formRating = document.getElementById("rate");
const labelRating = document.getElementsByClassName("rating");
const numberRating = document.getElementsByName("number");
const mainCard = document.getElementsByClassName("card");
const cardThanks = document.getElementsByClassName("card-thanks");
const recived = document.getElementById("recived");

formRating.addEventListener("submit", submitRating);

function submitRating(e) {
  e.preventDefault();

  let radioValue = false;

  for (let i = 0; i < numberRating.length; i++) {
    if (numberRating[i].checked == true) {
      radioValue = true;

      let numberRecived = numberRating[i].value;

      mainCard[0].classList.add("display-none");
      cardThanks[0].classList.remove("display-none");

      recived.appendChild(document.createTextNode(numberRecived));
    }
  }
  if (!radioValue) {
    alert("Please choose the number of stars");
  }
}

for (let i = 0; i < labelRating.length; i++) {
  labelRating[i].addEventListener("click", checkedRating);
}

function checkedRating(number) {
  let label = number.target;
  clear();
  label.classList.add("checked");
}

function clear() {
  for (let i = 0; i < labelRating.length; i++) {
    labelRating[i].classList.remove("checked");
  }
}
