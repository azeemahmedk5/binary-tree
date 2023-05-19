export const getTreeData = () => {
    return  {
        element:'test',
        left: {
            element:'test12',
            left: {
                element:'test123',
                right: {
                    element:'test1234',
                },
            },
            right: {
                element:'test1234',
            },
        },
        right: {
            element:'test12345',
            left: {
                element:'test123456',
            },
            right: {
                element:'test1234567',
            },
        },
    }
}