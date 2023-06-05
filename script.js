/*
// container icindeki herhangi bir div tikladigim zaman event calisir ve 
// container icerisinde tıkladigim yere gore row, seat veya screen target bana verebilir
// targer kod dizini hedef alır cunku 
container.addEventListener("click", function(e) {
    console.log(e.target);
})
*/


// classList benim 0'dan class atamamı saglayan bir kod parcasidir
// contains ile kullanildigında ise var mı yok mu kontrol etmemi saglar buna gore 
// true veya false dondurur 
// console.log(e.target.classList.contains("seat")) koltuklara tiklandiginde true doner 
// event.target ile dizin ulasıldı, classlist class atması bakıldı ve contains ile true/false alındı


// target özelligi bana o işlevin divin kod parçasını bana verir hedef belirtir...
// classList.add ile direkt class ekleme yapabilirim fakat
// classList.toggle ile varsa class silme işlemi yoksa class ekle işlemi yapılır.


const container = document.querySelector(".container");
const count = document.querySelector("#count");
const amount = document.querySelector("#amount");
const select = document.querySelector("#movie");

// container icerisinde herhangi bir yer icin addevent ile click metot eklemesi yapildi
container.addEventListener("click", function(e) {   // e event yerine direkt tanimlandi

// eger e.target kod parçası icerisinde seat versa ve reserved sınıfı yoksa bu islemi gerceklestir
    if(e.target.classList.contains("seat") && !e.target.classList.contains("reserved")) {

        // toggle islemi ile selected class yapısını ekle eger selected varsa sil
        // classlar css'de tanimlandi
        e.target.classList.toggle("selected");

        // her seçim yapılıdıgında fonksiyon sayeisinde yazi, bilgiler verildi
        calculateTotal();

    }

});


// change metodu ile fonksiyon degerleri degistirildi
select.addEventListener("change", function(e) { 
    
    calculateTotal();

})


// container zaten document ile container div atanması yapıldı
// let selectedSeatCount ile container document zaten alınmıstı, tekrar document denilmedi
// cunku container icerisindeki kod satırları alındı
// seat birden cok kod satırında kullanıldıgı icin querySelectorAll ile seat ve selected classları
// alındı, length ile seat ve selected classları olan satirların saiysal degeri tutuldu



function calculateTotal() {

    // container document zaten var container içerisindeki tum seat selected birlikte yazilanlarin
    // uzunlukları alındı
    let selectedSeatCount = container.querySelectorAll(".seat.selected").length;
    // bu uznluk degeri count degerine aktarıldı
    count.innerHTML = selectedSeatCount;

    // movie id icerisindeki value degeri alindi
    // value degeri ve uzunluk çarpımı bana tl degerini verdi ve inner ile yazdirdik
    let price = select.value;
    amount.innerHTML = price * selectedSeatCount;

}