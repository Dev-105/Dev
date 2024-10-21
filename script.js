let bar = document.getElementById('bar');
let menu = document.querySelector('.menu');
let p = document.querySelectorAll('p');
let button = document.querySelector('a');
let name = '';
let pass = ["ab048fif8djdj00a","zxkdkdksksid100z","mdfjdididosj200m", "meieosjsks300m", "wmroe9didj400m", "wmrie8eiejeh500m", "aaeieie9e8600a", "ky49r8rjei700k" ,"2kdizjs8jzidbsisb","0999djdisjside","siziz7ehe8ehe","3kIIejsisbsi000e","F238ekd8s7he7eh","eje8zheisk993","jrijr73vd7hvdujs"]
let text = ["AYOUB", "ZIAD", "MOHAMED", "MEHDI", "WASSIM", "WISSAM", "ASIA", "KOSAY","SIHAM","SOUKAINA","ZAKARIA","DOUAE","FATY","HASSAN","YSSER"];
if(localStorage.ana){
    document.querySelector('.name').value =localStorage.ana;    
    document.querySelector('h1').innerText=localStorage.ana ;

}

for (let i =0 ; i < p.length ; i++){
p[i].addEventListener('click', function () {
    menu.classList.toggle('hidden');
    name= this.innerText; 
  document.querySelector('.page').classList.remove('hidden');
document.querySelector('.name').value =name;    
    document.querySelector('h1').innerText=name ;
localStorage.ana = name;
//document.querySelector('.password').value = pass[i]

})}

 function check() {
 
    if ((document.querySelector('.password').value == pass[0]) &&  (document.querySelector('.name').value == text[0])){ button.href='language.html';console.log(name) }
    
   else if ((document.querySelector('.password').value == pass[1]) &&  (document.querySelector('.name').value == text[1])){ button.href='language.html';console.log(name) }
    
    else if ((document.querySelector('.password').value == pass[2]) &&  (document.querySelector('.name').value == text[2])){ button.href='language.html';console.log(name) }
    
    else if ((document.querySelector('.password').value == pass[3]) &&  (document.querySelector('.name').value == text[3])){ button.href='language.html';console.log(name) }
    
    else if ((document.querySelector('.password').value == pass[4]) &&  (document.querySelector('.name').value == text[4])){ button.href='language.html';console.log(name) }
    
    else if ((document.querySelector('.password').value == pass[5]) &&  (document.querySelector('.name').value == text[5])){ button.href='language.html';console.log(name) }
    
    else if ((document.querySelector('.password').value == pass[6]) &&  (document.querySelector('.name').value == text[6])){ button.href='language.html';console.log(name) }
    
    else if ((document.querySelector('.password').value == pass[7]) &&  (document.querySelector('.name').value == text[7])){ button.href='language.html';console.log(name) }
    
    else if ((document.querySelector('.password').value == pass[8]) &&  (document.querySelector('.name').value == text[8])){ button.href='language.html';console.log(name) }
    
    else if ((document.querySelector('.password').value == pass[9]) &&  (document.querySelector('.name').value == text[9])){ button.href='language.html';console.log(name) }
    
    else if ((document.querySelector('.password').value == pass[10]) &&  (document.querySelector('.name').value == text[10])){ button.href='language.html';console.log(name) }
    
    else if ((document.querySelector('.password').value == pass[11]) &&  (document.querySelector('.name').value == text[11])){ button.href='language.html';console.log(name) }
    
    else if ((document.querySelector('.password').value == pass[12]) &&  (document.querySelector('.name').value == text[12])){ button.href='language.html';console.log(name) }
    
    else if ((document.querySelector('.password').value == pass[13]) &&  (document.querySelector('.name').value == text[13])){ button.href='language.html';console.log(name) }
    
    else if ((document.querySelector('.password').value == pass[14]) &&  (document.querySelector('.name').value == text[14])){ button.href='language.html';console.log(name) }
    
    else
    {
  document.querySelector('h3').innerText= 'Error user..';
     document.querySelector('main').style.display='block';
     for(let d = 0 ; d<=9 ; d++){
console.warn('just for DEV 105');

} 

     document.querySelector('.page').classList.add('hidden');   
    setTimeout(function () {
    location.href='main.html';   
    },1500)
    }
}






let x = document.querySelector('h2');
x.onclick = function () {
    document.querySelector('.page').classList.remove('hidden');
    document.querySelector('main').style.display='none';
    
}







 bar.onclick = function () {
     menu.classList.toggle('hidden');
     document.querySelector('.page').classList.toggle('hidden');
 }







// تعطيل الكليك الأيمن
document.addEventListener('contextmenu', event => event.preventDefault());

// تعطيل الضغط على Ctrl+U وCtrl+Shift+I
document.addEventListener('keydown', event => {
  if ((event.ctrlKey && event.key === 'u') || 
      (event.ctrlKey && event.shiftKey && event.key === 'i')) {
    event.preventDefault();
  }
});
