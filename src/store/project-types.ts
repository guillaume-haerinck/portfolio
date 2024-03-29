export enum ProjectContext {
    NONE = '',
    Professional = 'Professional',
    Hobby = 'Hobby',
    Student = 'Student',
}
export const ProjectContexts = Object.values(ProjectContext).filter(context => context != '');

export enum ProjectCategory {
    NONE = '',
    Animation = 'Animation',
    Gameplay = 'Gameplay',
    Maker = 'Maker',
    Tool = 'Tool',
    Web = 'Web'
}
export const ProjectCategories = Object.values(ProjectCategory).filter(cat => cat != '');

export enum ProjectTag {
    Arduino = 'Arduino',
    Blender = 'Blender',
    CPP = 'C++',
    CSharp = 'C#',
    GraphicProg = 'GraphicProg',
    ECS = 'ECS',
    Python = 'Python',
    QT = 'QT',
    Unity = 'Unity',
    Unreal = 'Unreal',
    WPF = 'WPF'
}
export const ProjectTags = Object.values(ProjectTag);

// links type : repo; website; demo; video
