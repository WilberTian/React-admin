import React, { PureComponent } from 'react';

import { Row, Col } from 'antd';

import './dashboard-container.less';

export default class DashboardContainer extends PureComponent {
    render() {
        return (
            <div className="dashboard-container">
                <Row gutter={16}>
                    <Col span={6}>
                        <div className="col-box h-180">col-box</div>
                    </Col>
                    <Col span={6}>
                        <div className="col-box h-180">col-box</div>
                    </Col>
                    <Col span={6}>
                        <div className="col-box h-180">col-box</div>
                    </Col>
                    <Col span={6}>
                        <div className="col-box h-180">col-box</div>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={18}>
                        <div className="col-box h-180">col-box</div>
                    </Col>
                    <Col span={6}>
                        <div className="col-box h-180">col-box</div>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={12}>
                        <div className="col-box h-180">col-box</div>
                    </Col>
                    <Col span={12}>
                        <div className="col-box h-180">col-box</div>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={18}>
                        <div className="col-box h-240">col-box</div>
                    </Col>
                    <Col span={6}>
                        <div className="col-box h-110">col-box</div>
                        <div className="col-box h-110 mt-20">col-box</div>
                    </Col>
                </Row>
            </div>
        );
    }
}
