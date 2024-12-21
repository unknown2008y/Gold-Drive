history.scrollRestoration = "manual"

document.addEventListener('DOMContentLoaded', function () {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /iphone|ipod|ipad|android|blackberry|windows phone/.test(userAgent);

    // Проверяем, добавлен ли параметр redirect в URL
    if (!window.location.search.includes('redirected=true')) {
        if (isMobile) {
            window.location.href = "mobile_golddrive.html?redirected=true";
        } else {
            window.location.href = "golddrive_russion.html?redirected=true";
        }
    
    } else {
        console.log("Перенаправление уже выполнено.");
    }


    const newUrl = window.location.pathname
    history.replaceState(null, "", newUrl);
});











// document.addEventListener("scroll", () =>{
//     if (window.scrollY > 6400) {
//         window.scrollTo(0, 6400)
//     }
// })

// let isScrolling = false;

// const limitScroll = () => {
//   if (window.scrollY > 6400) {
//     window.scrollTo(0, 6400);
//   }
// };

// // Добавляем обработчик прокрутки
// document.addEventListener("scroll", () => {
//   if (!isScrolling) {
//     isScrolling = true;
//     requestAnimationFrame(() => {
//       limitScroll();
//       isScrolling = false;
//     });
//   }
// });

// // Обрабатываем случай перемещения ползунка
// document.addEventListener("mousemove", () => {
//   if (window.scrollY > 6400) {
//     window.scrollTo(0, 6400);
//   }
// });

// // Обрабатываем случай отпускания мыши
// document.addEventListener("mouseup", () => {
//   if (window.scrollY > 6400) {
//     window.scrollTo(0, 6400);
//   }
// });

const goldcar2 = document.querySelector('.goldcar2');

    document.addEventListener('mousemove', (event) => {
      const { clientX, clientY } = event; // Координаты мыши
      const { innerWidth, innerHeight } = window; // Размеры окна браузера

      // Вычисляем проценты движения мыши
      const xPercent = (clientX / innerWidth - 0.5) * 2; // Значения от -1 до 1
      const yPercent = (clientY / innerHeight - 0.5) * 2;

      // Сдвиг изображения в зависимости от положения мыши
      const moveX = xPercent * 0.6 // 50 пикселей сдвига
      const moveY = yPercent * 0.6;

      goldcar2.style.transform = `translate(${moveX}px, ${moveY}px)`

    })


const programpage1 = document.querySelector('.programpage1');

const observer1 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            programpage1.classList.add('animation');
        }
    });
}, {
    threshold: 0.2
});

observer1.observe(programpage1)


const programpage2 = document.querySelector('.programpage2');

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            programpage2.classList.add('animation');
        }
    });
}, {
    threshold: 0.2
});

observer2.observe(programpage2)


const programpage3 = document.querySelector('.programpage3');

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            programpage3.classList.add('animation');
        }
    });
}, {
    threshold: 0.2
});

observer3.observe(programpage3)


const prices = document.querySelector('.prices');

const observer4 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            prices.classList.add('animation');
        }
    });
}, {
    threshold: 0.7
});


observer4.observe(prices)

const list1 = document.querySelector('.list1');

const observer5 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            list1.classList.add('animation');
        }
    });
}, {
    threshold: 0.2
});

observer5.observe(list1)

const list2 = document.querySelector('.list2');

const observer6 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            list2.classList.add('animation');
        }
    });
}, {
    threshold: 0.2
});

observer6.observe(list2)

const list3 = document.querySelector('.list3');


const observer7 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            list3.classList.add('animation');
        }
    });
}, {
    threshold: 0.2
});

observer7.observe(list3)

const additional_price_heading = document.querySelector('.additional_price_heading');
const additional = document.querySelector('.additional');

const observer8 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            additional_price_heading.classList.add('animation');
            additional.target.classList.add("animation")
        }
    });
}, {
    threshold: 0.2
});

observer8.observe(additional_price_heading)

const total_care_heading = document.querySelector(".total_care_heading")
const goldcup = document.querySelector(".goldcup")
const total_heading_description = document.querySelector('.total_heading_description')
const total_heading_description2 = document.querySelector('.total_heading_description2')

const observer9 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            total_care_heading.classList.add('animation');
            goldcup.classList.add('animation')
            total_heading_description.classList.add('animation')
        }
    });
}, {
    threshold: 0.4
    
});

observer9.observe(goldcup)



const items = document.querySelector('.items')
const book = document.querySelector('.book')
const house = document.querySelector('.house')
const exam = document.querySelector('.exam')
const wheel = document.querySelector('.wheel')
const caricon2 = document.querySelector('.caricon2')


const observer10 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            items.classList.add("animation")
            book.style.animation  = "opacity 1s ease"
            house.style.animation  = "opacity 1s ease"
            exam.style.animation  = "opacity 1s ease"
            wheel.style.animation  = "opacity 1s ease"
            caricon2.style.animation  = "opacity 1s ease"

            book.style.animationFillMode  = "forwards"
            house.style.animationFillMode  = "forwards"
            exam.style.animationFillMode  = "forwards"
            wheel.style.animationFillMode  = "forwards"
            caricon2.style.animationFillMode  = "forwards"
        }
    });
}, {
    threshold: 0.2
});

observer10.observe(items)

const carpark_img = document.querySelector('.carpark_img');
const parkingicon = document.querySelector('.parkingicon');
const carpark_heading1 = document.querySelector('.carpark_heading1');

const observer11 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            carpark_img.classList.add('animation');
            parkingicon.classList.add('animation');
            carpark_heading1.classList.add('animation');
        }
    });
}, {
    threshold: 0.2
});


