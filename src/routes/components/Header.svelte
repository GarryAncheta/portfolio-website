<script lang="ts">
    import Icon from '@iconify/svelte';

    
    import { LightSwitch } from '@skeletonlabs/skeleton';
</script>

<header class="lg:sticky lg:top-0 lg:justify-between lg:flex lg:flex-col lg:w-1/2 lg:py-24 lg:min-h-screen self-start">
    <div>
        <a href="./"><h1 class="text-5xl text-primary-500 dark:text-primary-300">Garry Ancheta</h1></a>
        <h2 class="text-3xl mt-3 text-primary-500 dark:text-primary-300">Software Engineer</h2>
        <h3 class="text-xl mt-4">Ensuring CarMax associates get their well-earned commissions, one line of code at a time.</h3>
        <nav class="nav hidden lg:block">
            <ul class="mt-16 w-max">
                <li class="my-2">
                    <a href="#about" aria-label="About">
                        <span 
                            class="text-2xl 
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
                            dark:after:bg-primary-300">
                            About
                        </span>
                    </a>
                </li>
                <li class="my-2">
                    <a aria-label="Experience" href="#experience">
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
                            after:duration-300
                            dark:after:bg-primary-300">
                            Experience
                        </span>
                    </a>
                </li>
                <li class="my-2">
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
                            after:duration-300
                            dark:after:bg-primary-300"
                        >
                            Projects
                        </span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>

    <div class="grid grid-cols-3">
        <ul class="gap-2 text-2xl col-start-1 lg:gap-2 mt-8 flex items-center lg:text-2xl">
            <li>
                <a href="https://www.linkedin.com/in/garryancheta/" target="_blank" aria-label="LinkedIn profile link">
                    <Icon class="hover:text-primary-500 dark:hover:text-primary-300" icon="ant-design:linkedin-filled" height="32px" />
                </a>
            </li>
            <li>
                <a href="https://github.com/GarryAncheta" target="_blank" aria-label="Github profile link">
                   <Icon class="hover:text-primary-500 dark:hover:text-primary-300" icon="ant-design:github-filled" height="32px" />
                </a>
            </li>
        </ul>

        <button class="btn col-start-3 mt-8 items-center">
            <LightSwitch class="bg-primary-500 dark:bg-primary-300" />
        </button>
    </div>
</header>