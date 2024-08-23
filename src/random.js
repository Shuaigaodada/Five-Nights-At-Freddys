class random {
    static randint(min, max) {
        // Returns a random number between min and max
        return Math.floor(Math.random() * max) - min;
    }
    static randfloat(min, max, sv) {
        // Returns a random decimal between min and max, and sv sets the length of the returned decimal
        if(sv === undefined) {
            return Math.random() * (max - min) + min;    
        }else {
            let n = Math.random() * (max - min) + min;
            return Math.floor(n * (10 ** sv)) / (10 ** sv);
        }
    }
    static choice(array) {
        // Randomly select from the array
        return array[random.randint(0, array.length)]
    }
    static choices(array, n, repeat) {
        // Randomly select n items from the array, and repeat is whether to allow duplication
        const r = [];
        if((repeat === undefined || !repeat) && array.length < n) {
            console.error("Array size is smaller than random selection")
            return [];
        }
        for(let i = 0; i < n; i++) {
            if(repeat === undefined || !repeat) {
                while(1) {
                    let item = random.choice(array);
                    if(r.includes(item)) continue;
                    r.push(item);
                    break;
                }
            }else {
                r.push(random.choice(array));
            }
        }
        return r;
    }
    static random() { return Math.random(); }
}

class Camera {
    constructor(name) {
        this.src = [];
        this.status = 0;
        this.next = []
        this.staying = []
    }
    
    load(src) { this.src.push(src); }
    loads() { for(let src of arguments) this.load(src); }
    
    push(object) { this.staying.push(object); }
    remove(object) {
        const index = this.staying.indexOf(object);
        this.staying.splice(index);
    }
    
}



