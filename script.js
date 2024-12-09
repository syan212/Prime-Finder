function prime(n) {
    if (n <= 3) {
        return n > 1;
    }
    const p_list = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 
                    53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 
                    113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 
                    181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 
                    251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 
                    317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 
                    397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 
                    463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 
                    557, 563, 569, 571, 577, 587, 593, 599]
    for (let i = 0; i < n; i++) {
        if (n % p_list[i] === 0) {
            return false;
        }
    }   
    let i = 5;
    while (i * i <= n) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;
}

function findPrimes() {
    const start = parseInt(document.getElementById("startNumber").value);
    const end = parseInt(document.getElementById("endNumber").value);
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Clear previous output

    if (isNaN(start) || isNaN(end) || start >= end) {
        outputDiv.innerHTML = "<p>Invalid input: Start number must be less than the end number and both must be numbers.</p>";
        return;
    }

    let num = 0;
    let primesFound = "";

    for (let i = start; i <= end; i++) {
        if (prime(i)) {
            primesFound += i + ", ";
            num++;
        }
    }

    outputDiv.innerHTML = `<p>Prime numbers between ${start} and ${end}:</p><p>${primesFound.slice(0,-2)}</p><p>Total prime numbers: ${num}</p>`;
}
