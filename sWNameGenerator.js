const result = document.getElementById('result')



let initialSyllables = ['paz', 'hon', 'viz', 'la', 'ren','dam','er', 'on', 'oh', 'na','ka', 'kaz', 'dja', 'rin', 'so', 'lo', 'ren', 'dar', 'jarr', 'us', 'shi', 'to', 'plax','zax', 'bax', 'yaz', 'ack', 'bar', 'cal', 'ris', 'moth', 'ma', 'do','lor','ky', 'bo', 'ka', 'tan', 'd`', 'fenn', 'cham', 'gro', 'gu', 'din', 'as', 'ajj', 'yo', 'da', 'wan', 'chel', 'li', 'gal', 'len', 'cas', 'kaz', 'maz', 'k`', 'ba', 'g`', 'z`']
let midSyllables = ['-', '-', '-', '-', '-','-','-', '-', '-', '-', '-', '-', '-', '-', 'ka', 'kaz', 'dja', 'rin', 'so', 'lo', 'ren', 'dar', 'jarr', '-', 'shi', '-', 'plax', '-', '-', 'bax', 'yaz', '-', 'bar', '-', 'ris', '-', '-', '-', '-','-','ky', 'lo', 'bo', '-', '-', '-', '-', '-', '-', 'cham', 'gro', 'gu', 'din', 'as', 'ajj', 'yo', 'da', 'kaz', 'maz', 'wan']
let standardSyllables = ['paz', 'hon', 'viz', 'la', 'ren','dam','er', 'on', 'oh', 'na', 'ka', 'kaz', 'dja', 'rin', 'so', 'lo', 'ren', 'dar', 'jarr', 'us', 'shi', 'to', 'plax', 'zax', 'bax', 'yaz', 'ack', 'bar', 'cal', 'ris', 'ian', 'moth', 'ma', 'do','lor','ky', 'lo', 'bo', 'ka', 'tan', 'fenn', 'cham', 'gro', 'gu', 'din', 'as', 'ajj', 'yo', 'da', 'obi', 'wan', 'chel', 'li', 'gal', 'len', 'cas', 'kaz', 'maz', 'ba', 'ic']
let species = ['human', 'twi`lek', 'gamorrean', 'hutt', 'ithorian', 'dathomirian', 'nemoidian','zabrak', 'mon cal', 'quarren', 'ugnaut', 'sullustan', 'duros', 'kel dor', 'bothan', 'rodian', 'gungan', 'togruta', 'mirialan', 'weequay']
let occupations = ['pilot', 'bounty hunter', 'spice dealer', 'crime lord', 'exotic dancer', 'mercenary', 'professional soldier', 'smuggler', 'enforcer', 'marshall', 'cantina owner', 'bar tender', 'restaurant owner', 'cook', 'chef', 'brewer', 'distiller', 'sex worker', 'spy', 'merchant', 'moisture farmer', 'bacta farmer', 'mandalorian warrior', 'meiloorun farmer', 'fisher', 'big game hunter', 'singer', 'holo star', 'jizz musician', 'navigator', 'starship mechanic', 'engineer', 'local legislator', 'senator', 'corpo', 'planetary security agent', 'spicer']
let planets = ['coruscant', 'kashhyyk', 'bespin', 'lothal', 'corellia', 'ryloth', 'cato nemoidia', 'stewjon', 'tattooine', 'mon calimari', 'hosnian prime', 'canto bight', 'dantooine', 'sullust', 'garel', 'alderaan', 'naboo', 'mandalore', 'ferrix', 'raxus prime', 'onderon' ]


function generate(initialSyllables, midSyllables, standardSyllables){

    //declare name length min and max
    let min = 1
    let max = 3

    //declare arrays for building names
    let firstName = ""
    let lastName = ""
    let charSpecies = ""
    let occupation = ""
    let planet = ""

    //generate a first and last name lengths for the generator
    firstLength = Math.round(Math.random()*(max - min) + min)
    console.log(firstLength)
    
    lastLength = Math.round(Math.random()*(max - min) + min)
    console.log(lastLength)
    
    for(i = 0; i < firstLength; i++){

        //firstlength already generated. for each iteration, generate an index to choose from the first syll array
        let firstIndex = Math.floor(Math.random()*initialSyllables.length)
        console.log(`generated first syllables index is ${firstIndex}`)
        //if it's the first syllable of a two syll name, allow for x`
        if(i === 0 && firstLength === 2){
            firstName += initialSyllables[firstIndex]
            //otherwise, if it's the middle syllable of a 3-syl name, allow for the -
        } else if(firstLength === 3 && i === 1){
            firstName += midSyllables[firstIndex]
            //in all other cases, use the standard syllables
        } else {
            firstName += standardSyllables[firstIndex]
        }
    
    }
    for(i = 0; i < lastLength; i++){

        //lastlength already generated. for each iteration, generate an index to choose from the last syll array
        let lastIndex = Math.floor(Math.random()*initialSyllables.length)
        console.log(`generated last syllables index is ${lastIndex}`)
        //if it's the last syllable of a two syll name, allow for x`
        if(i === 0 && lastLength === 2){
            lastName += initialSyllables[lastIndex]
            //otherwise, if it's the middle syllable of a 3-syl name, allow for the -
        } else if(lastLength === 3 && i === 1){
            lastName += midSyllables[lastIndex]
            //in all other cases, use the standard syllables
        } else {
            lastName += standardSyllables[lastIndex]
        }
    
    }
    occupation = occupations[Math.floor(Math.random()*occupations.length)]
    console.log(occupation)
   
    charSpecies = species[Math.floor(Math.random()*species.length)]
    console.log(charSpecies)
    
    planet = planets[Math.floor(Math.random()*planets.length)]
    console.log(planet)
       
    result.innerText = `Your character is ${firstName} ${lastName}, a ${charSpecies} ${occupation} from ${planet}`
    // console.log(rxName)
}



generate(initialSyllables, midSyllables, standardSyllables)

console.log("connected")

