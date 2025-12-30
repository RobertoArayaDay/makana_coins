import { Coins } from 'lucide-react';
import { useUser } from '@/context/UserContext';

export default function CoinsBalanceBalance() {
  const { user, loading: _ } = useUser();
  const userCoins = user?.coins || 0;
  return (
    <div className='rounded-xl border border-gray-200 bg-white p-6 space-y-4'>
      <p className='text-sm text-muted-foreground text-center'>Tu saldo actual es</p>
      <div className='flex items-center justify-center gap-4'>
        <div className='bg-orange-100 rounded-full w-14 h-14 flex items-center justify-center'>
          <Coins className='w-7 h-7 text-orange-600' />
        </div>

        <p className='text-4xl font-semibold text-gray-900'>{userCoins.toLocaleString('es-CL')}</p>
      </div>
      <p className='text-sm text-muted-foreground text-center'>
        Canjea tus coins por giftcards disponibles más abajo
      </p>
    </div>
  );
}
