var Customer = /** @class */ (function () {
    function Customer(name, isActive) {
        this.name = name;
        this.isActive = isActive;
    }
    Customer.prototype.announce = function () {
        return this.isActive ? "Hello, my name is " + this.name : this.name + 'is not active.';
    };
    return Customer;
}());
function handleSubmit() {
    var name = document.getElementById('name').value;
    var isActive = document.getElementById('isActive').checked;
    var firstCustomer = new Customer(name, isActive);
    var newMessage = firstCustomer.announce();
    var webHeading = document.querySelector('h1');
    webHeading.textContent = newMessage;
}
