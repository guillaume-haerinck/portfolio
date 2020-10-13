A 3rd person game where you have to make your way through a random dungeon. The game borrows many ideas from the rogue-like genre, which uses mechanics like perma-death, procedural generation, limit-less interactions with the environment and time impact on the enemy and spawn stats. 

It is currently quite rough on the edges, as we made the game in order to **experiment features of Unreal Engine** (AI, UI, animation, rendering, particles, C++ extension via blueprint, etc), but there are some interesting technical ideas in it.

## Level Generation

One of the problem when you use procedural generation is the loss of control over you level design. It can be difficult to create interesting and clever game design when you rely on randomness. During our research, we came trough the post-mortem of [Spelunky by Derek Yu](https://www.amazon.fr/dp/B01CYVHYSS/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1). He tried several algorithm and finally settled on **a mix between human and procedurally generated content**.

<p style="text-align:center">
    <img src="/img/a-rogue-like/spelunky-level.png" alt="Spelunky generated level" loading=lazy/>
    <figcaption>Spelunky dungeon generation</figcaption>
</p>

In Spelunky, the levels are constructed on a 4x4 grid. Each cell of this grid has been crafted by him, but the choice between these cells is random. The preresquisites for each generated level is to have a main path with a certain length, amount of treasures and enemies, and each of these cells have to be connectable (enough space for the player to go through). The algorithm is of course more complicated, but it gave us a starting point when we designed our level generation system.

<p style="text-align:center">
    <img src="/img/a-rogue-like/level.png" alt="Level generation for our game" loading=lazy/>
    <figcaption>One of our "cell", a unit level ready to be included in the map</figcaption>
</p>

To generate our map, **we pick randomly through a set of levels that we designed**. Each of of these has at least one entry set a the local position (0, 0, 0). When we reach a door, we close the other exits and spawn a new chunk of level at this exit point. **This design has to work in pair**, as levels have different sizes, it is a simple way to prevent two part from overlapping each other. This means that no more than two chunks are visible at the same time. As time and difficulty increases, the level picked are more difficult and contains more powerful enemies.

## Conclusion

This project was a great exercice to put together a lot of Unreal Engine concept and workflow. We got many features inside and learnt a fair amount of valuable information with them. We now need to experiment more to add the final touch of polish needed by this project.
