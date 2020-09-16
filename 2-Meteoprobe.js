let input = [  
    [1, 0],  
    [0, 1],  
    [1, 1]  
  ]
  
  let xCounter = 0
  let yCounter = 0
  
  for (let i=0; i<= input.length-1; i++){
    if (input[i][0] === 1) xCounter++
    if (input[i][1] === 1) yCounter++
  }
  
  console.log("xCounter", xCounter) 
  console.log("yCounter", yCounter) 
  
  if (xCounter%2 != 0 || yCounter%2 != 0) console.log(null) 
  
  let xForChange = xCounter/2
  let yForChange = yCounter/2
  
  input.map((item)=>{
    if(item[0] === 1 && xForChange != 0){
      item[0] = -1 
      xForChange -= 1
    }
    if(item[1] === 1 && yForChange != 0){
      item[1] = -1 
      yForChange -= 1
    }
  })
  
  console.log (input)