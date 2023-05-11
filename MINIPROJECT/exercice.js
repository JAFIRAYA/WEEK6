let quote=[
    {
        "id":0,
        "auteur":"Victor Hugo",
        "quote": "La vie n\'est qu\'une longue perte de tout ce qu\'on aime."
    },
    {
        "id":1,
        "auteur":"Albert Einstein",
        "quote": "L'imagination est plus importante que la connaissance."
    },
    {
        "id":2,
        "auteur":"Mahatma Gandhi",
        "quote": "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.",
    }
]


    

    let sec=document.querySelector('section')
    let  btn1=document.getElementById('btn')

    btn1.addEventListener('click',function(){
       let A=Math.floor(Math.random()*quote.length)
       let B=quote.find((x) => x.id==A)
       sec.textContent=B.quote

       
        
    
    }

    )
   

    

function addQuote() {
    let QU=document.getElementById('Q')
    let AU=document.getElementById('A')
 
  
 
   let newQuote = {
    QU: QU.value,
    auteur: AU.value,
    id: quote.length + 1
  };
  
  
   quote.push(newQuote);
  
 
  console.log(quote);
  document.getElementById("Q").value = "";
  document.getElementById("A").value = "";
}




        function withSpace() {
            
            let inputText = document.getElementById("text1").value;
            
            
            let quote = inputText.match(/".*?"/g);
            
        
            for (let i = 0; i < quote.length; i++) {
              let qoute = quote[i];
              let numCharacters = qoute.length;
              
              
              alert("Quote #" + (i+1) + ": " + numCharacters + " characters");
            }
          }
          function countCharacters() {
           
            let  inputText = document.getElementById("myTextarea").value;
            
            
            let  quotes = inputText.match(/".*?"/g);
            
           
            for (let  i = 0; i < quotes.length; i++) {
              let  quote = quotes[i];
              
             
              let  noSpaces = quote.replace(/\s/g, "");
              
              
              let  numCharacters = noSpaces.length;
              
              
              alert("Quote #" + (i+1) + ": " + numCharacters + " characters");
            }
          }
        


       





        
        
    
