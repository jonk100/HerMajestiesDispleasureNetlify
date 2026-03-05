episode: 1
title: "The Investiture"
scenes:

# ============================================================
# SCENE 1
# ============================================================
- scene_id: "ep1_sc01"
  scene_title: "Buckingham Palace — Private Bathroom"
  location: "Buckingham Palace - Private Bathroom"
  characters: [John, Paul, George, Ringo]
  page_range: [1, 3]
  
  beats:
    - beat_id: "ep1_sc01_b01"
      beat_type: [ESTABLISHMENT]
      function: >
        John produces a joint with casual irreverence.
        Establishes his relationship to authority —
        not hostile, simply indifferent. The setting
        does the dramatic work: working-class faces
        in royal gold mirrors.
      thread_effect:
        opens: ["john_irreverence"]
      quality_note: >
        The mirror image is the scene's best idea.
        Don't explain it.

    - beat_id: "ep1_sc01_b02"
      beat_type: [ESTABLISHMENT]
      function: >
        Paul accepts the joint reluctantly. Diplomatic
        nature warring with anxiety. His 'this is
        exactly the sort of thing that'll end up in
        the papers' establishes his role as the band's
        reputational conscience.
      thread_effect:
        opens: ["paul_diplomatic_anxiety"]
      quality_note: >
        'The headlines write themselves' is doing
        double duty — characterization and dramatic
        irony. The series will prove him right.

    - beat_id: "ep1_sc01_b03"
      beat_type: [ESTABLISHMENT]
      function: >
        George observes the ceiling tiles with
        detached amusement. 'It's all just theatre.'
        Establishes his philosophical remove from
        the moment everyone else is either anxious
        or irreverent about.
      thread_effect:
        opens: ["george_detachment"]
      quality_note: >
        'Theatre' is the right word and George
        is the right person to say it. His
        detachment will become withdrawal will
        become departure — this is the seed.

    - beat_id: "ep1_sc01_b04"
      beat_type: [ESTABLISHMENT, SETUP]
      function: >
        Ringo's 'my mum's going to be over the moon'
        establishes his baseline: genuine warmth,
        no irony, no philosophical distance. He
        means it. First data point for the immunity
        thread — Ringo cannot be made cynical
        about this moment.
      thread_effect:
        opens: ["ringo_immunity"]
      quality_note: >
        The simplicity is the point. Every other
        character is processing the moment
        through a filter. Ringo isn't.

    - beat_id: "ep1_sc01_b05"
      beat_type: [ESTABLISHMENT]
      function: >
        John's 'do I look sufficiently grateful
        to the Crown?' as he checks his reflection.
        Performance of gratitude rather than
        gratitude itself. Sets up his inability
        to perform sincerity under institutional
        pressure.
      thread_effect:
        advances: ["john_irreverence"]
      quality_note: >
        The line works. The stage direction
        'casual defiance' over-explains it.


# ============================================================
# SCENE 2
# ============================================================
- scene_id: "ep1_sc02"
  scene_title: "Buckingham Palace — Investiture Room"
  location: "Buckingham Palace - Investiture Room"
  characters: [Queen Elizabeth, Philip, Mountbatten, John, Paul, George, Ringo]
  page_range: [3, 6]

  beats:
    - beat_id: "ep1_sc02_b01"
      beat_type: [ESTABLISHMENT]
      function: >
        The room established as a place of
        'silent crushing history.' Gold, crystal,
        dead monarchs. The physical space as
        institutional argument — this is what
        we are protecting.
      thread_effect: []
      quality_note: >
        The description earns its length.
        'Dead monarchs watch from the walls' is
        the right note.

    - beat_id: "ep1_sc02_b02"
      beat_type: [ESTABLISHMENT, SETUP]
      function: >
        Philip locks onto John's smirk. 'There's
        a carelessness about that one.' Mountbatten's
        counter — 'they call it authenticity. It's
        the source of their influence.' The series'
        central opposition stated in two lines before
        the operation exists.
      thread_effect:
        opens: ["philip_obsession", "mountbatten_strategy"]
      quality_note: >
        This is the scene's best exchange and
        the series' first thesis statement.
        Mountbatten already understands what
        Philip cannot.

    - beat_id: "ep1_sc02_b03"
      beat_type: [ESTABLISHMENT, IRONY]
      function: >
        Philip touches his naval service ribbons
        as John accepts the medal. The unconscious
        gesture — protecting what he perceives
        has been mocked — establishes his wound
        as personal before it becomes institutional.
      thread_effect:
        advances: ["philip_obsession"]
      quality_note: >
        The physical detail is the scene's
        finest moment. Don't explain it in
        stage direction — and the script
        mostly doesn't, which is correct.

    - beat_id: "ep1_sc02_b04"
      beat_type: [IRONY, SETUP]
      function: >
        'We don't see what John thinks of it —
        only what Philip decides it means.'
        The series' governing structural principle
        stated as camera direction. The operation
        will be built entirely on Philip's
        misreadings.
      thread_effect:
        advances: ["philip_obsession"]
      quality_note: >
        The best stage direction in the episode.
        This one earns itself.


