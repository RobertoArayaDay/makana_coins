import { Calendar, Trophy, UserPlus } from 'lucide-react';
import CoinsBalanceWinItem from './CoinsBalanceWinItem';

const waysToEarn = [
  {
    title: 'Actividades diarias',
    description: 'Completa tus tareas cada día.',
    icon: Calendar,
  },
  {
    title: 'Desafíos',
    description: 'Participa en retos especiales.',
    icon: Trophy,
  },
  {
    title: 'Invita amigos',
    description: 'Gana coins por cada invitación.',
    icon: UserPlus,
  },
];

export default function CoinsBalanceWin() {
  return (
    <div className='rounded-xl border border-gray-200 bg-white p-6 space-y-4 text-gray-700'>
      <h3 className='text-gray-700 font-medium'>¿Cómo ganar más Coins?</h3>
      <div className='space-y-3'>
        {waysToEarn.map(({ title, description, icon: Icon }) => (
          <CoinsBalanceWinItem
            key={title}
            title={title}
            description={description}
            icon={Icon}
          />
        ))}
      </div>
    </div>
  );
}
