import Image from "next/image";

function GameRules() {
  return (
    <main className="bg-slate-800 flex flex-col gap-6">
      <h1>Rules</h1>

      <div>
        <p>
          <strong>Bem-vindo ao Templo dos Horrores</strong>
        </p>

        <Image
          width={150}
          height={230}
          src="/assets/tds-box.png"
          alt="Tempel des Schreckens box art"
        />
      </div>

      <div>
        <h2 className="font-bold"> Configuração Temática </h2>

        <p>
          Durante décadas, os rumores se espalharam sobre um templo oculto de
          grande tesouros ... e terrores graves.
        </p>

        <p>
          Um grupo impróprio de aventureiros <strong> </strong> tropeçaram Isso
          - e agora eles estão prontos para saquear por tudo o que vale a pena.
        </p>

        <p>
          No entanto, algum templo misterioso <strong> guardiões </strong> foram
          acordou de seu sono, mexido para proteger os tesouros.
        </p>

        <p>
          Os aventureiros podem encontrar todo o ouro do templo no tempo?Ou eles
          vão ser desviado pelos guardiões - em armadilhas mortais de fogo ou
          selado dentro do templo para toda a eternidade?
        </p>

        <h2 id="papéis e condições"> papéis e condições de vitória </h2>
      </div>

      <div>
        <h3 className="font-bold">Funções e equipes ocultas </h3>

        <p>
          Em <em> tempel des schreckens </em>, {""}
          <strong> Os papéis são sempre secretos </strong>.Você conhece o seu
          papel, mas você não conheço o papel de mais ninguém - e você não sabe
          quem é, ou quem não está, na sua equipe.
        </p>

        <p>
          Mas, como muitos jogos de papel ocultos, há um grande {""}
          <em> dedução social </em> elemento de tentar identificar quem está em
          Qual equipe.
        </p>

        <p>
          Existem exatamente <strong> duas equipes </strong>: aventureiros e
          Guardiões.
        </p>
        <ul>
          <li>
            As equipes <em> estão em competição direta </em> - todo jogo sempre
            tem um equipe vencedora única.
          </li>
          <li>
            <em> Os companheiros de equipe vencem juntos </em> - você ganha ao
            lado do seu companheiro Aventureiros/Guardiões.
          </li>
        </ul>

        <h3> Condições de vitória da equipe </h3>

        <p>
          As duas equipes têm condições de vitória diferentes, que são
          diretamente oposto um ao outro.
        </p>

        <p>
          A equipe <strong> aventureiro </strong> ganha apenas de uma maneira:
          se tudo O Gold <strong> do templo </strong> é aberto em quatro
          rodadas.
        </p>

        <p>
          A equipe <strong> Guardian </strong> vence de uma de duas maneiras:
        </p>
        <ol>
          <li>
            Se quatro rodadas passarem para a conclusão <em> sem </em> todo o
            ouro estar localizado;ou
          </li>
          <li>
            Se, a qualquer momento, todas as armadilhas do templo{" "}
            <strong> </strong>
            aberto.
          </li>
        </ol>

        <p>
          Os números exatos em cada equipe depende do número de jogadores, mas
          Quase sempre existem mais aventureiros do que guardiões.
        </p>

        <p> Assim, o jogo termina de três maneiras: </p>
        <ol>
          <li>
            <em> Todo o ouro foi aberto </em> - os aventureiros vencem
          </li>
          <li>
            <em> Todo o fogo foi aberto </em> - Guardiões vencem
          </li>
          <li>
            <em> quatro rodadas estão completas </em> - Guardiões vencem
          </li>
        </ol>

        <p> Sempre há uma equipe vencedora no final do jogo. </p>
      </div>

      <div>
        <h3 className="font-bold">Dinâmica básica da equipe </h3>

        <p>
          Aventureiros estão em uma corrida contra o tempo para encontrar todo o
          ouro antes do Fim de quatro rodadas.Eles vão tentar cooperar com
          outros aventureiros e compartilhe informações para ajudá -los a
          localizar o ouro.
        </p>

        <p>
          No entanto, lembre -se - os papéis são secretos e há alguns guardiões
          em o meio!
        </p>

        <p>
          Guardiões normalmente obstruirão isso por <em> fingindo </em> ser
          Aventureiros, para que possam espalhar taticamente informações
          erradas, param de ouro de ser aberto e potencialmente revelar o fogo.
        </p>

        <p>
          No entanto, se os guardiões não forem sutis, os aventureiros poderão
          ser capazes de {""}
          <em> Deduce </em> sua identidade, desconta suas informações erradas e
          frustrar os planos dos guardiões.
        </p>

        <h2 id="mecânica de jogo"> mecânica de jogo </h2>
      </div>

      <div>
        <h3 className="font-bold"> Cartões de câmara </h3>

        <p>
          O <em> tempel des schreckens </em> está organizado em distinto
          Chambers, cada um dos quais é representado por um {""}
          <strong> Cartão de câmara </strong>.
        </p>

        <p>
          À medida que o jogo avança, o templo é explorado e mais câmaras ser{" "}
          <em> aberto </em>
          (fechado) para enfrentar (aberto).
        </p>
      </div>

      <div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div style={{ width: 150 }}>
            <Image
              width={150}
              height={230}
              src="/assets/tds-chamber.jpeg"
              alt="Tempel des Schreckens - unopened chamber"
            />
            <p>Unknown chamber (unopened, back)</p>
          </div>

          <div style={{ width: 150 }}>
            <Image
              alt="Tempel des Schreckens - gold chamber"
              src="/assets/tds-gold.jpeg"
              width={150}
              height={230}
            />
            <p>Gold chamber (opened, front)</p>
          </div>
          <div style={{ width: 150 }}>
            <Image
              width={150}
              height={230}
              src="/assets/tds-fire.jpeg"
              alt="Tempel des Schreckens - fire chamber"
            />
            <p>Fire chamber (opened, front)</p>
          </div>
          <div style={{ width: 150 }}>
            <Image
              width={150}
              height={230}
              src="/assets/tds-empty.jpeg"
              alt="Tempel des Schreckens - empty chamber"
            />
            <p>Empty chamber (opened, front)</p>
          </div>
        </div>
      </div>

      <div>
        <p> Todas as câmaras fechadas parecem idênticas. </p>

        <p>
          Quando as câmaras são abertas (invertidas), elas têm três coisas
          possíveis Eles podem revelar:
        </p>
        <ul>
          <li>
            <strong> ouro </strong>: Boas notícias para aventureiros, isso é
            mais próximo para a vitória!
          </li>
          <li>
            <strong> incêndio </strong>: más notícias para aventureiros, isso é
            mais próximo para derrotar ...
          </li>
          <li>
            <strong> vazio </strong>: neutro- <em> ish </em> para aventureiros,
            em pelo menos não é fogo ...
          </li>
        </ul>

        <p>
          Enquanto as câmaras vazias não contam para o ouro ou o fogo (e assim
          eles são neutros- <em> ish </em>), eles <em> fazem </em> contam para o
          Relógio de tempo, conforme discutido na próxima seção.
        </p>

        <p>
          O número exato de ouro, fogo e câmaras vazias no jogo depende Sobre o
          número de jogadores, mas é sempre o caso de {""}
          <em> A grande maioria das câmaras está vazia </em>, {""}
          <em> Haverá uma minoria de câmaras com ouro </em> e {""}
          <em>
            {" "}
            haverá extremamente poucos incêndios (ainda menos que o ouro).{" "}
          </em>
        </p>
      </div>

      <div>
        <h3> mecânica redonda </h3>

        <p>
          As funções são designadas aleatoriamente antes da primeira rodada e
          depois mantidas para Todo o jogo.
        </p>

        <p> Cada rodada funciona da mesma maneira básica: </p>
        <ul>
          <li>
            <a href="#redonda">
              <em> Configuração </em>
            </a>
            , onde os cartões são tratados para representar as câmaras do
            templo;e
          </li>
          <li>
            <a href="#discussão">
              <em> discussão </em>
            </a>
            , onde os jogadores revelam informações (sinceramente ou não ...);e
          </li>
          <li>
            <a href="#de abertura">
              <em> Abertura de cartões </em>
            </a>
            , onde os cartões são invertidos para representar a exploração do
            templo.
          </li>
        </ul>

        <p>
          Para um jogo de jogador <em> n </em>, uma rodada envolve a abertura{" "}
          <em> n </em> {""}
          Câmaras.(Por exemplo, em um jogo de 6 jogadores, a cada redonda
          invadida virando mais de 6 cartões de câmara voltados para baixo.)
        </p>

        <p>
          Discussão e abertura de cartões podem acontecer em paralelo, até que
          todas as cartas foram abertos da rodada.
        </p>

        <h4 id="redond-setup"> configuração redonda </h4>

        <p>
          Primeiramente,{" "}
          <strong>
            Cartões de câmara não abertos são tratados uniformemente
          </strong>{" "}
          para cada jogador.(Cartões que são abertos nas rodadas anteriores não
          são lidou nas rodadas subsequentes.)
        </p>

        <p>
          Em segundo lugar, {""}
          <strong>
            {" "}
            Cada jogador vê sua própria distribuição de cartas de câmara{" "}
          </strong>
          . Por exemplo, um jogador que negociou 5 x cartas de câmara pode ver
          seu distribuição como:
        </p>
        <ul>
          <li> 2 ouro, 1 incêndio, 2 vazio </li>
          <li> 3 ouro, 2 vazio (0 fogo) </li>
          <li> 5 vazios (0 ouro, 0 fogo) </li>
        </ul>

        <p>
          Terceiro, {""}
          <strong>
            Cada jogador embaralha suas cartas de câmara e as coloca de bruços
          </strong>
          .Isso significa que eles conhecem o cartão <em> distribuição </em>,
          mas não {""}
          <em> posicionamento </em>.Por exemplo, se eles tiverem 2 cartões de
          ouro entre 5 Câmaras fechadas, eles saberão que cada uma dessas câmara
          de frente para baixo Os cartões têm uma probabilidade 2/5 de ser ouro
          - mas eles não saberão {""}
          <em> que </em> Cartões de câmara de frente para baixo{" "}
          <em> é na verdade </em> ouro.
        </p>
      </div>

      <div>
        <h4 id="discussion">Discussion</h4>
        <p>
          Os aventureiros <em> geralmente </em> desejam maximizar o número de As
          câmaras de ouro caíram, pois isso as ajuda a sua condição de vitória.
          Guardiões, no entanto, têm incentivos diferentes ...
        </p>
        <p>
          Antes que qualquer câmaras seja aberta, é <em> típico jogo </em> para
          todos jogadores para compartilhar informações sobre suas
          distribuições, para ajudar a inserir em que câmara deve ser aberta.Por
          exemplo:
        </p>
        <ul>
          <li>
            <i>
              Nos meus quatro cartões, tenho 3 ouro e 1 vazio - as
              probabilidades são boas aqui!
            </i>
          </li>
          <li>
            <i>
              Ah, então nas minhas quatro cartas, tenho 1 ouro, 1 incêndio e 2
              vazias - Provavelmente melhor procurar em outro lugar.
            </i>
          </li>
        </ul>
        <p>
          <em>
            (Não há regra sobre declarar seus cartões dessa maneira - é
            simplesmente jogo comum.Aventureiros têm interesse em compartilhar
            informações para que eles possam tentar maximizar os cartões de ouro
            que eles flip e guardiões têm interesse em fingir ser Aventureiros,
            espalhando desinformação e influenciando o Aventureiros.)
          </em>
        </p>
        <p>
          No entanto, assim como a atribuição de função, {""}
          <em> distribuições de câmara individuais são secretas </em> - o que
          significa que há um elemento de dedução, já que algumas pessoas podem
          ser blefando sobre o que eles têm.
        </p>
        <p>
          (Por exemplo: um guardião sentado em muito ouro pode artificialmente
          inflar sua contagem de incêndios, para tentar proteger seu ouro;Por
          outro lado, a Guardião sentado em chamas pode inflar artificialmente
          sua contagem de ouro, tentar atrair os aventureiros para o fogo.Ver{" "}
          <a href="STRATEGY.md">Strategy</a> for more.)
        </p>
        <p>
          Então, em um jogo, existem dois tipos de dedução (relacionados) que
          acontecem:
        </p>
        F
        <ol>
          <li>
            <em> Distribuição da câmara </em> - p.Onde estão os cartões de fogo
            esta rodada?
          </li>
          <li>
            <em> Distribuição de função </em> - p.quem são os guardiões neste
            jogo?
          </li>
        </ol>
        <p>
          (Lembre -se: <strong> papéis são mantidos entre as rodadas </strong>,
          então deduzindo que alguém é um guardião em uma rodada o ajudará em um
          futuro redondo.)
        </p>
        <h4 id="Abertura-cards"> Cartões de abertura </h4>
        <p>
          É comum haver discussões de jogadores sobre quais câmaras para
          visita.Por exemplo:
        </p>
        <ul>
          <li>
            <i>
              Então, Aaliya diz que tem três ouro em suas cinco cartas - o que
              significa As probabilidades são melhores lá, vamos abrir uma de
              suas câmaras!
            </i>
          </li>
          <li>
            <i>
              Hmm, não tenho certeza se confio em Aaliya. No entanto, Carlo
              provou Confiável - então eu confio nele quando ele diz que há dois
              ouro lá.
            </i>
          </li>
          <li>
            <i>
              Não, não acabe com Carlo, ele diz que tem fogo, não podemos
              arriscar que!
            </i>
          </li>
        </ul>
        <p>
          <em> etc </em>
        </p>
        <p>
          No entanto, um jogador tem a palavra final sobre qual câmara abrir - o{" "}
          <strong>Keyholder</strong>, um papel temporário que passa entre
          jogadores (através de um mecânico descrito abaixo).O primeiro O
          Keyholder é designado aleatoriamente no início do jogo.
        </p>
        <p>
          O detentor de chave finalmente tem a palavra final sobre qual câmara
          abrir (isto é, qual cartão virar) - eles podem optar por ir com a
          discussão consenso, ou eles podem optar por ignorá -lo completamente.
        </p>
        <p>
          (O Keyholder {""}
          <strong>
            {" "}
            não pode optar por abrir uma de suas próprias câmaras{" "}
          </strong>
          , no entanto.)
        </p>
        <p>
          Uma vez que o proprietário escolhe uma câmara para abrir, ela é
          invertida e Todo mundo aprende o que era - e {""}
          <strong> A chave passa para a pessoa cuja câmara foi aberta </strong>,
          tornando -os o próximo detentor -chave.
        </p>
        <p>
          Este processo de <em> discussão </em>,{" "}
          <em> de abertura de cartões </em> e {""}
          <em> Passando a chave </em> continua até que os cartões <em> n </em>
          Virado, onde <em> n </em> é o número de jogadores do jogo.
        </p>
        <p>
          (Isso não precisa ser igualmente distribuído entre os jogadores - por
          exemplo, A chave pode passar do jogador A, para o jogador B, de volta
          ao jogador A, para Jogador C, então para o jogador D.)
        </p>
        <p>
          A pessoa que segura a chave no final de uma rodada se mantém o início
          da próxima rodada.
        </p>
        <p>
          O jogo continua até um dos {""}
          <a href="#team-win-conditions">
            As condições de vitória da equipe{" "}
          </a>{" "}
          foram alcançado.
        </p>
        <h2>Get started</h2>
        <p>
          The game is best played with the{" "}
          <a href="https://www.spiel-des-jahres.de/en/games/tempel-des-schreckens/">
            official physical card set
          </a>
          .
        </p>
        <p>
          Se você não pode brincar com um conjunto físico - por exemplopara jogo
          remoto no grupo chamadas de vídeo - você pode usar esta implementação
          de aplicativos da web, que usa regras idênticas.
        </p>
      </div>
    </main>
  );
}

export default GameRules;
