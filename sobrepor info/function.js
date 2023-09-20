alert("clique nas imagens")
const imagem=document.getElementById('imagem')
const fred=document.getElementById('fred')


const info=document.getElementById('info')
const infofred=document.getElementById('info-fred')



imagem.addEventListener('click',()=>{

    if(info.style.display==='none' || info.style.display===''){
        info.style.display='block'
    }else{
        info.style.display='none'
    }
}); 

fred.addEventListener('click',()=>{
    if(infofred.style.display==='none' || infofred.style.display===''){
        infofred.style.display='block'
    }else{
        infofred.style.display='none'
    }
});



