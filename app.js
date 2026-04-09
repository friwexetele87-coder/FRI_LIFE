let selectedProduct = null;
let totalRevenue = 0;
let totalOrders = 0;

const products = [
  {
    id:1,
    name:"Ventre Plat Pro",
    price:10900,
    image:"https://i.imgur.com/8Km9tLL.jpg",
    desc:"🔥 Brûle graisse rapidement"
  },
  {
    id:2,
    name:"Ceinture Amincissante",
    price:8000,
    image:"https://i.imgur.com/2DhmtJ4.jpg",
    desc:"💪 Résultat rapide"
  }
];

const container = document.getElementById("products");

products.forEach(p=>{
  const div = document.createElement("div");
  div.className="product-card";

  div.innerHTML=`
    <img src="${p.image}">
    <h3>${p.name}</h3>
    <p>${p.desc}</p>
    <p><b>${p.price} FCFA</b></p>
    <button onclick="order(${p.id})">Commander 🛒</button>
  `;

  container.appendChild(div);
});

function order(id){
  selectedProduct = products.find(p=>p.id===id);
  document.getElementById("formSection").style.display="block";
  window.scrollTo(0,document.body.scrollHeight);
}

// 🎯 Fonction de paiement (à remplacer par ton lien Awoopay)
document.getElementById("payBtn").addEventListener("click", ()=>{
  const nom = document.getElementById("nom").value;
  const prenom = document.getElementById("prenom").value;
  const ville = document.getElementById("ville").value;
  const adresse = document.getElementById("adresse").value;

  if(!nom || !prenom || !ville || !adresse){
    alert("Remplis toutes les informations");
    return;
  }

  // Ici tu insères ton lien Awoopay avec les informations de la commande
  // Exemple :
  // window.open("https://awoopay.com/ton-lien-de-paiement?nom="+nom+"&prenom="+prenom+"&ville="+ville+"&adresse="+adresse+"&produit="+selectedProduct.name+"&prix="+selectedProduct.price);

  alert("Awoopay sera intégré ici pour le paiement 💰");

  totalRevenue += selectedProduct.price;
  totalOrders += 1;
  document.getElementById("totalRevenue").innerText = totalRevenue + " FCFA";
  document.getElementById("totalOrders").innerText = totalOrders + " commandes";
});
