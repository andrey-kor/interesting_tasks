const inputData = [  
  {  
      geometry: [10, 20],  
      text: "James"  
  },  
  {  
      geometry: [20, 40],  
      text: "Bond"  
  },  
  {  
      geometry: [5, 50],  
      text: "mr"  
  },
  {  
      geometry: [6, 40],  
      text: "dear"  
  }  
]
const inputDictionary = ["Bond", "James"];

///////////////////////////////////////////////////////

function res (inputData, inputDictionary){

  for (let i=0; i<inputData.length; i++){
    if (!inputDictionary.includes(inputData[i].text)) return "Unreadable message"
  }

    inputData.sort((a, b) => {
      return (a.geometry[0] - b.geometry[0])
    })

  let textMessages = inputData.map(item => item.text);
  let resultMessage = textMessages.join(' ');

  if (resultMessage.length !== 0) return resultMessage
  else return "Unreadable message"
}

console.log(res(inputData, inputDictionary))
