import React from 'react';
import { AppConfirmModalEnum } from '@/config/constant';
import { Button, Modal } from 'antd';

interface IProps {
  isVisible: boolean;
  type: AppConfirmModalEnum;
  title?: string;
  name?: string;
  okTextButton?: string;
  cancelTextButton?: string;
  content?: React.ReactNode;
  loading?: boolean;
  onOk: () => void;
  onCancel: () => void;
}

function AppConfirmAdminModal(props: Readonly<IProps>) {
  const {
    isVisible,
    type,
    title = 'Tiêu đề',
    name = 'Tiêu đề',
    content = null,
    okTextButton = 'OK',
    cancelTextButton = 'HUỶ',
    loading = false,
    onOk,
    onCancel,
  } = props;

  const getTitle = () => {
    if (title) return title;
    switch (type) {
      case AppConfirmModalEnum.delete:
        return 'Xoá dữ liệu';
      case AppConfirmModalEnum.confirm:
        return 'Xác nhận';
      case AppConfirmModalEnum.warning:
        return 'Cảnh báo';
      case AppConfirmModalEnum.info:
        return 'Thông báo';
      default:
        return 'Tiêu đề!';
    }
  };

  const getContent = () => {
    if (content) return content;
    switch (type) {
      case AppConfirmModalEnum.delete:
        return (
          <div>
            Bạn có muốn xóa <span style={{ color: 'red' }}> {name || 'dữ liệu'} </span> này không ?
          </div>
        );
      case AppConfirmModalEnum.confirm:
        return <div />;
      case AppConfirmModalEnum.warning:
        return <div>Bạn chắn chắn muốn tiếp tục?</div>;
      case AppConfirmModalEnum.info:
        return <div />;
      default:
        return <div />;
    }
  };

  const onOkClicked = () => {
    onOk();
  };

  const onCancelClicked = () => {
    onCancel();
  };

  return (
    <Modal
      centered
      open={isVisible}
      title={getTitle()}
      footer={[
        <Button key="cancel" onClick={() => onCancelClicked()}>
          {cancelTextButton || 'Huỷ'}
        </Button>,
        <Button key="submit" danger loading={loading} type="primary" onClick={() => onOkClicked()}>
          {okTextButton || 'Ok'}
        </Button>,
      ]}
      onCancel={() => onCancelClicked()}
      onOk={() => onOkClicked()}
    >
      {getContent()}
    </Modal>
  );
}

export default AppConfirmAdminModal;