# ============================================================
# SCENE 3
# ============================================================
- scene_id: "ep1_sc03"
  scene_title: "Buckingham Palace — Corridor"
  location: "Buckingham Palace Corridor"
  characters: [Philip, Mountbatten, Equerry]
  page_range: [6, 7]

  beats:
    - beat_id: "ep1_sc03_b01"
      beat_type: [IRONY, COMEDY]
      function: >
        The Equerry's apologetic 'musical group'
        and Mountbatten's flicker of amusement.
        The institutional condescension is so
        complete it can't even name them correctly.
        A small joke doing thematic work.
      thread_effect: []
      quality_note: >
        Brief and correct. The portraits
        watching and disapproving is the
        right closing image.


# ============================================================
# SCENE 4
# ============================================================
- scene_id: "ep1_sc04"
  scene_title: "Buckingham Palace — Grand Entrance / Press Scrum"
  location: "Buckingham Palace Grand Entrance Hall"
  characters: [John, Paul, George, Ringo, Reporters]
  page_range: [7, 8]

  beats:
    - beat_id: "ep1_sc04_b01"
      beat_type: [ESTABLISHMENT]
      function: >
        The four public personas snap into place
        under camera flash. Paul charming, Ringo
        grinning, George studying architecture.
        The contrast with the bathroom establishes
        the public/private gap that the series
        will live inside.
      thread_effect: []
      quality_note: "efficient"

    - beat_id: "ep1_sc04_b02"
      beat_type: [SETUP, IRONY]
      function: >
        We see John speak into a microphone but
        don't hear the Jesus remark. We only see
        Paul's smile tighten. Structural withholding
        — the audience knows something has happened
        before the consequences arrive.
      thread_effect:
        opens: ["john_jesus_remark"]
      quality_note: >
        The correct choice. We hear it later
        through Philip's television, which means
        we experience it as he does — mediated,
        decontextualized, already dangerous.


# ============================================================
# SCENE 5
# ============================================================
- scene_id: "ep1_sc05"
  scene_title: "Philip's Private Study — Evening"
  location: "Buckingham Palace Private Study"
  characters: [Philip, BBC Newscaster (V.O.)]
  page_range: [8, 10]

  beats:
    - beat_id: "ep1_sc05_b01"
      beat_type: [PAYOFF, ESCALATION]
      function: >
        The Jesus remark arrives through the
        television — mediated, stripped of
        context, amplified. 'I thought you had
        to drive tanks and win wars and kill
        people to get these things.' Philip
        hears it as mockery of duty. The
        structural withholding from Scene 4
        paid off.
      thread_effect:
        closes: ["john_jesus_remark (first instance)"]
        opens: ["jesus_backlash"]
      quality_note: >
        The decontextualization is the point —
        we hear the remark the way Philip does,
        which is already the wrong way.

    - beat_id: "ep1_sc05_b02"
      beat_type: [ESTABLISHMENT, DEVELOPMENT]
      function: >
        Philip's mask cracks. 'You're not mocking
        the medal, boy. You're mocking duty.
        Sacrifice. Order.' The personal wound
        becomes an institutional argument. Philip
        articulates his own worldview as a defense
        mechanism.
      thread_effect:
        advances: ["philip_obsession"]
      quality_note: >
        'Liverpool basement' as the class contempt
        beneath the institutional language. The
        script earns this.

    - beat_id: "ep1_sc05_b03"
      beat_type: [SETUP]
      function: >
        Philip calls Mountbatten. 'I'm in the
        study, let's talk.' The operation's
        first breath. The television image of
        John flickering and stabilizing — 'an
        insult converted into an official-looking
        fact.'
      thread_effect:
        advances: ["philip_obsession", "mountbatten_strategy"]
      quality_note: >
        The television image description is
        the episode's most ambitious stage
        direction and one of the few that
        fully earns itself.


