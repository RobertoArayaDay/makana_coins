import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import type { OwnedGiftCardData } from '../../../types/giftcard';
import OwnedGiftCardFooter from './OwnedGiftCardFooter';
import OwnedGiftCardContent from './OwnedGiftCardContent';
import OwnedGiftCardHeader from './OwnedGiftCardHeader';

type Props = {
  giftcard: OwnedGiftCardData;
};

export function OwnedGiftCard({ giftcard }: Props) {
  return (
    <Card>
      <CardHeader className='relative'>
        <OwnedGiftCardHeader value={giftcard.value} />
        <CardTitle>{giftcard.store}</CardTitle>
        <CardDescription>GiftCard</CardDescription>
      </CardHeader>
      <CardContent>
        <OwnedGiftCardContent mockCode={giftcard.mockCode} />
      </CardContent>
      <CardFooter>
        <OwnedGiftCardFooter issuedDate={giftcard.issuedAt} />
      </CardFooter>
    </Card>
  );
}
