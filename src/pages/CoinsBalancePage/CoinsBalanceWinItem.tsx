import { Icon as LucideIcon } from 'lucide-react';

type Props = {
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export default function CoinsBalanceWinItem({ title, description, icon: Icon }: Props) {
  return (
    <div className='flex flex-row items-center gap-3'>
      <Icon className='w-7 h-7 text-blue-600' />
      <div>
        <p className='font-semibold'>{title}</p>
        <p className='text-sm text-muted-foreground'>{description}</p>
      </div>
    </div>
  );
}
