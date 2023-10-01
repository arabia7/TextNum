function multiplyNumber() {
    // Get the input values.
    const numElf = document.getElementById('number500').value;
    const numElt = document.getElementById('number200').value;
    const numElo = document.getElementById('number100').value;
    const numEly = document.getElementById('number50').value;
  
    // Calculate the result.
    const resElf = numElf * 500;
    const resElt = numElt * 200;
    const resElo = numElo * 100;
    const resEly = numEly * 50;
  
    // Update the output elements.
    document.getElementById('result500').innerHTML = `= ${resElf}`;
    document.getElementById('result200').innerHTML = `= ${resElt}`;
    document.getElementById('result100').innerHTML = `= ${resElo}`;
    document.getElementById('result50').innerHTML = `= ${resEly}`;
    
    
    let scoreEl = document.getElementById("score");
  scoreEl.innerHTML = `Total: ${resElf + resElt + resElo + resEly}`;
  }
  
  const btnEl = document.querySelector(".btn");
  
  btnEl.addEventListener("mouseover", (event)=>{
      const x = (event.pageX - btnEl.offsetLeft);
      const y = (event.pageY - btnEl.offsetTop);
      
      btnEl.style.setProperty("--xPos", x + "px")
      btnEl.style.setProperty("--yPos", y + "px")
  });
   
  
  //<div class= "top" id="top"> top up</div>
  //#CD5C5C
  
  /*function multiplyNumber() {
      const numElf = document.getElementById('number500').value;
  
      const resElf = numElf * 500;
  
      document.getElementById('result500').innerHTML = resElf;
  
  
  }*/