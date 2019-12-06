import React from 'react'

class Lifecycle extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'tungdt',
            age: 33
        }
    }

    componentDidMount() {
        console.log(this.state.name);
        this.setState({ name: 'dinh tuan tung' })
    }

    shouldComponentUpdate() {
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log(prevState.name);
       return 1;
    }

    componentDidUpdate(){
        console.log(`now name is: ${this.state.name}`);
    }

    render() {
        return (
            <div> Xin chào:
                {this.state.name}
                - {this.state.age} tuổi
            </div>
        );
    }
}

export default Lifecycle 