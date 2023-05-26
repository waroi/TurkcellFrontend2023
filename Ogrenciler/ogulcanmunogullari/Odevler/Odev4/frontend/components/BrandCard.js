const BrandCard = (brand) => {
 return `<div class="form-check mt-16">
        <input class="form-check-input" type="radio" name="brand" id="${brand}" />
        <label class="form-check-label" for="${brand}"> ${brand} </label>
       </div>`;
};
export default BrandCard;
