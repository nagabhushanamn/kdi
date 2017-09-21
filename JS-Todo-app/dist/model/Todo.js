"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
class Todo {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.completed = false;
    }
}
exports.default = Todo;