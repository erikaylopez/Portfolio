export default function Portfolio() {
const projects = [ 
        {
            title: 'Weather Dashnboard',
            description: 'Weather application to include a search function for any location. Includes 5 day forecast',
            link: 'https://erikaylopez.github.io/Weather-Dashboard/',
            repo: 'https://github.com/erikaylopez'
        },

        {
            title: 'Progressive Web Applications Text Editor',
            description: 'A single-page application text editor that runs in the browser with offline functionality.',
            link: 'https://github.com/erikaylopez/PWA2',
            repo: 'https://github.com/erikaylopez'
        },

        {
            title: 'RegEx Tutorial',
            description: 'A Regular Expressions tutorial to specifically cover regex matching email addresses: /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/.',
            link: 'https://github.com/erikaylopez/Regex-Tutorial/blob/main/Develop/gist-template.md#greedy-and-lazy-match'
        },
        {
            title: 'Model View Controller',
            description: 'The purpose of this application is to create a CMS-style blog utilizing Model-View-Controller. This application includes Sequelize and Handlebars dependencies for deployment.',
            link: 'https://github.com/erikaylopez/Model-View-Controller',
            repo: 'https://github.com/erikaylopez'
        }


    ];


    return (
        <>
            <h1>Portfolio Page</h1>
            {projects.map((project, index) => (
                <div key={index}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <a href={project.link}>Link</a>
                </div>
            ))}
        </>
    );
}
