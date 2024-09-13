const h = document.getElementById('hour')
const m = document.getElementById('minute')
const s = document.getElementById('second')



setInterval(() => {


    let hr = new Date().getHours();
    let mt = new Date().getMinutes();
    let sc = new Date().getSeconds();

    if (hr >= 12) {
        hr = hr-12
    } else {
        hr = hr
    }

    if (hr < 10) {
    hr = '0' + hr;
    } else {
    hr = hr;
    }
    if (hr == 00) {
    hr = '12';
    } else {
    hr = hr;
    }
    if (mt < 10) {
    mt = '0' + mt;
    } else {
    mt = mt;
    }
    if (sc < 10) {
    sc = '0' + sc;
    } else {
    sc = sc;
    }
    




    h.innerText = hr
    m.innerText = mt;
    s.innerText = sc;
},1000);
