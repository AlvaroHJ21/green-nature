import { cn } from '../../lib/util';

interface Props {
  children: React.ReactNode;
  variant?: 'filled' | 'text';
}

export default function Button(props: Props) {
  const { children, variant = 'filled' } = props;

  return (
    <a
      href="/"
      className={cn(
        'uppercase text-[13px] py-4 px-8 font-semibold',
        variant === 'filled' && 'text-xgreen-800 bg-xyellow-300',
        variant === 'text' && 'text-white bg-transparent'
      )}
    >
      {children}
    </a>
  );
}
