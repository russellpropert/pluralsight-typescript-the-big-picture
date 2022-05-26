class Customer {
  name: string;
  isActive: boolean;
  
  constructor(name: string, isActive: boolean) {
    this.name = name
    this.isActive = isActive;
  }

  announce() {
    return this.isActive ? "Hello, my name is " + this.name : this.name + 'is not active.';
  }
}

function handleSubmit() {
  const name = (<HTMLInputElement>document.getElementById('name')).value;
  const isActive = (<HTMLInputElement>document.getElementById('isActive')).checked;

  let firstCustomer = new Customer(name, isActive);
  let newMessage: string = firstCustomer.announce();

  let webHeading = document.querySelector('h1');
  webHeading!.textContent = newMessage;
}
