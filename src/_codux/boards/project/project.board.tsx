import { createBoard } from '@wixc3/react-board';
import { Project } from '../../../components/project/project';

const xp = {
    title: 'Grower',
    year: 2018,
    platforms: [
        {
            title: 'ios',
            appendix: 'ios',
        },
    ],
    stack: [
        {
            title: 'Swift',
            appendix: 'swift',
        },
        {
            title: 'SwiftUI',
            appendix: ' ',
        },
        {
            title: 'Modbus',
            appendix: ' ',
        },
    ],
    description: `
    `,
    github: 'https://github.com/Alek9M/GrowSystem',
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
