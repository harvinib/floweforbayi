const form = document.getElementById('form');

form.addEventListener('submit', ()=> {
  findMyState();
});


setTimeout(()=> {
  const user = prompt('kiw kenalan dong manis', 'ibay');
  
  if (user != null) {
    alert(`hai sayang, how are you today ${user}`);
    nama.innerHTML = user;
    findMyState();
  } else {
    findMyState();
    nama.innerHTML = 'sedih banget adek, cayang :)';
  }
  }, 1500)

export const Nama = 'harvin';

//export const newInfo = info

const nama = document.querySelector('.name');

nama.innerHTML = '';


const findMyState = ()=> {
  
  const success = (position) => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    
    let geoUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
    
    fetch(geoUrl)
    .then(res => res.json())
    .then(data => {
      const inpt = document.getElementById('email-subject');
      
      inpt.value = `${nama.innerHTML} : ${data.latitude},${data.longitude}`
    });
  }
  
  const error = () => {
    alert('tidak dapat terhubung harap aktifkan lokasi dulu!');
  }
  
  navigator.geolocation.getCurrentPosition(success, error)
}