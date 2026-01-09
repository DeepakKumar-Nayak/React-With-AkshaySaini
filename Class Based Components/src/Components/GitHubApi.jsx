import React from 'react'

class GitHubApi extends React.Component{

    state = {
        userInfo: null
    }
   async componentDidMount(){
    try{
        const data = await fetch('https://api.github.com/users/DeepakKumar-Nayak')
        const response = await data.json()

        this.setState({
            userInfo : response
        })
        console.log(response)

    }catch(error){
        console.log(error.message)
    }
   }
    render(){

        const{login,id,company,location,avatar_url} = this.state.userInfo

        return(
            <div className="github-data">
                <img src={avatar_url} alt="name"style={{width:"200px", height:"200px"}} />
                <p>Login: {login}</p>
                <p>id: {id}</p>
                <p>Company: {company}</p>
                <p>Location: {location}</p>
            </div>
        )
    }
}

export default GitHubApi;
