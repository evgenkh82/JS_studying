// Ship prototype
function Ship(name, className, speed, crew) {
    this.name = name;
    this.className = className;
    this.speed = speed;
    this.crew = crew;
}
Ship.prototype.toString = function toString() {
    return `name: ${this.name}\nclass: ${this.className}\nspeed: ${this.speed}\ncrew: ${this.crew}`;
};