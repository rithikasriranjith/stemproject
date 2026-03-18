```javascript
function calculateWQI(){

let ph = parseFloat(document.getElementById("ph").value);
let tds = parseFloat(document.getElementById("tds").value);
let turbidity = parseFloat(document.getElementById("turbidity").value);
let oxygen = parseFloat(document.getElementById("oxygen").value);
let temp = parseFloat(document.getElementById("temp").value);

let score = 0;

if(ph>=6.5 && ph<=8.5) score+=20;
if(tds<=500) score+=20;
if(turbidity<=5) score+=20;
if(oxygen>=5) score+=20;
if(temp>=10 && temp<=25) score+=20;

localStorage.setItem("wqi",score);

window.location.href="report.html";
}
```
