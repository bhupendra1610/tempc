const farenhiet = document.querySelector('#tempindegree')  //degree inputbox
const convertor= document.querySelector('.convertor')      //convertor button
const result = document.querySelector('.result')           //result div
const typeoft = document.querySelector('#car')             //options of tempearture (c/f)
const fah = document.querySelector('.option1')             //temperature in farenheit
const celci = document.querySelector('.option2');          //temperature in celcious

const errormessage = document.querySelector('.em');
const resultbox= document.querySelector('.result');

convertor.addEventListener('click',changeTemp);       //convertor button
function changeTemp(e){                              //function for conversion
    e.preventDefault();        //prevent default and hold screen
  
       
        if( farenhiet.value != ''){          //null value
                   
        
        if (typeoft.value == celci.value){           //condition for temp in celsious (option 1)
           
          let far =farenhiet.value;                     //calculation of convertion of farenheit to celcious
          let cel= ((far*9/5 +32).toFixed(2))+'°F';
          let celtocheck= ((far*9/5 +32).toFixed(2));
          let newli = document.createTextNode(cel);         //textnode for storing the farenheit value
           console.log(cel);
          result.innerHTML = '<div class="res">Result :</div>';
          if( celtocheck>98.6){
            resultbox.style.backgroundColor= 'red';
          }
          else{
            resultbox.style.backgroundColor ='antiquewhite';
        }
                                 
          //   creating div is necessary in order to get the result only one time and not to store it.
          //everytime it get refreshed due to new div form at runtime.
         
          result.appendChild(newli);           //append the result of conversion to  result
        }
        if( typeoft.value == fah.value ){          //condition for temp in farenheit
            let celc = farenhiet.value;                   //calculation for convertion of cel to far
            let fare= ((celc-32)*5/9).toFixed(2)+'°C';
            let faretocheck= ((celc-32)*5/9).toFixed(2);
            let newli2 = document.createTextNode(fare);           //creating textnode 
      
    //   creating div is necessary in order to get the result only one time and not to store it.
    //everytime it get refreshed due to new div form at runtime.
            result.innerHTML = '<div class ="res"> Result:</div>' ;
            console.log('farenheit wala'+fare);
            if( faretocheck >37){
                resultbox.style.backgroundColor= 'red';
              }
              else{
                resultbox.style.backgroundColor ='antiquewhite';
            }
                                       
            result.appendChild(newli2);          //append the newli2 to result
        }
    }
    else{
                   errormessage.innerHTML = 'Please enter the value' 
                   setTimeout(() => errormessage.remove(),3000);       //time for 3 sec to display error message 
    }   
   
    
     }
    
  
