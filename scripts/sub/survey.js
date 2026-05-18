const libraryName = document.querySelector(".library-name");
const libraryContent = libraryName.querySelectorAll("li");

const pagingBtn = document.querySelectorAll(".paging-box a");


libraryName.addEventListener("click", function(){
    this.classList.toggle("open");

    libraryContent.forEach(function(item){
        if(!item.classList.contains("show")){
            if(libraryName.classList.contains("open")){
                item.style.display = "block";
            }else{
                item.style.display = "none";
            }
        }
    });
});


pagingBtn.forEach(function(btn){
    btn.addEventListener("click", function(e){

        e.preventDefault();

        pagingBtn.forEach(function(item){
            item.classList.remove("active");
        });
        btn.classList.add("active");
    });
});

