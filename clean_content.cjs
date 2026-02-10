const fs = require('fs');
const path = 'src/data/webDevContent.js';
let content = fs.readFileSync(path, 'utf8');

// Split by line
const lines = content.split(/\r?\n/);

// Find all module definitions to make sure we keep them
const moduleDefinitions = [];
let currentModule = null;
let braceCount = 0;

console.log('Total lines:', lines.length);

// Extract everything that is NOT an export of webDevContent
// and identify active modules
const cleanLines = [];
let inExport = false;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.includes('export const webDevContent = {')) {
        inExport = true;
        continue;
    }

    if (inExport) {
        if (line.trim() === '};' || line.trim() === '}') {
            inExport = false;
        }
        continue;
    }

    cleanLines.push(line);
}

// Reconstruct the file with the clean lines and a SINGLE export at the bottom
let newContent = cleanLines.join('\n').trim() + '\n\n';

newContent += '// Consolidated Export - Merging all modules into one content map\n';
newContent += 'export const webDevContent = {\n';
newContent += '    // Module 1 Features\n';
newContent += '    ...webDevModule1.lessons.reduce((acc, lesson, index) => {\n';
newContent += "        const id = `wp-m1-${String(index + 1).padStart(2, '0')}`;\n";
newContent += '        acc[id] = lesson;\n';
newContent += '        return acc;\n';
newContent += '    }, {}),\n\n';

newContent += '    // Module 2 Features\n';
newContent += '    ...webDevModule2.lessons.reduce((acc, lesson, index) => {\n';
newContent += "        const id = `wp-fe-${String(index + 1).padStart(2, '0')}`;\n";
newContent += '        acc[id] = lesson;\n';
newContent += '        return acc;\n';
newContent += '    }, {}),\n\n';

newContent += '    // Module 3 Features\n';
newContent += '    ...webDevModule3.lessons.reduce((acc, lesson, index) => {\n';
newContent += '        const code = lesson.lessonCode || lesson.id;\n';
newContent += "        const id = code ? code.toLowerCase() : `wp-ux-${String(index).padStart(2, '0')}`;\n";
newContent += '        acc[id] = lesson;\n';
newContent += '        return acc;\n';
newContent += '    }, {}),\n\n';

newContent += '    // Module 4 Features\n';
newContent += '    ...webDevModule4.lessons.reduce((acc, lesson, index) => {\n';
newContent += '        const code = lesson.lessonCode || lesson.id;\n';
newContent += "        const id = code ? code.toLowerCase() : `wp-be-${String(index + 1).padStart(2, '0')}`;\n";
newContent += '        acc[id] = lesson;\n';
newContent += '        return acc;\n';
newContent += '    }, {}),\n\n';

newContent += '    // Module 5 Features\n';
newContent += '    ...webDevModule5.lessons.reduce((acc, lesson, index) => {\n';
newContent += '        const code = lesson.lessonCode || lesson.id;\n';
newContent += "        const id = code ? code.toLowerCase() : `wp-db-${String(index + 1).padStart(2, '0')}`;\n";
newContent += '        acc[id] = lesson;\n';
newContent += '        return acc;\n';
newContent += '    }, {}),\n\n';

newContent += '    // Module 6 Features\n';
newContent += '    ...webDevModule6.lessons.reduce((acc, lesson, index) => {\n';
newContent += '        const code = lesson.lessonCode || lesson.id;\n';
newContent += "        const id = code ? code.toLowerCase() : `wp-dp-${String(index + 1).padStart(2, '0')}`;\n";
newContent += '        acc[id] = lesson;\n';
newContent += '        return acc;\n';
newContent += '    }, {}),\n\n';

newContent += '    // Module 7 Features\n';
newContent += '    ...webDevModule7.lessons.reduce((acc, lesson, index) => {\n';
newContent += '        const code = lesson.lessonCode || lesson.id;\n';
newContent += "        const id = code ? code.toLowerCase() : `wp-mod7-${String(index + 1).padStart(2, '0')}`;\n";
newContent += '        acc[id] = lesson;\n';
newContent += '        return acc;\n';
newContent += '    }, {})\n';
newContent += '};\n';

fs.writeFileSync(path, newContent);
console.log('File cleaned and export consolidated.');
