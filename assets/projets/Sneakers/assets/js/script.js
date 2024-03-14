console.log('hello world');

// Profile pic

let pfp = document.getElementById('profilepic');

pfp.addEventListener('mouseover', () => {
    pfp.style.cursor = 'pointer'
    pfp.style.border = '2px solid #FF7E1B'
});

pfp.addEventListener('mouseout', () => {
    pfp.style.cursor = 'pointer'
    pfp.style.border = '0px solid #FF7E1B'
});

// Footer

let currdate = new Date();

let yyyy = currdate.getFullYear();

let copyright = document.getElementById('copyright');

copyright.innerText = `© ${yyyy} Sneakers | All Rights Reserved`;

// Count

let i = 1;

let count = document.getElementById('count');

count.innerText = i;

// Minus

let minus = document.getElementById('minus'); 

if (i === 1) {
    minus.style.filter = 'invert(64%) sepia(0%) saturate(33%) hue-rotate(202deg) brightness(93%) contrast(90%)';
    // Source du code pour colorer mon SVG https://codepen.io/sosuke/pen/Pjoqqp.
};

minus.addEventListener('click', () => {
    if (i > 1) {
        count.innerText = i - 1
        i -= 1
        if (i === 1) {
            minus.style.filter = 'invert(64%) sepia(0%) saturate(33%) hue-rotate(202deg) brightness(93%) contrast(90%)';
        }
        if (i < 10) {
            plus.style.filter = 'invert(72%) sepia(85%) saturate(4153%) hue-rotate(347deg) brightness(102%) contrast(101%)';
        }
    }
});

// Plus

let plus = document.getElementById('plus');

plus.addEventListener('click', () => {
    if (i < 10) {
        count.innerText = i + 1
        i += 1
        if (i === 10) {
            plus.style.filter = 'invert(64%) sepia(0%) saturate(33%) hue-rotate(202deg) brightness(93%) contrast(90%)';
        }
        if (i > 1) {
            minus.style.filter = 'invert(72%) sepia(85%) saturate(4153%) hue-rotate(347deg) brightness(102%) contrast(101%)';
        }
    }
});

// Vitrine

let main = document.getElementById('main_img'); 

let sub1 = document.getElementById('sub1');

let sub2 = document.getElementById('sub2');

let sub3 = document.getElementById('sub3');

let sub4 = document.getElementById('sub4');

// J'ai eu beaucoup de problèmes avec le <style.BackgroundImage = ''> donc j'ai utilisé ce code: (source : https://shorturl.at/bdzO5)
// On peut changer l'url de l'image dans le css sans toucher au js avec ça.

style_sub1 = sub1.currentStyle || window.getComputedStyle(sub1, false),
sub1_bg = style_sub1.backgroundImage.slice(4, -1).replace(/"/g, "");

style_sub2 = sub2.currentStyle || window.getComputedStyle(sub2, false),
sub2_bg = style_sub2.backgroundImage.slice(4, -1).replace(/"/g, "");

style_sub3 = sub3.currentStyle || window.getComputedStyle(sub3, false),
sub3_bg = style_sub3.backgroundImage.slice(4, -1).replace(/"/g, "");

style_sub4 = sub4.currentStyle || window.getComputedStyle(sub4, false),
sub4_bg = style_sub4.backgroundImage.slice(4, -1).replace(/"/g, "");

function remove_border() {
    sub1.style.border = '0px solid #FF7E1B';
    sub2.style.border = '0px solid #FF7E1B';
    sub3.style.border = '0px solid #FF7E1B';
    sub4.style.border = '0px solid #FF7E1B';
}

main.style.backgroundImage = `url(${sub1_bg})` ;

if (main.style.backgroundImage = `url(${sub1_bg})`) {
    sub1.style.border = '3px solid #FF7E1B'
};

sub1.addEventListener('mouseover', () => {
    sub1.style.cursor = 'pointer'
    remove_border()
    sub1.style.border = '3px solid #FF7E1B'
    main.style.backgroundImage = `url(${sub1_bg})` ;
});

sub2.addEventListener('mouseover', () => {
    sub2.style.cursor = 'pointer'
    remove_border()
    sub2.style.border = '3px solid #FF7E1B'
    main.style.backgroundImage = `url(${sub2_bg})` ;
});

sub3.addEventListener('mouseover', () => {
    sub3.style.cursor = 'pointer'
    remove_border()
    sub3.style.border = '3px solid #FF7E1B'
    main.style.backgroundImage = `url(${sub3_bg})` ;
});

sub4.addEventListener('mouseover', () => {
    sub4.style.cursor = 'pointer'
    remove_border()
    sub4.style.border = '3px solid #FF7E1B'
    main.style.backgroundImage = `url(${sub4_bg})` ;
});

// Ask Email

function ask_email() {
    let ask_email = document.getElementById('ask_email')
    ask_email.style.display = 'flex'
};

document.addEventListener('keydown', function(event){
    if(event.key === "Escape") {
        let ask_email = document.getElementById('ask_email')
        ask_email.style.display = 'none'
    }
});

let submit = document.getElementById('submit');

submit.addEventListener('click', () => {
    let ask_email = document.getElementById('ask_email')
    ask_email.style.display = 'none'
});

let cross = document.getElementById('cross');

cross.addEventListener('click', () => {
    let ask_email = document.getElementById('ask_email')
    ask_email.style.display = 'none'
});

setTimeout(ask_email, 10000); 

// Side menu

let menu = document.getElementById('menu');

menu.addEventListener('click', () => {
    let side_menu = document.getElementById('side_menu')
    side_menu.style.display = 'flex'
});

let cross_menu = document.getElementById('cross_menu');

cross_menu.addEventListener('click', () => {
    let side_menu = document.getElementById('side_menu')
    side_menu.style.display = 'none'
});

// Arrow

let arrow_left = document.getElementById('arrow_left');








