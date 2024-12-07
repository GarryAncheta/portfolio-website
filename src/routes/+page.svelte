<script>
// @ts-nocheck

    import { getModeAutoPrefers, modeCurrent } from "@skeletonlabs/skeleton";
    import Body from "./components/Body.svelte";
    import Header from "./components/Header.svelte";
    import FlickeringGrid from "./components/FlickeringGrid.svelte";


    const changeColor = () => {

        if( $modeCurrent ) {
            return "#60d7ab";
        }

        return "#1d7655";
    }
    
</script>

{#key $modeCurrent}
    <FlickeringGrid 
        class="fixed min-w-screen min-h-screen -z-10" 
        maxOpacity={0.5}
        flickerChance={0.05} 
        squareSize={2}
        gridGap={3}
        color={ changeColor() }
    />
{/key}
<div class="mx-auto min-h-screen max-w-screen-xl top-0 px-6 py-12 md:px-16 lg:px-32 lg:py-0 ">
    <div class="lg:flex lg:gap-4 justify-between">
        <Header/>
        <Body />
    </div>
</div>