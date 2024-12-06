<script lang="ts">
    import ExpCard from "../../components/ExpCard.svelte";
    import LinkedText from "../../components/LinkedText.svelte";
    import ProjCard from "../../components/ProjCard.svelte";

    interface cardContent {
        timeRange: string;
        bodyTitle: string;
        bodyContent: string;
        footer: Array<string>;
        link: string;
    }

    const experience : Array<cardContent> = [
        {   
            timeRange: "July 2022 - Present", 
            bodyTitle: "Software Engineer II • CarMax", 
            bodyContent: "Develop and maintain audits to increase pay accuracy for 7000 CarMax associates. Collaborate with adjacent teams to increase data accuracy and improve daily incentive processing. Take ownership of vendor-developed code to allow team independence in debugging and resolving data issues.",
            footer: ["C#", ".NET", "SQL", "Groovy", "SAP", "Azure Logic Apps", "Azure"],
            link: "https://www.carmax.com"
        },
        {
            timeRange: "May - August 2021",
            bodyTitle: "Software Engineer Intern • BuzzVoice",
            bodyContent: "Developed UI and integrated API to allow users to interface with core product. Engaged in system design that created a pathway for expedition implementation of one core product feature.",
            footer: ["TypeScript", "Angular", "gRPC", "Google Cloud"],
            link: "https://www.buzzvoice.net"
        }
    ]

    const projects : Array<any> = [
        {
            link: "https://www.ceias.nau.edu/capstone/projects/CS/2022/TruthSeeker/index.html",
            image: "./src/assets/NOBL.png",
            imageDescription: "NOBL Web Application Preview",
            bodyTitle: "NOBL",
            bodyContent: "Led a team of 4 in developing a high-performance data visualization platform as my Computer Science capstone project.  Successfully delivered a web application and API with sub-250 millisecond rendering of 50,000 data points using ECharts, providing a critical reporting solution for a startup.",
            footer: ["React", "ECharts" ,"Express", "AWS", "AWS Lambda", "MySQL"]
        }
    ]

</script>

<main class=" py-12 lg:w-1/2 grid lg:py-24 md:py-24" id="about">
    <section>
        <div>
            <p class="mb-4">
                I love the challenge of using code to solve complex problems, kind of like figuring out a really intricate puzzle. 
                I'm always eager to learn new technologies and find creative ways to use them to build innovative things.  
                The whole process really excites me, from that initial idea to finally seeing it all come together in a finished product.  
                And it's incredibly rewarding to know that I'm making a difference.  
                For me, writing clean, maintainable code is a must, and I take real pride in delivering high-quality work that goes above and beyond what's expected.
            </p>
            <p class="mb-4">
                At this moment, I'm a Software Engineer II at
               <LinkedText
                    content={"CarMax"}
                    link={"https://www.carmax.com"}
                    ariaLabel={"Link for my current job's company website, CarMax"}
               />.
                I contribute to the design, maintenance, and enhancement of our core commission calculation engine, 
                ensuring accurate and timely payouts to our associates while maintaining 
                a scalable and robust system that can adapt to evolving business requirements.
            </p>
            <p class="mb-4">
                In my spare time, I like to run, work out, and draw! Most importantly, however, I love spending time with my good boy
                <LinkedText 
                    content={"Mixtape the Inu"}
                    ariaLabel={"Link for my puppy's Instagram"}
                    link={"https://www.instagram.com/mixtapetheinu/"}
                />!
            </p>
        </div>
    </section>
    <section class="mt-12 lg:mt-24" id="experience">
        <div class="flex flex-col gap-8">
            {#each experience as exp }
                <ExpCard 
                    timeRange={exp.timeRange} 
                    bodyHeader={exp.bodyTitle} 
                    bodyContent={exp.bodyContent} 
                    footer={exp.footer} 
                    link={exp.link}
                />
            {/each}
        </div>
    </section>
    <section class="mt-12 lg:mt-24" id="projects">
        <div class="flex flex-col gap-8">
            {#each projects as proj}
                <ProjCard 
                    image={proj.image} 
                    imageDescription={proj.imageDescription} 
                    bodyHeader={proj.bodyTitle} 
                    bodyContent={proj.bodyContent} 
                    footer={proj.footer}
                    link={proj.link}
                />
            {/each}
        </div>
    </section>
    <footer class="mt-24 text-sm text-surface-300">
        <p>Coded in 
            <LinkedText 
                content={"Visual Studio Code"}
                ariaLabel={"Link to Visual Studio Code"}
                link={"https://code.visualstudio.com/"}
            />. Built with
            <LinkedText
                content={"Svelte"}
                ariaLabel={"Link to Svelte home page."}
                link={"https://svelte.dev/"} 
            />
            and
            <LinkedText
                content={"Tailwind CSS"}
                ariaLabel={"Link to Tailwind CSS"}
                link={"https://tailwindcss.com/"}
            />
            . Deployed and hosted with
            <LinkedText
                content={"Azure"}
                ariaLabel={"Link to Azure"}
                link={"https://azure.microsoft.com/en-us/"}
            />.
        </p>
    </footer>
</main>