# ============================================================
# SCENE 6
# ============================================================
- scene_id: "ep1_sc06"
  scene_title: "Brian Epstein's Townhouse — Celebration"
  location: "Brian Epstein's Townhouse"
  characters: [Brian, John, Paul, George, Ringo]
  page_range: [10, 14]

  beats:
    - beat_id: "ep1_sc06_b01"
      beat_type: [ESTABLISHMENT]
      function: >
        Brian's toast — 'I knew you could do it,
        I always knew.' His pride is real but
        the phrasing is managerial. He's celebrating
        a result, not a moment. The first hint
        that his relationship to the band is
        transactional even when it's loving.
      thread_effect:
        opens: ["brian_obsolescence"]
      quality_note: "subtle — works without announcing itself"

    - beat_id: "ep1_sc06_b02"
      beat_type: [ESTABLISHMENT, SETUP]
      function: >
        Ringo holds the medal up to the light
        like a schoolboy. 'Right next to the
        good plates.' The immunity thread's
        second data point — his joy is
        uncomplicated by irony or ambition.
      thread_effect:
        advances: ["ringo_immunity"]
      quality_note: "the good plates detail is exactly right"

    - beat_id: "ep1_sc06_b03"
      beat_type: [ESTABLISHMENT, SETUP]
      function: >
        Paul pivots immediately to the next
        single. Studio time. Commercial momentum.
        John's eye-roll — 'always on the next
        single.' The creative tension's first
        direct expression.
      thread_effect:
        opens: ["john_paul_dynamic", "paul_commercial_engine"]
      quality_note: "clean and efficient"

    - beat_id: "ep1_sc06_b04"
      beat_type: [DEVELOPMENT, THESIS]
      function: >
        The swimming pool exchange. Paul: we
        used to sit down and say 'let's write
        a swimming pool.' John: 'a swimming
        pool's one thing. But the sounds, the
        words — they can actually say something.'
        The series' central argument in miniature:
        commerce vs meaning.
      thread_effect:
        advances: ["john_paul_dynamic"]
        opens: ["john_radicalization"]
      quality_note: >
        The episode's best dialogue exchange.
        The swimming pool line is historically
        real and dramatically perfect.

    - beat_id: "ep1_sc06_b05"
      beat_type: [ESTABLISHMENT, SETUP]
      function: >
        George's 'same sausages' speech. The
        machine metaphor. 'Feels like something's
        missing.' Paul stung, John amused, Brian
        pained. George's philosophical remove
        from the celebration — he can't just
        be happy for five minutes.
      thread_effect:
        opens: ["george_detachment", "george_withdrawal"]
      quality_note: >
        Plants the thread. The room stilling
        is the right physical response.

    - beat_id: "ep1_sc06_b06"
      beat_type: [ESTABLISHMENT]
      function: >
        Brian's 'let's not turn tonight into
        a think-piece.' His management function
        as tension-suppressor. He needs the
        mood to stay celebratory because the
        alternative — honest conversation —
        is the thing he cannot manage.
      thread_effect:
        advances: ["brian_obsolescence"]
      quality_note: "functional — does its job quietly"

    - beat_id: "ep1_sc06_b07"
      beat_type: [ESTABLISHMENT, PAYOFF]
      function: >
        Ringo's 'we're all in it, the four of
        us, always has been.' Dissolves the
        George tension through simple warmth.
        First instance of his role as emotional
        ballast. Pays off the immunity setup
        from Scene 1.
      thread_effect:
        advances: ["ringo_immunity"]
      quality_note: >
        'Best seat in the house' is the right
        line. Ringo's contentment as a force
        that dissolves conflict — the series'
        governing joke in embryo.

    - beat_id: "ep1_sc06_b08"
      beat_type: [IRONY, SETUP]
      function: >
        John's 'toppermost of the poppermost'
        toast. 'Feels like the beginning of
        something bigger.' The celebration that
        will become evidence against them.
        The cracks papered over by momentum.
      thread_effect: []
      quality_note: >
        The stage direction over-explains —
        'utterly unaware of the massive brewing
        firestorm.' Cut that. The image of
        their glasses raised is enough.


# ============================================================
# SCENE 7
# ============================================================
- scene_id: "ep1_sc07"
  scene_title: "Buckingham Palace — Private Study (Operation Conceived)"
  location: "Buckingham Palace Private Study"
  characters: [Philip, Mountbatten, Queen Elizabeth]
  page_range: [14, 18]

  beats:
    - beat_id: "ep1_sc07_b01"
      beat_type: [ESCALATION, ESTABLISHMENT]
      function: >
        Philip's indictment of John. 'Popinjay.'
        The naval uniform reference. 'Proper
        order of things.' His wound has
        solidified into institutional language
        — he's no longer angry, he's righteous,
        which is more dangerous.
      thread_effect:
        advances: ["philip_obsession"]
      quality_note: "Philip's best speech — the class contempt is doing real work"

    - beat_id: "ep1_sc07_b02"
      beat_type: [ESTABLISHMENT, COUNTER]
      function: >
        The Queen adjusts the photograph. 'The
        Crown has weathered unruly poets and
        pamphleteers. It will be forgotten in
        a week.' Her position: institutional
        patience vs Philip's institutional fury.
        She is already right about everything.
      thread_effect:
        opens: ["queens_wisdom", "photo_motif"]
      quality_note: >
        The photograph adjustment is the series'
        best visual motif introduced. Her
        argument is the series' thesis —
        the tragedy is that no one listens to it.

    - beat_id: "ep1_sc07_b03"
      beat_type: [ESTABLISHMENT, SETUP]
      function: >
        Mountbatten's reframe. 'Cultural power
        is still power.' The tribe/nationalism
        argument. 'We can't command it, so we
        must persuade it. Or, failing that,
        dismantle it.' The operation's strategic
        logic established by its architect.
      thread_effect:
        opens: ["operation_minuet"]
        advances: ["mountbatten_strategy"]
      quality_note: >
        Mountbatten's intelligence is what makes
        him frightening. He's not wrong about
        any of this.

    - beat_id: "ep1_sc07_b04"
      beat_type: [CONCEPTION, SATIRE]
      function: >
        'Apply quiet steady pressure to the
        weakest points and they fracture from
        within.' The operation's method — not
        creation of new tensions but amplification
        of existing ones. The series' central
        irony in its purest form: the operation
        is designed to do what the Beatles are
        already doing to themselves.
      thread_effect:
        advances: ["operation_minuet"]
      quality_note: >
        'My great gift is to accelerate the
        inevitable' is the series' best villain
        line. Chilling because it's correct.

    - beat_id: "ep1_sc07_b05"
      beat_type: [CONCEPTION, COMEDY]
      function: >
        'Operation Minuet. A delicate dance
        performed in the shadows.' Philip
        liking the plan because it gives his
        rage an object. The naming of the
        operation as the scene's comic
        punctuation — a minuet is the most
        inadequate possible metaphor for
        what they're attempting.
      thread_effect:
        advances: ["operation_minuet"]
      quality_note: "the name does the tonal work of the scene"

    - beat_id: "ep1_sc07_b06"
      beat_type: [SETUP, IRONY]
      function: >
        The Queen's budget question as reluctant
        consent. 'And one presumes this Operation
        Minuet has a budget?' Her practicality
        as the institutional language she
        trusts — she's not approving the
        operation, she's acknowledging its
        existence.
      thread_effect:
        advances: ["queens_wisdom", "photo_motif"]
      quality_note: >
        'We don't get a clear yes. We only
        get the photograph nudged into perfect
        alignment.' The series' governing
        visual metaphor earning its place.
        This is the episode's finest closing
        image.


