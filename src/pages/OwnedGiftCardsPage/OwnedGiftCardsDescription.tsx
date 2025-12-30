import { Info } from 'lucide-react';

export default function OwnedGiftCardsDescription() {
  return (
    <div className='rounded-xl p-4 bg-white flex items-center text-center gap-2 mb-4'>
      <Info className='w-5 h-5 text-blue-500' />
      <p className='text-sm text-muted-foreground'>
        Toca "Copiar código" para usar tu giftcard en la tienda.
      </p>
    </div>
  );
}
