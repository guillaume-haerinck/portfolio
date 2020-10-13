While making **real time 3D applications** has never been easier, the tools that we use to make them are now way more complex than what they used to be. These kinds of softwares have to deal with a large amount of programming areas, and bear with strict performance constraints. I believe these projects to be the **ultimate learning playground** for a software engineer.

My learning objective during this **4-months internship** at [Virtual Arts](https://www.virtualarts.co.uk/) was to understand how to architect and maintain this kind of project, and what were the tools and management styles available to make this happen.

## The Unity scene exporter

The goal of the in-house engine is to beat Unity Engine performance for Virtual and Augmented Reality. As many of their projects and clients are using Unity, they decided to create a plugin in order to **serialize Unity scene data into a format consumable by their engine**. It means that while working on their engine, we also had to inspect the inner working of Unity in order to create and export the data we needed to render a scene.

<p style="text-align:center">
    <img src="/img/universe-engine/ar-vr.png" alt="Virtual and Augmented Reality" loading=lazy/>
    <figcaption>Augmented Reality vs. Virtual Reality <a href="https://medium.com/@arstudioz11/augmented-reality-vs-virtual-reality-8b3502e63637">@Medium</a></figcaption>
</p>

Working on the exporter, I **improved the material support** by adding additionnal textures and parameters like the transparency. I also added the support for the Universal Render Pipeline and the High Definition Render Pipeline materials. There was also some **work remaining on their support of the [Shader Graph](https://unity.com/fr/shader-graph)** to create custom shaders, things like Subgraphs and default parameters were missing so I added them.

## The render pipeline

I spent a lot of time fixing rendering artefacts, refractoring, documenting and adding features in their renderer. There was some clever ideas in multiple areas, one of them is the **scriptable frame graph** implemented similarly as the one in [frostbite by EA](https://www.gdcvault.com/play/1024612/FrameGraph-Extensible-Rendering-Architecture-in). Some of its parameters where still hard-coded so **I added runtime support for settings like V-Sync and debugging passes**.

As I was working on fixes on the Vulkan side, **I added support for detailled debug annotation** using the latest extension [Vulkan Debug Utilities](https://www.lunarg.com/wp-content/uploads/2018/05/Vulkan-Debug-Utils_05_18_v1.pdf). With this enabled, every ressources had a human-understandable name when I captured a frame using [RenderDoc](https://renderdoc.org/) or [Nsight](https://developer.nvidia.com/nsight-graphics) which was a big help when tracking bugs ! 

There was also a partial **support for the [Optick Profiler](https://optick.dev/) which I considerably extended** to keep track of the multiple threads and hot path. This helped me to understand that the rendering was constraining frames from time to time as the engine waited for the GPU do have done his rendering. I have seen that [Naughty Dog](https://www.gdcvault.com/play/1022186/Parallelizing-the-Naughty-Dog-Engine) and Bungie are handling this problem quite well.

<p style="text-align:center">
    <img src="/img/universe-engine/destiny-threads.png" alt="Destiny threading architecture" loading=lazy/>
    <figcaption>Destiny uncoupled rendering / simulation <a href="http://advances.realtimerendering.com/destiny/gdc_2015/Tatarchuk_GDC_2015__Destiny_Renderer_web.pdf">@GDC 2015  Natalya Tatarchuk</a></figcaption>
</p>

The idea is to run the simulation by one frame ahead of the rendering so that the GPU has more time to handle the rendering. I wasn't able to integrate this into the codebase as there was more urgent changes to be made (and it is not a small feature).

## Thread-pool architecture

As any modern engine, Universe make uses of the multiple core of the CPU. There are multiple architecture to handle this properly, and Virtual Arts choose to use a Thread-Pool : at your application startup you create as many threads as possible and you keep them alive in an array. The programmer will send **tasks (pure functions)** to the Thread Pool Manager. The manager will store them until there is a thread available to be executed on. Simple but efficient.

<p style="text-align:center">
    <img src="/img/universe-engine/thread-pool.png" alt="Thread pool" loading=lazy/>
    <figcaption>Thread Pool diagram</figcaption>
</p>

The system can be more complex if you assign priorities to your tasks, so that the ones with a higher priority will be executed as soon as possible. However, going through my profiler logs, I found out that there was **a lot of idle time** as it can be difficult to break you work into small independant tasks. I managed to split up some code as tasks, but the heavy **Object Oriented Paradigm in use made it very difficult to prevent data-races**. 

To architect you code in a thread-friendly way seems to be one of the biggest problem a developer has to face, and I am eager to see and discover other patterns to handle this problem efficiently (ECS and some concepts from functionnal programming are very promising, and the [Destiny architecture](https://www.youtube.com/watch?v=v2Q_zHG3vqg) presentation by Barry Genova is pretty impressive as well).

## Conclusion

My main purpose going through this internship was to understand what it takes to make a great game engine and a successful software project which scales. These questions are - of course - still vivid in my mind but I did get a good glimpse at their possible answer.

I spent a lot of time fixing things, and I am very grateful to have encountered difficulties along the way. All of those helped me to **deepen my understanding of many tools and concepts and got me way farther than I would have by myself**. Playing the detective to find the cause of the various bugs was surprisingly pleasurable as well.
