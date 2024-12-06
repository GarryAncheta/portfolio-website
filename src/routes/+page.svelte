<script>
    import { getModeAutoPrefers, modeCurrent } from "@skeletonlabs/skeleton";
    import Body from "./components/Body.svelte";
    import Header from "./components/Header.svelte";
    import FlickeringGrid from "./components/FlickeringGrid.svelte";


    const changeColor = () => {

        if( $modeCurrent ) {
            return"#60d7ab";
        }

        return "#1d7655";
    }
    
</script>

{#key $modeCurrent}
    <FlickeringGrid 
        class="fixed mx-auto min-w-screen min-h-screen h-screen w-screen -z-10" 
        maxOpacity={0.5}
        flickerChance={0.05} 
        squareSize={2}
        gridGap={3}
        color={ changeColor() }
    />
{/key}
<div class="mx-auto min-h-screen min-w-screen-xl md:px-16 px-6 py-12 lg:px-24 lg:py-0 top-0">
    <div class="lg:flex lg:gap-4 justify-between">
        <Header/>
        <Body />
    </div>
</div>