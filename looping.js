// 1
document.write("No.1<br>");
for (let user = 1; user <=100; user++){ 
    document.write ("user ke" + user + "<br>");
}


// 2
document.write("No.2<br>");
for (let angka = 0; angka < 20; angka +=2){
    document.write(angka + "<br>");
}


// 3
document.write("No.3<br>");
for(let nilai=0; nilai <= 20; nilai++){
    if(nilai % 2 == 0){
        document.write(nilai , "Genap<br>");
    }
    else {
        document.write(nilai , "Ganjil<br>");
   }
}


// 4
document.write("No.4<br>");
let ulangi= confirm("Apakah anda mau mengulang?");
let count= 0;

while(ulangi){
    count++;
    ulangi =confirm("Apakah anda mau mengulang?");
}
document.write("Perulangan sudah dilakukan sebanyak " + count + " kali<br>");


// 5
document.write("No.5<br>");
let kuis= prompt("Sebutkan kepanjangan dari IB?");
while (kuis != null) {
    if (kuis != "Impact Byte") {
        kuis = prompt ("Jawaban salah, yuk tebak lagi!")
    }
    else {
        alert ("Selamat jawaban kamu benar!");
        break;
    }
}
document.write("Selamat jawaban kamu benar!");