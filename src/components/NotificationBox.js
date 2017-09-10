import React from 'react';
import { notification, Icon } from 'antd';

const NotificationBox = (args = {
    message: 'Notification Title',
    description: 'This is Notification cnotent here. The NotificationBox will be closed after 2s.',
    duration: 2,
    icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />
}) => {
    notification.open(args);
};

export default NotificationBox;
