import { useState, useEffect } from 'react';
import { giftcardsApi } from '../axios';
import type { CatalogGiftCardData } from '@/types/giftcard';

export function useCatalogGiftCards() {
  const [giftcards, setGiftcards] = useState<CatalogGiftCardData[]>([]);
  const [error, setError] = useState<Error | null>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadGiftCards = async () => {
      try {
        const data = await giftcardsApi.fetchGiftCards();
        setGiftcards(data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    loadGiftCards();
  }, []);

  return { giftcards, loading, error };
}