# ============================================================
# SCENE 8
# ============================================================
- scene_id: "ep1_sc08"
  scene_title: "MI5 Briefing Room"
  location: "MI5 Briefing Room"
  characters: [Sir Derek, Mountbatten, Nigel, Clive]
  page_range: [18, 22]

  beats:
    - beat_id: "ep1_sc08_b01"
      beat_type: [ESTABLISHMENT]
      function: >
        The room as institutional misery.
        Fluorescent lights, scarred table.
        Sir Derek's 'calm authority.' The
        physical environment established as
        the comedy's natural habitat — the
        machinery of power housed in
        government-mandated ugliness.
      thread_effect: []
      quality_note: "the room description earns its detail"

    - beat_id: "ep1_sc08_b02"
      beat_type: [ESTABLISHMENT]
      function: >
        Nigel introduced: perfectly still,
        hands clasped, expression neutral.
        A man of professional composure.
        Clive introduced: fidgeting, buzzing,
        eyes darting. The comic opposition
        established in a single physical
        description before either speaks.
      thread_effect:
        opens: ["nigel_conscience", "clive_delusion"]
      quality_note: >
        The physical contrast does the
        characterization. Don't over-explain
        it — and the script mostly doesn't.

    - beat_id: "ep1_sc08_b03"
      beat_type: [CONCEPTION, COMEDY]
      function: >
        Clive opens the folder and lights up.
        'A classic case of aesthetic subversion!
        Their semiotic framework is pure
        psychological warfare wrapped in a
        three-minute pop song! We must eradicate
        this disease!' Nigel closes his eyes
        for a single weary beat.
      thread_effect:
        advances: ["clive_delusion"]
      quality_note: >
        Clive's first speech establishes the
        register perfectly. Nigel's eye-close
        is the series' first great reaction
        beat.

    - beat_id: "ep1_sc08_b04"
      beat_type: [DEPLOYMENT, SATIRE]
      function: >
        John's assignment: amplify paranoia,
        intellectual vanity, grandiosity. Make
        him believe he's a revolutionary not
        a pop star. Clive's 'Klaus Technique'
        — posing as a German art critic. Nigel's
        inaudible sigh.
      thread_effect:
        opens: ["klaus_persona", "john_radicalization"]
        advances: ["clive_delusion", "nigel_conscience"]
      quality_note: >
        'The Klaus Technique' as a name tells
        you everything about Clive's relationship
        to reality.

    - beat_id: "ep1_sc08_b05"
      beat_type: [DEPLOYMENT, SETUP, COMEDY]
      function: >
        George's assignment: nurture the sitar.
        'A man focused on finding the perfect
        drone is a man less focused on the team.'
        Nigel's notebook: multiple misspellings
        of sitar, ending with 'SITAR?' then
        'ENCOURAGE SITAR STUDIES' underlined.
      thread_effect:
        opens: ["george_sitar"]
        advances: ["nigel_conscience"]
      quality_note: >
        The notebook business is the episode's
        first great joke and the series'
        governing comic image in miniature —
        the institutional response to culture
        is always a misspelling.

    - beat_id: "ep1_sc08_b06"
      beat_type: [SETUP, COMEDY]
      function: >
        Ringo dismissed. 'The drummer is
        psychologically inert. A control group.
        Ignore him.' Mountbatten's wave.
        The immunity thread's institutional
        origin — Ringo's imperviousness is
        recognized by the operation and
        immediately disregarded.
      thread_effect:
        advances: ["ringo_immunity"]
      quality_note: >
        The best single line in the episode.
        The payoff — the almost entirely
        blank Starr file in Episode 6 —
        is three episodes away but already
        inevitable.

    - beat_id: "ep1_sc08_b07"
      beat_type: [ESTABLISHMENT, COMEDY]
      function: >
        Sir Derek and Mountbatten leave without
        looking back. Nigel and Clive alone in
        the humming silence. Nigel staring at
        'encourage sitar studies?' with
        complete confusion. The two men who
        will execute the operation, left with
        instructions that cannot be executed.
      thread_effect:
        advances: ["nigel_conscience", "clive_delusion"]
      quality_note: >
        The scene's correct ending. The
        humming fluorescent light as the
        only response to their impossible
        assignment.


