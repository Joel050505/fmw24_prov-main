// 5. Responsive Posts (3p)
// Ladda ner posts från denna url: https://jsonplaceholder.typicode.com/posts
// För varje post ska title och body placeras under varandra.
// I desktop-vy ska posts visas i 3 kolumner.
// I mobil-vy ska posts visas i en kolumn med 100% width.

async function getData() {
  const repsonse = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await repsonse.json();
  const container = document.querySelector(".container");

  data.forEach((data) => {
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    div.className = "postdiv";

    h3.textContent = data.title;
    p.textContent = data.body;

    div.append(h3, p);
    container.appendChild(div);
    document.querySelector("body").appendChild(container);
  });
}

getData();
