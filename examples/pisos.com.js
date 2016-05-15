'use strict';

let reduxSpider = require('..');
const config = {
    startUrls: ['http://www.pisos.com/alquiler_garajes/barcelona/'],
    links: [
        {
            pageRegex: /http:\/\/www\.pisos\.com\/alquiler_garajes\/barcelona\//,
            linksCssExpression: 'h1.title a'
        },
        {
            pageRegex: /http:\/\/www\.pisos\.com\/alquiler\/garajes-barcelona\//
        }
        ],
    extractions: {}
}