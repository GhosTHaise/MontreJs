const deg = 6;
const hr = document.querySelector('#hr')
const mn = document.querySelector('#mn')
const sc = document.querySelector('#sc')


setInterval(() => {
    
    let day = new Date()
    let hh = day.getHours() * (deg*5)
    let mm = day.getMinutes() * deg 
    let ss = day.getSeconds() * deg
    console.log(ss)
    if(ss != 0){
        sc.style.transition = 'all .3s'
    }else(
        sc.style.transition = 'none'
    )
    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`
    mn.style.transform = `rotateZ(${mm}deg)`
    sc.style.transform = `rotateZ(${ss}deg)` 
},1000)
//console.log(hh,mm,ss)
