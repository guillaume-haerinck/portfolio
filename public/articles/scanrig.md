ScanRig aims to make **accessible, automated and easy the capture of an object** in all of its angles. The pictures generated are then used with a photogrammetry software like [Meshroom](https://alicevision.org/#meshroom) to **create a 3D model**. We worked as [IMAC students](https://www.ingenieur-imac.fr/) in collaboration with [AliceVision](https://alicevision.org/) to make this prototype happen.

## How it works

There are 3 cameras attached to a rotative arm. **While the arm is moving we capture photos of an object placed in the center**. A software built with QT handle the cameras and the arm speed. We also built custom lighting to **allow the use of photometry** in order to create normal maps of the object. In this setup the arm will wait at the 4 cardinal angles in order to take pictures while the lighting setup updates.

## My roles

- Created a C++ library (with a python wrapper) to handle any kind of Camera on Windows and on Linux,
- Modeled the various versions of the Rig with Fusion360,
- Participated on the QT software to pilot everything,
- Made various technical tests to check the camera capabilities,
- Cut holes, saw wood and many other things to create the prototype.

## Side notes

Upon working on a prototype you often have to **consider second-hand usages for some rigs in order to reduce the cost** (our first prototype was made out of curtain rod...). The experience was very refreshing in this regard, as finding backdoors is more of an hacker-activity than a software developer one 😄. 

The fact that we had to think about the whole pipeline (imagine the setup, but also assemble it and code the related software) also really resonated with me as you had to **gather feedback during each step** and really plan everything ahead to find defects before it is too late.
