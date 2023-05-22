class DetailModal {
  static detailMusicFromDetailModal(music) {
    musicList.innerHTML += `
    <div class="modal fade" id="a${music.id}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content detailModal">
      <div class="modal-header">
        <button type="button" class="close btn fs-3" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 class="modal-title mx-auto" id="myModalLabel">${music.name}</h4>
      </div>
      <div class="modal-body">
        <img class="card-img-top mb-3" width="100%" height="320" src="${music.imageUrl}">
          <h3 class= "card-text post-author img-fluid filter-author mb-3">Yazar: ${music.writer}</h3>
          <p>${music.textContent}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default fs-5" data-bs-dismiss="modal">Kapat</button>
      </div>
    </div>
  </div>
</div>
`;
  }
}

export default DetailModal;
