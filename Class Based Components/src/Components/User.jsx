import React from "react"; 

class User extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            count:0,
            count2:2
        }
        /**
    
        eske andar ki ham aur ek state bana rahe hai aggar functioncal based component hota 
        toh hame allag sa banana padhta hai na

        */
        
    }

    
    render(){
        const {name, email} = this.props
        const {count} = this.state
        const {count2} = this.state
        return(
            <div className="user-card">
                <h6>Name:{name}</h6>
                <h6>Location: Odisha</h6>
                <h6>Contact: {email}</h6>

                <h5>Count: {count}</h5>
                <h5>Count2: {count2}</h5>
                <button onClick={()=>{
                    this.setState({
                        count: count+1,
                        count2: count2+1
                    })
                }}>Increase Count</button>
            </div>
        );
    }
}

export default User;

// Notes:
// ------
// Sirf Props ke liye: Na constructor chahiye, na props likhna mandatory hai. Aap direct render() ke andar this.props use kar sakte ho.
// State ke liye: constructor aur super(props) dono Mandatory ho jate hain (standard tarike mein).

// props ko access karne ke liye aap only this.props likh sakhte ho and it will work perfectly fine. remobve the 
// constructor and super part you will get to see name and email 

// haan but jab aap state pe kam karna hai toab apko chahiye hi chahiye tab apko use karna hi padega 
// constructor and props

// basic diffrece between both of them is function based component will also return jsx and class based component also 
// but class based component use render to return jsx 

// and if you want to work with state then for that you have to use constructor and this

// but but one more thing ham sare kam bina constrctor and super ke bhi kar sakhte hain mein apko samjhata hoon 
// purana style mein kya ho raha tha wahan apko constructor and super likhna padta tha kyun ki uske bina ham 
// this access nahi hi nahi paenge yeah ho gaya purana way of writting class based component 


// wahan apko state ke liye bhi constructor and super likhna padhta tha kyun ki waise bhi apko this use karna 
// padega state ke andar toh constructor and super toh likhna padega hi 

// but aaj kal ki naya modern js mien apko state ke liye bhi and props ke liye bhi constructor and super ki jarurat nahi hau

/**
 * how to use state to update an count value i have written an example but this the old format
 *  <button onClick={()=>{
    this.setState({
        count: this.state.count+1,
        count2:this.state.count2+1
    })
    }}>Increase Count</button>


    this is actualy the old of updating the the value of count now let me tell the the modern way of 
    changing the value using state no need of writting this.state.count+1 i can directly write like 

    count: count+1 for example: 
    <button onClick={()=>{
        this.setState({
            count: count+1,
            count2: count2+1
        })
    }}>Increase Count</button>
 */



/**
 * jab bhi state mein koi change hota hai us waqt react kaise kam karta hai uska life cycle methods kya hai: 
 * 1st state change higa 
 * 2nd render hoga 
 * 3red ComponenetDidMount chalega
 */