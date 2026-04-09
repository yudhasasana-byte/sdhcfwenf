document.getElementById('tampil').onclick = function() {
var nama = document.getElementById('name').value.trim().toLowerCase();
var kelas = document.getElementById('class').value.trim().toLowerCase();
var cca = document.getElementsByName('cca');
var jadwal = document.getElementsByName('jadwal');
alert("form submitted");
document.getElementById('name').value = "";
document.getElementById('class').value = "";
for (var i = 0; i < cca.length; i++) {
cca[i].checked = false;
}
for (var i = 0; i < jadwal.length; i++) {
jadwal[i].checked = false;
}
document.getElementById('hasil').innerText = "";
};
document.getElementById('reset').onclick = function() {
document.getElementById('name').value = "";
document.getElementById('class').value = "";
var cca = document.getElementsByName('cca');
for (var i = 0; i < cca.length; i++) {
cca[i].checked = false;
}
var jadwal = document.getElementsByName('jadwal');
for (var i = 0; i < jadwal.length; i++) {
jadwal[i].checked = false;
}
document.getElementById('hasil').innerText = "";
alert("form resetted");
};