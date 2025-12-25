const heading = React.createElement('h1', {id:'heading'}, 'Hello this is my first day with akshay sir')

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)


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