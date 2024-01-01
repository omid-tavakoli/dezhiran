const menu = document.querySelector(".menu")
const hidemenu = document.querySelector(".hidemenu")
const showmenu = document.querySelector(".showmenu")

function toggleAnswer(id) {
  const answer = document.getElementById("answer" + id);
  console.log(answer)
  if (answer.classList == "hidden" ) {
    answer.classList.remove("hidden");
  } else {
    answer.classList.add("hidden");
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
