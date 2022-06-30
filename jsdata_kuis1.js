const firebaseConfig = {
    apiKey: "AIzaSyD7ZHBV9Tt0BrXFsZN0ABtwv0NJNOhyG44",
    authDomain: "soal-5b295.firebaseapp.com",
    projectId: "soal-5b295",
    storageBucket: "soal-5b295.appspot.com",
    messagingSenderId: "1042502424492",
    appId: "1:1042502424492:web:24fec440f23c3a71888c09"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);




let selanjutnya = document.querySelector('.lanjut');
let datadiri = document.querySelector('.data_diri');
namanya = document.getElementById('nama');
kelasnya = document.getElementById('kelas');
sekolah = document.getElementById('sekolah');
let sekolahfix = '';
let kelasfix = '';

selanjutnya.addEventListener('click', function () {
    let cek = 0;
	
    if (namanya.value == "") {
        if (namanya.className.indexOf('tt_salah') == -1) {
            namanya.className += ' tt_salah';
        }
    } else {
        namanya.className = namanya.className.replace('tt_salah', '');
        cek += 1;

    }

    if (kelasnya.value == "0") {
        if (kelasnya.className.indexOf('tt_salah') == -1) {
            kelasnya.className += ' tt_salah';
        }
    } else {
        kelasnya.className = kelasnya.className.replace('tt_salah', '');
        if (kelasnya.value == "1") {
            kelasfix = "9A";
        } else if (kelasnya.value == "2") {
            kelasfix = "9B";
        } else if (kelasnya.value == "3") {
            kelasfix = "9C";
        } else if (kelasnya.value == "4") {
            kelasfix = "9D";
        } else if (kelasnya.value == "5") {
            kelasfix = "9E";
        } else if (kelasnya.value == "6") {
            kelasfix = "9F";
        } else if (kelasnya.value == "7") {
            kelasfix = "9G";
        } else if (kelasnya.value == "8") {
            kelasfix = "9H";
        } else if (kelasnya.value == "9") {
            kelasfix = "9I";
        }
        cek += 1;
    }

    if (sekolah.value == "0") {
        if (sekolah.className.indexOf('tt_salah') == -1) {
            sekolah.className += ' tt_salah';
        }
    } else {
        sekolah.className = sekolah.className.replace('tt_salah', '');
        if (sekolah.value == "1") {
            sekolahfix = "SMP Negeri 24 Banjarmasin";
        }
        cek += 1;
    }

    // console.log(sekolahfix);

    if (cek != 3) {
        alert("lengkapi dulu data dari anda");
    } else if (cek == 3) {
        // document.getElementById('dafis').className += ' hilang';
        document.getElementById('data').className += ' hilang';
        datadiri.className += ' hilang';
        document.getElementById('kiri').className = document.getElementById('kiri').className.replace('hilang', '');
        document.getElementById('kanan').className = document.getElementById('kanan').className.replace('hilang', '');
    }
});

window.onload = function () {
    namanya.value = "";
    kelasnya.value = value = "0";
    sekolah.value = value = "0";


    document.getElementById('kiri').className += ' hilang';
    document.getElementById('kanan').className += ' hilang';


}

// -----------------------------------------------------------------------------------------
// mengambil data dan menampilkanya

