const turler = (turler) => {
 return turler.includes(', ')
  ? turler
     .split(', ')
     .map(
      (tur) =>
       `<span class="turler ${
        tur.toLowerCase() == 'aksiyon'
         ? 'bg-warning'
         : tur.toLowerCase() == 'bilim kurgu'
         ? 'bg-success text-white'
         : 'bg-primary text-white'
       } ">${tur}</span>`,
     )
     .join(' ')
  : turler
     .split(' ')
     .map(
      (tur) =>
       `<span class="turler ${
        tur.toLowerCase() == 'tarih'
         ? 'bg-warning'
         : tur.toLowerCase() == 'ekonomi'
         ? 'bg-success text-white'
         : 'bg-primary text-white'
       } ">${tur}</span>`,
     )
     .join(' ');
};
export default turler;
