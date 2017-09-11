import React, { PureComponent } from 'react';

import { Button } from 'antd';

import './button-demo-component.less';

export default class ButtonDemoComponent extends PureComponent {
    render() {
        const ButtonGroup = Button.Group;

        return (
            <div className="button-demo-component">
                <div className="button-basic-demo">
                    <span className="header">button-basic-demo</span>
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                </div>

                <div className="button-icon-demo">
                    <span className="header">button-icon-demo</span>
                    <Button type="primary" shape="circle" icon="search" />
                    <Button type="primary" icon="search">Search</Button>
                    <Button shape="circle" icon="search" />
                    <Button icon="search">Search</Button>
                </div>

                <div className="button-group-demo">
                    <span className="header">button-group-demo</span>
                    <ButtonGroup>
                        <Button>Cancel</Button>
                        <Button type="primary">OK</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button disabled>L</Button>
                        <Button disabled>M</Button>
                        <Button disabled>R</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button type="primary">L</Button>
                        <Button>M</Button>
                        <Button>M</Button>
                        <Button type="dashed">R</Button>
                    </ButtonGroup>
                </div>
            </div>
        );
    }
}
