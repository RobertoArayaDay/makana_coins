import { useState, useEffect } from 'react';
import { giftcardsApi } from '../axios';
import type { OwnedGiftCardData } from '../types/giftcard';

export function useOwnedGiftCards() {
  const [giftcards, setGiftcards] = useState<OwnedGiftCardData[]>([]);
  const [error, setError] = useState<Error | null>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadGiftCards = async () => {
      try {
        const data = await giftcardsApi.fetchUserGiftCards();
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
