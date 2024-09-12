<script lang="ts">
    import { page } from "$app/stores";
    import { PdfViewer } from "svelte-pdf-simple";
</script>

<PdfViewer props={{
    url: $page.params.url
}} />