# ============================================================
# SCENE 9
# ============================================================
- scene_id: "ep1_sc09"
  scene_title: "Abbey Road Studios — Rubber Soul Sessions"
  location: "Abbey Road Studios"
  characters: [George, John, Paul, Ringo, Nigel, Clive]
  page_range: [22, 28]

  beats:
    - beat_id: "ep1_sc09_b01"
      beat_type: [DEPLOYMENT, DEVELOPMENT]
      function: >
        George cross-legged on the floor with
        the sitar. 'Norwegian Wood — what are
        you trying to tell me?' The sitar as
        something genuinely sought, not just
        played. John's response — 'it's not
        the wood talking, it's you' — is the
        episode's most generous line.
      thread_effect:
        advances: ["george_sitar", "george_detachment"]
      quality_note: >
        John's generosity here matters — he
        sees George clearly even when Paul
        doesn't.

    - beat_id: "ep1_sc09_b02"
      beat_type: [TENSION, DEVELOPMENT]
      function: >
        Paul's 'will Radio Caroline play it?
        Will the kids understand it?' John's
        'maybe it's time they learned something
        new.' The commercial vs artistic tension
        in its first studio form — not hostile
        yet, but the opposition is visible.
      thread_effect:
        advances: ["john_paul_dynamic"]
      quality_note: "the argument is right but slightly on the nose"

    - beat_id: "ep1_sc09_b03"
      beat_type: [DEPLOYMENT, COMEDY]
      function: >
        Nigel and Clive as tea service staff.
        Clive's 'Communist influences through
        Indian classical music.' Nigel: 'the
        sitar is not a Communist plot.' Clive:
        'what if the strings are tuned to
        Marxist frequencies?'
      thread_effect:
        advances: ["clive_delusion", "nigel_conscience"]
      quality_note: >
        'Marxist frequencies' is the episode's
        funniest line. The glass separating
        them from the band is the scene's
        governing visual metaphor — they
        can see but cannot hear the nuance.

    - beat_id: "ep1_sc09_b04"
      beat_type: [DEVELOPMENT, THESIS]
      function: >
        George's 'maya' speech. Paul confused.
        George explaining the Hindu concept of
        illusion. The Eastern philosophy thread
        arriving in the studio — not as rebellion
        but as genuine inquiry.
      thread_effect:
        advances: ["george_sitar", "george_detachment"]
      quality_note: >
        Paul's confusion is right — he's not
        dismissive, just genuinely lost. That's
        the honest version of this moment.

    - beat_id: "ep1_sc09_b05"
      beat_type: [DEVELOPMENT, ELEGY]
      function: >
        Paul begins 'In My Life.' John joins
        the harmony. 'There are places I
        remember, all my life though some
        have changed.' The music as the honest
        conversation the operation cannot access.
      thread_effect: []
      quality_note: >
        The scene's emotional center. Nigel
        setting down tea cups while recognizing
        something significant is happening
        that he'll never understand — that's
        the scene's thesis.

    - beat_id: "ep1_sc09_b06"
      beat_type: [IRONY, COMEDY]
      function: >
        Clive through the glass: 'Hindu concepts,
        Eastern philosophy, subject Harrison is
        likely under foreign influence.' Nigel
        returning: 'or they're writing songs
        about growing up.' The scene's ironic
        counterpoint stated plainly.
      thread_effect:
        advances: ["clive_delusion", "nigel_conscience"]
      quality_note: >
        Nigel's line is the correct response
        but it should probably stay in his
        head — saying it aloud slightly deflates
        the irony.

    - beat_id: "ep1_sc09_b07"
      beat_type: [IRONY, THESIS]
      function: >
        Clive's closing prediction: 'Rubber Soul
        will be the beginning of their downfall.
        All this introspection and Eastern
        influence — it alienates the common man.'
        Nigel's dry counter. The camera stays
        behind the glass — 'just enough to
        misunderstand it.'
      thread_effect:
        advances: ["clive_delusion"]
      quality_note: >
        'We can see the band but we can't quite
        hear the nuance — just enough to
        misunderstand it.' The best stage direction
        in the scene and one of the episode's
        finest. This one earns itself completely.


