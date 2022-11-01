Mario + The Lapins Crétins : Sparks of Hope is a Nintendo Switch game released in 2022 by Ubisoft. I worked for nearly 2 years on this game as a Junior Tools Programmer in Paris. The project was made under the Snowdrop Engine so most of **my work was in C++** but **I also maintained other production tools using C# under the WPF framework**.

## My missions

My tasks varied a lot from weeks to weeks, with a lot of bug fixing and additions to the UI. You will find below some bigger subjects I had to tackle.

### Breakpoint support in AI graphs

Our version of the Snowdrop engine was **heavily modified in order to support a custom game framework**. This meant that many debug components working in vanilla Snowdrop were no longer usable in our version due to massive divergence in philosophy. Such was the case for the debug facilities of the Node Graphs.

<p style="text-align:center">
    <img src="/img/sparks-of-hope/node-graph.jpg" alt="Node graph in Snowdrop" loading=lazy/>
    <figcaption>A Nodegraph example from Snowdrop</figcaption>
</p>

I was tasked to add breakpoint support for the Artificial Intelligence graphs, based on the work done for another graph type that ran similarly. Breakpoint basically allows you to pause the game when a certain condition is met, and to go step by step from this point. It is a central tool for the users as it **speed-up the debug process when something goes awry**. On top of this breakpoint system, I also implemented a watch for graph variables so that users can inspect their values while the game is running.

### Preview UI graphs runtime in editor

With the help of [FX Roure](https://www.linkedin.com/in/fran%C3%A7ois-xavier-roure-a2a01b2/) we added a way for artists to **debug their User-Interface graphs in editor**. In order to test their changes in the past, they had to connect and disconnect many nodes to change the state of what is displayed (this item in inventory is selected, or this other one). As expected, this was very error-prone.

<p style="text-align:center">
    <img src="/img/sparks-of-hope/gui.webp" alt="Sparks of Hope GUI" loading=lazy/>
    <figcaption>A User-Interface example from the Game</figcaption>
</p>

We created a feature called "pin overrides" which allows user to specify new output values on each node. These overrides can be saved and shared without modifying the graph. By grouping these overrides inside preset, we are able to switch in one click between large graph changes (display the inventory, then the map etc). This way it is possible to unit-test the graphs between changes to find things that were broken.

### Tracing and locking of BaseGame / DLC assets

With the game nearing completion, we had to be able to lock some assets that were not supposed to be modified anymore (or at least warn the user). It was also nescessary to enforce the **distinction between assets made for the main game, and the assets made for the DLCs** (in order to prevent DLC asset to be used by main game for example).

I implemented a system, based on the dependency-tree, that allow users to know for which content an asset is used, and prevent them from doing unwanted changes. From this I was able to make new validation rules to ensure that assets are properly named and that users are using the right Jira tickets to submit their changes.

### Batch commands

Batch commands are an **automated way to make the same change across a lot of assets**. While Snowdrop did provide some tools to run batch commands, the UI confused the users, we had performance problems, and any action could lock the assets for a long time. 

I started to improve the user-interface by only allowing them to pick valid options when using the tools, and I provided feedbacks on each steps to tell what was missing. Then I fixed some thread-related crashes and added pre-filtering options to reduce the things to process and make them faster. Finally I added a mode that would only lock modified assets at the end of the operation (instead of locking everything everytime).

### Ground inclination debug viewer

There is a sliding game mechanic in the game base on terrain slope. The only way for the level-designer to know wether the character would slide or not on the surface was to run the game. To prevent this I wrote a **simple post-processing shader** that can be toggled on and off and allow the users to preview flat, sliding and unreachable surfaces.

<p style="text-align:center">
    <img src="/img/sparks-of-hope/slope-shader.png" alt="A slope shader made in Blender" loading=lazy/>
    <figcaption>A slope shader made in Blender with Nodes</figcaption>
</p>

## Conclusion

This was my first time working on a professional game and it was an epic adventure ! I got used to navigate across a huge code base, make plenty of comments in code reviews, got to know users and ask for their feedback on my tools. Getting user's approval is a real motivation and I don't think I will ever get tired of it.
