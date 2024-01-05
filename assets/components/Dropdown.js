const faqs = document.getElementsByClassName("faq");
let i;

for (i = 0; i < faqs.length; i++) {
  faqs[i].addEventListener("click", function() {
    this.classList.toggle("active");
  });
}