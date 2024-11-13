//polyfill for reduce

if(!Array.prototype.myReduce){
    Array.prototype.myReduce=function(cb,init){
        if(this===null){
            throw new TypeError('Array.prototype.myReduce is called on null');
        }
        if(typeof cb!=="function"){
            throw new TypeError(`${cb} is not a function`);
        }

        let acc=init;
        for(let i=0;i<this.length;i++){
            acc=acc?cb(acc,this[i],i,this):this[i]
        }
        return acc;

    }
}

//polyfill for filter

if(!Array.prototype.myFilter){
    Array.prototype.myFilter=function(cb){
        if(this===null){
            throw new TypeError('Array.prototype.myFilter is called on null');
        }
        if(typeof cb!=="function"){
            throw new TypeError(`${cb} is not a function`);
        }

        let res=[];
        for(let i=0;i<this.length;i++){
            if(cb(this[i],i,this)){
                res.push(this[i])
            }
        }
        return res;

    }
}

// let arr=[1,2,3,4]
// let sum=arr.myReduce((total,el)=>total+el,0);
// let even=arr.myFilter((el)=>el%2===0);
// console.log(sum,even);