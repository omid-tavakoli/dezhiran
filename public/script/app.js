const menu = document.querySelector(".menu");
const hidemenu = document.querySelector(".hidemenu");
const showmenu = document.querySelector(".showmenu");
const phone = document.querySelector(".phone");
const boxPhone = document.querySelector(".box-phone");
const iconPhone = document.querySelector(".icon-phone");
const Name = document.querySelector(".name");
const boxName = document.querySelector(".box-name");
const iconName = document.querySelector(".icon-name");

Name.addEventListener("focusin", () => {
  boxName.classList.add("border-pale-blue");
  boxName.classList.remove("border-gray-border");
  iconName.classList.add("text-pale-blue");
});

Name.addEventListener("focusout", () => {
  iconName.classList.remove("text-pale-blue");
  boxName.classList.remove("border-pale-blue");
  boxName.classList.add("border-gray-border");
});

phone.addEventListener("focusin", () => {
  boxPhone.classList.add("border-pale-blue");
  boxPhone.classList.remove("border-gray-border");
  iconPhone.classList.add("text-pale-blue");
});

phone.addEventListener("focusout", () => {
  iconPhone.classList.remove("text-pale-blue");
  boxPhone.classList.remove("border-pale-blue");
  boxPhone.classList.add("border-gray-border");
});
function toggleAnswer(id) {
  const answer = document.getElementById("answer" + id);
  const question = document.querySelector(".text-question" + id);
  const boxQuestion = document.querySelector(".question" + id);

  if (answer.classList == "hidden") {
    answer.classList.remove("hidden");
    question.classList.add("text-pale-blue");
    question.classList.remove("text-quiz-faq");
    boxQuestion.classList.add("rounded-t-md");
    boxQuestion.classList.remove("rounded-md");
  } else {
    answer.classList.add("hidden");
    question.classList.remove("text-pale-blue");
    question.classList.add("text-quiz-faq");
    boxQuestion.classList.remove("rounded-t-md");
    boxQuestion.classList.add("rounded-md");
  }
}
showmenu.addEventListener("click", () => {
  menu.classList.toggle("right-0");
  menu.classList.remove("right-[700px]");
});
hidemenu.addEventListener("click", () => {
  menu.classList.toggle("right-[700px]");
  menu.classList.remove("right-0");
});
