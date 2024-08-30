<script>
    import { Sheet, SheetTrigger } from "@/components/ui/sheet";
    import SheetContent from "@/components/ui/sheet/sheet-content.svelte";
    import Icon from "@iconify/svelte";

</script>

<header class="flex w-full justify-between items-center px-20 py-4 bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 text-white">
    <Sheet>
        <SheetTrigger class="cursor-pointer rounded-full border-2 p-1 border-transparent hover:border-white transition-all">
            <Icon icon="mingcute:menu-line" class="text-[32px]" />
        </SheetTrigger>
        <SheetContent class="w-[300px] bg-white border-r-1 border-r-black" side="left">
            <ul class="flex flex-col items-center space-y-8 [&>li]:py-2">
                <li>
                    <a href="/" class="underline hover:text-neutral-500 transition-all">voltar ao início</a>
                </li>
            </ul>
        </SheetContent>
    </Sheet>
    <h1 class="text-2xl font-bold">Área de Chat</h1>
</header>