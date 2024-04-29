let rubl = document.querySelector(".cedvel1");
let rubl1 = document.querySelector(".cedvel11");
let use = document.querySelector(".cedvel2");
let use1 = document.querySelector(".cedvel21");
let euro = document.querySelector(".cedvel3");
let euro1 = document.querySelector(".cedvel31");
let tl = document.querySelector(".cedvel4")
let tl1 = document.querySelector(".cedvel41");
let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let text11 = document.querySelector(".text11");
let text12 = document.querySelector(".text12");

let solEmsal;
let sagEmsal;
let solAd = "RUB";
let sagAd = "USD";


fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ePwYxikduilkO3NGz9uUPbfAgkr1ZuKDrBDgJZAt')
.then((res)=>res.json())
.then(a=>{
solEmsal = a.data.USD / a.data.RUB
sagEmsal = a.data.RUB / a.data.USD
text11.innerText =`1 ${solAd} = ${solEmsal} ${sagAd}`
text12.innerText =`1 ${sagAd} = ${sagEmsal} ${solAd}`
})

rubl.addEventListener("click",()=>{
rubl.style.backgroundColor = "#833cde"
euro.style.backgroundColor = "white"
tl.style.backgroundColor = "white"
use.style.backgroundColor = "white"
fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ePwYxikduilkO3NGz9uUPbfAgkr1ZuKDrBDgJZAt')
.then((res)=>res.json())
.then(a=>{
solAd = "RUB";
solEmsal = a.data[sagAd] /  a.data.RUB;
sagEmsal = a.data.RUB / a.data[sagAd];
text11.innerText = `1 ${solAd} = ${solEmsal} ${sagAd}`
text12.innerText = `1 ${sagAd} = ${sagEmsal} ${solAd}`
})
    input1.addEventListener("keyup",(e)=>{
        input2.value = Math.round(e.target.value * solEmsal)
    });
    
    input2.addEventListener("keyup",(e)=>{
        input1.value = Math.round(e.target.value * sagEmsal)
    })
})
use.addEventListener("click",()=>{
use.style.backgroundColor = "#833cde"
rubl.style.backgroundColor = "white"
euro.style.backgroundColor = "white"
tl.style.backgroundColor = "white"
fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ePwYxikduilkO3NGz9uUPbfAgkr1ZuKDrBDgJZAt')
.then((res)=>res.json())
.then(a=>{
    solAd = "USD";
    solEmsal = a.data[sagAd] /  a.data.USD;
    sagEmsal = a.data.USD / a.data[sagAd];
    text11.innerText = `1 ${solAd} = ${solEmsal} ${sagAd}`
text12.innerText = `1 ${sagAd} = ${sagEmsal} ${solAd}`
});
    input1.addEventListener("keyup",(e)=>{
        input2.value = Math.round(e.target.value * solEmsal)
    });
    
    input2.addEventListener("keyup",(e)=>{
        input1.value = Math.round(e.target.value * sagEmsal)
    })
})

euro.addEventListener("click",(e)=>{
euro.style.backgroundColor = "#833cde"
rubl.style.backgroundColor = "white"
use.style.backgroundColor = "white"
tl.style.backgroundColor = "white"
fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ePwYxikduilkO3NGz9uUPbfAgkr1ZuKDrBDgJZAt')
.then((res)=>res.json())
.then(a=>{
    solAd = "EUR";
    solEmsal = a.data[sagAd] /  a.data.EUR;
    sagEmsal = a.data.EUR / a.data[sagAd];
    text11.innerText = `1 ${solAd} = ${solEmsal} ${sagAd}`
text12.innerText = `1 ${sagAd} = ${sagEmsal} ${solAd}`
});
    input1.addEventListener("keyup",(e)=>{
        input2.value = Math.round(e.target.value * solEmsal)
    });
    
    input2.addEventListener("keyup",(e)=>{
        input1.value = Math.round(e.target.value * sagEmsal)
    })
})

tl.addEventListener("click",(e)=>{
tl.style.backgroundColor = "#833cde"
rubl.style.backgroundColor = "white"
use.style.backgroundColor = "white"
euro.style.backgroundColor = "white"
fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ePwYxikduilkO3NGz9uUPbfAgkr1ZuKDrBDgJZAt')
.then((res)=>res.json())
.then(a=>{
    solAd = "TRY";
    solEmsal = a.data[sagAd] /  a.data.TRY;
    sagEmsal = a.data.TRY / a.data[sagAd];
    text11.innerText = `1 ${solAd} = ${solEmsal} ${sagAd}`
text12.innerText = `1 ${sagAd} = ${sagEmsal} ${solAd}`
});
    input1.addEventListener("keyup",(e)=>{
        input2.value = Math.round(e.target.value * solEmsal)
    });
    
    input2.addEventListener("keyup",(e)=>{
        input1.value = Math.round(e.target.value * sagEmsal)
    })
})

