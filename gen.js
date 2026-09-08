/* OurDream-style prompt builder */
window.POSES=["Blick in die Kamera","sitzt","steht in der Tür","lehnt an der Wand","Blick über die Schulter","auf dem Bett","Hände in der Hüfte"];
window.OUTFITS=["enges Ripp-Polo, aufgeknöpft","weiße Bluse und Bleistiftrock","Lackleggings und Polo","Minikleid mit Knöpfen","Nachthemd","wie im Porträt"];
(function(){
  function fill(id,arr){var el=document.getElementById(id);if(!el)return;el.innerHTML=arr.map(function(x){return "<option>"+x+"</option>"}).join("")}
  fill("pose",window.POSES);fill("outfit",window.OUTFITS);
})();
