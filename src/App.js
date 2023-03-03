import './App.css';
import {Component} from "react";
import Image from "./components/Image";

const imageNames = [
    'friend1',
    'friend2',
    'friend3',
    'friend4',
    'friend5',
    'friend6',
    'friend7',
    'friend8',
    'friend9',
    ];

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            currentImage: 'all',
        }
    }

    imageClick = imageName => {
        this.setState({...this.state, currentImage: imageName});
    }

    render() {
        if (this.state.currentImage === 'all') {
            const images = imageNames.map((imageName, index) =>
                <Image key={index} size={'small'} imgName={imageName} imageClick={this.imageClick}/>);
            return (
                <div className={'images'}>
                    {images}
                </div>
            );
        } else {
            return (
                <div className={'images'}>
                    <Image size={'large'} imgName={this.state.currentImage} imageClick={this.imageClick}/>
                </div>
            );
        }
    }
}

export default App;