rubl1.addEventListener("click",(e)=>{
rubl1.style.backgroundColor = "#833cde"
euro1.style.backgroundColor = "white"
tl1.style.backgroundColor = "white"
use1.style.backgroundColor = "white"
fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ePwYxikduilkO3NGz9uUPbfAgkr1ZuKDrBDgJZAt')
.then((res)=>res.json())
.then(a=>{
    sagAd = "RUB";
    solEmsal = a.data.RUB / a.data[solAd];
    sagEmsal = a.data[solAd] / a.data.RUB;
    text11.innerText = `1 ${solAd} = ${solEmsal} ${sagAd}`
text12.innerText = `1 ${sagAd} = ${sagEmsal} ${solAd}`
});
    input1.addEventListener("keyup",(e)=>{
        input2.value = Math.round(e.target.value * solEmsal)
    });
    
    input2.addEventListener("keyup",(e)=>{
        input1.value = Math.round(e.target.value * sagEmsal)
    })
})

use1.addEventListener("click",(e)=>{
use1.style.backgroundColor = "#833cde"
rubl1.style.backgroundColor = "white"
euro1.style.backgroundColor = "white"
tl1.style.backgroundColor = "white"
fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ePwYxikduilkO3NGz9uUPbfAgkr1ZuKDrBDgJZAt')
.then((res)=>res.json())
.then(a=>{
    sagAd = "USD";
    solEmsal = a.data.USD / a.data[solAd];
    sagEmsal = a.data[solAd] / a.data.USD;
    text11.innerText = `1 ${solAd} = ${solEmsal} ${sagAd}`
text12.innerText = `1 ${sagAd} = ${sagEmsal} ${solAd}`
});
    input1.addEventListener("keyup",(e)=>{
        input2.value = Math.round(e.target.value * solEmsal)
    });
    
    input2.addEventListener("keyup",(e)=>{
        input1.value = Math.round(e.target.value * sagEmsal)
    })
})

euro1.addEventListener("click",(e)=>{
euro1.style.backgroundColor = "#833cde"
rubl1.style.backgroundColor = "white"
use1.style.backgroundColor = "white"
tl1.style.backgroundColor = "white"
fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ePwYxikduilkO3NGz9uUPbfAgkr1ZuKDrBDgJZAt')
.then((res)=>res.json())
.then(a=>{
    sagAd = "EUR";
    solEmsal = a.data.EUR / a.data[solAd];
    sagEmsal = a.data[solAd] / a.data.EUR;
    text11.innerText = `1 ${solAd} = ${solEmsal} ${sagAd}`
text12.innerText = `1 ${sagAd} = ${sagEmsal} ${solAd}`
});
    input1.addEventListener("keyup",(e)=>{
        input2.value = Math.round(e.target.value * solEmsal)
    });
    
    input2.addEventListener("keyup",(e)=>{
        input1.value = Math.round(e.target.value * sagEmsal)
    })
})

tl1.addEventListener("click", (e) => {
    tl1.style.backgroundColor = "#833cde";
    rubl1.style.backgroundColor = "white";
    use1.style.backgroundColor = "white";
    euro1.style.backgroundColor = "white";

    fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ePwYxikduilkO3NGz9uUPbfAgkr1ZuKDrBDgJZAt')
    .then((res) => res.json())
    .then(a => {
        sagAd = "TRY";
        solEmsal = a.data.TRY / a.data[solAd];
        sagEmsal = a.data[solAd] / a.data.TRY;
        text11.innerText = `1 ${solAd} = ${solEmsal} ${sagAd}`;
        text12.innerText = `1 ${sagAd} = ${sagEmsal} ${solAd}`;
    })
    input1.addEventListener("keyup",(e)=>{
        input2.value = Math.round(e.target.value * solEmsal)
    });
    
    input2.addEventListener("keyup",(e)=>{
        input1.value = Math.round(e.target.value * sagEmsal)
    })
    });


input1.addEventListener("keyup",(e)=>{
    input2.value = Math.round(e.target.value * solEmsal)
});

input2.addEventListener("keyup",(e)=>{
    input1.value = Math.round(e.target.value * sagEmsal)
})