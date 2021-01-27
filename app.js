let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let domain = ['.com', '.net', '.us', '.io'];

function ranDom() {
    var containPronoun = pronoun[Math.floor(Math.random() * pronoun.length)];
    var containAdj = adj[Math.floor(Math.random() * adj.length)];
    var containNoun =  noun[Math.floor(Math.random() * noun.length)];
    var containDomain =  domain[Math.floor(Math.random() * domain.length)];
    return containPronoun+containAdj+containNoun+containDomain;
}

console.log(ranDom());