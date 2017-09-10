import React, { PureComponent } from 'react';

export default class NotFound extends PureComponent {
    render() {
        const {
            params,
            location
        } = this.props;

        return (
            <div>
                Invalid URL path, page not found! <br />
                {JSON.stringify(params)}
                {JSON.stringify(location)}
            </div>
        );
    }
}