let dat = new XMLHttpRequest();
dat.onreadystatechange = function () {
    
    cek = [];
    jwbs = [];
    hasilakhir = 0;
    benarr = 0;
    salahh = 0;

    if (dat.readyState == 4 && dat.status == 200) {
        // tankap apapun responsnya tangkap,lalu diubah ke objeck
        let data = JSON.parse(this.responseText);
        // melihat data 
        // console.log(data);

        // ---------------------------------
        // acak urutan soal
        //random urutan
        for (let x = 0; x < 100; x++) {
            // acak angka dengan batas length.data dan minimum 0
            let angka = Math.floor(Math.random() * data.length) + 0;
            cek.push(angka);
        }
        // membuang angka yang sama
        cek = Array.from(new Set(cek));
        console.log(cek);
        // ---------------------------------
        // ambil data tertentu

        for (let i = 0; i < cek.length; i++) {
            let nilai = cek[i];

            let soaldata = data[nilai]["soal" + nilai]["soal"];
            let jwb0 = data[nilai]["soal" + nilai]["a"];
            let jwb1 = data[nilai]["soal" + nilai]["b"];
            let jwb2 = data[nilai]["soal" + nilai]["c"];
            let jwb3 = data[nilai]["soal" + nilai]["d"];
            let nih = data[nilai]["soal" + nilai]["nih"];
            let bnr = data[nilai]["soal" + nilai]["benar"];

            let jwb = [jwb0, jwb1, jwb2, jwb3, nih];

            jwbs.push(bnr);

            // ---------------------------------
            // // rangkai konten soal;
            // let bg_pertanyaan = document.getElementById('bg_pertanyaan');
            // if (i != 0) {
            //     bg_pertanyaan.className += " hilang";
            // }

            for(let i=1; i<=10; i++){
                let radio = document.getElementById("radio"+i);
                radio.checked = false;
            }

            //nomor ke-
            let nomor = document.querySelectorAll(".soal #nomornya");
            nomor[i].innerHTML = i+1;

            //soal
            let soal = document.querySelectorAll(".bg_pertanyaan #soalnya");
            soal[i].innerHTML = soaldata;
            
            //pilihan a
            let piliha = document.querySelectorAll(".textnya #pilihannya0");
            piliha[i].innerHTML = jwb0;

            //pilihan b
            let pilihb = document.querySelectorAll(".textnya #pilihannya1");
            pilihb[i].innerHTML = jwb1;
            
            //pilihan c
            let pilihc = document.querySelectorAll(".textnya #pilihannya2");
            pilihc[i].innerHTML = jwb2;

            //pilihan d
            let pilihd = document.querySelectorAll(".textnya #pilihannya3");
            pilihd[i].innerHTML = jwb3;
            
            let bg_pertanyaan = document.getElementsByClassName("bg_pertanyaan");
            
            for(let u=0; u<bg_pertanyaan.length; u++){
                if(u!=0){
                    if(bg_pertanyaan[u].className.indexOf('hilang') == -1){
                        bg_pertanyaan[u].className += " hilang";
                            
                        }
                }
            }
            // //nomor ke
            // document.getElementById('nomornya').innerHTML = i+1;

            // // ---------------------------------

            // //soal
            // document.getElementById("soalnya").innerHTML = soaldata;

            // // ---------------------------------

            

            // // ---------------------------------

            

            // // ---------------------------------

            // //tombol selanjutnya
            // let nav_selanjut = document.getElementById("nav_selanjut");
            // if (i == (cek.length - 1)) {
            //     nav_selanjut.className += " disable";
            // }

            // ---------------------------------

            // ---------------------------------


        }

        let bg_pertanyaan = document.getElementsByClassName("bg_pertanyaan");
        
        //fungsi tombol lanjut
        let lanjut = document.querySelectorAll(".nav_selanjut");
        for(let y=0; y<lanjut.length; y++){
            lanjut[y].addEventListener('click', function(){
                if(lanjut[y].className.indexOf('disable') == -1){
                    if(bg_pertanyaan[y].className.indexOf('hilang') == -1){
                        bg_pertanyaan[y+1].className = bg_pertanyaan[y+1].className.replace("hilang","");
                        bg_pertanyaan[y].className += " hilang";
                    }
                    console.log(bg_pertanyaan[y+1]);       
                }
            })
        }

        //fungsi tombol sebelumnya
        let sebelum = document.querySelectorAll(".nav_sebelum");
        for(let y=0; y<sebelum.length; y++){
            sebelum[y].addEventListener('click', function(){
                if(sebelum[y].className.indexOf('disable') == -1){
                    if(bg_pertanyaan[y].className.indexOf('hilang') == -1){
                        bg_pertanyaan[y-1].className = bg_pertanyaan[y-1].className.replace("hilang","");
                        bg_pertanyaan[y].className += " hilang";
                    }
                }
            })
        }

        //navigasi soal
        let soal_nav = document.querySelectorAll(".soal_nav");
        for(let y=0; y<soal_nav.length; y++){
            soal_nav[y].addEventListener('click', function(){
                for(let u=0; u<bg_pertanyaan.length; u++){
                    if(bg_pertanyaan[u].className.indexOf('hilang') == -1){
                        bg_pertanyaan[u].className += " hilang";
                    }
                }
                bg_pertanyaan[y].className = bg_pertanyaan[y].className.replace("hilang","");
            })
        }
        
        //mewarnai soal yang sdh dijawab
        let soall = document.querySelectorAll(".soall");
        for(let y=0; y<soall.length; y++){
            soall[y].addEventListener('click',function(){
                let pilih = document.querySelectorAll(".bg_pilihan input");
                for(let j=0; j<pilih.length; j++){
                    pilih[j].addEventListener('click',function(){
                        soal_nav[y].className = soal_nav[y].className.replace("belum","sudah");
                    })
                }
            })
        }

        //cek jawaban
        let selesai = document.querySelector(".selesai");

        selesai.addEventListener("click", function(){
            let sarat = 0;
            
            for (let t = 0; t < jwbs.length; t++) {
                if ((soal_nav[t].className.indexOf('belum') == -1)) {
                    sarat = sarat + 1;
                    
                }
            }
            console.log(sarat);

            if (sarat == jwbs.length) {
                // array kunci
                // console.log(jwbs);
                hasilakhir = 0;
                benarr = 0;
                salahh = jwbs.length;

                for (let i = 0; i < jwbs.length; i++) {
                    let a = i+1;
                    let namaradio = document.getElementsByName("radio"+a);
                    let checked = false;
                    for (let j = 0; j < namaradio.length; j++) {
                        if(namaradio[j].checked){
                            checked = true;
                            if(namaradio[j].value == jwbs[i]){
                                hasilakhir = hasilakhir + 10;
                                benarr = benarr + 1;
                            } else {
                                hasilakhir = hasilakhir;
                            }
                        }
                    }
                }

                
                // simpan kedatabase----------
                console.log(namanya.value);
                console.log(sekolahfix);
                console.log(kelasfix);
                console.log(hasilakhir);
                let waktunya = waktu();
                let harinya = hari();

                createTask(sekolahfix, namanya.value, kelasfix, hasilakhir, waktunya, harinya);

                let namainput = document.querySelector('.nama');
                namainput.innerText = namanya.value;

                let sekolahinput = document.querySelector('.sekolah');
                sekolahinput.innerText = sekolahfix;

                let kelasinput = document.querySelector('.kelas');
                kelasinput.innerText = kelasfix;

                let hariinput = document.querySelector('.hari');
                hariinput.innerText = harinya;

                let waktuinput = document.querySelector('.waktu');
                waktuinput.innerText = waktunya;

                let hasillinput = document.querySelector('.hasill');
                hasillinput.innerText = hasilakhir;

                let kirihilang = document.querySelector('.kiri');
                kirihilang.className += ' hilang';

                let kananhilang = document.querySelector('.kanan');
                kananhilang.className += ' hilang';

                let datanya = document.querySelector('.dataaa');
                datanya.className = datanya.className.replace('hilang', '');

                if(hasilakhir<=75){
                    let ulang = document.getElementById("ulang");
                    ulang.className = ulang.className.replace("hilang","");
                }
            } else {
                alert('Masih Ada Soal Yang Belum Dijawab, Periksa Kembali . . . !');
            }
            
        })


        


    }
MathJax.typeset();    
}


