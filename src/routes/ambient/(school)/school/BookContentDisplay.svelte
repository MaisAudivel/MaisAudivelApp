<script lang="ts">
    import CarouselContent from "@/components/ui/carousel/carousel-content.svelte";
    import CarouselItem from "@/components/ui/carousel/carousel-item.svelte";
    import Carousel from "@/components/ui/carousel/carousel.svelte";

    type BookContentData = {
        title: string;
        author: string;
        contentType: "website" | "pdf";
        url: string;
    };

    const bookContents: BookContentData[] = [
        {
            title: "Deficiência Auditiva",
            author: "Ministério da Educação",
            contentType: "pdf",
            url: "http://portal.mec.gov.br/seed/arquivos/pdf/deficienciaauditiva.pdf"
        },
        {
            title: "Perda Auditiva",
            author: "Tua Saúde",
            contentType: "website",
            url: "https://www.tuasaude.com/perda-auditiva/"
        },
        {
            title: "Deficiência Auditiva: Causas, Tipos e Diagnósticos",
            author: "Summit Saúde e Bem-Estar",
            contentType: "website",
            url: "https://summitsaude.estadao.com.br/desafios-no-brasil/deficiencia-auditiva-causas-tipos-e-diagnosticos-2/"
        }
    ];

</script>

<Carousel class="flex w-full justify-center items-center px-20 mt-10">
    <CarouselContent class="flex w-full items-center gap-x-4">
        { #each bookContents as book }
        <CarouselItem class="flex flex-col gap-y-2 sm:basis-full lg:basis-1/3 w-[300px] h-[200px] border shadow-md rounded-xl px-6 py-2">
            <h1 class="text-xl font-semibold">{book.title.slice(0, 30)}...</h1>
            <h2 class="text-lg">{book.author}</h2>
            <a 
            target={book.contentType === "pdf" ? "_self" : "_blank"} 
            href={book.contentType === "pdf" ? `/ambient/school/read/${book.url}` : book.url}
            class="text-sm text-center mt-auto px-6 py-2 border border-sky-800 text-sky-800 bg-transparent rounded-lg hover:bg-sky-800 hover:text-white transition-colors"
            >
                Realizar Leitura
            </a>
        </CarouselItem>
        { /each }
    </CarouselContent>
</Carousel>