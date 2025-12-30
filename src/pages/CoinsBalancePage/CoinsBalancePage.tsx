import { AppHeader } from '@/components/layouts/AppHeader';
import { Spinner } from '@/components/ui/spinner';
import { useUser } from '@/context/UserContext';
import CoinsBalanceSummary from './CoinsBalanceSummary';
import CoinsBalanceWin from './CoinsBalanceWin';
import CoinsBalanceButtons from './CoinsBalanceButtons';
import CoinsBalanceBalance from './CoinsBalanceBalance';

export default function CoinsBalancePage() {
  const { user, loading: userLoading } = useUser();

  return (
    <>
      <AppHeader title='Tu balance de Coins' />
      {!user ? (
        <Spinner className='absolute inset-0 m-auto size-8' />
      ) : (
        <div className='flex flex-col gap-4 w-full p-4'>
          <CoinsBalanceBalance />
          <CoinsBalanceSummary />
          <CoinsBalanceWin />
          <CoinsBalanceButtons />
        </div>
      )}
    </>
  );
}
