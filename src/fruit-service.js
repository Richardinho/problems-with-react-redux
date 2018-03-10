const fruits = {
  'apple': { description: `
   An apple is a sweet, edible fruit produced by an apple tree (Malus pumila). Apple trees are cultivated worldwide as a fruit tree, and is the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today. Apples have been grown for thousands of years in Asia and Europe, and were brought to North America by European colonists. Apples have religious and mythological significance in many cultures, including Norse, Greek and European Christian traditions. 
    `, timeout: 1000},
  'banana': { description: `
   A banana is an edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called plantains, in contrast to dessert bananas. The fruit is variable in size, color, and firmness, but is usually elongated and curved, with soft flesh rich in starch covered with a rind, which may be green, yellow, red, purple, or brown when ripe. The fruits grow in clusters hanging from the top of the plant. Almost all modern edible parthenocarpic (seedless) bananas come from two wild species – Musa acuminata and Musa balbisiana. The scientific names of most cultivated bananas are Musa acuminata, Musa balbisiana, and Musa × paradisiaca for the hybrid Musa acuminata × M. balbisiana, depending on their genomic constitution. The old scientific name Musa sapientum is no longer used. 
    `, timeout: 8000},
  'tomato': { description : `
    The tomato (see pronunciation) is the edible, often red, fruit of the plant Solanum lycopersicum, commonly known as a tomato plant. The plant belongs to the nightshade family, Solanaceae. The species originated in western South America. The Nahuatl (Aztec language) word tomatl gave rise to the Spanish word "tomate", from which the English word tomato derived. Its use as a cultivated food may have originated with the indigenous peoples of México. The Spanish discovered the tomato from their contact with the Aztec peoples during the Spanish colonization of the Americas, then brought it to Europe, and, from there, to other parts of the European colonized world during the 16th century
    
    `, timeout: 1000}
};


export default class FruitService {

  fetch(id) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(fruits[id]);
      }, fruits[id].timeout); 
    });
  }

}
