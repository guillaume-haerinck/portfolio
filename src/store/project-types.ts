export enum ProjectCategory {
    Web = 'Web',
    Game = 'Game',
    Animation = 'Animation',
    Tool = 'Tool'
}
export const ProjectCategories = Object.values(ProjectCategory);

export enum ProjectTag {
    OpenGL = 'OpenGL',
    WebGL = 'WebGL',
    Vulkan = 'Vulkan',
    DirectX = 'DirectX',
    ECS = 'ECS',
    Unity = 'Unity',
    Unreal = 'Unreal',
    Godot = 'Godot',
    Blender = 'Blender',
    CPP = 'C++',
    XAML = 'XAML',
    QT = 'QT',
    CSharp = 'C#',
    React = 'React',
    Angular = 'Angular',
    Vue = 'Vue',
    WASM = 'WebAssembly'
}
export const ProjectTags = Object.values(ProjectTag);
