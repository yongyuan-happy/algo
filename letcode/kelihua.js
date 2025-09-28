// 写一个加法函数(sum)，使他可以同时支持sum(x,y)和sum(x)(y)()两种调用方式。

function sum(...args) {

    let total = args.reduce((a, b) => a + b, 0);
    
    if (args.length > 1) {
        return total;
    }

    const fn = (...next) => {
        if (next.length === 0) return total;
        total += next.reduce((a, b) => a + b, 0);
        return fn;
    }


    return fn;
}


function sum(...args) {
    let total = args.reduce((a, b) => a + b, 0);


}


function curryChain(...args: number[]): any {
    let total = args.reduce((a, b) => a + b, 0);
    const fn = (...next: number[]) => {
        if (next.length === 0) return total;
        total += next.reduce((a, b) => a + b, 0);
        return fn;
    };
    return fn;
}

// 测试
console.log(curryChain(1)(2)(3)(4)()); // 10
console.log(curryChain(5, 5)(10)());   // 20



const main = () => {
    //   fetch('www.example.com')
    //     .then(res => res.json())
    //     .then(res => {
    //       console.log(res);
    //     });

    //   



}

async function main() {

    async function yibu() {

        const res1 = await fetch('www.example.com');
        const res2 = await res1.json();
        console.log(res2);
    }

    yibu();

    console.log('End');
}

