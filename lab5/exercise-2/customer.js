var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.greeter = function () {
        console.log("Hello, ".concat(this.firstName, " ").concat(this.lastName));
    };
    return Customer;
}());
var customer = new Customer();
customer.firstName = "Jane";
customer.lastName = "Doe";
customer.greeter();
