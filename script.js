console.log("Loaded script.js");
let r = new XMLHttpRequest;
r.open("GET","https://api.covid19api.com/summary", false)
r.send()
let resp = JSON.parse(r.responseText)

document.querySelector('#gtotal').innerText = resp.Global.TotalConfirmed
document.querySelector('#gtoday').innerText = resp.Global.NewConfirmed
document.querySelector('#itotal').innerText = resp.Countries[77].TotalConfirmed
document.querySelector('#itoday').innerText = resp.Countries[77].NewConfirmed

let s = new XMLHttpRequest;
s.open("GET", "https://api.covid19api.com/dayone/country/india/status/confirmed/live", false)
s.send()
let respo = JSON.parse(s.responseText)
let respolength = respo.length
let casesArray = [];
let datesArray = [];

for(let i = respolength-30; i<respolength; i++) {
    casesArray.push(respo[i].Cases)
}

for(let i = respolength-30; i<respolength; i++) {
    datesArray.push(respo[i].Date)
}

for(let i = respolength-30; i<respolength; i++) {
    datesArray[i- respolength + 30] = datesArray[i- respolength + 30].substring(0,10)
}

Chart.defaults.color = "#000000";
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: datesArray ,
        datasets: [{
            label: 'INDIAN COVID CASES OF PAST 30 DAYS',
            data: casesArray,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});


