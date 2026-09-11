// Firebase
const firebaseConfig = {
  apiKey: "TON_API_KEY",
  authDomain: "natshop-f63dc.firebaseapp.com",
  databaseURL: "https://natshop-f63dc-default-rtdb.firebaseio.com",
  projectId: "natshop-f63dc",
  storageBucket: "natshop-f63dc.firebasestorage.app",
  messagingSenderId: "TON_ID",
  appId: "TON_APP_ID"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();
const productsRef = db.ref("products");

// Afficher les produits
productsRef.on("value", (snap) => {
  const box = document.getElementById("products");
  box.innerHTML = "";

  snap.forEach((item) => {
    const p = item.val();

    box.innerHTML += `
      <div class="card">
        <img src="${p.image}" class="photo">
        <h3>${p.name}</h3>
        <p>${p.price} Gdes</p>

        <button onclick="buy('${item.key}')">
          Acheter
        </button>
      </div>
    `;
  });
});

// Commander
function buy(id){
  const msg =
  "Bonjour NATSHOP je souhaite commander le produit " + id;

  window.open(
    "https://wa.me/50937843029?text=" +
    encodeURIComponent(msg)
  );
}
