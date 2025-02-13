// const result = document.getElementById('result')

//format: "go <action> <noun>, ya <descriptor> <noun or adj> <noun>"

let action = ['eat', 'kick', 'grate', 'grind', 'pount','jump over','dig', 'spin', 'jugle', 'puke','spill', 'climb', 'throw', 'flip', 'slip on', 'trip over', 'find', 'run over', 'gobble', 'gargle', 'fumble', 'caress', 'swallow','inhale', 'fart on', 'pee on', 'pack up', 'squeeze', 'press', 'push', 'chauffeur']
let noun1 = ['garbage', 'a bee', 'a butt', 'a potato', 'a bus','a cat','a dog', 'a possum', 'mashed potatoes', 'a diaper', 'a pie', 'gravel', 'marbles', 'teeth', 'dirt', 'mud', 'poop', 'pickles', 'fingernails', 'a banana', 'a grape', 'a fork', 'a spork', 'a chicken', 'a duck', 'a sloth', 'worms', 'a shoe', 'a boot', 'flip-flops', 'a hat', 'a mitten', 'underpants', 'socks', 'a hairball', 'mustard', 'a noodle', 'bathwater', 'a toilet', 'a doormat', 'a squid', 'a pumpkin', 'a squash', 'nails', 'screws', 'rocks', 'sardines', 'anchovies', 'a dead raccoon', 'an old salmon', 'old spaghetti', 'corn', 'bricks']
let descriptor = ['cheese-eatin', 'ugly-lookin', 'fish-lookin', 'frog-lookin', 'brain-eatin','pumpkin-headed','snail-paced','squid-haired', 'wet-haired', 'wet-nosed', 'nose-pickin', 'foot-sniffin', 'boot-lickin', 'grass-smellin', 'ham-fisted', 'tomato-faced', 'yak-faced', 'chicken-headed', 'flat-faced', 'big-headed', 'glue-sniffin', 'pee-drinkin', 'baby-faced', 'granny-faced', 'undignified', 'closeted', 'washington-haired', 'lettuce-faced', 'bat-faced', 'pidgeon-toed', 'bean-eatin', 'mush-mouthed', 'smooth-brained', 'mushroom-headed', 'goat-voiced','toaster-mouthed','keyboard-surfin', 'tuna-greasin']
let nounOrAdj = ['surrender', 'grease', 'pants', 'pit', 'butt', 'willy', 'oil', 'stink', 'odor', 'snake','eel', 'beaver', 'quail', 'goose', 'beef', 'donkey', 'candy', 'ham', 'boat', 'fish', 'boot', 'wiggle']
let noun2 = ['monkey', 'pit', 'jockey', 'pilot', 'faker', 'waiter', 'waitress', 'lawyer', 'pod', 'head', 'skeleton', 'soup', 'suit', 'pirate', 'bandit', 'fumbler', 'cheese', 'computer', 
'miner', 'scrapper', 'garbage', 'herder', 'cowboy', 'hunter', 'criminal', 'gangster', 'dancer', 'smuggler','sneaker', 'chef',
'fisher', 'farmer', 'singer', 'navigator', 'mechanic', 'tooth', 'engineer', 'senator', 'body', 'agent', 'skeleton', 'head', 'breather']


function generate(action, noun1, descriptor, nounOrAdj, noun2){

    //declare name length min and max

    action = action[Math.floor(Math.random()*action.length)]
    // console.log(occupation)
   
    noun1 = noun1[Math.floor(Math.random()*noun1.length)]
    // console.log(charSpecies)
    
    descriptor = descriptor[Math.floor(Math.random()*descriptor.length)]
    // console.log(descriptor)
    
    nounOrAdj = nounOrAdj[Math.floor(Math.random()*nounOrAdj.length)]
    // console.log(nounOrAdj)

    noun2 = noun2[Math.floor(Math.random()*noun2.length)]
    // console.log(noun2)

    return `Go ${action} ${noun1}, ya ${descriptor} ${nounOrAdj} ${noun2}!`
    // console.log(rxName)
}



console.log(generate(action, noun1, descriptor, nounOrAdj, noun2))

// console.log("connected")

