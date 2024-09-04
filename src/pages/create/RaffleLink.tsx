import { ClipboardMiniIcon } from '@/components/icons/ClipboardMiniIcon';
import { Text } from '@/components/ui';
import { Link } from 'react-router-dom';

interface Props {
  url: string;
}

export function RaffleLink({ url }: Props) {
  return (
    <>
      <Link to={`/raffles/${url}`} target="_blank">
        <Text className="text-center hover:underline">
          https://localhost:5173/raffles/{url}
        </Text>
      </Link>
      <button
        onClick={(e) => {
          e.stopPropagation();
          navigator.clipboard.writeText(
            `https://localhost:5173/raffles/${url}`
          );
        }}
        className="absolute right-0 top-0 z-10 m-2 rounded-lg border border-border p-2 opacity-0 transition hover:bg-input group-hover:opacity-100"
      >
        <ClipboardMiniIcon />
      </button>
    </>
  );
}
