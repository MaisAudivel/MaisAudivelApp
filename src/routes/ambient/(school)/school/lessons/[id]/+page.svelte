<script lang="ts">
    import { page } from "$app/stores";
</script>

{ #if $page.params.id === "1" }
<section
data-markdown
data-separator="---"
>
    <textarea data-template>
        ## slide 1 
        please add me another slide

        ---
        ## slide 2
        I _need_ it 

        ---
        ## slide 3
    </textarea>
</section>
{ /if }