import { toast } from "react-toastify";

const notifOptions = {
  position: toast.POSITION.BOTTOM_LEFT
}

export const notify = (message, type='') => {
  if(type === 'error' || type === '') 
    toast.error(message, notifOptions);
  else if (type === 'warn') 
    toast.warn(message, notifOptions);
  else if (type === 'success') 
    toast.success(message, notifOptions);
}