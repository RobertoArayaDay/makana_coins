type Props = {
  value: number;
};

export default function OwnedGiftCardHeader({ value }: Props) {
  return (
    <div className='absolute top-0 right-4'>
      <p className='text-sm text-gray-600'>Balance</p>
      <p className='text-2xl font-semibold text-blue-500'>${value.toLocaleString('es-CL')}</p>
    </div>
  );
}
