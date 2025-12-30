import { Coins } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useUser } from '@/context/UserContext';

type Props = {
  coins: number;
};

export default function ConfirmationModalBreakdown({ coins }: Props) {
  const { user, loading: _ } = useUser();
  const userCoins = user?.coins || 0;

  return (
    <div className='border rounded-xl p-4 space-y-4'>
      <div className='flex items-center justify-between'>
        <p className='text-sm text-muted-foreground'>Costo</p>
        <div className='flex flex-row items-center gap-1'>
          <Coins className='w-6 h-6 text-orange-600' />
          <span className='text-sm text-gray-900'>{coins.toLocaleString('es-CL')}</span>
        </div>
      </div>

      <Separator />

      <div className='flex items-center justify-between'>
        <p className='text-sm text-muted-foreground'>Saldo actual</p>
        <div className='flex flex-row items-center gap-1'>
          <Coins className='w-6 h-6 text-orange-600' />
          <span className='text-sm text-gray-900'>{userCoins.toLocaleString('es-CL')}</span>
        </div>
      </div>

      <div className='flex items-center justify-between'>
        <p className='text-sm font-medium'>Nuevo saldo</p>
        <div className='flex flex-row items-center gap-1'>
          <Coins className='w-6 h-6 text-orange-600' />
          <span className='text-sm text-gray-900'>
            {(userCoins - coins).toLocaleString('es-CL')}
          </span>
        </div>
      </div>
    </div>
  );
}
