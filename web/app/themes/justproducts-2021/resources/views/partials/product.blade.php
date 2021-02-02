@if($product)
<div class="product">
    <div class="wrap" style="background-image: url({{ get_the_post_thumbnail_url($product) }});">
        <div class="info">
            <h5>{{ $product->post_title }}</h5>
            <p>See on <a href="{{ get_field('menards_link', $product->ID) }}" target="_blank">Menards</a></p>
        </div>
    </div>
</div>
@endif