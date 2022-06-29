import { Logo } from '@components/core/Logo';
import { Button } from '@components/ui/forms/Button';
import { Heading } from '@components/ui/typography/Heading';
import { Text } from '@components/ui/typography/Text';
import { Container, HeroImage, HomeSection, HeroContent } from './styles';

export default function Home(): JSX.Element {
  return (
    <Container>
      <HomeSection>
        <nav>
          <Logo />
        </nav>

        <div>
          <HeroContent>
            <Heading size="xlg">
              Crie de forma mais rápida <br />e prática aquele <br />
              <span>README</span> bonitão 💜
            </Heading>

            <br />

            <Text variant="secondary" size="md">
              Vamos te ajudar a montar um Readme completo para seu reposótio!
              <br />
              Assim, você vai poder exibir ele para o mundo 🚀
            </Text>

            <br />

            <Button variant="outline" size="lg">
              Criar meu Readme
            </Button>
          </HeroContent>

          <HeroImage src="/images/hero-image.png" />
        </div>
      </HomeSection>

      <section />
    </Container>
  );
}
