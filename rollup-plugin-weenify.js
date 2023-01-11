export default function removeUnused(options) {
    return {
        name: 'removeUnused',
        transform(source) {
            let src = source.toString();

            // Remove `// BEGIN_WEENIFY_BOILERPLATE` and `// END_WEENIFY_BOILERPLATE`
            // and everything inbetween.
            while (true) {
                const from = '// BEGIN_WEENIFY_BOILERPLATE\n';
                const to = '// END_WEENIFY_BOILERPLATE\n';
                const fromPos = src.indexOf(from);
                const toPos = src.indexOf(to);
                // console.log(source, from, fromPos, to, toPos);
                if (fromPos === -1 && toPos === -1) break;
                if (fromPos !== -1 && toPos !== -1) {
                    src = src.slice(0, fromPos) + src.slice(toPos + to.length);
                } else if (fromPos === -1) {
                    throw Error('Missing `// BEGIN_WEENIFY_BOILERPLATE`');
                } else {
                    throw Error('Missing `// END_WEENIFY_BOILERPLATE`');
                }
            }

            // For the `remove` array, remove pairs of `WEENIFY.spy('B-gh9kl-7');`
            // and `WEENIFY.spy('E-gh9kl-7');`, and everything inbetween.
            for (const pathHash in options.remove) {
                const pathHashGroup = options.remove[pathHash];
                for (const index of pathHashGroup.reverse()) {
                    const extendDelete = options.extendDelete[pathHash][index];
                    const from = `WEENIFY.spy('B-${pathHash}-${index}-${extendDelete}');`
                    const to = `WEENIFY.spy('E-${pathHash}-${index}-${extendDelete}');`
                    const fromPos = src.indexOf(from);
                    const toPos = src.indexOf(to);
                    // console.log(source, from, fromPos, to, toPos);
                    if (fromPos === -1 && toPos === -1) continue;
                    if (fromPos !== -1 && toPos !== -1) {
                        let end = src.slice(toPos + to.length); // from the end of `to` to the end of `src`
                        if (extendDelete !== 0)
                            end = end
                                .trimStart() // remove space between the end of `to` and the next nonspace character
                                .slice(extendDelete) // apply `extendDelete` to remove final `return ...`, etc
                        src =
                            src.slice(0, fromPos) // from the start of `src` to the start of `from`
                          + `/* Weenified */` // helps debug @TODO remove
                          + end
                        ;
                    } else if (fromPos === -1) {
                        console.error(`Missing \`${from}\``);
                        // throw Error(`Missing \`${from}\``);
                    } else {
                        console.error(`Missing \`${to}\` @TODO get 04-ifs-nested-basic.js to work`);
                        // throw Error(`Missing \`${to}\``);
                    }
                }
            }

            // For the `ignore` array, remove pairs of `WEENIFY.spy('B-gh9kl-7');`
            // and `WEENIFY.spy('E-gh9kl-7');`, but leave code inbetween alone.
            for (const pathHash in options.ignore) {
                const pathHashGroup = options.ignore[pathHash];
                for (const index of pathHashGroup) {
                    const extendDelete = options.extendDelete[pathHash][index];
                    const from = `WEENIFY.spy('B-${pathHash}-${index}-${extendDelete}');`
                    const fromPos = src.indexOf(from);
                    if (fromPos !== -1) {
                        src = src.slice(0, fromPos) + src.slice(fromPos + from.length);
                    }
                    const to = `WEENIFY.spy('E-${pathHash}-${index}-${extendDelete}');`
                    const toPos = src.indexOf(to);
                    if (toPos !== -1) {
                        src = src.slice(0, toPos) + src.slice(toPos + to.length);
                    }
                    // if (fromPos !== -1 && toPos !== -1) {
                    //     src =
                    //         src.slice(0, fromPos)
                    //       + src.slice(fromPos + from.length, toPos)
                    //       + src.slice(toPos + to.length)
                    //     ;
                    // } else if (fromPos === -1) {
                    //     throw Error(`Missing \`${from}\``);
                    // } else {
                    //     throw Error(`Missing \`${to}\``);
                    // }
                }
            }

            console.log(src);
            return src;
        }
    }
}
