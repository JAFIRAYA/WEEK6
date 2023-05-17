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
       let rendomIndex=Math.floor(Math.random()*quote.length)
       console.log("index "+rendomIndex)

       let B=quote.find((x) => x.id==rendomIndex)
       console.log("CURRENT "+B)
       sec.textContent=B.quote

    }

    )
   

function addQuote() {
    let QU=document.getElementById('Q')
    let AU=document.getElementById('A')
 
  
 
   let newQuote = {
    id: quote.length,
    auteur: AU.value,
    quote: QU.value,
    
    
  };
  
  
   quote.push(newQuote);
  
 
  console.log(quote);
  document.getElementById("Q").value = "";
  document.getElementById("A").value = "";
}




        function withSpace() {
            
            let inputText = sec.textContent;
            
            //let quote = inputText.match(/".*?"/g);
            alert("Quote : " + inputText.length + " characters");
        
            /*for (let i = 0; i < quote.length; i++) {
              let qoute = quote[i];
              let numCharacters = qoute.length;
              
              
              alert("Quote " + (i+1) + ": " + numCharacters + " characters");
            }*/
          }
          function countCharacters() {
           
            let inputText = sec.textContent;
            let  noSpaces = inputText.replace(/\s/g, "");
            alert("Quote : " + noSpaces.length + " no characters");

            //let  quotes = inputText.match(/".*?"/g);
            
           
            /*for (let  i = 0; i < quotes.length; i++) {
              let  quote = quotes[i];
              
             
              let  noSpaces = quote.replace(/\s/g, "");
              
              
              let  numCharacters = noSpaces.length;
              
              
              alert("Quote " + (i+1) + ": " + numCharacters + " characters");
            }*/
          }
        


       





        
        
    
