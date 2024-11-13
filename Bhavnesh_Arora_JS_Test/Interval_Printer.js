// Write code that prints numbers from 1 to 10, each number after a 1-second delay.


function printNumbers(){
    let num=1;
    const id=setInterval(() => {
        if(num>10){
            clearInterval(id)
            return;
        }
        console.log(num);
        num++;
    }, 1000);
}
printNumbers();