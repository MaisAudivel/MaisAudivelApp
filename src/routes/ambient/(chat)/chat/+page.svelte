<script lang="ts">
    import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

    import { fade } from "svelte/transition";
    import { quintIn, quintOut } from "svelte/easing";
    import { Jumper } from "svelte-loading-spinners";

    import ChatSectionHeader from "./ChatSectionHeader.svelte";
    import Icon from "@iconify/svelte";
    import Carousel from "@/components/ui/carousel/carousel.svelte";
    import CarouselContent from "@/components/ui/carousel/carousel-content.svelte";
    import CarouselItem from "@/components/ui/carousel/carousel-item.svelte";
    import type { CarouselAPI } from "@/components/ui/carousel/context";

    let registerDialogCarouselApi: CarouselAPI;
    let registerDialogTrigger: boolean = false;

    let passwordRecoveryDialogCarouselApi: CarouselAPI;
    let passwordRecoveryDialogTrigger: boolean = false;
</script>

<ChatSectionHeader/>
<div class="flex flex-col p-4 mx-auto my-28 items-center gap-y-6 max-w-[500px]">
    <h1 class="text-xl font-semibold">Bem-vindo ao nosso Bate-Papo!</h1>
    <p class="text-center mx-auto">
        Aqui você pode conversar e interagir com outras pessoas de forma
        genuinamente inclusiva e prática. Lembre-se de sempre manter a
        ordem e o respeito!
    </p>

    <Icon icon="et:chat" class="my-5 font-extrabold text-[64px]" />

    <Dialog>
        <DialogTrigger>
            <button class="bg-slate-900 hover:bg-slate-700 text-white text-xl font-semibold max-w-[250px] rounded-xl py-3 px-6 transition-colors">
                Acesse aqui nosso chat global!
            </button>
        </DialogTrigger>
        <DialogContent class="shadow-md bg-white border border-black">
            <DialogHeader>
                <DialogTitle>Entrar no chat</DialogTitle>
                <DialogDescription>Digite seu apelido para entrar no chat</DialogDescription>
            </DialogHeader>
            <form class="space-y-6">
                <fieldset>
                    <legend>Apelido</legend>
                    <input type="text" name="user-alias" class="text-lg px-4 py-2 rounded-xl border" />
                </fieldset>
                <fieldset>
                    <legend>Senha</legend>
                    <input type="password" name="user-password" class="text-lg px-4 py-2 rounded-xl border" />
                </fieldset>
                <div class="flex w-full space-x-6 items-center cursor-pointer">
                    <DialogClose>
                        <button 
                        type="submit" 
                        class="text-lg bg-slate-950 hover:bg-slate-900 text-white font-semibold rounded-xl px-4 py-2" 
                        >
                            Entrar
                        </button>
                    </DialogClose>
                    <DialogClose on:click={() => registerDialogTrigger = true}>
                        <p class="text-slate-950 hover:text-slate-800 text-sm underline">Registrar-se no chat</p>
                    </DialogClose>
                    <DialogClose on:click={() => passwordRecoveryDialogTrigger = true}>
                        <p class="text-slate-950 hover:text-slate-800 text-sm underline">Recuperar senha</p>
                    </DialogClose>
                </div>
            </form>
        </DialogContent>
    </Dialog>

    <!-- Register account dialog -->

    <Dialog open={registerDialogTrigger}>
        <DialogContent class="bg-white shadow-md">
            <Carousel bind:api={registerDialogCarouselApi} opts={{watchDrag: false}}>
                <CarouselContent>
                    <CarouselItem>
                        <DialogHeader>
                            <DialogTitle>Registrar Conta</DialogTitle>
                            <DialogDescription>registre sua conta para continuar</DialogDescription>
                        </DialogHeader>
                        <form class="space-y-6">
                            <fieldset>
                                <legend>Apelido</legend>
                                <input type="text" name="user-alias" class="text-lg px-4 py-2 rounded-xl border" />
                            </fieldset>
                            <fieldset>
                                <legend>Email</legend>
                                <input type="email" name="user-email" class="text-lg px-4 py-2 rounded-xl border" />
                            </fieldset>
                            <fieldset>
                                <legend>Senha</legend>
                                <input type="password" name="user-password" class="text-lg px-4 py-2 rounded-xl border" />
                            </fieldset>
                            <div class="flex w-full space-x-6 items-center cursor-pointer">
                                <button 
                                type="submit" 
                                on:click={() => registerDialogCarouselApi.scrollNext()}
                                class="text-lg bg-slate-950 hover:bg-slate-900 text-white font-semibold rounded-xl px-4 py-2"
                                >
                                    Registrar
                                </button>
                            </div>
                        </form>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="flex flex-col w-full h-full items-center space-y-6">
                            <Jumper size="40" unit="px" color="#3399EF" duration="1s" />
                            <p in:fade={{duration: 1, easing: quintIn}} out:fade={{duration: 1, easing: quintOut}}>
                                Registrando sua conta...
                            </p>
                        </div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </DialogContent>
    </Dialog>

    <!-- Password recovery dialog -->

    <Dialog open={passwordRecoveryDialogTrigger}>
        <DialogContent class="bg-white shadow-md">
            <DialogHeader>
                <DialogTitle>Recuperar Senha</DialogTitle>
                <DialogDescription>Vamos recuperar sua senha rapidamente</DialogDescription>
            </DialogHeader>
            <Carousel bind:api={passwordRecoveryDialogCarouselApi} opts={{watchDrag: false}}>
                <CarouselContent>
                    <form>
                        <CarouselItem>
                            <fieldset>
                                <legend>Digite seu email</legend>
                                <input type="email" name="user-email" class="text-lg px-4 py-2 rounded-xl border" />
                            </fieldset>
                        </CarouselItem>
                        <CarouselItem>
                            <fieldset>
                                <legend>Nova senha</legend>
                                <input type="password" name="user-new-password" class="text-lg px-4 py-2 rounded-xl border" />
                            </fieldset>
                        </CarouselItem>
                    </form>
                </CarouselContent>
            </Carousel>
        </DialogContent>
    </Dialog>
</div>