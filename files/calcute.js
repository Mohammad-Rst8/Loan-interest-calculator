let $ = document
let year = $.querySelector('.years')
let percent = $.querySelector('.percent')
let amountnum = $.querySelector('.amountnum')
let btn = $.querySelector('.btn')
 let numberamount = $.querySelector('.numberamount')
 let monthnum = $.querySelector('.monthnum')
 let number = $.querySelector('.number')
 let resultnum = $.querySelector('.resultnum')
 let result = $.querySelector('.result')
 let button = $.querySelector('.button')


btn.addEventListener('click', () => {
    if (amountnum.value.trim()) {
        if (percent.value.trim()) {
            if (year.value.trim()) {
                calculation()
            }
            else{
                nofild()
            }
        }
        else{
            nofild()
        }
    }
    else{
        nofild()
    }
    
})
function nofild(){
    alert("تمام ورودی ها را پر کنید.")
}
function calculation(){
result.style.display = "flex"
let amountval = amountnum.value.trim()
let percenttval = percent.value.trim()
let yearval = year.value.trim()
yearval = (yearval * 12)
let amountnam = Number(amountval)
let on = amountval * percenttval * (yearval + 1)
let maincal = on / 2400
let moainrand = Math.floor(maincal) 
numberamount.innerHTML = amountnam.toLocaleString('en-US')
let res = Math.floor(maincal) + Math.floor(amountval)
let monthly = res /yearval
let monthrand = Math.floor(monthly)
number.innerHTML = moainrand.toLocaleString('en-US')
resultnum.innerHTML = res.toLocaleString('en-US')
monthnum.innerHTML = monthrand.toLocaleString('en-US')

}
button.addEventListener('click', function(){
    if (amountnum.value.trim()) {
        if (percent.value.trim()) {
            if (year.value.trim()) {
                amountnum.value = ''
                percent.value = ''
                year.value = '' 
                result.style.display = "none"
            }
            else{
                nofild()
            }
        }
        else{
            nofild()
        }
    }
    else{
        nofild()
    }
})