observer11.observe(carpark_img)

const carpark_description1 = document.querySelector('.carpark_description1');
const carpark_description2 = document.querySelector('.carpark_description2');
const carpark_description3 = document.querySelector('.carpark_description3');

const description_mark1 = document.querySelector('.description_mark1');
const description_mark2 = document.querySelector('.description_mark2');
const description_mark3 = document.querySelector('.description_mark3');

const observer12 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            carpark_description1.classList.add('animation');
            carpark_description2.classList.add('animation');
            carpark_description3.classList.add('animation');

            description_mark1.classList.add('animation');
            description_mark2.classList.add('animation');
            description_mark3.classList.add('animation');
        }
    });
}, {
    threshold: 0.4
});

const instructors_icon = document.querySelector(".instructors_icon")
const instructors_heading1 = document.querySelector(".instructors_heading1")

if (window.innerWidth <= 1738){

    const observer13 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                instructors_icon.style.animation = "instructors_icon_animation 1s ease-in-out"
                instructors_icon.style.animationFillMode = "forwards"


                instructors_heading1.style.animation = "instructors_heading_animation 1s ease"
                instructors_heading1.style.animationDelay = "0.3s"
            


            }
        });
    }, {
        threshold: 0.7
    
    });
        instructors_heading1.addEventListener("animationend", () => {
        instructors_heading1.style.opacity = "1";
    });


    observer13.observe(instructors_icon)
}


if (window.innerWidth >= 1738){

    const observer13 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                instructors_icon.style.animation = "instructors_icon_animation 1s ease-in-out"
                instructors_icon.style.animationFillMode = "forwards"


                instructors_heading1.style.animation = "instructors_heading_formedia 1s ease"
                instructors_heading1.style.animationDelay = "0.3s"
            


            }
        });
    }, {
        threshold: 0.7
    
    });
        instructors_heading1.addEventListener("animationend", () => {
        instructors_heading1.style.opacity = "1";
    });


    observer13.observe(instructors_icon)
}


const instcructors_description1 = document.querySelector(".instcructors_description1");
const instcructors_description2 = document.querySelector(".instcructors_description2");
const instcructors_description3 = document.querySelector(".instcructors_description3");
const instcructors_description4 = document.querySelector(".instcructors_description4");
const instcructors_description5 = document.querySelector(".instcructors_description5");

const staricon1 = document.querySelector(".staricon1");
const staricon2 = document.querySelector(".staricon2");
const staricon3 = document.querySelector(".staricon3");
const staricon4 = document.querySelector(".staricon4");
const staricon5 = document.querySelector(".staricon5");

const observer14 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            instcructors_description1.style.animation = "opacity 1s ease"
            instcructors_description2.style.animation = "opacity 1s ease"
            instcructors_description3.style.animation = "opacity 1s ease"
            instcructors_description4.style.animation = "opacity 1s ease"
            instcructors_description5.style.animation = "opacity 1s ease"

            staricon1.style.animation = "opacity 1s ease"
            staricon2.style.animation = "opacity 1s ease"
            staricon3.style.animation = "opacity 1s ease"
            staricon4.style.animation = "opacity 1s ease"
            staricon5.style.animation = "opacity 1s ease"

            instcructors_description1.addEventListener("animationend", () => {
                staricon1.style.opacity = "1"
                staricon2.style.opacity = "1"
                staricon3.style.opacity = "1"
                staricon4.style.opacity = "1"
                staricon5.style.opacity = "1"

                instcructors_description1.style.opacity = "1"
                instcructors_description2.style.opacity = "1"
                instcructors_description3.style.opacity = "1"
                instcructors_description4.style.opacity = "1"
                instcructors_description5.style.opacity = "1"
        });
        }
    });
}, {
    threshold: 0.2
});

observer14.observe(instcructors_description1)


observer12.observe(carpark_description1)



const pricelist = document.querySelector(".pricelist")

pricelist.addEventListener("click", function(event) {
    list1.scrollIntoView({behavior: "smooth"})

}) 

const carpark_button = document.querySelector(".carpark_button")

carpark_button.addEventListener("click", function(event) {
    parkingicon.scrollIntoView({behavior: "smooth"})

}) 

const total_care_button = document.querySelector(".total_care_button")

total_care_button.addEventListener("click", function(event) {
    goldcup.scrollIntoView({behavior: "smooth"})

}) 

const instructors_button = document.querySelector(".instructors_button")

instructors_button.addEventListener("click", function(event) {
    instructors_icon.scrollIntoView({behavior: "smooth"})

})

const feedback_button = document.querySelector(".feedback_button")
const feedback_heading1 = document.querySelector(".feedback_heading1")

feedback_button.addEventListener("click", function(event) {
    feedback_heading1.scrollIntoView({behavior: "smooth"})

}) 


const armenian = document.querySelector('.armenian')
const russion = document.querySelector('.russion')
const english = document.querySelector('.english')
const square_languages = document.querySelector('.square_languages')
const usa_img = document.querySelector('.usa_img')
const armenia_img = document.querySelector('.armenia_img')

russion.addEventListener('click', function(event) {
    armenian.classList.toggle('opacity')
    english.classList.toggle('opacity')
    square_languages.classList.toggle('opacity_background')
    usa_img.classList.toggle('opacity_flags')
    armenia_img.classList.toggle('opacity_flags')
    square_languages.style.transition = "all 0.3s ease"

})

armenian.addEventListener('click', function(event) {
    window.location.href = "index.html"
})

english.addEventListener('click', function(event) {
    window.location.href = "golddrive_english.html"
})