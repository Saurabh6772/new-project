import MyPromise from './MyPromise' 

export default function MyPromise_Test() {
    // let pr = new MyPromise((resolve, reject) => {
    //     let a = false;
    //     if(a) {
    //         resolve("Success");
    //     } else {
    //         reject("Fail");
    //     }
    // })
    // console.log(pr)
    // pr.then( (data) => {
    //     console.log(data)
    // })
    // .catch((err)=>{
    //     console.log(err)
    // })

    // let pr_async = new MyPromise((resolve, reject) => {
    //     setTimeout(() => {
    //         console.log("Timeout completed");
    //         resolve("Promise containing async function fulfilled");}, 5000);
    //     console.log("During timeout");
    // })

    // pr_async.then((data) => {
    //     console.log(data);
    // })
    // .catch(() => {
    //     console.log("Async catch callback");
    // })

    // let prorg = new Promise((resolve, reject) => {
    //     let a = 1+2;
    //     resolve("done");
    // }).then(() => {
    //     setTimeout(() => {
    //         console.log("first")
    //         resolve()},
    //     10000)
    // }).then(())
    // prorg
    // .then((data) => {setTimeout(() => {console.log("first")}, 10000)})
    // .then((data) => {setTimeout(() => {console.log("second")}, 1000)})

    // let pr2 = new Promise((resolve,reject) => {
       
    // })
    // prorg
    // .then(pr2
    // .then((data) => {setTimeout(() => {console.log("second")}, 1000)})
    // )

    // function Hello() {
    //     let a = 3;
    //     let y = "gfgfg"
    //     let c = {m:1, n:2};
        
    //     this.a = a;
    //     this.y = y;
    //     this.c = c;

    //     function changea() {
    //         a = 10;   
    //     }

    //     function printa() {
    //         console.log(a)
    //     }

    //     this.changea = changea;
    //     this.printa = printa;
    //     // return {
    //     //     a:a,
    //     //     y:y,
    //     //     c:c    
    //     // }
    // }

    // //console.log(hello())
    // let f = new Hello();
    // let g = new Hello();
    // //console.log(f);
    // f.changea();
    // g.printa();
    // f.printa();
    // g.printa();
    // //console.log(g);

    return (
        <div>
            See in console.
        </div>
    )
}