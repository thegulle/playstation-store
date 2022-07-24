import React, { Component } from 'react';

class MessageBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: props.message,
            show: props.show
        };
    }
    render({ message, show } = this.props) {
        return (
            <div className={"message-box" + (show ? ' active' : '')}>
                <div className="message-box-content">
                    <div className="message-box-text">
                        <p className="flex flex-row item-center justify-center">
                            <i className="ph-shopping-cart items-center mr-2 text-xl"></i>
                            {message}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default MessageBox;
