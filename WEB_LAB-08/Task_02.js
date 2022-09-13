function createAnimal(species,verb,noise){
    return{
        species,
        [verb](){
            console.log(noise);
        }
    }
}

const d = createAnimal("dog","bark","Woooof");
d.bark()

const s = createAnimal("sheep","bleet","BAAAAaaaa");
s.bleet()

