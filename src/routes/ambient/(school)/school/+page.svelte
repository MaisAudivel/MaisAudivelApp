<script lang="ts">
    import CarouselContent from "@/components/ui/carousel/carousel-content.svelte";
    import CarouselItem from "@/components/ui/carousel/carousel-item.svelte";
    import CarouselNext from "@/components/ui/carousel/carousel-next.svelte";
    import CarouselPrevious from "@/components/ui/carousel/carousel-previous.svelte";
    import Carousel from "@/components/ui/carousel/carousel.svelte";
    import ClassContentCard from "./ClassContentCard.svelte";
    
    import SchoolSectionHeader from "./SchoolSectionHeader.svelte";
    import type { PageServerData } from "./$types";
    import BookContentDisplay from "./BookContentDisplay.svelte";

    export let data: PageServerData;

</script>

<SchoolSectionHeader/>
<div class="flex flex-col w-full px-10 py-5">
    <div>
        <h1 class="sm:text-2xl lg:text-3xl font-bold">Vídeos Educativos</h1>
        <Carousel class="flex w-full justify-center items-center px-20 mt-10">
            <CarouselContent class="flex w-full items-center gap-x-4">
                {#each data.videoList as videoData}
                    <CarouselItem class="flex flex-col gap-y-2 sm:basis-full lg:basis-1/3 w-[300px] h-[200px] rounded-xl px-6 py-2">
                        <video src={videoData.path} controls class="w-full h-[200px]">
                            <track kind="captions" />
                        </video>
                        <hr class="border-black"/>
                        <h1 class="text-lg font-semibold">{videoData.title}</h1>
                    </CarouselItem>
                {/each}
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
        </Carousel>
    </div>
</div>

<div class="flex flex-col w-full px-10 py-5">
    <div>
        <h1 class="sm:text-2xl lg:text-3xl font-bold">Maratona de Conteúdos</h1>
        <Carousel opts={{align: "center"}} class="flex w-full max-w-fit justify-center items-center mt-10 mx-auto">
            <CarouselContent>
                <CarouselItem class="w-[100px] lg:w-[150px]" id="item-1">
                    <ClassContentCard classOrder={1} classProgress={60} classTitle="Introdução sobre deficiência auditiva" />
                </CarouselItem>
                <CarouselItem class="w-[100px] lg:w-[150px]" id="item-2">
                    <ClassContentCard classOrder={2} classProgress={25} classTitle="A segurança dos ouvidos" />
                </CarouselItem>
                <CarouselItem class="w-[100px] lg:w-[150px]" id="item-3">
                    <ClassContentCard classOrder={3} classProgress={10} classTitle="Introdução sobre libras" />
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
        </Carousel>
    </div>
</div>

<div class="flex flex-col w-full px-10 py-5 mb-20">
    <div>
        <h1 class="sm:text-2xl lg:text-3xl font-bold">Leitura e Informação</h1>
        <BookContentDisplay/>
    </div>
</div>