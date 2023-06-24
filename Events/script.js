function Sneha(){
    document.getElementById('onmouseover').style.background="green"
    console.log('mouseover');
    }
    function  Event1(){
        document.getElementById('onmouseout').innerHTML='Vamsi'
        console.log('mouseout');
    }
    function  Event2(){
        document.getElementById('ondbclick').innerText='Shiva'
        console.log('mouseout');
    }
    function  Event3(){
        let onfocus = document.getElementById('onfocus')
        onfocus.style.background='black',onfocus.style.color='orange'
        console.log('onfocus');
    }
    function Event4(){
        document.getElementById('onblur').innerText=document.getElementById('onblur').innerText.toUpperCase();
        console.log('onblur');
        }
        
function Event5(){
    document.getElementById('onclick').style.background="gold"
    console.log('onclick');
}