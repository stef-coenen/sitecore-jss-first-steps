import React from 'react';
import { Text, Placeholder } from '@sitecore-jss/sitecore-jss-react';

export default class HelloWorld extends React.Component {
    render() {
        let backgroundColorStyle = {
            backgroundColor: this.props.params.backgroundColor,
            padding: '20px'
        };
        return (
            <div style={backgroundColorStyle}>
                <Text tag="h1" field={this.props.fields.title} />
                <Placeholder name="jss-sub" rendering={this.props.rendering} />
            </div>
        );
    }
}
