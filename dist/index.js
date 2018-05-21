"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var snake_1 = require("./snake");
var horse_1 = require("./horse");
var sam = new snake_1.Snake("Sammy the Python");
var tom = new horse_1.Horse("Tommy the Palomino");
sam.move();
tom.move();
