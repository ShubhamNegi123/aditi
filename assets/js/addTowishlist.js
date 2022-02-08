/* $(function () {

    ShowingWishlist();
    function ShowingWishlist() {
        let wishlistString = localStorage.getItem('Wishlist');
        let wishlist = JSON.parse(wishlistString);
        // if cart is empty
        if (wishlist == null || wishlist.length == 0) {
            $('.wishlist').html('<h2 class="text-center my-5">Wishlist is empty</h2>');

        } else {
        
            // getting value of total items  on bag
            let totalItemsIntowishlist = wishlist.length;
            console.log(totalItemsIntowishlist);
            $('.total-items-into-wishlist').text(totalItemsIntowishlist);


            let ourWishlist = `
             <div class="row">
             `;

            wishlist.map((item)=>{
                ourWishlist += `
                <div class="col-lg-4">
                    <div class="product-card">
                        <div class="products-img-wrapper">
                            <img src="${item.pPhoto}" alt="free-shiping-img">
                        </div>
                        <h3>${item.pName}</h3>
                        <p>We ship free when you order above INR <span class="wishlist-pPrice">${item.pPrice}</span></p>
                        <p class="remove-from-wishlist">Remove</p>
                    </div>
                </div>
                `;               
            });
            ourWishlist = ourWishlist + `</div>`;

            $('.wishlist').html(ourWishlist);

        }
    }

    









}); */