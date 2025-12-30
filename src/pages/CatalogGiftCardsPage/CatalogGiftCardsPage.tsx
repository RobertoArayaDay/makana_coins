import { AppHeader } from '@/components/layouts/AppHeader';
import { Spinner } from '@/components/ui/spinner';
import { useUser } from '@/context/UserContext';
import { CatalogGiftCard } from '@/components/giftcard/CatalogGiftCard/CatalogGiftCard';
import { useCatalogGiftCards } from '@/hooks/useCatalogGiftCards';
import { GiftCardGrid } from '@/components/giftcard/GiftCardGrid';
import CatalogGiftCardsBalance from './CatalogGiftCardBalance';
import CatalogGiftCardsDescription from './CatalogGiftCardsDescription';

export default function CatalogGiftCardsPage() {
  const { giftcards, loading, error } = useCatalogGiftCards();
  const { user, loading: userLoading } = useUser();

  return (
    <>
      <AppHeader title='Canjea tus Coins' />

      {loading || !user ? (
        <Spinner className='absolute inset-0 m-auto size-8' />
      ) : error ? (
        <p>Error al cargar GiftCards.</p>
      ) : giftcards.length === 0 ? (
        <p>No hay GiftCards disponibles</p>
      ) : (
        <div className='flex flex-col gap-4 w-full p-4'>
          <CatalogGiftCardsBalance />
          <CatalogGiftCardsDescription />
          <GiftCardGrid>
            {giftcards.map((giftcard) => (
              <CatalogGiftCard
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
