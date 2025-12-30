import type { CatalogGiftCardData } from '../types/giftcard';
// import userGiftcardsMock from '../../mocks/user_giftcards.json';
// import type { GiftCad } from '../../types/giftcard';
// import { client } from '.';

// THIS FILE WOULD NEED TO BE CHANGED WITH THE API REAL RESPONSES. NOW ITS WORKING WITH MOCKUPS.

async function fetchGiftCards(): Promise<CatalogGiftCardData[]> {
  const res = await fetch(`${import.meta.env.BASE_URL}mocks/giftcards.json`);
  const json = await res.json();

  return json.giftcards.map((card: any) => ({
    id: card.id,
    kind: 'catalog',
    store: card.store,
    description: card.description,
  }));
}

async function fetchUserGiftCards() {
  const res = await fetch(`${import.meta.env.BASE_URL}mocks/user_giftcards.json`);
  const json = await res.json();

  return json.user_giftcards.map((card: any) => ({
    id: card.id,
    kind: 'owned',
    store: card.store,
    description: card.description,
    value: card.value,
    amount: card.amount,
    mockCode: card.mockCode,
    issuedAt: card.issuedAt,
  }));
}

export const giftcardsApi = {
  fetchGiftCards,
  fetchUserGiftCards,
};
