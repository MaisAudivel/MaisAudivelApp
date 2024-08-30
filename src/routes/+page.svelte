<script>

    import Header from "@/components/Header.svelte";
    import Icon from "@iconify/svelte";

</script>
<Header/>
<div class="flex flex-col items-center text-center w-full px-5 py-7 my-10 space-y-6">
    <div class="space-y-3 w-[500px] lg:w-[600px]">
        <h1 class="text-3xl lg:text-4xl font-bold">Seja bem-vindo(a) à nossa plataforma!</h1>
        <h2 class="text-xl lg:text-2xl font-normal">Ficamos felizes em receber você aqui 😁</h2>
    </div>
    <p class="text-sm lg:text-lg w-[400px] lg:w-[600px]">
        Nosso site é mais do que um simples website: É uma micro-plataforma focada na
        conscientização sobre deficiência auditiva e na acessibilidade de comunicação
        entre pessoas surdas.
    </p>
    <img src="/talking01.png" alt="" class="object-contain w-[600px] h-[400px]" />
</div>

<div class="grid grid-flow-row-dense lg:grid-flow-col-dense grid-rows-2 lg:grid-cols-2 lg:grid-rows-none w-full px-5 py-7 my-10">
    <div class="mx-auto">
        <img src="/surdo.jpg" alt="" class="object-contain w-[400px] h-[200px] lg:w-[500px] lg:h-[300px] rounded-3xl" />
    </div>
    <div class="space-y-3 w-[400px] lg:w-[500px] mx-auto text-center lg:text-justify">
        <h1 class="text-xl lg:text-2xl font-semibold">Nós escutamos você 🦻</h1>
        <p class="text-sm lg:text-lg font-normal">
            O programa "Mais Audível" foi criado com recursos de maior acessibilidade entre
            deficientes auditivos e outros usuários do site. Temos recursos de bate-papo
            online, exercícios e conteúdos educativos para ampliar a visão e o
            aprendizado de nossos visitantes sobre deficiência auditiva. Além disso tudo,
            nós temos uma <b>área de feedback constantemente ativa</b> para ouvir as
            opiniões de nossos usuários, sempre melhorando nosso sistema para atender
            melhor as necessidades do nosso público.
        </p>
    </div>
</div>

<div class="grid grid-flow-row-dense lg:grid-flow-col-dense grid-rows-2 lg:grid-cols-2  lg:grid-rows-none w-full px-5 py-7 my-10 bg-gray-300">
    <div class="space-y-3 w-[400px] lg:w-[500px] mx-auto text-center lg:text-justify">
        <h1 class="text-xl lg:text-2xl font-semibold">Prezamos pela comunicação 🤙👆</h1>
        <p class="text-sm lg:text-lg font-normal">
            Nós acreditamos que um mundo mais comunicativo se torna um
            mundo cheio de boas transformações. A boa comunicação é a
            base para que as tarefas do cotidiano possam fluir com mais
            leveza e que os problemas sociais cotidianos sejam resolvidos
            com mais facilidade. Isso considera políticas públicas de
            inclusão e acessibilidade trabalhando em união com a
            cooperatividade das pessoas.
        </p>
    </div>
    <div class="mx-auto">
        <img src="/libras.jpeg" alt="" class="object-contain w-[400px] h-[200px] lg:w-[500px] lg:h-[300px] rounded-3xl" />
    </div>
</div>

<div class="flex flex-col items-center text-center w-full px-5 py-7 my-10">
    <div class="space-y-3 w-[400px] lg:w-[600px]">
        <h1 class="text-2xl font-semibold">Nossos Pilares</h1>
        <p class="text-[0.95rem] font-normal">
            Diante do desenvolvimento do projeto Mais Audível, nós tomamos por fundamento
            alguns pilares muito importantes para o cumprimento do objetivo de nossa
            plataforma.
        </p>
    </div>
    <div class="flex flex-col lg:flex-row w-full justify-around items-center mt-24 [&>div]:mb-10 lg:[&>div]:mb-0 [&>div]:space-y-5 [&>div]:w-[300px] [&>div]:text-center">
        <div class="mx-auto [&>*]:mx-auto">
            <h1 class="text-xl font-semibold">Ajudar</h1>
            <Icon icon="mdi:help-outline" class="text-[64px] text-black" />
            <p class="text-[10pt]">
                A colaboração entre os membros e visitantes da nossa plataforma é essencial para
                a construção de um ambiente saudável.
            </p>
        </div>
        <div class="mx-auto [&>*]:mx-auto">
            <h1 class="text-xl font-semibold">Interagir</h1>
            <Icon icon="clarity:talk-bubbles-outline-badged" class="text-[64px] text-black" />
            <p class="text-[10pt]">
                A boa comunicação e o respeito entre os usuários da nossa plataforma é nosso principal foco,
                sendo o ponto de equilíbrio na interação entre nossos usuários.
            </p>
        </div>
        <div class="mx-auto [&>*]:mx-auto">
            <h1 class="text-xl font-semibold">Opinar</h1>
            <Icon icon="ri:user-voice-line" class="text-[64px] text-black" />
            <p class="text-[10pt]">
                A sua opinião é válida e importante, precisamos dela para continuar sempre entregando o nosso
                melhor para nossos usuários.
            </p>
        </div>
    </div>
</div>