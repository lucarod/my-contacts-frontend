import { useEffect } from 'react';
import PropTypes from 'prop-types';

import xCircleIcon from '../../../assets/images/icons/x-circle.svg';
import checkCircleIcon from '../../../assets/images/icons/check-circle.svg';

import { Container } from './styles';

export default function ToastMessage({
  message, onRemoveMessage, isLeaving, animatedRef,
}) {
  const {
    id, type, text, duration,
  } = message;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onRemoveMessage(id);
    }, duration || 7000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [id, duration, onRemoveMessage]);

  function handleRemoveToast() {
    onRemoveMessage(id);
  }

  return (
    <Container
      type={type}
      onClick={handleRemoveToast}
      tabIndex={0}
      role="button"
      isLeaving={isLeaving}
      ref={animatedRef}
    >
      {type === 'danger' && <img src={xCircleIcon} alt="X" />}
      {type === 'success' && <img src={checkCircleIcon} alt="Check" />}
      <strong>{text}</strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['default', 'success', 'danger']),
    duration: PropTypes.number,
  }).isRequired,
  onRemoveMessage: PropTypes.func.isRequired,
  isLeaving: PropTypes.bool.isRequired,
  animatedRef: PropTypes.shape().isRequired,
};
