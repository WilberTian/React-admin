import React, { PureComponent } from 'react';
import { Spin } from 'antd';

export default class LoadingScreenComponent extends PureComponent {
    render() {
        const loadingWrapperStyle = {
            width: '100%',
            height: '600px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        };

        return (
            <div style={loadingWrapperStyle}>
                <Spin size="large" />
            </div>
        );
    }
}
