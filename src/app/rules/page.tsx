function GameRules() {
  return (
    <main className="bg-slate-800 flex flex-col gap-6">
      <h1>Rules</h1>

      <div>
        <blockquote>
          <p>
            🇩🇪 <span>Tempel des Schreckens</span> has official rules that only
            exist in German - so my understanding of the game is significantly
            indebted to{" "}
            <a href="https://boardgamegeek.com/filepage/139993/tempel-des-schreckens-unofficial-rules-english">
              this unofficial English translation
            </a>{" "}
            of the rules.
          </p>
        </blockquote>
      </div>

      <div>
        <p>
          <strong>Welcome to the Tempel des Schreckens!</strong>
        </p>

        <img
          alt="Tempel des Schreckens box art"
          src="./assets/tds-box.png"
          width="150"
        />
      </div>

      <div>
        <ul>
          <li>
            <a href="#thematic-setup">Thematic setup</a>
          </li>
          <li>
            <a href="#roles-and-win-conditions">Roles and win conditions</a>
          </li>
          <li>
            <a href="#game-mechanics">Game mechanics</a>
          </li>
        </ul>
      </div>

      <div>
        <h2 id="thematic-setup">Thematic setup</h2>

        <p>
          For decades, rumours have spread about a hidden temple of great
          treasures... and grave terrors.
        </p>

        <p>
          A foolhardy group of <strong>Adventurers</strong> have stumbled across
          it - and now they're ready to ransack it for all that it's worth.
        </p>

        <p>
          However, some mysterious Temple <strong>Guardians</strong> have been
          awoken from their slumber, stirred to protect the treasures within.
        </p>

        <p>
          Can the Adventurers find all the temple's gold in time? Or will they
          be led astray by the Guardians - into deadly traps of fire, or sealed
          within the temple for all eternity?
        </p>

        <h2 id="roles-and-win-conditions">Roles and win conditions</h2>
      </div>

      <div>
        <h3>Hidden roles and teams</h3>

        <p>
          In <em>Tempel des Schreckens</em>,{" "}
          <strong>roles are always secret</strong>. You know your role, but you
          don't know anybody else's role - and so you don't know who is, or who
          is not, on your team.
        </p>

        <p>
          But, like a lot of hidden role games, there is a large{" "}
          <em>social deduction</em> element of trying to identify who is on
          which team.
        </p>

        <p>
          There are exactly <strong>two teams</strong>: Adventurers and
          Guardians.
        </p>
        <ul>
          <li>
            <em>Teams are in direct competition</em> - every game always has a
            single winning team.
          </li>
          <li>
            <em>Teammates all win together</em> - you win alongside your fellow
            Adventurers/Guardians.
          </li>
        </ul>

        <h3>Team win conditions</h3>

        <p>
          The two teams have different win conditions, which are directly
          opposed to each other.
        </p>

        <p>
          The <strong>Adventurer</strong> team wins in only one way: if all of
          the temple's <strong>Gold</strong> is opened within four rounds.
        </p>

        <p>
          The <strong>Guardian</strong> team wins in one of two ways:
        </p>
        <ol>
          <li>
            If four rounds pass to completion <em>without</em> all of the Gold
            being located; or
          </li>
          <li>
            If, at any time, all of the temple's <strong>Fire</strong> traps are
            opened.
          </li>
        </ol>

        <p>
          The exact numbers on each team depends on the number of players, but
          there are almost always more Adventurers than Guardians.
        </p>

        <p>Thus, the game ends in three ways:</p>
        <ol>
          <li>
            <em>All Gold has been opened</em> - Adventurers win
          </li>
          <li>
            <em>All Fire has been opened</em> - Guardians win
          </li>
          <li>
            <em>Four rounds are complete</em> - Guardians win
          </li>
        </ol>

        <p>There is always a winning team at the end of the game.</p>
      </div>

      <div>
        <h3>Basic team dynamics</h3>

        <p>
          Adventurers are in a race against time to find all the Gold before the
          end of four rounds. They will try to cooperate with other Adventurers
          and share information to help them locate the Gold.
        </p>

        <p>
          However, remember - roles are secret, and there are some Guardians in
          the midst!
        </p>

        <p>
          Guardians will typically obstruct this by <em>pretending</em> to be
          Adventurers, so they can tactically spread misinformation, stop Gold
          from being opened, and potentially reveal the Fire.
        </p>

        <p>
          However, if Guardians aren't subtle, Adventurers may be able to{" "}
          <em>deduce</em> their identity, discount their misinformation and
          thwart the Guardians' plans.
        </p>

        <h2 id="game-mechanics">Game mechanics</h2>

        <h3>Chamber cards</h3>

        <p>
          The <em>Tempel des Schreckens</em> is organised into distinct
          Chambers, each of which is represented by a{" "}
          <strong>Chamber card</strong>.
        </p>

        <p>
          As the game progresses, the temple gets explored, and more chambers
          get <em>opened</em> - represented by flipping the card from face-down
          (unopened) to face-up (opened).
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
        <p>All unopened chambers look identical.</p>

        <p>
          When chambers are opened (flipped), they have three possible things
          they might reveal:
        </p>
        <ul>
          <li>
            <strong>Gold</strong>: good news for Adventurers, that's one closer
            to victory!
          </li>
          <li>
            <strong>Fire</strong>: bad news for Adventurers, that's one closer
            to defeat...
          </li>
          <li>
            <strong>Empty</strong>: neutral-<em>ish</em> for Adventurers, at
            least it's not fire...
          </li>
        </ul>

        <p>
          Whilst empty chambers don't count towards either gold or fire (and so
          they are neutral-<em>ish</em>), they <em>do</em> count towards the
          ticking time clock, as discussed in the next section.
        </p>

        <p>
          The exact number of Gold, Fire and Empty chambers in the game depends
          on the number of players, but it is always the case that{" "}
          <em>the vast majority of chambers are Empty</em>,{" "}
          <em>there will be a minority of chambers with Gold</em>, and{" "}
          <em>there will be extremely few Fire</em> (even fewer than Gold).
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
