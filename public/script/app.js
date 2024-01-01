const menu = document.querySelector(".menu")
const hidemenu = document.querySelector(".hidemenu")
const showmenu = document.querySelector(".showmenu")
const question = document.querySelector(".text-question")
const boxQuestion = document.querySelector(".question")



function toggleAnswer(id) {
  const answer = document.getElementById("answer" + id);
  console.log(answer)
  if (answer.classList == "hidden" ) {
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
showmenu.addEventListener("click" , () => {
    menu.classList.toggle("right-0")
    menu.classList.remove("right-[700px]")

})
hidemenu.addEventListener("click" , () => {
    menu.classList.toggle("right-[700px]")
    menu.classList.remove("right-0")

})
