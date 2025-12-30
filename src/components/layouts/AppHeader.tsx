import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type AppHeaderProps = {
  title: string;
};

export function AppHeader({ title }: AppHeaderProps) {
  const navigate = useNavigate();

  return (
    <header className='sticky top-0 z-50 border-b bg-background'>
      <div className='flex h-14 items-center px-4'>
        <Button
          variant='ghost'
          size='icon'
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className='h-5 w-5' />
        </Button>
        <h1 className='absolute left-1/2 -translate-x-1/2 text-lg font-semibold truncate text-blue-500 sm:static sm:translate-x-0 sm:left-0'>
          {title}
        </h1>
      </div>
    </header>
  );
}
