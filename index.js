function menuSegitiga() {
    var segitiga = document.getElementById("segitiga");
    if (segitiga.style.display==="none") {
        segitiga.style.display="block";
    }
    else {
        segitiga.style.display="none";
    }
}

function menuJajarGenjang() {
    var jajargenjang = document.getElementById("jajargenjang");
    if (jajargenjang.style.display==="none") {
        jajargenjang.style.display="block";
    }
    else {
        jajargenjang.style.display="none";
    }
}

function luasSegitiga() {
    const alas = parseFloat(document.getElementById("alasSegitiga").value);
    const tinggi = parseFloat(document.getElementById("tinggiSegitiga").value);
    const hasil = 0.5*alas*tinggi;
    document.getElementById("hasilLuasSegitiga").textContent = hasil;
    return false;
}

function resetLuasSegitiga() {
    document.getElementById("luasSegitiga").reset();
    const resetHasil = document.getElementById("hasilLuasSegitiga");
    resetHasil.remove();
}


function kelilingSegitiga () {
    const a = parseFloat(document.getElementById("sisiA").value);
    const b = parseFloat(document.getElementById("sisiB").value);
    const c = parseFloat(document.getElementById("sisiC").value);
    const hasil = a+b+c;
    document.getElementById("hasilKelilingSegitiga").textContent = hasil;
    return false;
}

function resetKelilingSegitiga() {
    document.getElementById("kelilingSegitiga").reset();
    const resetHasil = document.getElementById("hasilKelilingSegitiga");
    resetHasil.remove();
}


function luasJajarGenjang () {
    const alas = parseFloat(document.getElementById("alasJajarGenjang").value);
    const tinggi = parseFloat(document.getElementById("tinggiJajarGenjang").value);
    const hasil = alas*tinggi;
    document.getElementById("hasilLuasJajarGenjang").textContent = hasil;
    return false;
}

function resetLuasJajarGenjang() {
    document.getElementById("luasJajarGenjang").reset();
    const resetHasil = document.getElementById("hasilLuasJajarGenjang");
    resetHasil.remove();
}


function kelilingJajarGenjang () {
    const a = parseFloat(document.getElementById("sisiAlas").value);
    const m = parseFloat(document.getElementById("sisiMiring").value);
    const hasil = 2 * (a+m);
    document.getElementById("hasilKelilingJajarGenjang").textContent = hasil;
    return false;
}

function resetKelilingJajarGenjang() {
    document.getElementById("kelilingJajarGenjang").reset();
    const resetHasil = document.getElementById("hasilKelilingJajarGenjang");
    resetHasil.remove();
}
