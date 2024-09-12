<script lang="ts">
    import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Icon from "@iconify/svelte";
</script>

<div class="flex flex-col-reverse md:w-[500px] h-[500px] m-auto bg-white shadow-md rounded-xl">
    <div class="flex w-full items-center space-x-4 px-10 py-2 border-t border-t-zinc-500">
        <button class="bg-transparent border-none text-[32px] text-zinc-600">
            <Icon icon="fluent-mdl2:emoji-2" />
        </button>
        <textarea class="bg-zinc-200 rounded-xl w-[350px] h-[40px] px-4 py-2 text-[10pt]" />
        <button class="bg-transparent border-none text-[32px] text-zinc-600">
            <Icon icon="material-symbols-light:send-outline" />
        </button>
    </div>
    <div class="flex flex-1 flex-col w-full h-full px-6 py-4">

    </div>
    <div class="flex w-full justify-between items-center px-8 py-2 border-b border-b-zinc-500">
        <div class="flex items-center space-x-4">
            <Dialog>
                <DialogTrigger>
                    <button class="rounded-full w-fit h-fit hover:bg-zinc-200 transition-colors">
                        <Icon icon="mdi:exit-run" class="text-[32px] p-1" />
                    </button>
                </DialogTrigger>
                <DialogContent class="max-w-[400px]">
                    <DialogHeader>
                        <DialogTitle>Sair do chat?</DialogTitle>
                        <DialogDescription>Você irá se desconectar do chat e perderá as conversas.</DialogDescription>
                    </DialogHeader>
                    <div class="flex w-full items-center space-x-4">
                        <DialogClose>
                            <a href="/ambient/chat" class="bg-slate-950 text-white font-semibold text-lg rounded-xl px-4 py-2">
                                Sair
                            </a>
                        </DialogClose>
                        <DialogClose>
                            <button class="bg-transparent text-slate-950 font-semibold text-lg border border-slate-950 rounded-xl px-4 py-2">
                                Ficar
                            </button>
                        </DialogClose>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    </div>
</div>