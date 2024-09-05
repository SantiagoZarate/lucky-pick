import { Text } from '@/components/ui';

export function Footer() {
  return (
    <footer className="border border-t border-border">
      <div className="mx-auto max-w-desktop pb-20 pt-6">
        <Text variant={'detail'}>
          made by{' '}
          <a target="_blank" href="https://www.github.com/SantiagoZarate">
            Santiago Zarate
          </a>
        </Text>
      </div>
    </footer>
  );
}
