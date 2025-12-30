import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function CoinsBalanceButtons() {
  return (
    <div className='flex flex-col gap-3'>
      <Button asChild>
        <Link to='/coins/catalog'>Canjear</Link>
      </Button>

      <Button
        asChild
        variant='outline'
      >
        <Link to='/giftcards'>Mis gift cards</Link>
      </Button>
    </div>
  );
}
