import { createBoard } from '@wixc3/react-board';
import { Project } from '../../../components/project/project';

const xp = {
    title: 'Grower',
    year: 2018,
    team: 3,
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
    I developed a mobile remote for restaurants greenhouse systems. It enables users to monitor and adjust environmental conditions such as lighting and temperature. I wokred in a team and also assisted in UI design.
    `,
    github: 'https://github.com/Alek9M/GrowSystem',
    screenshots: {
        directory: 'grow/',
        quantity: 2,
        format: '.jpeg',
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
