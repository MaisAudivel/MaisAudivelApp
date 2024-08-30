<script lang="ts">
    import { Button } from "@/components/ui/button";
    import { Card, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
    import CardContent from "@/components/ui/card/card-content.svelte";
    import CardHeader from "@/components/ui/card/card-header.svelte";
    import { Chart, Svg, Pie } from "layerchart";

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
        <Button variant="outline" class="outline-blue-800 text-blue-800 text-xl">Acessar</Button>
    </CardFooter>
</Card>