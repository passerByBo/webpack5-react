// import "core-js/stable";
// import "regenerator-runtime/runtime";
const a = 1;
let b = 2;


class myClass{

}

const mine = new myClass();
console.log('mine',mine);

export const aFunc = () => {
    return a + b;
}

export const arrInclude = () => {
    const arr = [1, 2, 3, 4];
    return arr.includes(a)
}

export const promiseFunc = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            document.body.style.backgroundColor = 'green';
        }, 3000)
    })
}

const asyncFunc = async () => {
    await promiseFunc();
    console.log('success!!!!!!!!!!')
}



console.log('aFunc', aFunc())

console.log('arrInclude', arrInclude())

document.body.style.backgroundColor = 'red';

asyncFunc();