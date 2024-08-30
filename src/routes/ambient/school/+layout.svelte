<script>
    import SchoolSectionHeader from "./SchoolSectionHeader.svelte";
</script>

<div class="flex flex-col w-full h-full min-h-screen overflow-scroll">
    <SchoolSectionHeader/>
    <slot></slot>
</div>