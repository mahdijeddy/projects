class UI{

    Alert(elmnt){
      let div = document.createElement('div')
      div.className='aaa'
       div.appendChild(document.createTextNode(elmnt))
       const result = document.querySelector('.head');
       result.appendChild(div)
       this.remove()
       
       
    }
    agree(elmnt){
        elmnt.classList.add('agree')
        
    }
    disagree(elmnt){
        elmnt.classList.remove('agree')
        elmnt.classList.add('error')
    }
    remove(){
        setTimeout(() => {
            document.querySelector('.head div').remove()
        }, 2500);
    }
}