<script>
    import { page } from "$app/stores";
</script>

<div class="flex flex-col w-full h-full min-h-screen justify-center items-center text-center space-y-6 text-gray-600">
    <div class="space-y-2 mx-10">
        <h1 class="text-3xl font-semibold">Ops!</h1>
        <h2 class="text-xl font-normal">Algum erro ocorreu durante o carregamento da página...</h2>
    </div>

    <p class="text-lg max-w-[45%]">Status {$page.status}: {$page.error?.message}</p>
</div>