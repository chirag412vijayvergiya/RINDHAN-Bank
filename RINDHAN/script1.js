const modal = document.querySelector(".modal1");
const modal2 = document.querySelector(".modal2");
const overlay = document.querySelector(".overlay");
const btnCloseModal1 = document.querySelector(".btn--close-modal1");
const btnCloseModal2 = document.querySelector(".btn--close-modal2");
const btnsOpenModal1 = document.querySelectorAll(".btn--show-modal1");
const btnsOpenModal2 = document.querySelectorAll(".btn--show-modal2");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const nav = document.querySelector(".nav");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");
const btnLogin = document.querySelector(".loginbtn");
const inputLoginUsername = document.querySelector("#username");
const inputLoginPin = document.querySelector("#password");
const emailid = document.getElementById("email");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const message = document.getElementById("message");
const phone = document.getElementById("phone");
const submit = document.querySelector(".submitbtn");
//Modal Window

//Modal Window 2 for submit
const openModal2 = function (e) {
  e.preventDefault();
  modal2.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal2 = function (e) {
  modal2.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal2.forEach((btn) => btn.addEventListener("click", openModal2));

btnCloseModal2.addEventListener("click", closeModal2);
overlay.addEventListener("click", closeModal2);

// Modal window for login
const openModal1 = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal1 = function (e) {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal1.forEach((btn) => btn.addEventListener("click", openModal1));

btnCloseModal1.addEventListener("click", closeModal1);
overlay.addEventListener("click", closeModal1);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
//
// Button scrolling
btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log("Current scroll (X/Y)", window.pageXOffset, window.pageYOffset);

  console.log(
    "height/width viewport",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  section1.scrollIntoView({ behavior: "smooth" });
});
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
//////////////////////////
const accounts = {
  shubham: "1234",
  kapil: "2356",
  akshat: "4567",
  chaitanya: "7890",
  anmol: "9876",
  kevin: "8894",
};

btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(inputLoginPin.value);
  console.log(accounts[inputLoginUsername.value]);
  if (accounts[inputLoginUsername.value] === inputLoginPin.value) {
    window.location.href = "index2.html";
    alert("login successfully");
    localStorage.setItem("username", inputLoginUsername.value);
  } else {
    alert("wrong information");
  }
});

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

// Slider
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

//2nd section

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  console.log(clicked);
  //Guard clause
  if (!clicked) return;

  //Remove active class
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

  //Active tab
  clicked.classList.add("operations__tab--active");

  //Active content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

submit.addEventListener("click", function (e) {
  e.preventDefault();
  sendEmail();
  firstName.value = "";
  lastName.value = "";
  emailid.value = "";
  phone.value = "";
  message.value = "";
  closeModal2();
});
const sendEmail = function () {
  Email.send({
    SecureToken: "6f24e761-2127-4f90-a393-ef12a64d3ffd",
    To: "chirag4vv@gmail.com",
    From: emailid.value,
    Subject: "New Contact Enquiry(RINDHAN BANK)",
    Body: `Name: ${firstName.value} ${lastName.value} <br/> Email: ${emailid.value} <br/> Phone: ${phone.value} <br/> Message: ${message.value}`,
  }).then((message) => alert(message));
  console.log(emailid.value);
};