dat.open('GET', 'kuis1.json', true);
dat.send();

//FUNGSI WAKTU DAN HARI
var d = new Date();
var t = d.getTime();
var counter = t;

// ambil jamnya
window.setTimeout("waktu()", 1000);

function waktu() {
    var tanggal = new Date();
    setTimeout("waktu()", 1000);
    return (tanggal.getHours() + ":" + tanggal.getMinutes() + ":" + tanggal.getSeconds());
}

// harinya
function hari() {
    tanggallengkap = new String();
    namahari = ("Minggu Senin Selasa Rabu Kamis Jumat Sabtu");
    namahari = namahari.split(" ");
    namabulan = ("Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember");
    namabulan = namabulan.split(" ");
    tgl = new Date();
    hari = tgl.getDay();
    tanggal = tgl.getDate();
    bulan = tgl.getMonth();
    tahun = tgl.getFullYear();
    tanggallengkap = namahari[hari] + ", " + tanggal + " " + namabulan[bulan] + " " + tahun;
    return (tanggallengkap);
}


function createTask(sekolah, nama, kelas, nilai, waktunya, hari) {
    counter += 1;
    var task = {
        id: counter,
        sekolah: sekolah,
        nama: nama,
        kelas: kelas,
        nilai: nilai,
        waktu: waktunya,
        hari: hari
    }

    let db = firebase.database().ref("kuis1/" + counter);
    db.set(task);

}

// //tomboll ulang
// let ulangin = document.querySelector('.tmblUlang');

// ulangin.addEventListener('click', function () {
//     document.getElementById("halskor").className += " hilang";
//     document.getElementById("data").className = document.getElementById("data").className.replace("hilang","");
//     datadiri.className = datadiri.className.replace("hilang","");
//     document.getElementById('nis').value="";
//     document.getElementById('nama').value="";
//     document.getElementById('kelas').value="0";
//     document.getElementById('sekolah').value="0";

//     for(let i=1; i<=10; i++){
//         let radio = document.getElementById("radio"+i);
//         radio.checked = false;
//     }
    
// })

