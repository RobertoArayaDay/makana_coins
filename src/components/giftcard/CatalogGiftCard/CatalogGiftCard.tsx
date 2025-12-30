import type { CatalogGiftCardData } from '../../../types/giftcard';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import CatalogGiftCardOption from './CatalogGiftCardOption';

const giftcardsOptions = [
  { id: 1, coins: 500, value: 5000 },
  { id: 2, coins: 1000, value: 10000 },
  { id: 3, coins: 2000, value: 20000 },
];

type Props = {
  giftcard: CatalogGiftCardData;
};

export function CatalogGiftCard({ giftcard }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{giftcard.store}</CardTitle>
        <CardDescription>GiftCard</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex flex-col gap-3'>
          {giftcardsOptions.map(({ id, coins, value }) => {
            return (
              <CatalogGiftCardOption
                key={id}
                store={giftcard.store}
                coins={coins}
                value={value}
              />
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
