import { Button } from '@/components/ui/button';

export default function ConfirmationModalButtons() {
  return (
    <div className='flex flex-col gap-2'>
      <Button
        className='w-full'
        onClick={() => console.log('confirm')}
      >
        Confirmar canje
      </Button>

      <Button
        variant='outline'
        className='w-full'
        onClick={() => console.log('cancel')}
      >
        Cancelar
      </Button>
    </div>
  );
}
