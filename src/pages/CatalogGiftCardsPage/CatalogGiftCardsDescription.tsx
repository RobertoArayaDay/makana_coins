import { Coins } from 'lucide-react';
import { Info } from 'lucide-react';

export default function CatalogGiftCardsDescription() {
  return (
    <div className='rounded-xl p-4 bg-white flex items-center text-center gap-2'>
      <Info className='w-5 h-5 text-blue-500' />
      <p className='text-sm text-muted-foreground'>
        Selecciona una giftcard y canjéala usando tus Makana Coins.
      </p>
    </div>
  );
}
