export type BaseGiftCardData = {
  id: number;
  description: string;
  store: string;
};

export type CatalogGiftCardData = BaseGiftCardData & {
  kind: 'catalog';
};
export type OwnedGiftCardData = BaseGiftCardData & {
  kind: 'owned';
  value: number;
  mockCode: string;
  issuedAt: string;
};
