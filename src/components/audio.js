import React, { Component } from 'react'

class musicPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            play: false,
            pause: true,
        }
        // this.url = "http://docs.google.com/uc?export=open&id=1vqNrCLWfOPmQeMcpCo05yTZKPQf7I10G";
        this.url = "https://soundcloud.com/r3hab/the-chainsmokers-coldplay-something-just-like-this-r3hab-remix?in=ilyanaazman/sets/bestofchillnation&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing";
        this.audio = new Audio(this.url);

    }

    toogle = () => { 
        if (this.state.play === false) {
            this.setState({ play: true, pause: false })
            this.audio.play();
        } else{
            this.setState({ play: false, pause: true })
            this.audio.pause();
        }
    }

    render() {
        return (
            <div>
                <button className="link" onClick={this.toogle}>{this.state.play ? <div>Pause</div> : <div>Play</div>}</button>
            </div>
        );
    }
}

export default musicPlayer