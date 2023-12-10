[Frima studio](https://frimastudio.com/) is a contractor for Epic Games to maintain the mobile and streaming side of Fortnite. At Frima my job involves to **fix gameplay and UI issues** that are specific to these platforms using C++ and Blueprints. I also use my **spare time to improve the tooling and workflow** when needed.

## A task example

<p style="text-align:center">
    <img src="/img/fortnite/lobby.jpg" alt="Lobby" loading=lazy/>
    <figcaption>The fortnite lobby</figcaption>
</p>

This is a fix that took me a few days and led me to **modify Unreal Engine 5** source code via [this simple contribution](https://github.com/EpicGames/UnrealEngine/commit/9e43e35d40aedd934bcd2e9dc76a66a359fa1723) (to see it you need to have your [github linked to epic](https://www.unrealengine.com/fr/ue-on-github)). On mobile we would end up with **a blank background** in the lobby pictured above, without any reproduction in editor or other devices. Via C++ debug and Renderdoc I could see that the texture was available in memory and bound to the background object, but it was not displayed. 

After some digging via "break-on-value-change" I found out that the object holding the **display material was destroyed and re-created shortly after the proper initialization logic**. This Blueprint logic was never re-entered and thus leaving this object in an un-initialized state. The issue only occured on mobile because of the latency during the project bootstraping that led to some config variables being applied later that on other platforms. 

The **fix was simply to be able to react to this event** (my UE change) and bind the initialization logic to it on Fortnite side.

## Tooling example

When I identify a defect I always **trace it back to the original change to understand why it was done**. As these changes often involves Blueprints as well as C++ code, I rely on the Unreal Engine .uasset diff tool to check all of the modifications made.

<p style="text-align:center">
    <img src="/img/fortnite/diff-bp.png" alt="diff blueprint" loading=lazy/>
    <figcaption>Unreal Engine .uasset diff in action</figcaption>
</p>

If I am **scrolling through the history via the perforce revision graph**, I can do a diff super fast for C++ via the "ctrl+D" shortcut. However to diff a blueprint I have to focus the editor, open the changelist review widget and paste the CL name, which is a bit cumbersome. This is why I made a **[simple python script](https://github.com/learn-computer-graphics/perforce-uasset-diff) for perforce that is called on the "ctrl+D" for .uassets.**

This tool will connect to a running instance of Unreal Engine and issue a diff command. This means that I can see my **blueprint diff from perforce to unreal in a less than 2 seconds**.
