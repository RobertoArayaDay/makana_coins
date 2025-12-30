import { OwnedGiftCard } from '@/components/giftcard/OwnedGiftCard/OwnedGiftCard';
import { AppHeader } from '@/components/layouts/AppHeader';
import { Spinner } from '@/components/ui/spinner';
import { useUser } from '@/context/UserContext';
import { useOwnedGiftCards } from '@/hooks/useOwnedGiftCards';
import { GiftCardGrid } from '@/components/giftcard/GiftCardGrid';
import OwnedGiftCardsDescription from './OwnedGiftCardsDescription';

export default function OwnedGiftCardsPage() {
  const { giftcards, loading, error } = useOwnedGiftCards();
  const { user, loading: userLoading } = useUser();

  return (
    <>
      <AppHeader title='Mis GiftCards' />
      {loading || !user ? (
        <Spinner className='absolute inset-0 m-auto size-8' />
      ) : error ? (
        <p>Error al cargar GiftCards.</p>
      ) : giftcards.length === 0 ? (
        <p>No hay GiftCards disponibles</p>
      ) : (
        <div className='p-4'>
          <OwnedGiftCardsDescription />
          <GiftCardGrid>
            {giftcards.map((giftcard: any) => (
              <OwnedGiftCard
                key={giftcard.id}
                giftcard={giftcard}
              />
            ))}
          </GiftCardGrid>
        </div>
      )}
    </>
  );
}