# ============================================================
# SCENE 10
# ============================================================
- scene_id: "ep1_sc10"
  scene_title: "Rubber Soul Success Montage"
  location: "Various"
  characters: [Philip, Nigel, Various Public]
  page_range: [28, 34]

  beats:
    - beat_id: "ep1_sc10_b01"
      beat_type: [IRONY, SATIRE]
      function: >
        The album's reception — 'they're getting
        even better, this isn't just pop music
        anymore, this is art.' The operation's
        first unintended consequence: attempting
        to contain the Beatles makes them more
        significant.
      thread_effect:
        advances: ["operation_minuet"]
      quality_note: "the public reaction scenes are efficient"

    - beat_id: "ep1_sc10_b02"
      beat_type: [DEVELOPMENT, IRONY]
      function: >
        Philip watching the coverage, knuckles
        white. 'Cultural philosophers.' The
        phrase lands as an insult. His fear
        is specific: not that they'll cause
        riots but that they'll be taken seriously.
      thread_effect:
        advances: ["philip_obsession"]
      quality_note: >
        Philip's reaction is slightly repetitive
        of Scene 5. The montage intercutting
        dilutes both rather than deepening either.

    - beat_id: "ep1_sc10_b03"
      beat_type: [SETUP, IRONY]
      function: >
        Nigel in the surveillance van, dwarfed
        by the crowd. 'Three to four hundred
        civilians queued for Beatles merchandise.
        And they expect me to conduct a covert
        operation against this?' The operation's
        scale problem stated as self-aware comedy.
      thread_effect:
        advances: ["nigel_conscience"]
      quality_note: >
        'We're going to need a bigger bus' is
        the scene's correct closing line. The
        young boy studying the liner notes like
        a battle plan is the montage's best image.

    - beat_id: "ep1_sc10_b04"
      beat_type: [THESIS]
      function: >
        The teenager quoting 'In My Life' —
        'when did pop stars start writing
        like Shelley?' The public reception
        as the series' counter-argument to
        Philip's institutional contempt.
      thread_effect: []
      quality_note: >
        The Shelley comparison is slightly
        too neat. The coffee shop teenagers
        analyzing the album is the better
        version of this beat — more specific,
        less literary.


# ============================================================
# SCENE 11
# ============================================================
- scene_id: "ep1_sc11"
  scene_title: "Paul at the Asher Family Home — Piano"
  location: "The Asher Family Home - Attic Room (Wimpole Street)"
  characters: [Paul]
  page_range: [34, 36]

  beats:
    - beat_id: "ep1_sc11_b01"
      beat_type: [DEVELOPMENT, SETUP]
      function: >
        Paul at the piano, working on The Family
        Way theme. His fingers drift into
        Yesterday — muscle memory. He catches
        himself with a private smile and returns
        to the task. The craftsman at work.
        Establishes his relationship to ambition:
        forward-looking, professional, slightly
        self-conscious about his own gifts.
      thread_effect:
        opens: ["paul_establishment_arc"]
      quality_note: >
        The Yesterday moment is the scene's
        best idea — nostalgia briefly interrupting
        ambition, then dismissed. A miniature
        version of the whole Paul arc.


# ============================================================
# SCENE 12
# ============================================================
- scene_id: "ep1_sc12"
  scene_title: "EMI Studios — Orchestra / Paul's Film Score"
  location: "Abbey Road Studios"
  characters: [Paul, Conductor, Nigel, Clive]
  page_range: [36, 38]

  beats:
    - beat_id: "ep1_sc12_b01"
      beat_type: [DEVELOPMENT, SETUP]
      function: >
        Paul with the orchestra — 'hopeful, but
        with a bit of a northern sadness to it.
        Like a Sunday afternoon when the rain's
        just stopped.' His instinctive emotional
        precision. The quiet approval of peers
        rather than the screaming of fans.
        This is the legitimacy he's been seeking.
      thread_effect:
        advances: ["paul_establishment_arc"]
      quality_note: >
        'A Sunday afternoon when the rain's
        just stopped' is the episode's loveliest
        line and tells you everything about
        Paul's emotional intelligence.

    - beat_id: "ep1_sc12_b02"
      beat_type: [DEPLOYMENT, COMEDY, IRONY]
      function: >
        Clive as BBC acoustic consultant: Paul's
        film score is 'infiltration,' a 'pincer
        movement,' 'aesthetic co-option.' Nigel's
        single note — 'Subject P. McCartney
        composing instrumental music for a film
        score.' The gap between Clive's reading
        and Nigel's is the scene's joke.
      thread_effect:
        advances: ["clive_delusion", "nigel_conscience",
                   "paul_establishment_arc"]
      quality_note: >
        'Nigel's pen as it writes — we don't
        hear the orchestra anymore, only the
        scratch of ink turning art into evidence'
        is strong. The stage direction is earning
        itself here.

    - beat_id: "ep1_sc12_b03"
      beat_type: [IRONY, COMEDY]
      function: >
        Paul's thumbs-up to the orchestra.
        Clive: 'a clear signal. He's secured
        the asset. He's building his own
        cultural army.' Nigel: 'God help
        us all.' The misreading is now
        complete — Paul's honest pride
        converted into conspiracy.
      thread_effect:
        advances: ["clive_delusion", "nigel_conscience"]
      quality_note: >
        Nigel's 'God help us all' is the
        correct closing note for this thread.
        Quiet despair rather than comic
        outrage.


