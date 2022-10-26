/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
const myInfo = {
    'name':'Hugo Giovanny Rivera Ayala', 
    'photo':'../images/me.jpg', 
    'favoriteFoods':['ceviche','papa a la huancaina', 'lasagna'],
    'hobbies':['read books', 'play with my children', 'learn something new'], 
    'placesLived':[
        {
            place: 'La Victoria',
            length: '7 years',
        },
        {
            place: 'Los Olivos',
            length: '1 year',
        },
        {
            place: 'Chosica',
            length: '3 years',
        },
        {
            place: 'Callao',
            length: '10 years',
        },
        {
            place: 'San Martin de Porres',
            length: '10 years',
        },
        {
            place: 'Cercado de Lima',
            length: '5 years',
        }
    ]
};

// Step 2: Inside of the object, add a property named name with a value of your name as a string

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings

// Step 6: Add another property named placesLived with a value of an empty array

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string

// Step 8: For each property, add appropriate values as strings

// Step 9: Add additional objects with the same properties for each place you've lived

document.querySelector("#name").innerHTML = myInfo['name'];

document.querySelector('#photo').src = myInfo['photo'];

document.querySelector('#photo').alt = myInfo['name'];

// const favFood1 = document.createElement('li'); 
// favFood1.textContent = myInfo.favoriteFoods[0]; 
// const favFood2 = document.createElement('li'); 
// favFood2.textContent = myInfo.favoriteFoods[1]; 
// const favFood3 = document.createElement('li'); 
// favFood3.textContent = myInfo.favoriteFoods[2]; 

myInfo.favoriteFoods.forEach( (favFood) => {
    let inli = document.createElement('li');
    inli.textContent = favFood;
    document.querySelector('#favorite-foods').appendChild(inli);

});


// document.querySelector('#favorite-foods').appendChild(favFood1); 
// document.querySelector('#favorite-foods').appendChild(favFood2); 
// document.querySelector('#favorite-foods').appendChild(favFood3); 


// const hobby1 = document.createElement('li'); 
// hobby1.textContent = myInfo.hobbies[0]; 
// const hobby2 = document.createElement('li'); 
// hobby2.textContent = myInfo.hobbies[1]; 
// const hobby3 = document.createElement('li'); 
// hobby3.textContent = myInfo.hobbies[2]; 

// document.querySelector('#hobbies').appendChild(hobby1); 
// document.querySelector('#hobbies').appendChild(hobby2); 
// document.querySelector('#hobbies').appendChild(hobby3); 

myInfo.hobbies.forEach( (myHobby) => {
    let inho = document.createElement('li');
    inho.textContent = myHobby;
    document.querySelector('#hobbies').appendChild(inho);

});


myInfo.placesLived.forEach( (myPlace) => {
    let createDt = document.createElement('dt');
    let createDd = document.createElement('dd');
    
    createDt.textContent = myPlace.place;
    createDd.textContent = myPlace.length;

    document.querySelector('#places-lived').appendChild(createDt);
    document.querySelector('#places-lived').appendChild(createDd);

} );


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

// Step 6: Repeat Step 4 for each hobby in the hobbies property

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
