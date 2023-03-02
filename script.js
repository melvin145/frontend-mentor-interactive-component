const main_container=document.querySelector(".rating-section");
const thank_container=document.querySelector(".Thank-section");
const submit_btn=document.getElementById("submit");
const options=document.querySelectorAll(".opt");
const value=document.getElementById("value");
let answer=0;

submit_btn.addEventListener("click",()=>{
      main_container.style.display="none";
      thank_container.style.display="flex";
      value.innerText=answer;
})
console.log(options);

options.forEach((option) => {
      option.addEventListener("click",handleRatingBtnClick);
});

function handleRatingBtnClick(event){
      options.forEach((option)=>{
            option.classList.remove("active");
      });
      event.target.classList.add("active");
      answer=event.target.innerText;
}