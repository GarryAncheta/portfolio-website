<script>
    const { content, ariaLabel, link } = $props();
</script>


<a  class="text-primary-500
        relative 
        focus:origin-bottom-left 
        focus:scale-x-100 
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
        after:duration-300
        dark:text-primary-300
        dark:after:bg-primary-500" 
    target="_blank" 
    aria-label={ariaLabel} 
    href={link}
>
    { content }
</a>

