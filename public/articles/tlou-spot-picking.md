This small project adapt in C++ with Unreal Engine [this article](http://allenchou.net/2021/05/delayed-result-gathering/) based on Unity. **We are using the base of a cover system to demonstrate performance gaps between the approaches**.

At its base, the idea is to move work from the main thread to job threads using Unreal task system, thus using more workforce to complete the work. Yet there are a few twist to this design explored in the article :

1. _Standard_ : Launch the jobs and wait for them during the same frame
2. _Delay gather_ : Launch the jobs, continue main thread execution and **only wait on the next frame**
3. _Time slicing_ : Only **launch some of the jobs every frame**, and wait for all to be completed at a given frame (like the 10th). Which means that the full update of the system will take several frames to be performed.

We can see the result in execution time using Unreal Insights profiler with this project, and there are clickable buttons to switch between approaches at runtime.
