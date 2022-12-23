console.log("heyya world")

const a = new Promise(function(resolve, reject) {
    resolve(100);
})
a.then((res) => {
    console.log(res)
})

