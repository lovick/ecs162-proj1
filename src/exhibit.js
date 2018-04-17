function changeHero(img, name, type) {
    console.log(window.innerWidth);

    if (window.innerWidth < 1175) {
        console.log("Hero Change Failed, Width too small");
        return; 
    }

    var art = document.getElementById("hero");

    art.innerHTML = "";
    console.log(img);

    var nImg = document.createElement("img");
    nImg.setAttribute("src", img);
    nImg.setAttribute("alt", name);
    art.appendChild(nImg);

    var nH2 = document.createElement("h2");
    var nH2T = document.createTextNode(name);
    nH2.appendChild(nH2T);
    art.appendChild(nH2);

    var nH5 = document.createElement("h5");
    var nH5T = document.createTextNode(type);
    nH5.appendChild(nH5T);
    art.appendChild(nH5);
}