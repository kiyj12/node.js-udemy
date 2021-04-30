const fetchData = callback => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() =>{
      callback('Done!');
    }, 1500);
  });
  return promise;

}


// Async code
// callback
setTimeout(() => {
  console.log('Timer is done!');
  fetchData()
    .then(text => {
      console.log(text);
    })
    .then(text2 => {
      console.log(text2);
    });
}, 2000);


// Synchronized code
console.log('Hello!');
console.log('Hi!');