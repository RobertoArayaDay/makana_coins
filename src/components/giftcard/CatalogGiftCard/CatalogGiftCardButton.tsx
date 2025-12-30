import { Button } from '@/components/ui/button';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import ConfirmationModal from '@/components/giftcard/ConfirmationModal/ConfirmationModal';
import { useUser } from '@/context/UserContext';

interface Props {
  store: string;
  coins: number;
  value: number;
}

export default function CatalogGiftCardButton({ store, coins, value }: Props) {
  const { user, loading: userLoading } = useUser();

  const userCoins = user?.coins || 0;
  const canRedeem = userCoins >= coins;

  return canRedeem ? (
    <ConfirmationModal
      store={store}
      coins={coins}
      value={value}
    />
  ) : (
    <Tooltip>
      <TooltipTrigger asChild>
        <span>
          <Button
            disabled
            variant='outline'
          >
            Canjear
          </Button>
        </span>
      </TooltipTrigger>
      <TooltipContent>No tienes suficientes coins para canjear esta giftcard.</TooltipContent>
    </Tooltip>
  );
}
