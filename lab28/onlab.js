/**
 * In dãy số lẻ trong khoảng từ 1 đến 100
 */
function printOddNumbers(x) {
    for (let i = 1; i <= 100; i++)
        if (i % 2 == 1) {
            console.log(i);
        }
}

printOddNumbers();

/**
 * In dãy số chẵn trong khoảng từ 100 về 1
 */
function printEvenNumbers() {
    for (let i = 100; i >= 1; i--)
        if (i % 2 == 0) {
            console.log(i);
        }
}

printEvenNumbers();

/**
 * Tính tổng các số tự nhiên trong khoảng từ 1 đến `n`
 *
 * @param {number} n Số nguyên dương bất kỳ
 *
 * @return {number} Tổng các số tự nhiên trong khoảng từ 1 đến `n`
 */
function sumOfNumbers(n) {
    let total = 0;

    for (let i = 1; i <= n; i++) {
        total += i;
    }

    return total;
}

/**
 * Tính tổng các số lẻ trong khoảng từ `start` đến `end`
 *
 * @param {number} start Giá trị bắt đầu
 * @param {number} end Giá trị kết thúc
 *
 * @returns {number} Tổng các số lẻ
 */
function sumOfOddNumbers(start, end) {
    let tong = 0;

    for (let i = start; i <= end; i++) {
        if (i % 2 != 0) {
            tong = tong + i;
        }
    }

    return tong;
}

console.log(sumOfOddNumbers(1, 10));

/**
 * In ra các ước số của một số nguyên bất kỳ
 *
 * @param {number} number Số nguyên dương bất kỳ
 */
function divisor(number) {
    for (let i = 1; i <= number; i++) if (number % i == 0) console.log(i);
}

divisor(6);
/**
 * Tính số lần gấp 1 tờ giấy có độ mỏng 0.1mm để đạt được độ dày mong muốn
 *
 * @param {number} thickness Độ dày mong muốn tính theo đơn vị m
 *
 * @return {number} Số lần gấp giấy để đạt được độ dày yêu cầu
 */
function countFolding(thickness) {
    let paper = 0.1; // Độ dày ban đầu
    let count = 0; // Đếm số lần

    thickness *= 1000; // đổi đơn vị từ m sang mm (1m = 1000mm)

    while (thickness > paper) {
        paper *= 2; // Gấp đôi tờ giấy
        count++; // Đếm 1 lần gấp
    }

    return count;
}

console.log(countFolding(0.2));

/**
 * Tính xem sau bao nhiêu năm nữa thì tuổi cha gấp 2 lần tuổi con
 *
 * Tuổi cha lớn hơn tuổi con ít nhất 18 tuổi
 *
 * @param {number} dad Tuổi của cha
 * @param {number} son Tuổi của con
 *
 * @returns {number} Số năm để tuổi cha gấp 2 lần tuổi con
 */
function countYears(dad, son) {
    let count = 0;

    while (dad / son != 2) {
        count++; // Đếm thêm 1 năm
        dad++; // tăng tuổi của dad
        son++; // Tăng tuổi của son
    }

    return count;
}

console.log(countYears(30, 1));

/**
 * Tìm số chân gà và chó trong bài toán
 *
 * Vừa gà vừa chó
 * Bó lại cho tròn
 * Ba mươi sáu con
 * Một trăm chân chẵn
 */
function countLegs() {
    const CHICKEN_LEGS = 2;
    const DOG_LEGS = 4;
    const TOTAL_ANIMAL = 36;
    const TOTAL_LEGS = 100;

    let chicken = 1;
    let dogs = TOTAL_ANIMAL - 1;

    while (chicken * CHICKEN_LEGS + dogs * DOG_LEGS != TOTAL_LEGS) {
        chicken++;
        dogs--;
    }

    console.log("Số gà là:", chicken);
    console.log("Số chó là:", dogs);
}

countLegs();
