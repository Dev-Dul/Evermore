const triggers = document.querySelectorAll(".drop > button");
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