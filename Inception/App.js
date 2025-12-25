
const parent = React.createElement('div', { id: 'parent' },
    [
        React.createElement('div', { id: 'child' },
            [
                React.createElement('h1', { id: 'heading' }, 'Hi am heding tag'),
                React.createElement('h2', { id: 'heading-second'},'Hi am the sedonc heading')

            ]),
        React.createElement('div', { id: 'child' },
            [
                React.createElement('h1', { id: 'heading-tag'}, 'Hi am heding tag'),
                React.createElement('h2', { id: 'heading-second-2'},'Hi am the second heading')

            ]
        )
    ]
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)

/**
 * what is actually heading here pointing out to do you think its a h1 tag 
 * no no no its not a h1 tag its an object its an reactElement. 
 * 
 * and reactElement is nothing but a normal javascript object. 
 * in root.render() we are passing an react element. 
 * 
 * this render will be responsible to convert the react element to an h1
 * tag and put it into to the dom 
 */


