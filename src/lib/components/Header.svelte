<script>
    import { Select, SelectContent, SelectTrigger } from "./ui/select";
    import SelectItem from "./ui/select/select-item.svelte";
    import Icon from "@iconify/svelte";

    import { Sheet, SheetTrigger } from "@/components/ui/sheet";
    import SheetContent from "@/components/ui/sheet/sheet-content.svelte";

</script>
<header class="flex w-full justify-between items-center px-10 lg:px-20 py-4 bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 text-white">
    <div class="flex gap-x-4 items-center">
        <Icon icon="arcticons:podlisten" class="text-[52px]  lg:text-[64px] fill-white font-bold" />
        <h1 class="text-3xl font-bold">Mais Audível</h1>
    </div>

    <nav class="hidden lg:flex gap-x-6 justify-evenly items-center [&>a]:underline [&>a]:text-lg [&>a]:font-semibold">
        <Select>
            <SelectTrigger class="border-none outline-none p-0">
                <p class="text-lg underline font-semibold">Nossos Ambientes<p>
            </SelectTrigger>
            <SelectContent class="bg-white">
                <SelectItem value="chat-ambient-link">
                    <a href="/ambient/chat">Área de Chat</a>
                </SelectItem>
                <SelectItem value="educative-ambient-link">
                    <a href="/ambient/school">Área Educativa</a>
                </SelectItem>
                <SelectItem value="quiz-ambient-link">
                    <a href="/ambient/quiz">Área de Quiz</a>
                </SelectItem>
            </SelectContent>
        </Select>
    </nav>

    <div class="sm:block lg:hidden">
        <Sheet>
            <SheetTrigger class="cursor-pointer rounded-full border-2 p-1 border-transparent hover:border-white transition-all">
                <Icon icon="mingcute:menu-line" class="text-[32px]" />
            </SheetTrigger>
            <SheetContent class="w-[300px] bg-white border-r-1 border-r-black" side="right">
                <ul class="flex flex-col items-center space-y-8 [&>li]:py-2">
                    <li>
                        <a href="/ambient/chat" class="underline hover:text-neutral-500 transition-all">Área de Chat</a>
                    </li>
                    <li>
                        <a href="/ambient/school" class="underline hover:text-neutral-500 transition-all">Área Educative</a>
                    </li>
                    <li>
                        <a href="/ambient/quiz" class="underline hover:text-neutral-500 transition-all">Área de Quiz</a>
                    </li>
                </ul>
            </SheetContent>
        </Sheet>
    </div>
</header>
