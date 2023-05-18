
const root = document.getElementById("root");
const h1Element = document.createElement("h1");
h1Element.innerHTML = "Mona Lisa";
root.appendChild(h1Element)
 const img = document.createElement("img");
img.src = './mona_lisa.jpg'
root.appendChild(img)
const p = document.createElement("p");
p.innerText = "The Mona Lisa is a famous painting."
root.appendChild(p);

