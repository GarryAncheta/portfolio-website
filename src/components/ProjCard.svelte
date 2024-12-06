<script lang="ts">

    const { image = null, imageDescription = "", bodyHeader, bodyContent, footer, link = "./" } = $props();
</script>

<a href={link} target="_blank" class="group lg:card grid grid-cols-6 col-auto lg:card-hover lg:variant-soft bg-transparent lg:bg-transparent hover:variant-glass-primary dark:bg-transparent dark:hover:variant-glass-primary" aria-label="Experience">
    <header class="lg:card-header text-sm col-start-1 col-span-2 lg:mt-3">
        {#if !image.isNull }
            <img class="badge variant-ringed-primary mt-3" src={image} alt={imageDescription}/>
        {/if}
    </header>
    <div class="col-start-3 col-span-4 lg:mt-2">
        <section class="p-4"> 
            <h1 class="text-lg text-primary-500">
                { bodyHeader }
                <svg class="inline-block transform group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h10v10M7 17L17 7" />
                </svg>
            </h1>
            <p class="text-sm mt-2">
                { bodyContent }
            </p>
        </section>
        <footer class="lg:card-footer mt-2 flex flex-wrap gap-2">
            {#each footer as currFooter}
                <span class="btn tag variant-glass-primary dark:variant-glass-primary text-xs">
                    {currFooter}
                </span>
            {/each}
        </footer>
    </div>
</a>

<style>
    
</style>