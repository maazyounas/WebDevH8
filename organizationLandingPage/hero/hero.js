const exploreBtn = document.getElementById("heroExploreBtn");
const enrollBtn = document.getElementById("heroEnrollBtn");

exploreBtn.addEventListener("click", function(){
    alert("Courses section coming soon!");
});

enrollBtn.addEventListener("click", function(){
    window.location.href = "../form/form.html";
});
