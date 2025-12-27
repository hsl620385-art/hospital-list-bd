<!DOCTYPE html>
<html lang="bn">
<head>
<meta charset="UTF-8">
<title>Hospital List in Bangladesh</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

<h1>🏥 Hospital List in Bangladesh</h1>

<h2>🚨 জরুরি নাম্বার</h2>
<a href="tel:999">📞 999 Emergency</a><br>
<a href="tel:16163">🚒 Fire Service</a><br>
<a href="tel:100">🚓 Police</a>

<hr>

<div id="list"></div>

<script src="data.js"></script>
<script>
const list = document.getElementById("list");

hospitals.forEach(h => {
  list.innerHTML += `
    <div style="border:1px solid #ccc;padding:10px;margin:10px;">
      <h3>${h.name}</h3>
      <p>📍 ${h.district} - ${h.upazila}</p>
      <a href="tel:${h.phone}">📞 Hospital Call</a><br>
      <a href="tel:${h.ambulance}">🚑 Ambulance Call</a><br>
      <a href="${h.map}" target="_blank">🗺️ Google Map</a>
    </div>
  `;
});
</script>

</body>
</html>
