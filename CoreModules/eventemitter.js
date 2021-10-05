"use strict";

const EventEmitter = require('events')
const { extname } = require('path')

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();


myEmitter.on('adeel',()=>{
    console.log("I am Happy");
    setTimeout(()=>{
        console.log("Because I will Go home Today")
    },3000)
});

myEmitter.emit('adeel');