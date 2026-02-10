const fs = require('fs');
const content = fs.readFileSync('src/data/webDevContent.js', 'utf8');

const modules = [];
const startMarkers = [
    'const webDevModule1 = {',
    'const webDevModule2 = {',
    'const webDevModule3 = {',
    'const webDevModule4 = {',
    'const webDevModule5 = {',
    'const webDevModule6 = {',
    'const webDevModule7 = {',
    'const webDevModule8 = {'
];

let lastEnd = 0;
let newContent = 'import { img } from "framer-motion/client";\n\n';

for (let i = 0; i < startMarkers.length; i++) {
    const start = content.indexOf(startMarkers[i]);
    if (start === -1) {
        console.error(`Could not find ${startMarkers[i]}`);
        continue;
    }

    // Find the end of this module. It ends with }; followed by some whitespace and the next module or export.
    let end = -1;
    if (i < startMarkers.length - 1) {
        end = content.indexOf(startMarkers[i + 1]);
    } else {
        // Last module, ends before export
        end = content.indexOf('export const webDevContent =');
    }

    if (end === -1) end = content.length;

    const moduleBlock = content.slice(start, end).trim();
    newContent += moduleBlock + '\n\n';
}

newContent += '// Consolidated Export - Merging all modules into one content map\n';
newContent += 'export const webDevContent = {\n';

const mappings = [
    { mod: 'webDevModule1', prefix: 'wp-m1-', useIndex: true },
    { mod: 'webDevModule2', prefix: 'wp-fe-', useIndex: true },
    { mod: 'webDevModule3', prefix: 'wp-ux-', useIndex: false, defaultPrefix: 'wp-ux-' },
    { mod: 'webDevModule4', prefix: 'wp-be-', useIndex: false, defaultPrefix: 'wp-be-' },
    { mod: 'webDevModule5', prefix: 'wp-db-', useIndex: false, defaultPrefix: 'wp-db-' },
    { mod: 'webDevModule6', prefix: 'wp-dp-', useIndex: false, defaultPrefix: 'wp-dp-' },
    { mod: 'webDevModule7', prefix: 'wp-as-', useIndex: false, defaultPrefix: 'wp-as-' },
    { mod: 'webDevModule8', prefix: 'wp-ai-', useIndex: false, defaultPrefix: 'wp-ai-' }
];

mappings.forEach((m, i) => {
    newContent += `    // ${m.mod} Features\n`;
    newContent += `    ...${m.mod}.lessons.reduce((acc, lesson, index) => {\n`;
    if (m.useIndex) {
        newContent += `        const id = \`${m.prefix}\${String(index + 1).padStart(2, '0')}\`;\n`;
    } else {
        newContent += `        const code = lesson.lessonCode || lesson.id;\n`;
        newContent += `        const id = code ? code.toLowerCase() : \`${m.defaultPrefix}\${String(index + 1).padStart(2, '0')}\`;\n`;
    }
    newContent += `        acc[id] = lesson;\n`;
    newContent += `        return acc;\n`;
    newContent += `    }, {}),\n\n`;
});

newContent += '    // Module 8 (Optional/Future)\n';
newContent += "    ...((typeof webDevModule8 !== 'undefined' ? webDevModule8 : { lessons: [] }).lessons.reduce((acc, lesson, index) => {\n";
newContent += '        const code = lesson.lessonCode || lesson.id;\n';
newContent += "        const id = code ? code.toLowerCase() : `wp-ai-${String(index + 1).padStart(2, '0')}`;\n";
newContent += '        acc[id] = lesson;\n';
newContent += '        return acc;\n';
newContent += '    }, {}))\n';
newContent += '};\n';

fs.writeFileSync('src/data/webDevContent.js', newContent);
console.log('File successfully reconstructed.');
