import React from "react";

export default class FetchRandomUser extends React.Component {

    state = {
        loading: true,
        person: null,
    };

    async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const responses = await fetch(url);
    const data = await responses.json();
    this.setState({ person: data.results[0]});
    console.log{(person: data.results[0]), loading: false});
    }
    render () {
        return (
        <>
            {this.state.loading || !this.state.person ? (
                <div>loading...</div>
                ):(
                    <div>
                        <div>{this.state.person.name.title}</div>
                        <div>{this.state.person.name.first}</div>
                        <div>{this.state.person.name.last}</div>
                    </div>
                 ) }
            </>
        );
    }
}

export default RandomUser;
