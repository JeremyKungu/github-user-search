const avatar = document.querySelector("#avatar");
const named = document.querySelector("#name");
const username = document.querySelector("#username");
const  date = document.querySelector("#date");
const bio = document.querySelector("#bio");
const repos = document.querySelector("#obj-repos");
const followers = document.querySelector("#obj-followers");
const following = document.querySelector("#obj-following");
const loc = document.querySelector("#obj-location");
const web = document.querySelector("#obj-website");
const twitter = document.querySelector("#obj-twitter");
const company = document.querySelector("#obj-company");

let item1 = document.getElementById("list-item1");
let item2 = document.getElementById("list-item2");
let item3 = document.getElementById("list-item3");
let item4 = document.getElementById("list-item4");

let request = new XMLHttpRequest();

request.open("GET", "https://api.github.com/users/Octocat", true);
request.onload = function () {
    let data = JSON.parse(this.response)

    avatar.src = data.avatar_url;

    if(data.name === null) {
        named.innerHTML = data.login;
    } else {
        named.innerHTML = data.name;
    }

    username.innerHTML = "@", data.login;
    username.setAttribute("href", "https://github.com/", data.login);

    //date
    let originalDate = data.created_at;
    const expectedDateFormat = "25 Jul 2022";
    let newDateFormat = moment(originalDate).format("DD MMM YYYY");
    date.innerHTML = "joined " + newDateFormat;

    if(data.bio === null){
        bio.innerHTML = "This profile has no bio"
    } else {
        bio.innerHTML = data.bio;
    }

    repos.innerHTML = data.public_repos;
    followers.innerHTML = data.followers;
    following.innerHTML = data.following;

    if(data.location === null) {
        loc.innerHTML = "Not Available";
        item1.classList.add("opacity");
    } else {
        loc.innerHTML = data.location;
        item1.classList.remove("opacity");
    }

    if(data.blog === "") {
        web.innerHTML = "Not Available";
        item2.classList.add("opacity");
    } else {
        web.innerHTML = data.blog;
        web.setAttribute("href", data.blog);
        item2.classList.remove("opacity");
    }

    if(data.twitter_username === null) {
        twitter.innerHTML = "Not Available";
        item3.classList.add("opacity");
    } else {
        twitter.innerHTML = data.twitter_username;
        twitter.setAttribute("href", "https://twitter.com", data.twitter_username);
        item3.classList.remove("opacity");
    }

    if(data.company === null) {
        company.innerHTML = "Not Available";
        item4.classList.add("opacity");
    } else {
        company.innerHTML = data.company;
        company.setAttribute("href", "https://github.com", data.company.slice(1));
        item4.classList.remove("opacity");
    }
    request.send();    
    
    }

    function getData() {
        let user = document.getElementById("search").value;

        request.open("GET", "https://api.github.com/users/" + user, true)
        request.onload = function () {
            let data = JSON.parse(this.response);
            avatar.src = data.avatar_url;

            if(data.name === null){
                named.innerHTML = data.login;
            } else {
                named.innerHTML = data.name;
            }
    
    username.innerHTML = "@", data.login;
    username.setAttribute("href", "https://github.com/", data.login);

    //date
    let originalDate = data.created_at;
    const expectedDateFormat = "25 Jul 2022";
    let newDateFormat = moment(originalDate).format("DD MMM YYYY");
    date.innerHTML = "joined " + newDateFormat;

            if(data.bio === null) {
                bio.innerHTML = "This profile has no bio"
            }
            else {
                bio.innerHTML = data.bio;
            }

            repos.innerHTML = data.public_repos;
            followers.innerHTML = data.followers;
            following.innerHTML = data.following;

            if(data.location === null) {
                loc.innerHTML = "Not Available";
                item1.classList.add("opacity");
            } else {
                loc.innerHTML = data.location;
                item1.classList.remove("opacity");
            }

            if(data.blog === "") {
                web.innerHTML = "Not Available";
                item2.classList.add("opacity");
            } else {
                web.innerHTML = data.blog;
                web.setAttribute("href", data.blog);
                item2.classList.remove("opacity");
            }

            if(data.twitter_username === null) {
                twitter.innerHTML = "Not Available";
                item3.classList.add("opacity");
            } else {
                twitter.innerHTML = data.twitter_username;
                twitter.setAttribute("href", "https://twitter.com", data.twitter_username);
                item3.classList.remove("opacity");
            }

            if(data.company === null) {
                company.innerHTML = "Not Available";
                item4.classList.add("opacity");
            } else {
                company.innerHTML = data.company;
                company.setAttribute("href", data.company.slice(1));
                item4.classList.remove("opacity");
            }
        }
            request.send();
    }

    function changeMode () {
        let body = document.body;
        let headerTitle = document.getElementById("header-title");
        let headerButton = document.getElementById("header-button");
        const button = document.querySelector(".mode");
        let searchBar = document.querySelector(".search-container");
        let search = document.getElementById("search");
        let infos = document.querySelector(".text-container");
        let data = document.querySelector(".grid");

        body.classList.toggle("dark-mode-body");
        headerTitle.classList.toggle("dark-mode-text");
        searchBar.classList.toggle("dark-background");
        search.classList.toggle("dark-background");
        search.classList.toggle('placeholderWhite');
        infos.classList.toggle("dark-background");
        date.classList.toggle("text-grayBlue");
        named.classList.toggle("whiteText");
        data.classList.toggle("dark-mode-body");
        repos.classList.toggle("whiteText");
        followers.classList.toggle("whiteText");
        following.classList.toggle("whiteText");
        loc.classList.toggle("whiteText");
        web.classList.toggle("whiteText");
        twitter.classList.toggle("whiteText");
        company.classList.toggle("whiteText");
        item1.classList.toggle("whiteImg");
        item2.classList.toggle("whiteImg");
        item3.classList.toggle("whiteImg");
        item4.classList.toggle("whiteImg");

        if(button.getAttribute("data") === "light") {
            headerButton.classList.toggle("dark-mode-text");
            headerButton.innerHTML = `Dark <img src="./icons/211779_moon_icon.png" alt="icon-dark-mode">`
            button.setAttribute("data", "dark");
            headerButton.classList.remove('hoverClass2');
            headerButton.classList.add('hoverClass1');
        } else {
            headerButton.classList.toggle("dark-mode-text");
            headerButton.innerHTML = 'Light <img src="./icons/icons8-sun-32.png" alt="icon-light-mode">';
            button.setAttribute("data", "light");
            headerButton.classList.remove('hoverClass1');
            headerButton.classList.add('hoverClass2');
        }
    };

    let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if(dark) {
        changeMode();
    }







