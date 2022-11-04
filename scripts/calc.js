fetch('https://teamoops.nighthawkcoding.ml/api/stats/dataset/'+window.location.href.split("?")[1])
.then((response) => response.json())
.then((data) => {
  // gets the first dataset for the name
  const actualData = data[0];
  
  // go to all the elements and set their values based on the data recieved from API
  document.getElementById("mean").innerHTML = actualData.mean;
  document.getElementById("median").innerHTML = actualData.median;
  document.getElementById("standarddeviation").innerHTML = actualData.standardDeviation;
  document.getElementById("data").value = actualData.data;
  document.getElementById("countID").innerHTML = actualData.count;
  document.getElementById("histogram").src = actualData.histogramImg;
  document.getElementById("dot-plot").src = actualData.dotPlotImg;
  document.getElementById("box-plot").src = actualData.boxPlotImg;
  document.getElementById("stem-plot").innerHTML = actualData.stemPlot.replaceAll("\n", "<br>").replaceAll(" ", "&nbsp;");



  
});

// Fetches nav from layouts and adds to the page
async function addNav() {
  const resp = await fetch("layouts/nav.html");
  const html = await resp.text();
  document.getElementById("content").insertAdjacentHTML("beforebegin", html);
}

addNav();
