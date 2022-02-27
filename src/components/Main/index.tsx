import Image from 'next/image';

import * as S from './styles';

const Main = () => (
  <S.Container>
    <S.Wrapper>
      <S.Logo>
        <Image
          src="/img/logo-page.png"
          alt="logo reg3x digital"
          width={95}
          height={40}
          quality={80}
          objectFit="contain"
        />
      </S.Logo>
      <S.Title>Boilerplate para landing page</S.Title>
      <S.Description>
        <p>
          Reg3x digital é um projeto e a oportunidade de acompanhar as novidades
          e tendências do mercado de tecnologia, estudar os conceitos,
          princípios e cases de sucesso aplicados aos modelos de negócios.
        </p>
      </S.Description>
      <S.Contact>
        <Image
          src="/img/contact_us.jpg"
          alt="imagem que mostra icones de contato"
          width={365}
          height={180}
          quality={80}
        />
      </S.Contact>
      <S.Link>
        <a href="https://www.reg3x.com" target="_blank" rel="noreferrer">
          Acompanhe o blog ....
        </a>
      </S.Link>
    </S.Wrapper>
  </S.Container>
);

export default Main;
