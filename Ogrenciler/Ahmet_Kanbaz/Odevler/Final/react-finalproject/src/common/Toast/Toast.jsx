import { toast } from 'react-toastify';

const Toast = ({ message, type }) => {
  return toast(<p style={{fontSize: '.9rem'}}>{message}</p>, {
    type: type,
  });
}

export default Toast;
