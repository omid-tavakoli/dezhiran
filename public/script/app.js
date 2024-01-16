const menu = document.querySelector(".menu");
const phone = document.querySelector(".phone");
const boxPhone = document.querySelector(".box-phone");
const iconPhone = document.querySelector(".icon-phone");
const Name = document.querySelector(".name");
const boxName = document.querySelector(".box-name");
const iconName = document.querySelector(".icon-name");
const search = document.querySelector(".search");
const backDrop = document.querySelector(".back-drop");
const iconSearch = document.querySelector(".icon-search");
const counters = document.querySelectorAll(".value");
const searchMobile = document.querySelector(".search-mobile");
const inputSearch = document.querySelector(".input-search");
const textContactManagement = document.querySelectorAll(".box-text-contact-management");
const activeContactManagement = document.querySelectorAll(".box-contact");
const boxImage = document.querySelector(".box-image");
const backDropImage = document.querySelector(".back-drop-image");
const imagePopUp = document.querySelector(".imagePopUp");
const rigthClick = document.querySelector(".rigthPic");
const leftClick = document.querySelector(".leftPic");

let numImage;
let srcImage;

let url = window.location.pathname;
let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};
let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const speed = 1000;
      const animate = () => {
        const value = +counter.getAttribute("count");
        const data = +counter.innerText;
        const time = value / speed;
        if (data < value) {
          counter.innerText = Math.ceil(data + time);
          if (value - data <= 20) {
            setTimeout(animate, 100);
          } else {
            setTimeout(animate, 1);
          }
        } else {
          counter.innerText = value;
        }
      };
      animate();
      observer.unobserve(entry.target);
    }
  });
}, options);
counters.forEach((counter) => {
  observer.observe(counter);
});
if (url.includes("contact")) {
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
}
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
function showmenu() {
  menu.classList.toggle("right-0");
  menu.classList.remove("right-[700px]");
}
function hidemenu() {
  menu.classList.toggle("right-[700px]");
  menu.classList.remove("right-0");
}
function shareBtn() {
  if (navigator.share) {
    navigator
      .share({
        title: "عنوان",
        text: "متن",
        url: "http://ilyagvc.online",
      })
      .then(() => console.log("متن به اشتراک گذاشته شد."))
      .catch((error) => console.error("خطا در به اشتراک گذاری متن:", error));
  } else {
    alert("مرورگر شما از این قابلیت پشتیبانی نمی‌کند.");
  }
}
function showSearch() {
  iconSearch.classList.add("hidden");
  search.classList.remove("hidden");
  backDrop.classList.remove("hidden");
}
function closeSearch() {
  iconSearch.classList.remove("hidden");
  backDrop.classList.add("hidden");
  search.classList.add("hidden");
}
function showSearchMobile() {
  searchMobile.classList.remove("hidden");
  inputSearch.focus();
}
function closeSearchMobile() {
  searchMobile.classList.add("hidden");
}
function hiddenTextContact(){
  textContactManagement.forEach((e)=>{
    e.classList.add('hidden')
  })
  activeContactManagement.forEach((e)=>{
    e.classList.remove('active-contact')
  })
}
function showTextContact (e,a){
  hiddenTextContact()
  let element = document.querySelector(`.${e}`)
  let active = document.querySelector(`.${a}`)
  active.classList.add('active-contact')
  element.classList.remove('hidden')
}
function closeImage(){
  boxImage.classList.add('hidden')
  backDropImage.classList.add('hidden')
}
function showImage(e){
  srcImage = e;
  boxImage.classList.remove('hidden')
  boxImage.classList.add('flex')
  backDropImage.classList.remove('hidden')
  imagePopUp.src=`${e}`
}
function rigthPic(){
  leftClick.classList.remove('hidden')
  var rightImage = srcImage.replace(/\d+(?=.png)/, function(match) {
    if (match == 1) {
      rigthClick.classList.add('hidden')
     return parseInt(match)
    }
    return parseInt(match) - 1;
  });
  srcImage = rightImage
  imagePopUp.src=`${rightImage}`
}
function leftPic(){
  rigthClick.classList.remove('hidden')
  var currentNumber = parseInt(srcImage.match(/\d+(?=.png)/)[0]);
  var nextNumber = currentNumber + 1;
  var nextImage = srcImage.replace(/\d+(?=.png)/, nextNumber);
  var imageExists = checkImageExists(nextImage);
  if(imageExists){
    srcImage = nextImage;
    imagePopUp.src = nextImage;
  } else {
    leftClick.classList.add('hidden')
  }
}
function checkImageExists(imageUrl){
  var http = new XMLHttpRequest();
  http.open('HEAD', imageUrl, false);
  http.send();
  return http.status != 404;
}