document.getElementById("toggle-menu").onclick = function () { toggleMenu() };

function toggleMenu() {
    var mainNav = document.getElementById("main-nav");
    if (mainNav.style.display == 'none') {
        mainNav.style.display = 'flex';
    } else {
        mainNav.style.display = 'none';
    }
}

var activeNav = document.querySelectorAll(".nav-link");
activeNav.forEach(nav => {
    nav.addEventListener('click', function () {
        activeNav.forEach(navLink => navLink.classList.remove('active'));
        this.classList.add('active');
    })
})

document.getElementById("change-language").onclick = function () { changeLanguage() };

function changeLanguage() {
    var lang = document.getElementById("language");
    if (lang.style.opacity == 0) {
        lang.style.opacity = 1;
    } else {
        lang.style.opacity = 0;
    }
}

document.getElementById("change-language").onblur = function () {
    var lang = document.getElementById("language");
    if (lang.style.opacity == 1) {
        lang.style.opacity = 0;
    }
}


function Translate() {

    this.init =
        function (attribute, lng) {
            this.attribute = attribute;
            this.lng = lng;
        }

    this.process = function () {
        __self = this;
        var xrhFile = new XMLHttpRequest();
        xrhFile.open("GET", "./js/" + this.lng + ".json");
        xrhFile.onreadystatechange = function () {
            if (xrhFile.readyState === 4) {
                if (xrhFile.status === 200 || xrhFile.status === 0) {
                    var lngObject = JSON.parse(xrhFile.responseText);
                    var allDom = document.getElementsByTagName("*");
                    for (var i = 0; i < allDom.length; i++) {
                        var elem = allDom[i];
                        var key = elem.getAttribute(__self.attribute);
                        if (key !== null) {
                            elem.innerHTML = lngObject[key];
                        }
                    }
                }
            }

        }
        xrhFile.send();
    }
}


let btn = document.querySelector(".up")

window.onscroll = function () {
    if (window.scrollY >= 600) {
        btn.style.display = "block"
    } else {
        btn.style.display = "none"
    }
}

btn.onclick = function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    })
}
