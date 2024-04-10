// Fetching and reading the JSON file
fetch('./Finalsprintjson.json')
.then(response => response.json())
.then(data => {
    // making container to hold the JSON data
    const container = document.createElement('div');
    container.id = 'FinalsprintjsonContainer';

    // forEach loop to loop through the JSON data
    data.forEach(person => {
        // making a div for every person
        const personDiv = document.createElement('div');
        personDiv.className = 'person';

        // Adding the data to the created div
        personDiv.innerHTML = `
            <h2>${getFullName(person)}</h2>
            <p>Gender: ${getGender(person)}
            <p>Age: ${getAge(person)}</p>
            <p>City: ${person.city}</p>
            `;
            
        // Adding the div for the people to the container
        container.appendChild(personDiv);

        // logging data to console
        console.log(getFullName(person));
        console.log(getGender(person));
        console.log(getAge(person));
        console.log(person.city);
        
    });

    // Adding container to html
    document.body.appendChild(container);

})

.catch(error => {
    // catching any errors
    console.error(error); 
});

//  Functions 

function getFullName(person) {
    return `${person.fname} ${person.lname}`;

}


function getGender(person) {
    return person.gender;
}


function getAge(person) {
    return person.age
}