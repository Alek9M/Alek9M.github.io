import { createBoard } from '@wixc3/react-board';
import { Project } from '../../../components/project/project';

const xp = {
    title: 'Coach ↔️ client communication tool',
    platforms: [
        {
            title: 'iOS',
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
            title: 'CloudKit',
            appendix: 'icloud',
        },
    ],
    description: `
    Created an app that allows to conviniently exchange information through Questionaires and Advices. Questionaires are a predefined by Coach set of questions (text, number or an option) that can be regularly answered by Client for statistics. Advices are actions Client should repeat according to directions.
    `,
    github: 'https://github.com/Alek9M/Advice',
    screenshots: {
        directory: 'src/assets/screenshots/ad/',
        quantity: 3,
        format: '.png',
    },
    testflight: 'https://testflight.apple.com/join/dCBkNZ2j',
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
