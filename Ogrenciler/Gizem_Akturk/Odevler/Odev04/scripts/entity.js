import { UI } from "./ui.js";
import Request from "./requests.js";

const request = new Request();

class Entity {
  constructor(id, name, content, price, imgUrl, category, stock) {
    this.id = id;
    this.name = name;
    this.content = content;
    this.price = price;
    this.imgUrl = imgUrl;
    this.category = category;
    this.stock = stock;
  }
  async addEntity() {
    request
      .post(this)
      .then((entity) => {
        UI.showAlert("Entity başarıyla eklendi", "success");
        UI.addEntityToUI(entity);
        UI.clearInputs();
      })
      .catch((err) => UI.showAlert(err, "danger"));
  }

  async deleteEntity(e) {
    request
      .delete(this.id)
      .then((message) => {
        UI.deleteEntityFromUI(e);
        UI.showAlert("Entity başarıyla silindi", "success");
      })
      .catch((err) => UI.showAlert(err, "danger"));
  }
  async updateEntity() {
    request
      .put(this)
      .then((entity) => {
        UI.showAlert("Entity başarıyla güncellendi", "success");
        UI.updateEntityToUI(entity);
        UI.clearInputs();
      })
      .catch((err) => UI.showAlert(err, "danger"));
  }
  async getEntity() {
    request
      .get(this.id)
      .then((entity) => {
        UI.fillInputs(entity);
        UI.getEntityToUI(entity);
      })
      .catch((err) => UI.showAlert(err, "danger"));
  }
  async getAllCategories() {
    const categories = [];
    try {
      const entities = await request.getAll();
      entities.map((entity) => {
        if (!categories.includes(entity.category.toLowerCase())) {
          categories.push(entity.category.toLowerCase());
        }
      });
    } catch (err) {
      UI.showAlert(err, "danger");
    }
    return categories;
  }

  async getAllEntities() {
    request
      .getAll()
      .then((entities) => {
        UI.loadAllEntitiesToUI(entities);
      })
      .catch((err) => UI.showAlert(err, "danger"));
  }

  filterByCategory(category, searchInput, sortBy) {
    request
      .getAll()
      .then((entities) => {
        const filteredEntities = [...entities]
          .filter(
            (entity) =>
              category === "all" || entity.category.toLowerCase() === category
          )
          .filter(
            (entity) =>
              searchInput === "" ||
              entity.title.match(new RegExp(searchInput, "gi")) ||
              entity.content.match(new RegExp(searchInput, "gi"))
          );

        const sortOptions = {
          newest: (a, b) => new Date(a.date) - new Date(b.date),
          oldest: (a, b) => new Date(b.date) - new Date(a.date),
          "a-z": (a, b) => a.title.localeCompare(b.title),
          "z-a": (a, b) => b.title.localeCompare(a.title),
        };
        if (sortOptions.hasOwnProperty(sortBy)) {
          filteredEntities.sort(sortOptions[sortBy]);
        }
        filteredEntities.length === 0
          ? UI.showAlert("Herhangi bir entity bulunamadı", "warning")
          : UI.loadAllEntitiesToUI(filteredEntities);
      })
      .catch((err) => UI.showAlert(err, "danger"));
  }
}

export { Entity };
