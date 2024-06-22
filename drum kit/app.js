function playSound (event){
      let keyCode;
      if(event.type === 'keydown'){
        keyCode = event.keyCode;
      }else if(event.type === 'click'){
        //get the data-key attribute from the clicked elements
        keyCode= event.target.closest('.key').dataset.key;
        
        console.log('Clicked keyCode:', keyCode);
      } else{
        return; //ingore events other tha keydown click
      }

        const audio= document.querySelector(`audio[data-key="${keyCode}"]`);
    
        const key= document.querySelector(`.key[data-key="${keyCode}"]`);

        console.log('Audio element:', audio);
        console.log(('Key element:', key));
    
        if(!audio) return;  //stop all function here 
        audio.currentTime=0; //start time
        audio.play();
    
        key.classList.add('playing');
    };


function removeTransition(e){
    if(e.propertyName !== 'transform') return; //skip if it not play
    this.classList.remove('playing');
};

const keys= document.querySelectorAll('.key');

keys.forEach(key=>key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound );

keys.forEach(key => key.addEventListener('click', playSound));