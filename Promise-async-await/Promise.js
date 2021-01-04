const myPromise = new Promise((resolve, reject) => {
    if(true){
        setTimeout(() => {
            resolve('I have succeede');
        }, 1000)
    }else{
        reject('I have failed');
    }
});

myPromise
    .then(value => value + '!!!')
    .then(newValue => console.log(newValue))
    .then(rejectValue => console.log(rejectValue));


// example (run the code in chrome console)

/* 
    let promise = fetch(url, [options])

    1. url – the URL to access.
    2. options – optional parameters: method, headers etc.
*/

// 1. get request

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const firstUser = users[0];
        console.log(firstUser);
        return fetch('https://jsonplaceholder.typicode.com/posts?userId=' + firstUser.id);
    })
    .then(response => response.json())
    .then(posts => console.log(posts))
    .catch(error => console.log(error));

// 2. post request using fetch route;

let user = {
  name: 'John',
  surname: 'Smith'
};

fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'post',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.log(err));