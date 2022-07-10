const selector = document.querySelectorAll('.switch-btn');




for (let i = 0; i < selector.length; i++) {
    init_tumbler(selector[i]);

}

function init_tumbler(selector){
      
    selector.addEventListener('click',function(){
        selector.classList.toggle('switch-on');
        if(selector.classList.contains('switch-on')){
            selector.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.checked = true;
            
        }
        else{
            selector.nextElementSibling.checked = true;

        }
        
    });
}