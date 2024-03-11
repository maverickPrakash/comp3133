class Customer {
    firstName: string;
    lastName: string;

    public greeter(){
        console.log(`Hello, ${this.firstName} ${this.lastName}`);
    }
}

// object instance of class
let customer = new Customer();
customer.firstName = "Jane";
customer.lastName = "Doe";
customer.greeter();