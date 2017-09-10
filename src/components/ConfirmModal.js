import { Modal } from 'antd';

const ConfirmModal = (args) => {
    const defaultArgs = {
        title: '删除',
        content: '确定删除么?',
        onCancel: () => { console.log('cancel'); },
        onOk: () => { console.log('ok'); }
    };

    const confirm = Modal.confirm;
    confirm({ ...defaultArgs, ...args });
};

export default ConfirmModal;
