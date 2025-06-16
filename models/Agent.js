import User from "./User.js";

class Agent extends User {
  constructor(name, agency) {
    super(name);
    this.agency = agency;
  }
}

export default Agent;
