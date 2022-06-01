//Info

const info = {
    'Jennifer': {
      "name": "Jennifer",
      "img": "../../assets/images/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    'Sophia': {
      "name": "Sophia",
      "img": "../../assets/images/pets-sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    'Woody': {
      "name": "Woody",
      "img": "../../assets/images/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    'Scarlett': {
      "name": "Scarlett",
      "img": "../../assets/images/pets-scarlett.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    'Katrine': {
      "name": "Katrine",
      "img": "../../assets/images/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    'Timmy': {
      "name": "Timmy",
      "img": "../../assets/images/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    "Freddie": {
      "name": "Freddie",
      "img": "../../assets/images/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    "Charly": {
      "name": "Charly",
      "img": "../../assets/images/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
}

// Burger-menu

const wrapper = document.querySelector('.wrapper');
const wrapperActive = document.querySelector('.wrapper_active');
const page = document.querySelector('.page');
const burgerWrapper = document.querySelector('.wrapper__burger');
const burgerWrapperActive = document.querySelector('.wrapper__burger_active');
const burgerMenu = document.querySelector('#menu-inactive');
const burgerMenuActive = document.querySelector('#menu-active');
const burgerMenuRotated = document.querySelector('.header__burger-lines_rotated');
const burgerMenuInactive = document.querySelector('.header__burger-lines_inactive');
const navigationHelp = document.querySelector('#nav-help');
const navigationContacts = document.querySelector('#nav-conts');

const openBurgerMenu = () => {
    burgerWrapper.classList.add('wrapper__burger_active');
    wrapper.classList.add('wrapper_active');
    burgerMenu.classList.add('header__burger-lines_rotated');
    burgerMenuActive.classList.add('header__burger-lines_rotated');
    burgerMenuActive.classList.remove('header__burger-lines_inactive');
    burgerMenu.classList.remove('header__burger-lines_inactive');
    page.style['overflow-y'] = 'hidden';
};

const closeBurgerMenu = () => {
    page.style['overflow-y'] = 'visible';
    page.style['overflow-x'] = "hidden";
    burgerWrapper.classList.remove('wrapper__burger_active');
    wrapper.classList.remove('wrapper_active');
    burgerMenu.classList.add('header__burger-lines_inactive');
    burgerMenuActive.classList.add('header__burger-lines_inactive');
    burgerMenu.classList.remove('header__burger-lines_rotated');
    burgerMenuActive.classList.remove('header__burger-lines_rotated');
}

page.style['overflow-x'] = "hidden";
burgerMenu.addEventListener('click', openBurgerMenu);
burgerMenuActive.addEventListener('click', closeBurgerMenu);
if (wrapperActive) {
    wrapper.addEventListener('click', closeBurgerMenu);
}
navigationHelp.addEventListener('click', () => {
    closeBurgerMenu();
    navigationHelp.href = '#help';
});
navigationContacts.addEventListener('click', () => {
    closeBurgerMenu();
    navigationContacts.href = '#contacts';
});

// Popup

// const getTemplate = () => {
//     const popupContainer = document.querySelector('.popup');
//     const cardElement = document
//     .querySelector('.popup__template')
//     .content.querySelector(".popup__element")
//     .cloneNode(true);
//     popupContainer.append(cardElement);
//     return popupContainer;
// };

// const openPopup = () => {
//     const popup = document.querySelector('.popup');
//     popup.classList.add('popup_opened');
// }

// const generateCard = (dog) => {
//     const newElement = getTemplate();
//     newElement.querySelector(".popup__image-element").src = info[dog]['img'];
//     newElement.querySelector(".popup__title").textContent = info[dog]['name'];
//     newElement.querySelector(".popup__subtitle").textContent = `${info[dog]['type']} - ${info[dog]['breed']}`;
//     newElement.querySelector('.popup__description').textContent = info[dog]['description'];
//     newElement.querySelectorAll('.popup__item')[0].textContent = info[dog]['age'];
//     newElement.querySelectorAll('.popup__item')[1].textContent = info[dog]['inoculations'];
//     newElement.querySelectorAll('.popup__item')[2].textContent = info[dog]['diseases'];
//     newElement.querySelectorAll('.popup__item')[3].textContent = info[dog]['parasites'];
//     console.log(newElement);
//     openPopup();
//     return newElement;
// };

// const petCards = Array.from(document.querySelectorAll('.pets__card'));

// petCards.forEach(function (item) {
//     item.addEventListener('click', generateCard(item.id));
// });