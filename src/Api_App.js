import { useEffect, useState } from 'react'
import MyPromise from './MyPromise'

async function fetchComments() {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments");
        const comments = await response.json();
        // console.log(comments)
        return comments;
  }

// function useComments() {
//     const [comments, setComments] = useState([])
        
//     const response = fetch("https://jsonplaceholder.typicode.com/comments")
//         .then(response => {
//             return response.json()
//         })
//         .then(comments => {
//             setComments(comments)
//         })
//         .catch(err => {
//             console.log(err)
//         })
//         //const comments = await response.json();
//         // console.log(comments)
//         return comments;
 // }
  
//  function MyPromise (executor) {
//     let isresolve = 0;
//     let isreject = 0;
//     let onresolve;
//     let onreject;
    
//     this.then = function(fulfilledCallback) {
//         onresolve = fulfilledCallback;
//         if (isresolve) {
//             onresolve();
//         }
//         return this;
//     }

//     this.catch = function(failedCallback) {
//         onreject = failedCallback;
//         if(isreject) {
//             onreject();
//         }
//         return this;
//     }

//     function resolve() {
//         if(isresolve || isreject) {
//             return;
//         }
//         isresolve = 1;
//         if(onresolve) {
//             onresolve();
//         }
//     }

//     function reject() {
//         if(isresolve || isreject) {
//             return;
//         }
//         isreject = 1;
//         if(isreject) {
//             onreject();
//         }
//     }

//     executor(resolve, reject);
// }

function Api_App() {
    // const [comments, setComments] = useState([])
    
    // useEffect(() => {
    //     const c = fetchComments()
    //     console.log(c);
    //     // setComments(c)
    // }, [])

    // //console.log(comments)
    // c.then( 
    // let comments = useComments()
    // let commentsName = []
    // for (let i=0;i<10;i++) {
    //     // let randomIndex = Math.floor(Math.random()*100)
    //     commentsName.append(comments[i].name)
    // })
    // return (
    //     <ul>
    //     {/* {commentsName.map((commentName,index)=>{
    //         return <li key={`${commentName}_${index}`}>{commentName}</li>
    //     })} */}
    //     </ul>
    // )

    // let pr = new MyPromise((resolve, reject) => {
    //     let a = false;
    //     if(a) {
    //         resolve("Success");
    //     } else {
    //         reject("Failed");
    //     }
    // })
    // console.log(pr)
    // pr.then( () => {
    //     console.log("Then Callback")
    // })
    // .catch(()=>{console.log("Catch Callback")})

        // async function temp() {
        //     try {
        //         let result = await pr;
        //         console.log(result);
        //     } catch(err) {
        //         console.log(err)
        //     }
        // }
        // temp()
    // let return_value = temp()
    // console.log(return_value)
    // temp().then((data) => console.log(data))
}

function CommentBox() {
    return (
        <textarea> </textarea>
    )
}

export default Api_App;
