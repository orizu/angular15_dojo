class ListPaginationCtrl {
  constructor() {
    'ngInject';

  }

  pageRange(total) {
    let pages = [];

    pages = Array(total).keys();
  }
}

let ListPagination = {
  bindings: {
    totalPages: '=',
    currentPages: '='
  },
  controller: ListPaginationCtrl,
  templateUrl: 'components/article-helpers/list-pagination.html'
}

export default ListPagination;