import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '../../ui/button';
import ConfirmationModalButtons from './ConfirmationModalButtons';
import ConfirmationModalSummary from './ConfirmationModalSummary';
import ConfirmationModalBreakdown from './ConfirmationModalBreakdown';
import { DialogTitle } from '@radix-ui/react-dialog';

type Props = {
  store: string;
  coins: number;
  value: number;
};

export default function ConfirmationModal({ store, coins, value }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>Canjear</Button>
      </DialogTrigger>

      <DialogContent className='space-y-6'>
        <DialogTitle className='text-center text-blue-600 font-medium'>
          Canjear GiftCard
        </DialogTitle>
        <ConfirmationModalSummary
          store={store}
          value={value}
        />
        <ConfirmationModalBreakdown coins={coins} />
        <ConfirmationModalButtons />
      </DialogContent>
    </Dialog>
  );
}
