<script lang="ts">
    import { Card, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
    import CardContent from "@/components/ui/card/card-content.svelte";
    import CardHeader from "@/components/ui/card/card-header.svelte";

    export let classTitle: string;
    export let classOrder: number;
    export let classProgress: number;
</script>

<Card class="shadow-md">
    <CardHeader>
        <CardTitle>Aula {classOrder}</CardTitle>
        <CardDescription>{classTitle}</CardDescription>
    </CardHeader>
    <CardContent class="p-4">
        <div class="m-auto">
           
        </div>
    </CardContent>
    <CardFooter class="flex w-full px-6 py-4 gap-x-4 justify-center items-center">
        <a 
        href={`/ambient/school/lessons/${classOrder}`}
        class="border border-blue-800 text-blue-800 text-xl px-3 py-2" 
        >
            Acessar
        </a>
    </CardFooter>
</Card>