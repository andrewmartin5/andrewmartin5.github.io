window.onload = function () {
    const handleOnMouseMove = e => {
        const { currentTarget: target } = e;
        const rect = target.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        target.style.setProperty("--mouse-x", `${x}px`);
        target.style.setProperty("--mouse-y", `${y}px`);
    }

    const grid = document.getElementById("cards");
    fetch('./assets/img/sxsw/images.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                const filename = "./assets/img/sxsw/" + element.filename;
                const link = document.createElement("a");
                const card = document.createElement("div");
                const label = document.createElement("h2");
                link.href = filename;
                link.target = "_blank";
                link.classname = "nav-link";
                label.textContent = element.title;
                label.className = "label";
                card.className = "card";
                card.style.backgroundImage = `url(${filename})`;
                card.appendChild(label);
                link.append(card);
                card.onmousemove = e => handleOnMouseMove(e);
                grid.appendChild(link);
            });
        });
}