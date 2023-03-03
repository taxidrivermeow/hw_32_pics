import React, {Component} from 'react';

class Image extends Component {
    imageClick = () => {
        if (this.props.size === 'small') {
            this.props.imageClick(this.props.imgName);
        } else {
            this.props.imageClick('all');
        }
    }

    render() {
        return (
            <>
                <img className={this.props.size}
                     src={require(`../images/${this.props.imgName}.jpg`)}
                     alt={this.props.imgName}
                     onClick={this.imageClick}
                />
            </>
        );
    }
}

export default Image;