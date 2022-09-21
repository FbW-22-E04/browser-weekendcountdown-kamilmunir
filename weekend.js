
const frm=document.getElementById("weekendform")
frm.style.background='pink'
frm.style.textAlign='center'
frm.style.width='100%'
frm.style.height='15rem'

const frmdiv=document.getElementById("container")


document.getElementById("container").style.display = 'flex';
document.getElementById("container").style.alignContent='center'
document.getElementById("container").style.marginLeft='30%'
document.getElementById("container").style.width='40%'
frmdiv.style.background='lightblue'
frmdiv.appendChild(frm)

document.getElementById("container").style.display = 'flex';
document.getElementById('btn').style.width = '5rem';
document.getElementById('btn').style.height = '45px';
document.getElementById('btn').innerText ="Go"

document.getElementById('counttext').style.width = '10rem';
document.getElementById('counttext').style.height = '40px';

const btns=document.getElementById("btn")
btns.addEventListener("click",()=>{
    const txtvalue=document.getElementById("counttext")
    if(txtvalue.value==='kamil'){
    const d = new Date();
    let day = d.getDay()
    prompt("Hello,I Welcome you"+" , "+day+"  "+d)
}else{
    prompt("Oops,Please Correct you User Name")
}
})

const aclose=document.getElementById("aclose")
aclose.addEventListener("click",()=>{
    prompt("Do you want to close the form")
})