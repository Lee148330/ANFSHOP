const details = {
  M1911: {caliber: '0.45 ACP', type: '手枪', desc: '经典美制军用手枪，可靠耐用。'},
  M9: {caliber: '9mm', type: '手枪', desc: '美军制式手枪，精准稳定。'},
  Remington700: {caliber: '.308 Win', type: '狙击步枪', desc: '高精度远程狙击步枪。'},
  Remington870: {caliber: '12 Gauge', type: '霰弹枪', desc: '广泛用于战术和民用的泵动式霰弹枪。'},
  AR15: {caliber: '5.56mm', type: '步枪', desc: '模块化战术步枪，适合多用途使用。'}
};

function showDetails(id) {
  const gun = details[id];
  if (!gun) return;
  const modal = document.getElementById('modal');
  const body = document.getElementById('modal-body');
  body.innerHTML = `<h2>${id}</h2>
                    <p>口径：${gun.caliber}</p>
                    <p>类型：${gun.type}</p>
                    <p>${gun.desc}</p>`;
  modal.style.display = 'block';
}
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}
window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target == modal) modal.style.display = 'none';
};