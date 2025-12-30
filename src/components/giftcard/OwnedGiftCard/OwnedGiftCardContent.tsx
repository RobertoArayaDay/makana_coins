import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

type Props = {
  mockCode: string;
};
export default function OwnedGiftCardContent({ mockCode }: Props) {
  const copyMockCode = () => {
    navigator.clipboard.writeText(mockCode);
    toast('Código copiado al portapapeles');
  };

  return (
    <div className='flex flex-col gap-2'>
      <span className='text-sm text-muted-foreground'>Código de la giftcard</span>
      <div className='flex flex-col gap-2 rounded-xl bg-blue-50 text-center p-3'>
        <p className='font-mono text-lg tracking-widest text-gray-900'>{mockCode}</p>
        <Button onClick={() => copyMockCode()}>Copiar código</Button>
      </div>
    </div>
  );
}
