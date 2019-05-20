class Contact {
    constructor(name, phone, email, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

class AddressBook {
    constructor() {
        this.contacts = [
            { name: "Sadie", phone: "(734)555-1234", email: "sadiep@gmail.com", relation: "Neice" },
            { name: "Kaleb", phone: "{734)555-5678", email: "kalebp@gmail.com", relation: 'Nephew' },
            { name: "Jacob", phone: "(734)555-0101", email: "jacobp@gmail.com", relation: "Friend" }
        ];
    }
    add(info) {
        this.contacts.push(info);
    }
    deleteAt(index) {
        this.contacts.splice(index, 1);
    }
    print() {
        this.contacts.forEach((contacts) => {
            console.log(`Name: ${contacts.name}  Phone: ${contacts.phone}  Email: ${contacts.email}  Relation: ${contacts.relation}`);
        })
    }
}

let addressBook = new AddressBook();

function manageBook() {
    while (true) {
        let manage = prompt("Add, Remove, Print, or Quit?");
        if (manage === "add") {
            let name = prompt("Name?");
            let phone = prompt("Phone?");
            let email = prompt("Email?");
            let relation = prompt("Relation?");
            addressBook.add(new Contact(name, email, phone, relation));
        } else if (manage === "remove") {
            let number = prompt("Index to delete?");
            addressBook.deleteAt(number);
        } else if (manage === "print") {
            addressBook.print();
        } else {
            console.log("Farewell.");
            break;
        }
    }
};

manageBook();