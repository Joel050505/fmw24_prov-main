// 6. Hämta och visa foton. (3p)
// Ladda ner foton med fetch från denna url: https://jsonplaceholder.typicode.com/photos
// Visa dom första 10 fotona på sidan.
// När man klickar på ett foto ska dess titel visas i en popup med `alert`

async function getData() {
  const repsonse = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await repsonse.json();

  data.forEach((data) => {
    if (data.id <= 10) {
      const img = document.createElement("img");
      const div = document.createElement("div");

      img.src = data.url;
      img.style.width = 200 + "px";

      div.appendChild(img);
      document.querySelector("body").append(div);

      img.addEventListener("click", () => {
        alert(data.title);
      });
    }
  });
}
getData();
