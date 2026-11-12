data = [];
async function Init() {
    const response = await fetch("/colors.json");
    data = await response.json();
    const main = document.getElementsByTagName("main")[0];
    const timeOut = setTimeout(() => {
        main.innerHTML = "";
        megjelenit(data, main);
    }, 3000);
    main.innerHTML = "<h1>Welcome to our paint shop. Please wait a few seconds to see our paint selection...</h1>";
}

function megjelenit(data, main) {
    for (const color of data) {
        const div = document.createElement("div");
        const p = document.createElement("p");
        p.innerText = color.name;
        if (color.textColor === "dark") {
            p.style.color = "black";
        } else {
            p.style.color = "white";
        }
        div.appendChild(p);
        div.style.backgroundColor = color.cssValue;
        div.style.width = "100px";
        div.style.height = "100px";
        main.appendChild(div);
    }
}
Init();
