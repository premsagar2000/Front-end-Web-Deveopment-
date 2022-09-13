let users = [
    {
        username: 'larry',
        email: 'larry@foo.com',
        yearsExperience: 22.1,
        favoriteLanguages: ['Perl', 'Java', 'C++'],
        favoriteEditor: 'Vim',
        hobbies: ['Fishing', 'Sailing', 'Hiking'],
        hometown: {
        city: 'San Francisco',
        state: 'CA'
        }
    },
    {
        username: 'jane',
        email: 'jane@test.com',
        yearsExperience: 33.9,
        favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
        favoriteEditor: 'Emacs',
        hobbies: ['Swimming', 'Biking', 'Hiking'],
        hometown: {
        city: 'New York',
        state: 'NY'
        }
    },
    {
        username: 'sam',
        email: 'sam@test.com',
        yearsExperience: 8.2,
        favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
        favoriteEditor: 'Atom',
        hobbies: ['Golf', 'Cooking', 'Archery'],
        hometown: {
        city: 'Fargo',
        state: 'SD'
        }
    },
    {
        username: 'anne',
        email: 'anne@test.com',
        yearsExperience: 4,
        favoriteLanguages: ['C#', 'C++', 'F#'],
        favoriteEditor: 'Visual Studio Code',
        hobbies: ['Tennis', 'Biking', 'Archery'],
        hometown: {
        city: 'Albany',
        state: 'NY'
        }
    },
    {
        username: 'david',
        email: 'david@test.com',
        yearsExperience: 12.5,
        favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
        favoriteEditor: 'VS Code',
        hobbies: ['Volunteering', 'Biking', 'Coding'],
        hometown: {
        city: 'Los Angeles',
        state: 'CA'
        }
    }
];

// a)
function printEmails(arr) {
    arr.forEach(obj => console.log(obj.email));
}

printEmails(users);

console.log();

// b)
function printHobbies(arr) {
    arr.forEach(obj => console.log(obj.hobbies));
}

printHobbies(users);

console.log();

// c)
function findHometownByState(arr, state) {
    return arr.find(obj => obj.hometown.state == state);
}

console.log(findHometownByState(users, 'CA'));

console.log();

// d)
function allLanguages(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        arr[i]['favoriteLanguages'].forEach(item => newArr.push(item));
    }

    let unique = newArr.filter((item, i , arr) => newArr.indexOf(item) === i);
    return unique;
}

console.log(allLanguages(users));

console.log();

// e)
function hasFavoriteEditor(arr, editor) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i]['favoriteEditor'] === editor) {
            return true;
        }
    }
    return false;
}

console.log(hasFavoriteEditor(users, 'Notepad++'));

console.log();

// f)
function findByUsername(arr, username) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i]['username'] === username) {
            return arr[i];
        }
    }
}

console.log(findByUsername(users, 'jane'));

console.log();