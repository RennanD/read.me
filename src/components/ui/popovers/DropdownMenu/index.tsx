import * as RadixDropdown from '@radix-ui/react-dropdown-menu';
import { styled } from '@styles/stitches.config';
import React, { ReactElement, ReactNode } from 'react';

import { DropdownContentCSS, DropdownItemCSS } from './styles';

const StyledDropdownContent = styled(RadixDropdown.Content, DropdownContentCSS);
const StyledDropdownItem = styled(RadixDropdown.Item, DropdownItemCSS);

type DropdownItemProps = {
  children: ReactNode;
};
export function DropdownItem({ children }: DropdownItemProps) {
  return <StyledDropdownItem>{children}</StyledDropdownItem>;
}

type DropdownMenuProps = {
  trigger: ReactElement;
  children: ReactNode;
};

export function DropdownMenu({
  children,
  trigger,
}: DropdownMenuProps): JSX.Element {
  return (
    <RadixDropdown.Root>
      <RadixDropdown.Trigger asChild>{trigger}</RadixDropdown.Trigger>

      <StyledDropdownContent>{children}</StyledDropdownContent>
    </RadixDropdown.Root>
  );
}

export const DropdownTrigger = RadixDropdown.Trigger;
DropdownTrigger.displayName = 'DropdownTrigger';
