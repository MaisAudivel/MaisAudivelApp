<script lang="ts">
    import CarouselContent from "@/components/ui/carousel/carousel-content.svelte";
    import CarouselItem from "@/components/ui/carousel/carousel-item.svelte";
    import CarouselNext from "@/components/ui/carousel/carousel-next.svelte";
    import CarouselPrevious from "@/components/ui/carousel/carousel-previous.svelte";
    import Carousel from "@/components/ui/carousel/carousel.svelte";
    import ClassContentCard from "./ClassContentCard.svelte";

    type VideoData = {
        path: string;
        title: string;
    };

    const videoList: VideoData[] = [
        {
            path: "/video01.mp4",
            title: "Alfabeto em libras"
        },
        {
            path: "/video02.mp4",
            title: "Cumprimentos em libras"
        },
        {
            path: "/video03.mp4",
            title: "Números em libras"
        },
        {
            path: "/video04.mp4",
            title: "Diálogo em libras"
        },
    ];

</script>

<div class="flex flex-col w-full px-10 py-5">
    <div>
        <h1 class="text-3xl font-bold">Vídeos Educativos</h1>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-3 w-full mx-auto my-10">
            {#each videoList as videoData}
                <div class="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] px-2 rounded-xl">
                    <video src={videoData.path} controls class="w-full h-[200px]">
                        <track kind="captions" />
                    </video>
                    <hr class="border-black"/>
                    <h1 class="text-lg font-semibold">{videoData.title}</h1>
                </div>
            {/each}
        </div>
    </div>
</div>

<div class="flex flex-col w-full px-10 py-5">
    <div>
        <h1 class="text-3xl font-bold">Maratona de Conteúdos</h1>
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

<div></div>