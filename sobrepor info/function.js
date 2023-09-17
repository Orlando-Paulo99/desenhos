alert("clique nas imagens")
const imagem=document.getElementById('imagem')
const info=document.getElementById('info')



imagem.addEventListener('click',()=>{

    if(info.style.display==='none' || info.style.display===''){
        info.style.display='block'
    }else{
        info.style.display='none'
    }
}); 



