//-----Output------//
//     ["Everest", "Hillary", "Mallory"],  
//     ["South Pole", "Hillary", "Mawson"],  
//     ["Mont Blanc", "Mallory"],  
//     ["Pillar Rock", "Mallory"],  
//     ["New Hebrides", "Mawson"]  

const searchers = [  
  ["Mallory", "Everest", "Mont Blanc", "Pillar Rock"],  
  ["Mawson", "South Pole", "New Hebrides"],  
  ["Hillary", "Everest", "South Pole"]  
];

function getToponim(input) {

  input.sort()
    
  const toponymsFunc = input.reduce((acc, item) => {
    acc = [...acc, ...item.slice(1)];
    acc = Array.of(...new Set(acc))
    return acc
  }, []);
  
  const result = toponymsFunc.map((toponym) => {
    const searchersOnToponym = [];
    input.forEach((searcher) => {
      if (searcher.includes(toponym)) searchersOnToponym.push(searcher[0])
    })
    return [toponym, ...searchersOnToponym]
  })
  
  return result;
}

console.log(getToponim(searchers));