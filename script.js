// ! Header Scroll
let nav = document.querySelector(".navbar");
window.addEventListener("scroll", function(){
    if(document.documentElement.scrollTop > 100){
        nav.classList.add("header-scrolled")
    }else{
        nav.classList.remove("header-scrolled")
    }
})


// ! Swiper.js kodları
var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    loop: true,
    
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    
    speed: 800,
});

// ! conter bolumu 

let hasCounted = false;
window.addEventListener("scroll", () => {
    if(scrollY > 2000 && !hasCounted){
        hasCounted = true;
        function counter(id,start,end,duration){
            let obj = document.getElementById(id);
            let current = start;
            let range = end - start;
            let increment = end > start ? 1 : -1;
            let step = Math.abs(Math.floor(duration / range));
            let timer = setInterval(()=>{
                current += increment
                obj.textContent = current;
    
                if(current == end){
                    clearInterval(timer)
                }
            },step)
        }
        counter("count1", 50, 200, 3000)
        counter("count2", 50, 300, 3000)
        counter("count3", 50, 200, 3000)
        counter("count4", 50, 250, 3000)
    }
})


// ! our partner
var swiper = new Swiper('.our-partner', {
    slidesPerView: 4, // Aynı anda kaç tane görselin görüneceğini ayarla
    spaceBetween: 20, // Slide'lar arasındaki boşluğu ayarla
    loop: true, // Sonsuz döngü ayarı
    autoplay: {
      delay: 3000, // Otomatik kaydırma süresi
      disableOnInteraction: false,
    },
    breakpoints: {
      // Farklı ekran boyutları için görünüm sayısını ayarla
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
  