// 1-р хуудаснаас 2-р хуудас руу шилжих
document.getElementById("nextBtn1").addEventListener("click", function() {
  document.getElementById("page1").classList.remove("active");
  document.getElementById("page2").classList.add("active");
});

// 2-р хуудаснаас 3-р хуудас руу шилжих
document.getElementById("nextBtn2").addEventListener("click", function() {
  document.getElementById("page2").classList.remove("active");
  document.getElementById("page3").classList.add("active");
});

// 2-р хуудас руу буцах
document.getElementById("backBtn1").addEventListener("click", function() {
  document.getElementById("page2").classList.remove("active");
  document.getElementById("page1").classList.add("active");
});

// 3-р хуудас руу буцах
document.getElementById("backBtn2").addEventListener("click", function() {
  document.getElementById("page3").classList.remove("active");
  document.getElementById("page2").classList.add("active");
});
