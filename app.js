const SCENES=["Büro, Leitung","Friseursalon","Wohnung, Türrahmen","Salon nach acht","Haustür Nachbarin","Haus Nachmittag","Terrasse","Schlafzimmer","Bettkante","Spiegel"];
const VOICES=[{id:"warm",label:"Warm und weich",pitch:1.02,rate:0.92},{id:"hell",label:"Hell und verspielt",pitch:1.18,rate:1.02},{id:"tief",label:"Tief und intim",pitch:0.88,rate:0.86},{id:"rauchig",label:"Rauchig und ruhig",pitch:0.84,rate:0.82},{id:"fluester",label:"Flüsternd und nah",pitch:0.95,rate:0.78},{id:"klar",label:"Klar",pitch:1.05,rate:0.96}];
function pic(key,fallback){const P=window.PORTRAITS||{};return (key&&P[key])||fallback||""}
function cover(p){return pic(p.id,p.file||p.cover)||imgUrl(p.desc)}
