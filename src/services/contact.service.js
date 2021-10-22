export const contactService = { 
    query
}

const CONTACTS = [
    {
        "_id": "5a56640269f443a5d64b32ca",
        "name": "Ochoa Hyde",
        "email": "ochoahyde@renovize.com",
        "phone": "+1 (968) 593-3824"
    },
    {
        "_id": "5435fdxbQ#$%SDFBV3tpodfmbg",
        "name": "Moshe Blyde",
        "email": "lies@asd.com",
        "phone": "+1 (341) 593-3432"
    },
    {
        "_id": "123#$@$#fdgvbvb_a",
        "name": "Someone Else",
        "email": "Someone@Someone.com",
        "phone": "+1 (213) 533-2131"
    },
    {
        "_id": ")$5345xbvbvb",
        "name": "Person personson",
        "email": "Person@Person.com",
        "phone": "+972 (1) 123-4533"
    },
    {
        "_id": "DC@$dffb%$#)#",
        "name": "Miste Bitcoin",
        "email": "bit@coin.con",
        "phone": "+21 (123) 321-123321"
    },

];

async function query(filterBy) {
    return Promise.resolve(CONTACTS)
}