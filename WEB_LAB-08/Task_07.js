async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return 10;
}

function f(){
    wait().then(ouput => console.log(ouput))
}

f()
