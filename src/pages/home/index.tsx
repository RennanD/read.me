import { Logo } from '@components/core/Logo';
import { Heading } from '@components/ui/typography/Heading';
import { Container, HomeSection } from './styles';

export default function Home(): JSX.Element {
  return (
    <Container>
      <HomeSection>
        <nav>
          <Logo />
        </nav>

        <div>
          <p>
            <Heading size="2xlg">
              Crie de forma mais rápida <br />e prática aquele <br />
              <span>README</span> bonitão 💜
            </Heading>
          </p>
        </div>
      </HomeSection>

      <section />
    </Container>
  );
}
