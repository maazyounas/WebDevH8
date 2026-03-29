

fetch("../navbar/index.html")
.then(res => res.text())
.then(data => {
    document.getElementById("navbar").innerHTML = data;

    // load navbar css
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "../navbar/navbar.css";
    document.head.appendChild(link);

    // load navbar js
    const script = document.createElement("script");
    script.src = "../navbar/navbar.js";
    document.body.appendChild(script);
});

