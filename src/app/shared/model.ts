export class Address {
  street: string;
  city: string;
  state: string;
  zip: string;
  constructor(object?: any) {
    this.street = (object && object.street) || null;
    this.city = (object && object.city) || null;
    this.state = (object && object.state) || null;
    this.zip = (object && object.zip) || null;
  }
}
export class Person {
  id: number;
  name: string;
  phone: string;
  address: Address;
  constructor(object?: any) {
    this.id = (object && object.id) || null;
    this.name = (object && object.name) || null;
    this.phone = (object && object.phone) || null;
    this.address = (object && object.address) || null;
  }
}
