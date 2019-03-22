'use strict';

console.log('app.js is running!');

var template = React.createElement(
    'h1',
    null,
    'Indecision app'
);

var user = 'Marco';
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user
    ),
    React.createElement(
        'p',
        null,
        'Age: 34'
    ),
    React.createElement(
        'p',
        null,
        'Location: Ciudad de Buenos Aires'
    )
);

ReactDOM.render(templateTwo, document.getElementById('root'));
