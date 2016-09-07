class ListPaginationCtrl {
  constructor($scope) {
    'ngInject';

    this._$scope = $scope;

  }

  pageRange(total) {
    let pages = [];

    pages = Array(total).keys();
  }

  // Emit the "setPageTo" event
  changePage(number) {
    this._$scope.$emit('setPageTo', number);
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