<script lang="ts">
    import Reveal from "reveal.js";
    import RevealMarkdown from "reveal.js/plugin/markdown/markdown";
    import "reveal.js/dist/reveal.css";
    import "reveal.js/dist/theme/black.css";

    Reveal.initialize({
        plugins: [RevealMarkdown]
    });

</script>

<div class="reveal">
    <div class="slides">
        <slot></slot>
    </div>
</div>