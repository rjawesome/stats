fetch('https://stats-backend.rohanj.dev/api/stats/all')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
      const names = data.map(i => i.name);
      console.log(names)
      for (var i = 0; i < names.length; i++){
        console.log(i)
        var card = document.createElement("li")
        var elem = document.createElement("a")
        elem.href = "statsCalc.html?" + names[i];
        elem.innerHTML = names[i]
        card.className = "list-group-item"
        card.appendChild(elem)
        document.getElementById("card1").appendChild(card)
      }
  
      
    });

async function addNav() {
    const resp = await fetch("layouts/nav.html");
    const html = await resp.text();
    document.getElementById("content").insertAdjacentHTML("beforebegin", html);
}

addNav();
