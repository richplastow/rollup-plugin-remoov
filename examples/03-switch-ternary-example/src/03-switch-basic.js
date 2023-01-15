export default function switchBasic(redBlue) {
    switch (redBlue) {
        case 'RED': {
            console.log('1 of 4: 03-switch-basic: SwitchCase block and break - will be used.');
            break;
        }
        case 'BLUE': {
            console.log('03-switch-basic: SwitchCase block and break - never actually used.');
            break;
        }
        default: {
            console.log('03-switch-basic: Default SwitchCase block - never actually used.');
        }
    }
    switch (redBlue) {
        case 'RED':
            console.log('2 of 4: 03-switch-basic: SwitchCase no-block, no-break - will be used.');
        case 'BLUE':
            console.log('3 of 4: 03-switch-basic: SwitchCase no-block, no-break - is also used, because `case` line 14 has no `break`.');
        default:
            console.log('4 of 4: 03-switch-basic: Default SwitchCase no-block - is also used, because `case` line 14 has no `break`.');
    }
}
