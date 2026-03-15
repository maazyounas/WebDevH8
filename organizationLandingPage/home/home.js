const loadScriptOnce = (src) => {
    if (document.querySelector(`script[data-src="${src}"]`)) return;
    const script = document.createElement("script");
    script.src = src;
    script.defer = true;
    script.dataset.src = src;
    document.body.appendChild(script);
};

fetch("../navbar/index.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;
        loadScriptOnce("../navbar/navbar.js");
    });

fetch("../hero/hero.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("hero").innerHTML = data;
        loadScriptOnce("../hero/hero.js");
    });

fetch("../footer/footer.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
        loadScriptOnce("../footer/footer.js");
    });
