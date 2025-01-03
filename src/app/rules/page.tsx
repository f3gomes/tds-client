function GameRules() {
  return (
    <main className="bg-slate-800 flex flex-col gap-6">
      <h1>Rules</h1>

      <div>
        <p>
          <strong>Bem-vindo ao Templo dos Horrores</strong>
        </p>

        <img
          alt="Tempel des Schreckens box art"
          src="./assets/tds-box.png"
          width="150"
        />
      </div>

      <div>
        <h2 id="tematic-setup"> Configuração Temática </h2>

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
        <h3> Funções e equipes ocultas </h3>

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
        <h3> Dinâmica básica da equipe </h3>

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

        <h3> Cartões de câmara </h3>

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
            <img
              alt="Tempel des Schreckens - unopened chamber"
              src="./assets/tds-chamber.jpeg"
              width="150"
            />
            <p>Unknown chamber (unopened, back)</p>
          </div>

          <div style={{ width: 150 }}>
            <img
              alt="Tempel des Schreckens - gold chamber"
              src="./assets/tds-gold.jpeg"
              width="150"
            />
            <p>Gold chamber (opened, front)</p>
          </div>
          <div style={{ width: 150 }}>
            <img
              alt="Tempel des Schreckens - fire chamber"
              src="./assets/tds-fire.jpeg"
              width="150"
            />
            <p>Fire chamber (opened, front)</p>
          </div>
          <div style={{ width: 150 }}>
            <img
              alt="Tempel des Schreckens - empty chamber"
              src="./assets/tds-empty.jpeg"
              width="150"
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
        <h3>Round mechanics</h3>

        <p>
          Roles are randomly assigned before the first round, and then kept for
          the whole game.
        </p>

        <p>Every round works in the same basic way:</p>
        <ul>
          <li>
            <a href="#round-setup">
              <em>Setup</em>
            </a>
            , where cards are dealt out to represent the temple's chambers; and
          </li>
          <li>
            <a href="#discussion">
              <em>Discussion</em>
            </a>
            , where players reveal information (truthfully or not...); and
          </li>
          <li>
            <a href="#opening-cards">
              <em>Opening cards</em>
            </a>
            , where cards are flipped over to represent exploring the temple.
          </li>
        </ul>

        <p>
          For an <em>N</em> player game, a round involves opening <em>N</em>{" "}
          chambers. (For example, in a 6 player game, every round invovles
          flipping over 6 face-down chamber cards.)
        </p>

        <p>
          Discussion and Opening cards can happen in parallel, until all cards
          have been opened from the round.
        </p>

        <h4 id="round-setup">Round setup</h4>

        <p>
          Firstly, <strong>un-opened Chamber cards are dealt out evenly</strong>{" "}
          to each player. (Cards that are 'opened' in previous rounds are not
          dealt in subsequent rounds.)
        </p>

        <p>
          Secondly,{" "}
          <strong>each player sees their own Chamber card distribution</strong>.
          For example, a player dealt 5 x Chamber cards might see their
          distribution such as:
        </p>
        <ul>
          <li>2 Gold, 1 Fire, 2 Empty</li>
          <li>3 Gold, 2 Empty (0 Fire)</li>
          <li>5 Empty (0 Gold, 0 Fire)</li>
        </ul>

        <p>
          Thirdly,{" "}
          <strong>
            each player shuffles their Chamber cards and places them face-down
          </strong>
          . This means that they know their card <em>distribution</em>, but not{" "}
          <em>placement</em>. For example, if they have 2 Gold cards amongst 5
          unopened Chambers, they will know that each of these face-down Chamber
          cards has a 2/5 probability of being Gold - but they won't know{" "}
          <em>which</em> face-down Chamber cards <em>is actually</em> Gold.
        </p>
      </div>

      <div>
        <h4 id="discussion">Discussion</h4>

        <p>
          Adventurers will <em>generally</em> want to maximise the number of
          Gold chambers flipped, as this helps them towards their win condition.
          Guardians, however, have different incentives...
        </p>

        <p>
          Before any chambers are opened, it is <em>typical play</em> for all
          players to share information about their distributions, to help input
          on which chamber should be opened. For example:
        </p>
        <ul>
          <li>
            "In my four cards, I have 3 Gold and 1 Empty - odds are good here!"
          </li>
          <li>
            "Ah, so in my four cards I have 1 Gold, 1 Fire and 2 Empty -
            probably best to look elsewhere."
          </li>
        </ul>

        <p>
          <em>
            (There is no rule about declaring your cards in this way - it is
            simply common play. Adventurers have an interest in sharing
            information so that they can try to maximise the Gold cards they
            flip, and Guardians have an interest in pretending to be
            Adventurers, spreading misinformation and influencing the
            Adventurers.)
          </em>
        </p>

        <p>
          However, just like role assignment,{" "}
          <em>individual chamber distributions are secret</em> - which means
          that there's an element of deduction, since some people may be
          bluffing about what they have.
        </p>

        <p>
          (For example: a Guardian sitting on lots of Gold might artificially
          inflate their Fire count, to try to protect their Gold; conversely, a
          Guardian sitting on Fire might artificially inflate their Gold count,
          to try to draw the Adventurers towards the Fire. See{" "}
          <a href="STRATEGY.md">Strategy</a> for more.)
        </p>

        <p>
          So, in a game, there are two (related) types of deduction that happen:
        </p>
        <ol>
          <li>
            <em>Chamber distribution</em> - e.g. where are the Fire cards in
            this round?
          </li>
          <li>
            <em>Role distribution</em> - e.g. who are the Guardians in this
            game?
          </li>
        </ol>

        <p>
          (Remember: <strong>roles are kept between rounds</strong>, so deducing
          that somebody is a Guardian in one round will help you in a future
          round.)
        </p>

        <h4 id="opening-cards">Opening cards</h4>

        <p>
          It is usual for there to be player discussion over which chambers to
          visit. For example:
        </p>
        <ul>
          <li>
            "So, Aaliya says she has three Gold in her five cards - which means
            odds are best there, let's open one of her chambers!"
          </li>
          <li>
            "Hmm, I'm not sure I trust Aaliya. However, Carlo has proved himself
            reliable - so I trust him when he says there are two Gold there."
          </li>
          <li>
            "No, don't chance it with Carlo, he says he has Fire, we can't risk
            that!"
          </li>
        </ul>

        <p>
          <em>etcetera</em>
        </p>

        <p>
          However, one player has the final say over which chamber to open - the{" "}
          <strong>Keyholder</strong>, a <em>temporary role</em> which passes
          between players (through a mechanic described below). The first
          Keyholder is randomly assigned at the start of the game.
        </p>

        <p>
          The Keyholder ultimately has the final say on which Chamber to open
          (i.e. which card to flip) - they can choose to go with the discussion
          consensus, or they can choose to ignore it entirely.
        </p>

        <p>
          (The Keyholder{" "}
          <strong>cannot choose to open one of their own Chambers</strong>,
          however.)
        </p>

        <p>
          Once the Keyholder picks a Chamber to open, it is flipped, and
          everybody learns what it was - and{" "}
          <strong>the key passes to the person whose Chamber was opened</strong>
          , making them the next Keyholder.
        </p>

        <p>
          This process of <em>discussion</em>, <em>opening cards</em> and{" "}
          <em>passing the key</em> continues until <em>N</em> cards have been
          flipped, where <em>N</em> is the number of players in the game.
        </p>

        <p>
          (This need not be equally distributed between players - for example,
          the key might pass from Player A, to Player B, back to Player A, to
          Player C, then to Player D.)
        </p>

        <p>
          The person who holds the key at the end of a round holds onto it for
          the start of the next round.
        </p>

        <p>
          Play continues until one of the{" "}
          <a href="#team-win-conditions">team win conditions</a> has been
          reached.
        </p>

        <h2>Get started</h2>

        <p>
          So, are you ready to enter the{" "}
          <a href="https://tempel.rcr.dev/">Tempel des Schreckens</a>?
        </p>

        <p>
          The game is best played with the{" "}
          <a href="https://www.spiel-des-jahres.de/en/games/tempel-des-schreckens/">
            official physical card set
          </a>
          .
        </p>

        <p>
          If you can't play with a physical set - e.g. for remote play on group
          video calls - you can use this web app implementation, which uses
          identical rules.
        </p>
      </div>
    </main>
  );
}

export default GameRules;
