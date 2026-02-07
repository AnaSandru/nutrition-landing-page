export interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  goal: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  goal?: string;
}
