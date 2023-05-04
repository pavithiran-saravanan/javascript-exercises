function getAge(a){
    if(!a.yearOfDeath){
        return (new Date()).getFullYear() - a.yearOfBirth;        
    }
    else{
        return a.yearOfDeath - a.yearOfBirth;
    }
}

const findTheOldest = function(people) {
    return people.sort((a, b)=>{
        const a_age = getAge(a);
        const b_age = getAge(b);
        return a_age < b_age ? 1 : -1;
    })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
