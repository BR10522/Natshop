const items=[{name:'Écouteurs Bluetooth',price:1500},{name:'Montre Connectée',price:2800}];
const box=document.getElementById('products');
function draw(q=''){box.innerHTML='';items.filter(i=>i.name.toLowerCase().includes(q.toLowerCase())).forEach(i=>box.innerHTML+=`<div class="card"><h3>${i.name}</h3><p>${i.price} Gdes</p><button onclick="order('${i.name}',${i.price})">Commander</button></div>`)}
function order(n,p){const m=`Bonjour NATSHOP, je commande ${n} (${p} Gdes). Paiement MonCash 37843029 ou NatCash 32692155.`;location.href='https://wa.me/50937843029?text='+encodeURIComponent(m)}
document.getElementById('search').oninput=e=>draw(e.target.value);draw();