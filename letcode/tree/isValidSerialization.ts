function isValidSerialization(preorder: string): boolean {
    let edge = 0;
    const arrY = preorder.split(',')
    for (let i = 0; i < arrY.length; i++) {
        if (arrY[i] !== '#') {
            edge += 1;
        } else {
            edge -= 1;
            if (edge < 0) {
                return false;
            }
        }
    }

    return edge === 0;
};