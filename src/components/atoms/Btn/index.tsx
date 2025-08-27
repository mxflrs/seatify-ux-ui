import { useContactDialogStore } from "../../../core/store/contactDialogStore";

interface Props {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

const Btn = ({
  text,
  type = 'button',
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
}: Props) => {
  const classes = [
    'inline-flex items-center justify-center rounded-full font-thin transition-all duration-200 mx-auto ring-1 ring-white/25 hover:ring-white/50 cursor-pointer select-none',
    size === 'sm' && 'px-3 py-1.5 text-sm',
    size === 'md' && 'px-8 py-4 text-base',
    size === 'lg' && 'px-7 py-3.5 text-lg',
    variant === 'primary' && 'bg-black text-white hover:bg-sfv-green-600 hover:text-black',
    variant === 'secondary' && 'bg-gray-600 text-white hover:bg-gray-700',
    variant === 'outline' && 'border border-blue-600 text-blue-600 hover:bg-blue-50',
    variant === 'danger' && 'bg-red-600 text-white hover:bg-red-700',
    disabled && 'opacity-50 cursor-not-allowed',
    className,
  ].filter(Boolean).join(' ');

  const open = useContactDialogStore((state) => state.open);

  return (
    <button
      type={type}
      disabled={disabled}
      className={classes}
      onClick={open}
    >
      {text}
    </button>
  );
};

export default Btn;