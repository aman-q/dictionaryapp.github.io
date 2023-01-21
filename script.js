const dictionary =(word)=>{
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f6930bed7emshf6102ee0835e9eap18317djsn86fccc3a4b95',
      'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
    }
  };
  
  fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word='+word, options)
    .then(response => response.json())
    .then((response) =>{ 
      wordheading.innerHTML="Meaning of :"+response.word; 
      definition.innerHTML=response.definition.replace("2.", "<br>2.").replace("3.", "<br>3.").replace("4.", "<br>4.").replace("5.", "<br>5.").replace("6.", "<br>6.").replace("6.", "<br>6.");
    
    
    
    
    })
    .catch(err => console.error(err));
}
submitbtn.addEventListener("click",(e)=>{
  e.preventDefault();
  dictionary(searchinput.value)
})

