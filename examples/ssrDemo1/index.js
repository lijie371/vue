'use strict';
var Vue = require('../../dist/vue.common');
var compiler = require("../../dist/compiler.common");
var compileToFunctions = compiler.compileToFunctions;
var Tree = require("./components/tree/tree")

var data = {
    name: 'My Tree',
    children: [
        { name: 'hello' },
        { name: 'wat' },
        {
            name: 'child folder',
            children: [
                {
                    name: 'child folder',
                    children: [
                        { name: 'hello' },
                        { name: 'wat' }
                    ]
                },
                { name: 'hello' },
                { name: 'wat' },
                {
                    name: 'child folder',
                    children: [
                        { name: 'hello' },
                        { name: 'wat' }
                    ]
                }
            ]
        }
    ]
}

function renderVmWithOptions (options) {
    const res = compileToFunctions(options.template, {
        preserveWhitespace: false
    })
    Object.assign(options, res)
    delete options.template
    return renderToString(new Vue(options))
}

var result = renderVmWithOptions({
    template: '<tree id="demo" :model="treeData"></tree>',
    data:{
    treeData:data
},
    components: {
        tree: Tree
}});
var config = {};

module.exports = config;
