```javascript
function calculateWQI(){

let ph = document.getElementById("ph").value;
let tds = document.getElementById("tds").value;
let turbidity = document.getElementById("turbidity").value;
let oxygen = document.getElementById("oxygen").value;
let temp = document.getElementById("temp").value;

/* CHECK EMPTY */
if(ph=="" || tds=="" || turbidity=="" || oxygen=="" || temp==""){
alert("Please fill all fields!");
return;
}

/* CONVERT TO NUMBER */
ph = parseFloat(ph);
tds = parseFloat(tds);
turbidity = parseFloat(turbidity);
oxygen = parseFloat(oxygen);
temp = parseFloat(temp);

/* CALCULATION */
let score = 0;

if(ph>=6.5 && ph<=8.5) score+=20;
if(tds<=500) score+=20;
if(turbidity<=5) score+=20;
if(oxygen>=5) score+=20;
if(temp>=10 && temp<=25) score+=20;

/* STORE VALUE */
localStorage.setItem("wqi", score);

/* REDIRECT */
window.location.href = "report.html";
}
```
