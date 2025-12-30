type Props = {
  issuedDate: string;
};

export default function OwnedGiftCardFooter({ issuedDate }: Props) {
  return (
    <div className='flex items-center justify-between w-full text-sm text-muted-foreground'>
      <p>Fecha de canje</p>
      <p>
        {new Date(issuedDate).toLocaleDateString('es-CL', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>
    </div>
  );
}
