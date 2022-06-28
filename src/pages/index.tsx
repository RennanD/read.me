import { Button } from '@components/ui/forms/Button';
import {
  DropdownItem,
  DropdownMenu,
} from '@components/ui/popovers/DropdownMenu';

export default function Home() {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
      <DropdownMenu
        trigger={
          <Button variant="secondary" type="button">
            Entrar
          </Button>
        }
      >
        <DropdownItem>Nav</DropdownItem>
      </DropdownMenu>

      <DropdownMenu trigger={<button type="button">Abrir</button>}>
        <DropdownItem>Nav 2</DropdownItem>
      </DropdownMenu>
    </div>
  );
}
