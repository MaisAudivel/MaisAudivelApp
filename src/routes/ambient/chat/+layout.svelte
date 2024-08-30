<script>
    import ChatSectionHeader from "./ChatSectionHeader.svelte";
</script>

<div class="flex flex-col w-full h-full min-h-screen overflow-scroll">
    <ChatSectionHeader/>
    <slot></slot>
</div>