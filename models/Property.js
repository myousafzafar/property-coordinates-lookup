class Property {
  constructor(id, title, price, address, location, agent = null) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.address = address;
    this.location = location;
    this.agent = agent;
  }
}

export default Property;
