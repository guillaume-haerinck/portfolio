While making **real time 3D applications** has never been easier, the tools that we use to make them are now way more complex than what they used to be. These kinds of softwares have to deal with a large amount of programming areas, and bear with strict performance constraints. I believe these projects to be the **ultimate learning playground** for a software engineer.

My goal during this **4-months internship** at [Virtual Arts](https://www.virtualarts.co.uk/) was to understand how to architect and maintain this kind of project, and what were the tools and management styles available to make this happen.

## The Unity scene exporter

The goal of the in-house engine is to beat Unity Engine performance for Virtual and Augmented Reality. As many of their projects and clients are using Unity, they decided to create a plugin in order to **serialize Unity scene data into a format consumable by their engine**. 

<p style="text-align:center">
    <img src="/img/universe-engine/ar-vr.png" alt="Virtual and Augmented Reality" loading=lazy/>
    <figcaption>Augmented Reality vs. Virtual Reality <a href="https://medium.com/@arstudioz11/augmented-reality-vs-virtual-reality-8b3502e63637">@Medium</a></figcaption>
</p>



## The render pipeline

<p style="text-align:center">
    <img src="/img/universe-engine/destiny-threads.png" alt="Destiny threading architecture" loading=lazy/>
    <figcaption>Destiny uncoupled rendering / simulation <a href="http://advances.realtimerendering.com/destiny/gdc_2015/Tatarchuk_GDC_2015__Destiny_Renderer_web.pdf">@GDC 2015  Natalya Tatarchuk</a></figcaption>
</p>

## Thread-pool architecture

<p style="text-align:center">
    <img src="/img/universe-engine/thread-pool.png" alt="Thread pool" loading=lazy/>
    <figcaption>Thread Pool diagram</figcaption>
</p>

<p style="text-align:center">
    <img src="/img/universe-engine/doom3-threads.png" alt="Doom 3 threading" loading=lazy/>
    <figcaption>Doom 3 BFG threading architecture <a href="https://fabiensanglard.net/doom3_bfg/threading.php">@Fabien Sanglard</a></figcaption>
</p>

## Conclusion

Todo
