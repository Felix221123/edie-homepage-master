// This code base here will be about a db about workpalce trying to access individuals records
//individuals records using objects and properties 
//This will serve as a testing stage for what you've learnt so far


//this is a small database called employeeDatabase created with objects and properties
const employeeDatabase = [
    {
        firstName : "Felix",
        surName : "Baah",
        Age : 19,
        nationality : "Ghanaian",
        gender : "Male",
        uniGradeClass : "First Class",
        hobbies : ["likes mango lassi", 
        "coding", 
        "likes listening music"],
        contact_Details : {
            address : {
                address_Line1 : "4 Hoffmans Road",
                postCode : "E176ZF"
            },
            phone_Number : {
                mobileNumber : +447931115686,
                TelephoneNumber : +447931115686
            },
            email : {
                mainEmailAddress : "baahfelix49@gmail.com",
                sideEmailAdress : "felixbaah47@gmail.com"
            }

        }

    },
    {
        firstName : "Tomi",
        surName : "Tokko",
        Age : 18,
        nationality : "Nigerian",
        gender : "Male",
        uniGradeClass : "First Class",
        hobbies : ["likes going out", 
        "coding", 
        "likes listening music"],
        contact_Details : {
            address : {
                address_Line1 : "8 Holders Avenue",
                postCode : "E97SG"
            },
            phone_Number : {
                mobileNumber : +447849328284,
                TelephoneNumber : +447849328284
            },
            email : {
                mainEmailAddress : "tomitokko@gmail.com",
                sideEmailAdress : "tomi5937@gmail.com"
            }

        }

    },
    {
        firstName : "Fahad",
        surName : "Al",
        Age : 19,
        nationality : "Bangladesh",
        gender : "Male",
        uniGradeClass : "First Class",
        hobbies : ["likes playing games", 
        "cricket", 
        "likes listening music"],
        contact_Details : {
            address : {
                address_Line1 : "98 Hokkers Road",
                postCode : "E30PT"
            },
            phone_Number : {
                mobileNumber : +447928430184,
                TelephoneNumber : +447928430184
            },
            email : {
                mainEmailAddress : "fahadal@gmail.com",
                sideEmailAdress : "fahad@info.co.uk"
            }

        }

    },
    {
        firstName : "Ephan",
        surName : "Baah",
        Age : 15,
        nationality : "Ghanaian",
        gender : "Male",
        uniGradeClass : "First Class",
        hobbies : ["likes talking", 
        "watching TV", 
        "likes playing music"],
        contact_Details : {
            address : {
                address_Line1 : "4 Hoffmans Road",
                postCode : "E176ZF"
            },
            phone_Number : {
                mobileNumber : +447289201837,
                TelephoneNumber : +447289201837
            },
            email : {
                mainEmailAddress : "ephanasante832@gmail.com",
                sideEmailAdress : "asante48392@gmail.com"
            }

        }

    }
];

console.log(employeeDatabase)