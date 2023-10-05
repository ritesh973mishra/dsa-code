function vowelCount(str) {
    let vow = 0;
    let cons = 0;

    for (let c of str) {
        if (c == 'a' || c == 'i' || c == 'e'|| c == 'o' || c == 'u') {
            vow = vow +1;
        } else {
            cons = cons +1;
        }
    }
}

vowelCount('hello')