# ============================================================
# SCENE 13
# ============================================================
- scene_id: "ep1_sc13"
  scene_title: "John's Weybridge Home — Reading"
  location: "John's Weybridge Home"
  characters: [John, Cynthia, Nigel]
  page_range: [38, 42]

  beats:
    - beat_id: "ep1_sc13_b01"
      beat_type: [DEVELOPMENT, SETUP]
      function: >
        John surrounded by books — Schonfield,
        Russell, Suzuki. Reading aloud to himself:
        'the historical Jesus was a man not a god.'
        His intellectual restlessness as a spiritual
        search rather than a political one. He's
        not trying to cause trouble. He's trying
        to understand.
      thread_effect:
        advances: ["john_radicalization"]
        opens: ["cynthia_arc"]
      quality_note: >
        The books are doing character work more
        efficiently than the dialogue. Let them.
        Some of the subsequent monologuing could
        be trimmed.

    - beat_id: "ep1_sc13_b02"
      beat_type: [ESTABLISHMENT, TENSION]
      function: >
        Cynthia enters with tea. Her worry is
        genuine — she sees her husband disappearing
        into ideas she can't follow. 'Julian's
        been asking for his daddy.' The domestic
        life as the thing John is thinking his
        way out of without knowing it.
      thread_effect:
        advances: ["cynthia_arc"]
      quality_note: >
        Cynthia needs more interiority here.
        As written she's purely reactive —
        the worried wife reflecting John's
        restlessness back at him. One moment
        of her own perspective would pay
        dividends later.

    - beat_id: "ep1_sc13_b03"
      beat_type: [DEVELOPMENT, IRONY]
      function: >
        John's 'what if organized religion got
        it all wrong?' building toward 'we probably
        reach more people with our music than
        Jesus ever did.' The thought arriving
        naturally from genuine inquiry — not
        as provocation but as observation.
        Cynthia's 'just be careful, John.
        Some thoughts are dangerous to think
        out loud.'
      thread_effect:
        advances: ["john_radicalization", "john_jesus_remark"]
      quality_note: >
        Cynthia's warning is the scene's best
        line and it goes unheard. That's the
        correct dramatic note.

    - beat_id: "ep1_sc13_b04"
      beat_type: [DEPLOYMENT, IRONY]
      function: >
        Nigel outside in the sedan. Binoculars.
        'Subject questioning fundamental religious
        beliefs. Recommend escalation. Potential
        leverage identified.' The surveillance
        converting John's genuine spiritual
        inquiry into operational intelligence.
      thread_effect:
        advances: ["nigel_conscience", "john_radicalization"]
      quality_note: >
        'Day 47 — intellectual subversion
        continues.' The notebook entry as the
        scene's closing irony. We remain on
        Nigel's words rather than John's face
        — the correct choice.


# ============================================================
# SCENE 14
# ============================================================
- scene_id: "ep1_sc14"
  scene_title: "London Evening Standard — Newsroom"
  location: "London Evening Standard Office"
  characters: [Maureen Cleave, Derek Taylor, Clive]
  page_range: [42, 46]

  beats:
    - beat_id: "ep1_sc14_b01"
      beat_type: [SETUP, DEVELOPMENT]
      function: >
        Maureen proposes individual profiles.
        'Who they're becoming, not the legend —
        just the men.' Her journalistic instinct
        is exactly right and will have exactly
        the consequences Paul feared in Scene 1.
        Derek's skepticism — 'they're pop stars' —
        positions Maureen as the only person
        in the episode who sees clearly.
      thread_effect:
        opens: ["maureen_interview"]
      quality_note: >
        Maureen is the series' most underused
        character. This scene establishes her
        intelligence but she appears only once
        more. A missed opportunity for a
        recurring perspective.

    - beat_id: "ep1_sc14_b02"
      beat_type: [DEPLOYMENT, COMEDY]
      function: >
        Clive in disguise as maintenance worker.
        'PRESS MOBILIZING. COORDINATED ATTACK
        IMMINENT.' Scattering papers. The fake
        accent. His panicked exit leaving
        behind a screwdriver. The operation
        in the field as pure farce.
      thread_effect:
        advances: ["clive_delusion", "klaus_persona"]
      quality_note: >
        The screwdriver detail is perfect.
        The comedy is right but Clive is
        slightly too broad here — he works
        better when his delusion has a
        kind of internal logic.


# ============================================================
# SCENE 15
# ============================================================
- scene_id: "ep1_sc15"
  scene_title: "Brian Epstein's Office — Maureen Access Negotiation"
  location: "Brian Epstein's Office"
  characters: [Brian, Maureen]
  page_range: [46, 50]

  beats:
    - beat_id: "ep1_sc15_b01"
      beat_type: [DEVELOPMENT, TENSION]
      function: >
        Brian negotiating access with Maureen.
        His caution about John's honesty — 'his
        honesty can be utterly forthright when
        his mind is engaged.' He knows what's
        coming and cannot stop it, only manage
        the terms.
      thread_effect:
        advances: ["brian_obsolescence", "maureen_interview"]
      quality_note: >
        'Consider where those words might travel'
        is the scene's best line. Brian's
        premonition is correct and useless.

    - beat_id: "ep1_sc15_b02"
      beat_type: [REVELATION, SETUP]
      function: >
        Brian alone after Maureen exits. The
        pills from the desk drawer. The casual
        handful. Eyes closed. The London skyline.
        Everything about his private desperation
        in a single wordless gesture.
      thread_effect:
        opens: ["epstein_pills"]
      quality_note: >
        The episode's finest moment of restraint
        and its best piece of character writing.
        No dialogue. No explanation. The scene
        earns its silence completely.


