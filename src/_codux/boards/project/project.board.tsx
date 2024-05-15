import { createBoard } from '@wixc3/react-board';
import { Project } from '../../../components/project/project';

const xp = {
    title: 'This website',
    platforms: [
        {
            title: 'web',
            appendix: ' ',
        },
    ],
    stack: [
        {
            title: 'TypeScript',
            appendix: 'typescript',
        },
        {
            title: 'React',
            appendix: 'react',
        },
        {
            title: 'Pkl',
            appendix: ' ',
        },
        {
            title: 'GitHub Pages',
            appendix: 'githubpages',
        },
    ],
    description: `
    `,
    github: 'https://github.com/Alek9M/Advice',
    screenshots: {
        directory: '',
        quantity: 0,
        format: '',
    },
};

export default createBoard({
    name: 'Project',
    Board: () => <Project project={xp} />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
        canvasHeight: 281,
    },
});
