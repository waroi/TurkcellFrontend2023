import { elements } from "./selectors.js";
import { Entity } from "./entity.js";

class UI {
  static loadAllEntitiesToUI(entities) {
    entities.map((entity) => {
      this.addEntityToUI(entity);
    });
  }
  static addEntityToUI(entity) {
    const entityItem = document.createElement("li");
    entityItem.id = entity.id;
    entityItem.innerHTML = UI.buildEntityCard(entity);
    entityItem.addEventListener("mouseover", this.addHoverEffect);
    entityItem.addEventListener("mouseout", this.removeHoverEffect);
    entityItem.addEventListener("click", this.deleteEntityEvent);
    entityItem.addEventListener("click", this.updateEntityEvent);
    entityItem.addEventListener("click", this.contentEntityEvent);
    elements.entityList.appendChild(entityItem);
  }

  static addHoverEffect() {
    this.classList.add("hover");
    this.querySelector(".edit").classList.remove("hidden");
  }

  static removeHoverEffect() {
    this.classList.remove("hover");
    this.querySelector(".edit").classList.add("hidden");
  }
  static buildEntityCard(entity) {
    return `
    <div class="col-3">
    <div class="card" style=" position: relative;">
        <div class="edit hidden me-2 mt-1" style="position: absolute; top: 0; right: 0;">
            <a id="update-blog" class="btn btn-success rounded-circle mt-1" data-bs-toggle="modal"
                data-bs-target="#exampleModal"><i class="fa fa-pencil"></i></a>
            <a href="#" id="delete-blog" class="btn btn-danger rounded-circle mt-1"><i
                    class="fa fa-trash"></i></a>

        </div>
        <img src="./images/banner-1.jpg" class="img-fluid rounded" style="max-height:153px !important"
            alt="...">
        <div class="card-body">

            <div class="row">
                <div class="col-8">
                    <h5 class="card-title">${entity.name}</h5>
                </div>
                <div class="col-4">
                    <h5>$21,23</h5>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <p class="card-text text-muted" style="font-size: 0.75rem">${entity.category}</p>
                </div>
            </div>
            <div class="row mb-2 mt-2">
                <div class="col-6 d-flex align-items-center">
                    <p class="card-text text-muted" style="font-size: 0.75rem">
                        <!-- Rates -->
                        <i class="fa fa-star" style="color: #FFD700;"></i>
                        <i class="fa fa-star" style="color: #FFD700;"></i>
                        <i class="fa fa-star" style="color: #FFD700;"></i>
                        <i class="fa fa-star" style="color: #FFD700;"></i>
                        <i class="fa fa-star" style="color: #a7a599;"></i>
                        <span>(123)</span>
                    </p>
                </div>
                <div class="col-6 text-end">
                    <a href="#" class="btn btn-outline-primary" data-blog-id="${entity.id}" id="read"
                        data-bs-toggle="modal" data-bs-target="#contentModal"
                        style="text-decoration:none">Add to Cart</a>
                </div>
            </div>
        </div>
    </div>
</div>
            `;
  }
  static deleteEntityFromUI(e) {
    e.target.parentElement.parentElement.parentElement.remove();
  }
  static updateEntityToUI(entity) {
    const entityItem = document.getElementById(entity.id);
    entityItem.innerHTML = UI.buildEntityCard(entity);
  }
  static fillInputs(entity) {
    elements.entityName.value = entity.name;
    elements.entityContent.value = entity.content;
    elements.entityPrice.value = entity.price;
    elements.entityImgUrl.value = entity.imgUrl;
    elements.entityCategory.value = entity.category;
    elements.entityStock.value = entity.stock;
  }
  static clearInputs() {
    elements.entityName.value = "";
    elements.entityContent.value = "";
    elements.entityPrice.value = "";
    elements.entityImgUrl.value = "";
    elements.entityCategory.value = "";
    elements.entityStock.value = "";
  }
  static contentEntityToUI(entity) {
    const entityItem = document.getElementById(entity.id);
    entityItem.innerHTML = UI.buildEntityCard(entity);
  }
}
export { UI };