# ============================================================
# SCENE 16
# ============================================================
- scene_id: "ep1_sc16"
  scene_title: "John's Weybridge Home — The Maureen Cleave Interview"
  location: "John's Weybridge Home"
  characters: [John, Maureen, Nigel, Clive]
  page_range: [50, 57]

  beats:
    - beat_id: "ep1_sc16_b01"
      beat_type: [DEVELOPMENT, SETUP]
      function: >
        The interview atmosphere established —
        intimate, conversational, two intelligent
        people thinking aloud. John's books as
        character exposition. 'Why can't you
        make music and think at the same time?'
        The question the series is built around.
      thread_effect:
        advances: ["john_radicalization", "maureen_interview"]
      quality_note: "efficient establishment of the scene's register"

    - beat_id: "ep1_sc16_b02"
      beat_type: [DEVELOPMENT, THESIS]
      function: >
        John on Christianity — 'most of what
        we're taught to believe is just stories.
        Useful stories, maybe, but stories.'
        Not hostile, genuinely curious. The
        intellectual honesty that will be
        converted into provocation by the
        machinery of publication.
      thread_effect:
        advances: ["john_radicalization"]
      quality_note: >
        The thought process is correctly
        rendered as exploratory rather than
        declarative. John isn't writing a
        manifesto. He's thinking.

    - beat_id: "ep1_sc16_b03"
      beat_type: [CLIMAX, SETUP, IRONY]
      function: >
        'Christianity will go. It will vanish
        and shrink... We're more popular than
        Jesus now. I don't know which will go
        first, rock 'n' roll or Christianity.'
        The words delivered without drama.
        Maureen writes it down like any other
        observation. The episode's climactic
        beat arriving quietly.
      thread_effect:
        closes: ["john_jesus_remark"]
        opens: ["jesus_backlash (dormant until Episode 3)"]
      quality_note: >
        The restraint here is the whole show's
        method demonstrated perfectly. The
        stage direction — 'only later will we
        understand this moment as evidence' —
        is one of the few explanatory lines
        that earns itself because it's telling
        us about structure rather than meaning.

    - beat_id: "ep1_sc16_b04"
      beat_type: [IRONY, COMEDY]
      function: >
        Outside: Clive's 'twenty-three minutes
        straight, this is clearly a propaganda
        session.' Nigel: 'it's called an
        interview, Clive.' Clive: 'the gestures!
        The leaning forward! Classic ideological
        indoctrination!' Nigel: 'or he's talking.'
      thread_effect:
        advances: ["clive_delusion", "nigel_conscience"]
      quality_note: >
        'Or he's talking' is the episode's
        funniest line. The deadpan is perfect.

    - beat_id: "ep1_sc16_b05"
      beat_type: [DEVELOPMENT, THESIS]
      function: >
        John on fame's responsibility: 'it makes
        it urgent. When millions are listening
        you can't waste it. Not to preach. Just
        to be honest.' The most direct statement
        of his artistic purpose. The series'
        counter-argument to the operation.
      thread_effect:
        advances: ["john_radicalization"]
      quality_note: >
        The vulnerability here — 'scary thought'
        followed by shared laughter — is the
        scene's most human moment. Correctly
        placed at the end of the interview
        before the recorder clicks off.

    - beat_id: "ep1_sc16_b06"
      beat_type: [PAYOFF, IRONY]
      function: >
        Maureen walks to her car. Nigel in the
        van: 'sometimes a conversation is just
        a conversation.' He starts the van.
        The house remains. The Alice in
        Wonderland on the shelf — battered,
        well-loved, tucked between the dense
        paperbacks. The episode's closing image.
      thread_effect:
        advances: ["nigel_conscience"]
      quality_note: >
        The Alice image is the episode's best
        closing choice. A book about a girl
        who fell into a world that made no
        sense, loved by a man trying to make
        sense of the world he's in. Don't
        explain it. The script doesn't.
        That's correct.

total_beats: 47
beats_by_type:
  ESTABLISHMENT: 16
  SETUP: 14
  DEVELOPMENT: 12
  IRONY: 10
  COMEDY: 8
  THESIS: 4
  DEPLOYMENT: 5
  CONCEPTION: 3
  ESCALATION: 2
  PAYOFF: 3
  TENSION: 3
  ELEGY: 1
  CLIMAX: 1
  COUNTER: 1
  REVELATION: 1

threads_opened: 16
threads_advanced: 18
threads_closed: 1

diagnostic_notes:
  - >
    High ESTABLISHMENT count is correct for a pilot.
    The concern is whether enough of these are doing
    double duty — ESTABLISHMENT + SETUP — rather than
    just placing characters.
  - >
    Only one CLIMAX beat, correctly placed at the
    Jesus remark. The episode knows where its peak is.
  - >
    Low PAYOFF count (3) is correct for Episode 1
    — most threads are opening not closing. But the
    three payoffs that exist (Ringo's medal toast,
    the photograph, the Jesus remark landing) are
    all doing real work.
  - >
    ELEGY count of 1 suggests the show hasn't yet
    found its elegiac register. It will. Episodes
    2 and 4 are where that tone takes hold.
  - >
    The one thread closed — john_jesus_remark —
    immediately reopens as jesus_backlash. Correct.
    The episode ends with a fuse lit, not a bomb
    detonated.