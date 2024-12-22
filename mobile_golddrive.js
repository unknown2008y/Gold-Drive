function checkOrientation() {
    const warning = document.getElementById('orientation-warning');
    if (window.innerWidth > window.innerHeight) {
        // Ландшафтная ориентация
        warning.style.display = 'flex';
    } else {
        // Портретная ориентация
        warning.style.display = 'none';
    }
}

// Проверяем ориентацию при загрузке
window.addEventListener('load', checkOrientation);

// Проверяем ориентацию при изменении размера окна
window.addEventListener('resize', checkOrientation);

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
const additional = document.querySelectorAll('.additional');

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
    threshold: 0.2
});

observer9.observe(total_care_heading)



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
const instructors_icon = document.querySelector(".instructors_icon")

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
const russia_img = document.querySelector('.russia_img')

armenian.addEventListener('click', function(event) {
    russion.classList.toggle('opacity')
    english.classList.toggle('opacity')
    square_languages.classList.toggle('opacity_background')
    usa_img.classList.toggle('opacity_flags')
    russia_img.classList.toggle('opacity_flags')
    square_languages.style.transition = "all 0.3s ease"

})


russion.addEventListener('click', function(event) {
    window.location.href = "golddrive_russion.html"
})

english.addEventListener('click', function(event) {
    window.location.href = "golddrive_english.html"
})