const triggers = document.querySelectorAll(".drop > button");
const spans = document.querySelectorAll("h1 span");
// console.log(triggers);

triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
        let par = trigger.parentElement;
        let dropdown = par.querySelector(".dropdown");
        let liArr = dropdown.querySelectorAll("li");
        if(dropdown.classList.contains("visible")){
             dropdown.classList.remove("visible");
             liArr.forEach((li) => {
               li.classList.remove("visible");
             });
        }else{
            dropdown.classList.add("visible");
            liArr.forEach((li) => {
              li.classList.add("visible");
            });
        }
    });
});


const h1 = document.querySelector("h1");
const subtitle = document.querySelector(".subtitle");

window.addEventListener("load", () => {
    spans.forEach(span => {
        if(span.nextElementSibling === null){
            span.classList.add("active");
            setTimeout(() => {
                h1.classList.add("active");
                setTimeout(() => {
                    subtitle.classList.add("active");
                }, 2000);
            }, 4000);
        }
        span.classList.add("active");
    });

});

const lastSpan = document.querySelector("h1 span:last-child");
if(lastSpan.classList.contains("active")){
}


