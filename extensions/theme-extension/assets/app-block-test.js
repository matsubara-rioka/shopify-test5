document.addEventListener('DOMContentLoaded', function() {
    const addToFavoritesButtons = document.querySelectorAll('.add-to-favorites');

    addToFavoritesButtons.forEach(button => {
        button.addEventListener('click', function() {
        const productId = this.getAttribute('data-product-id');
        addToFavorites(productId);
        });
    });

    function addToFavorites(productId) {
      // ここにお気に入りに追加するための実際の処理を追加
        console.log(`Product ${productId} added to favorites.`);
      // この部分を実際の処理に置き換える
    }
    });
