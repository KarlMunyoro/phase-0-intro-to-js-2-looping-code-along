// Code your solutions in this file
function writeCards(array, event){
    let env=[];
    for(let i=0; i<array.length; i++){
        let result = `Thank you, ${array[i]}, for the wonderful ${event} gift!`;
        env.push(result);
    }
    console.log(env);
    return env;
}

writeCards(['Guadalupe', 'Ollie',  'Aki'], 'surprise');

function countDown(){
    for(let i=10; i>=0; i--){
        console.log(i);
    }
}