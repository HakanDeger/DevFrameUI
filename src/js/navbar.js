/*NAVBAR JS*/
document.querySelector("[data-action='openMenu']").addEventListener("click",function () {
    document.querySelector("#m-header").className+=" active";
})
document.querySelector("[data-action='closeMenu']").addEventListener("click",function () {
    document.querySelector("#m-header").classList.remove("active");
})

var mobileMediaQuery = window.matchMedia("(max-width: 992px)")
createMobileNav(mobileMediaQuery);
mobileMediaQuery.addListener(createMobileNav);
mobileMediaQuery.addListener(dropdownFunction);
function createMobileNav(x) {
    var a = document.querySelector(".m--header__navbar__content__nav");
    var b = document.querySelectorAll(".navbar__nav__item");
    if (x.matches) {
        b.forEach(z => {
            a.append(z.cloneNode(true));
        });
        a.append(document.querySelector(".right-area").cloneNode(true));

    } else {
        a.innerHTML = "";
    }
}
function addDroddownIcon() {
    var a = document.querySelectorAll(".navbar__nav__item__dropdown");
    for (let i = 0; i < a.length; i++) {
        var b = a[i].parentElement;
        var c = document.createElement('span');
        c.className = "dropdownicon"
        c.innerHTML = "<span>&gt;</span>";
        b.prepend(c);
    }
    var x = document.querySelectorAll(".navbar__nav__item__dropdown__item__dropdown");
    for (var i = 0; i < x.length; i++) {
        var y = x[i].parentElement;
        var z = document.createElement('span');
        z.className = "dropdownicon-alt"
        z.innerHTML = "<span>&gt;</span>";
        y.prepend(z);
    }
}
function dropdownFunction() {
    var x = document.querySelectorAll(".dropdownicon");
    var y = document.querySelectorAll(".dropdownicon-alt");
    function addActive(x) {
        for (let i = 0; i < x.length; i++) {
            x[i].addEventListener("click", function () {
                var n = this.parentElement.className;
                var q = document.getElementsByClassName( n + "__dropdown");
                if (this.classList[1] != "active") {
                    this.className += " active";
                    q[i].className += " active";
                } else {
                    this.classList.remove("active");
                    q[i].classList.remove("active");
                }
            });
        }
    }
    addActive(x);
    addActive(y);
}
addDroddownIcon();
dropdownFunction();