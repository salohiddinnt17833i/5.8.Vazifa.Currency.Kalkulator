import { isValidate } from "./function.js";

let fromSelec = document.getElementById('fromSelect');
let toSelec = document.getElementById('toSelect');
let input = document.getElementById('input');
let btn = document.getElementById('result');
let ress = document.getElementById('res');
function createCard(key) {
    return `
    <option id="options" value="${key}">${key}</option>
    `
}
document.addEventListener('DOMContentLoaded', function () {
    fetch(`https://v6.exchangerate-api.com/v6/971999a7b6c71a2e0bbd4690/latest/USD`, {
        method: 'GET',
    })
        .then(res => {
            if (res.status == 200) {
                return res.json();
            }
        })
        .then(res => {
            Object.keys(res.conversion_rates).forEach(key => {
                let data1 = key;
                let data2 = key + ' ' + res.conversion_rates[key];
                let option1 = createCard(data1);
                let option2 = createCard(data2);
                fromSelec.innerHTML += option1;
                toSelec.innerHTML += option2;
            });

        })
        .catch(err => {
            console.log(err);
        })

})

btn && btn.addEventListener('click', function () {
    let isValid = isValidate(input)
    if (isValid) {
        let res = Math.round(input.value * toSelec.value.substring(4));
        ress.innerHTML = res + ' ' + toSelec.value.substring(0, 3)
    }
})

// let obj = {
//     AED: 3.6725,
//     AFN: 73.7188,
//     ALL: 95.7731,
//     AMD: 405.0577,
//     ANG: 1.79,
//     AOA: 836.5327,
//     ARS: 838.95,
//     AUD: 1.5235,
//     AWG: 1.79,
//     AZN: 1.7002,
//     BAM: 1.8072,
//     BBD: 2,
//     BDT: 109.7542,
//     BGN: 1.807,
//     BHD: 0.376,
//     BIF: 2845.6213,
//     BMD: 1,
//     BND: 1.3436,
//     BOB: 6.9257,
//     BRL: 4.972,
//     BSD: 1,
//     BTN: 82.9089,
//     BWP: 13.7751,
//     BYN: 3.2575,
//     BZD: 2,
//     CAD: 1.3496,
//     CDF: 2723.8428,
//     CHF: 0.8808,
//     CLP: 977.2654,
//     CNY: 7.2039,
//     COP: 3932.0574,
//     CRC: 514.1372,
//     CUP: 24,
//     CVE: 101.8852,
//     CZK: 23.4244,
//     DJF: 177.721,
//     DKK: 6.8909,
//     DOP: 58.636,
//     DZD: 134.3848,
//     EGP: 30.901,
//     ERN: 15,
//     ETB: 56.8262,
//     EUR: 0.924,
//     FJD: 2.2382,
//     FKP: 0.789,
//     FOK: 6.8909,
//     GBP: 0.789,
//     GEL: 2.6497,
//     GGP: 0.789,
//     GHS: 12.6555,
//     GIP: 0.789,
//     GMD: 66.4154,
//     GNF: 8585.8102,
//     GTQ: 7.8082,
//     GYD: 209.3702,
//     HKD: 7.8241,
//     HNL: 24.6959,
//     HRK: 6.9619,
//     HTG: 132.3554,
//     HUF: 358.6748,
//     IDR: 15585.6539,
//     ILS: 3.6336,
//     IMP: 0.789,
//     INR: 82.909,
//     IQD: 1309.2735,
//     IRR: 42059.1006,
//     ISK: 136.9996,
//     JEP: 0.789,
//     JMD: 156.6221,
//     JOD: 0.709,
//     JPY: 150.44,
//     KES: 145.437,
//     KGS: 89.4524,
//     KHR: 4089.6886,
//     KID: 1.5235,
//     KMF: 454.5798,
//     KRW: 1329.9954,
//     KWD: 0.3078,
//     KYD: 0.8333,
//     KZT: 450.9168,
//     LAK: 20679.9113,
//     LBP: 15000,
//     LKR: 310.8854,
//     LRD: 192.7037,
//     LSL: 19.2737,
//     LYD: 4.8342,
//     MAD: 10.0554,
//     MDL: 17.9291,
//     MGA: 4533.8755,
//     MKD: 56.9285,
//     MMK: 2103.1314,
//     MNT: 3411.5052,
//     MOP: 8.0588,
//     MRU: 39.7937,
//     MUR: 45.6396,
//     MVR: 15.4499,
//     MWK: 1693.5306,
//     MXN: 17.1087,
//     MYR: 4.7769,
//     MZN: 63.8966,
//     NAD: 19.2737,
//     NGN: 1562.1504,
//     NIO: 36.882,
//     NOK: 10.5351,
//     NPR: 132.6543,
//     NZD: 1.6142,
//     OMR: 0.3845,
//     PAB: 1,
//     PEN: 3.7962,
//     PGK: 3.799,
//     PHP: 55.8763,
//     PKR: 279.4758,
//     PLN: 3.9861,
//     PYG: 7303.9652,
//     QAR: 3.64,
//     RON: 4.5949,
//     RSD: 108.2458,
//     RUB: 93.74,
//     RWF: 1296.1863,
//     SAR: 3.75,
//     SBD: 8.4839,
//     SCR: 13.4891,
//     SDG: 511.047,
//     SEK: 10.3225,
//     SGD: 1.3436,
//     SHP: 0.789,
//     SLE: 22.7954,
//     SLL: 22795.3822,
//     SOS: 571.582,
//     SRD: 36.0828,
//     SSP: 1352.0403,
//     STN: 22.6381,
//     SYP: 12920.0757,
//     SZL: 19.2737,
//     THB: 36.0037,
//     TJS: 10.9547,
//     TMT: 3.4994,
//     TND: 3.124,
//     TOP: 2.3335,
//     TRY: 31.0772,
//     TTD: 6.7704,
//     TVD: 1.5235,
//     TWD: 31.561,
//     TZS: 2539.667,
//     UAH: 38.3337,
//     UGX: 3891.2227,
//     USD: 1,
//     UYU: 39.0731,
//     UZS: 12544.7579,
//     VES: 36.0698,
//     VND: 24606.5439,
//     VUV: 120.197,
//     WST: 2.7339,
//     XAF: 606.1064,
//     XCD: 2.7,
//     XDR: 0.7537,
//     XOF: 606.1064,
//     XPF: 110.2631,
//     YER: 250.2808,
//     ZAR: 19.2738,
//     ZMW: 22.9861,
//     ZWL: 13556.5418,
// }
