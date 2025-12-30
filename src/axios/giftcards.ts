import giftcardsMock from '../../mocks/giftcards.json';
import type { CatalogGiftCardData } from '../types/giftcard';
// import userGiftcardsMock from '../../mocks/user_giftcards.json';
// import type { GiftCad } from '../../types/giftcard';
// import { client } from '.';

async function fetchGiftCards(): Promise<CatalogGiftCardData[]> {
  //const response = await client.get<CatalogGiftCardData>('/giftcards');
  //const { data } = response;
  //return data;
  return giftcardsMock.giftcards.map((card: any) => ({
    id: card.id,
    kind: 'catalog',
    store: card.store,
    description: card.description,
  }));
}

async function fetchUserGiftCards() {
  //const response = await client.get<OwnedGiftCardData>(`/users/${userId}/giftcards`);
  //const { data } = response;
  //return data;
  const res = await fetch('/mocks/user_giftcards.json');
  const json = await res.json();

  return json.user_giftcards.map((card: any) => ({
    id: card.id,
    kind: 'owned', // 🔴 THIS is the fix
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
