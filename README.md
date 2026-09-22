# GujratiAiTools-<!DOCTYPE html>
<html lang="gu">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mital AI Tools</title>

  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f5f7fb;
      margin: 0;
      padding: 0;
      text-align: center;
    }

    header {
      background: #111827;
      color: white;
      padding: 30px 15px;
    }

    .box {
      max-width: 600px;
      margin: 40px auto;
      background: white;
      padding: 25px;
      border-radius: 15px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }

    textarea {
      width: 100%;
      height: 120px;
      padding: 12px;
      box-sizing: border-box;
      border: 1px solid #ddd;
      border-radius: 10px;
      font-size: 16px;
    }

    button {
      margin-top: 15px;
      padding: 13px 25px;
      border: none;
      border-radius: 10px;
      background: #111827;
      color: white;
      font-size: 16px;
      cursor: pointer;
    }

    #result {
      margin-top: 20px;
      padding: 15px;
      background: #f3f4f6;
      border-radius: 10px;
      text-align: left;
      min-height: 50px;
    }
  </style>
</head>

<body>

<header>
  <h1>🤖 Mital AI Tools</h1>
  <p>Gujarati AI Tools</p>
</header>

<div class="box">
  <h2>🎬 AI Reel Script Generator</h2>

  <textarea id="topic"
    placeholder="ઉદાહરણ: મારી કપડાંની દુકાન માટે Instagram Reel બનાવો"></textarea>

  <button onclick="generateScript()">Generate</button>

  <div id="result">
    અહીં તમારો AI જવાબ આવશે...
  </div>
</div>

<script>
function generateScript() {
  const topic = document.getElementById("topic").value;

  if (!topic) {
    document.getElementById("result").innerHTML =
      "કૃપા કરીને વિષય લખો.";
    return;
  }

  document.getElementById("result").innerHTML =
    "<b>તમારો વિષય:</b><br>" + topic +
    "<br><br>AI કનેક્શન પછી અહીં સંપૂર્ણ Reel Script આવશે. 🚀";
}
</script>

</body>
</html>
