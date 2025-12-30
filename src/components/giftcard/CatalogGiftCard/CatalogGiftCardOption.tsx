import { Coins } from 'lucide-react';
import { useUser } from '@/context/UserContext';
import CatalogGiftCardButton from './CatalogGiftCardButton';

type Props = {
  store: string;
  coins: number;
  value: number;
};

export default function CatalogGiftCardOption({ store, coins, value }: Props) {
  const { user, loading: _ } = useUser();
  const userCoins = user?.coins || 0;
  const canRedeem = userCoins >= coins;

  return (
    <div
      key={coins}
      className={`rounded-xl p-4 border ${canRedeem ? 'bg-blue-50' : 'bg-gray-50 opacity-60'}`}
    >
      <div className='flex justify-between items-center'>
        <div className='flex flex-col items-end'>
          <div className='flex items-center gap-1'>
            <Coins className='w-6 h-6 text-orange-600' />
            <span className='text-lg text-gray-900'>{coins.toLocaleString('es-CL')}</span>
          </div>
          <span className='text-xs text-muted-foreground'>Coins</span>
        </div>
        <div className='flex flex-col items-start'>
          <span className='text-lg font-normal text-gray-900'>
            ${value.toLocaleString('es-CL')}
          </span>
          <span className='text-xs text-muted-foreground'>Valor Giftcard</span>
        </div>
        <CatalogGiftCardButton
          store={store}
          value={value}
          coins={coins}
        />
      </div>
    </div>
  );
}
