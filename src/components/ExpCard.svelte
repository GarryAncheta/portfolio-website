<script lang="ts">
    import Icon from "@iconify/svelte";

    const { 
            timeRange = "July 2022 - Present", 
            bodyHeader = "Hello World", 
            bodyContent = "This is the body", 
            footer = ["This is the footer"],
            link = "./"
        } : { timeRange: string, bodyHeader: string, bodyContent: string, footer: Array<string>, link: string} = $props();
</script>

<a target="_target" href={link} class="group grid grid-cols-6 col-auto lg:card lg:card-hover lg:variant-soft lg:bg-transparent hover:variant-glass-primary dark:bg-transparent dark:hover:variant-glass-surface" aria-label="Experience">
    <header class="inline-block text-sm col-start-1 col-span-2 mt-4 justify-self-center lg:mt-3 lg:card-header">{ timeRange }</header>
    <div class="col-start-3 col-span-4 lg:mt-2">
        <section class="p-4"> 
            <h1 class="text-md text-primary-500 dark:text-primary-300">
                { bodyHeader }
                <svg class="inline-block transform group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h10v10M7 17L17 7" />
                </svg>
            </h1>
            <p class="text-sm mt-2">
                { bodyContent }
            </p>
        </section>
        <footer class="mt-2 flex flex-wrap gap-2 lg:card-footer">
            {#each footer as currFooter}
                <span class="btn tag variant-glass-primary dark:variant-glass-primary text-xs">{currFooter}</span>
            {/each}
        </footer>
    </div>
</a>

<style>
    .tag {
        pointer-events: none;
    }
</style>