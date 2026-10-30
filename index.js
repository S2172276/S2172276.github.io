var about_me_section = document.getElementById("aboutmesection")
var background_changer = document.getElementById("backgroundchanger")
var html_body = document.getElementById("html_body")
background_changer.onclick = function() {
    if (html_body.style.backgroundColor ==  rgb(44, 107, 31)){
        html_body.style.backgroundColor = rgb(93, 120, 209);
    }
    else {
        html_body.style.backgroundColor ==  rgb(44, 107, 31);
    }
}