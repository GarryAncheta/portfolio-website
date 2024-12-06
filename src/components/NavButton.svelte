<script>
    const { content } = $props();
</script>

<a aria-label="Projects" href="#projects">
    <span class="text-2xl 
            relative 
            active:origin-bottom-left 
            active:scale-x-100 
            after:absolute 
            after:bg-primary-500
            after:bottom-0 
            after:left-0 
            after:h-px 
            after:w-full 
            after:origin-bottom-right 
            after:scale-x-0 
            hover:after:origin-bottom-left 
            hover:after:scale-x-100 
            after:transition-transform 
            after:ease-in-out 
            after:duration-300"
    >
        {content}
    </span>
</a>