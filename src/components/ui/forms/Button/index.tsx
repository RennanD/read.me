import { ComponentProps, forwardRef } from 'react';
import { StyledButton } from './styles';

type ButtonProps = ComponentProps<typeof StyledButton>;

function Component(
  { children, variant, ...rest }: ButtonProps,
  ref,
): JSX.Element {
  return (
    <StyledButton ref={ref} variant={variant} {...rest}>
      {children}
    </StyledButton>
  );
}

const Button = forwardRef(Component);

export { Button };
