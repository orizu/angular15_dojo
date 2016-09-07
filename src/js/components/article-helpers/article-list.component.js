class ArticleListCtrl{
  constructor (Articles, $scope) {
    'ngInject';

    this._Articles = Articles;
    this.setListTo(this.listConfig);


    // Listen to setPageTo event, fired by pagination component
    // when the user clicks to view a different page
    $scope.$on('setPageTo', (ev, pageNumber) => {
      this.setPageTo(pageNumber);
    });
  }

  pageRange (total) {
    let pages = [];
//    pages = Array(total).keys();

    for (var i = 0; i < total; i++) {
      pages.push(i + 1);
    }

    return pages;
  }

  setListTo(newList) {
    this.list = [];
    this.listConfig = newList;
    this.runQuery();
  }

  setPageTo(pageNumber) {
    this.listConfig.currentPage = pageNumber;

    this.runQuery();
  }

  runQuery() {
    this.loading = true;

    let queryConfig = {
      type: this.listConfig.type,
      filters: this.listConfig.filters || {}
    };

    // Set limit from the components limit attribute
    queryConfig.filters.limit = this.limit;

    // If no page set, set page to 1
    if (!this.listConfig.currentPage) {
      this.listConfig.currentPage = 1;
    }

    // Add the offset filter
    queryConfig.filters.offset = (this.limit * (this.listConfig.currentPage - 1));

    // Run the query
    this._Articles
      .query(queryConfig)
      .then(
        (res) => {
          this.loading = false;

          // Update list and total pages
          this.list = res.articles;

          this.listConfig.totalPages = Math.ceil(res.articlesCount / this.limit);
        }
      );

  }
};


let ArticleList= {
  bindings: {
    limit: '=',
    listConfig: '='
  },
  controller: ArticleListCtrl,
  templateUrl: 'components/article-helpers/article-list.html'
};

export default ArticleList;