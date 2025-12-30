type Props = {
  store: string;
  value: number;
};

export default function ConfirmationModalSummary({ store, value }: Props) {
  return (
    <div className='bg-blue-50 rounded-xl p-4 space-y-3'>
      <div>
        <h3 className='font-semibold'>{store}</h3>
        <p className='text-sm text-muted-foreground'>GiftCard</p>
      </div>

      <div className='bg-background rounded-lg p-4'>
        <p className='text-sm text-muted-foreground mb-2'>Valor</p>
        <span className='text-3xl text-gray-900'>${value.toLocaleString('es-CL')}</span>
      </div>
    </div>
  );
}
