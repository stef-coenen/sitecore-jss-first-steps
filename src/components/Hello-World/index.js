import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

export default class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let backgroundColorStyle = { backgroundColor: this.props.params.backgroundColor };
        return (
            <div style={backgroundColorStyle}>
                <Text tag="h1" field={this.props.fields.title} />
            </div>
        );
    }
}
