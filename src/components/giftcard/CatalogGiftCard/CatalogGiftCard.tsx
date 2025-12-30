import type { CatalogGiftCardData } from '../../../types/giftcard';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import CatalogGiftCardOption from './CatalogGiftCardOption';

const giftcardsOptions = [
  { coins: 500, value: 5000 },
  { coins: 1000, value: 10000 },
  { coins: 2000, value: 20000 },
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
          {giftcardsOptions.map(({ coins, value }) => {
            return (
              <CatalogGiftCardOption
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
