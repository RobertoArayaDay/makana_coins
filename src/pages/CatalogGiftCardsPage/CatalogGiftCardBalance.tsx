import { Coins } from 'lucide-react';
import { useUser } from '@/context/UserContext';

export default function CatalogGiftCardsBalance() {
  const { user, loading: _ } = useUser();

  const userCoins = user?.coins || 0;
  return (
    <div className='bg-white rounded-xl p-4 border-0'>
      <div className='flex items-center gap-4'>
        <div className='bg-orange-100 rounded-full w-14 h-14 flex items-center justify-center shrink-0'>
          <Coins className='w-7 h-7 text-orange-600' />
        </div>
        <div className='flex flex-col'>
          <p className='text-sm text-muted-foreground'>Saldo disponible</p>
          <p className='text-xl font-semibold text-gray-900'>{userCoins.toLocaleString('es-CL')}</p>
        </div>
      </div>
    </div>
  );
}
