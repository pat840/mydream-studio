(function () {
  function shortUrl(prompt, seed) {
    var clean = String(prompt || "portrait woman").slice(0, 180);
    var p = encodeURIComponent("photorealistic portrait photo, 85mm, natural skin, adult woman 18+, " + clean);
    return "https://image.pollinations.ai/prompt/" + p + "?width=640&height=896&nologo=true&seed=" + (seed || Date.now());
  }
  imageUrl = shortUrl;
  window.imageUrl = shortUrl;
  if (typeof renderPresets === "function") renderPresets();
  document.querySelectorAll("img").forEach(function (img) {
    img.referrerPolicy = "no-referrer";
  });
  var kind = document.getElementById("create-kind");
  var opts = document.getElementById("create-video-opts");
  if (kind) {
    kind.onclick = function (e) {
      var b = e.target.closest("button");
      if (!b) return;
      kind.querySelectorAll("button").forEach(function (x) { x.classList.toggle("on", x === b); });
      if (opts) opts.classList.toggle("hidden", b.dataset.kind !== "video");
      window.__createKind = b.dataset.kind;
    };
  }
  var save = document.getElementById("save-person");
  if (save) {
    save.addEventListener("click", function () {
      var motion = (document.getElementById("p-motion") || {}).value || "";
      var va = document.getElementById("video-action");
      if (va && motion) va.value = motion;
      var pa = document.getElementById("p-audio");
      var box = document.getElementById("video-audio");
      if (pa && box) box.checked = pa.checked;
      var say = (document.getElementById("p-audio-text") || {}).value || "";
      var st = document.getElementById("speak-text");
      if (st && say) st.value = say;
      if (window.__createKind === "video" && typeof generateVideo === "function") {
        setTimeout(function () {
          generateVideo(motion || "langsame Bewegung", (typeof state !== "undefined" && state.length) || 10);
        }, 80);
      }
    });
  }
  var gv = document.getElementById("gen-video");
  if (gv) {
    gv.addEventListener("click", function () {
      var spoken = ((document.getElementById("speak-text") || {}).value || "").trim();
      var want = (document.getElementById("video-audio") || {}).checked;
      if (want && spoken && typeof speak === "function") setTimeout(speak, 900);
    });
  }
})();
