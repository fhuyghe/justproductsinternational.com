<?php

namespace App\Controllers;

use Sober\Controller\Controller;
use WP_Query;

class FrontPage extends Controller
{
    public function data()
    {
        $data = [];
        $data['intro_video'] = get_field('intro_video');
        $data['menards'] = get_field('menards');
        $data['map'] = get_field('map');
        $data['how_it_works'] = get_field('how_it_works');
        $data['products'] = get_field('products');
        $data['testimonials'] = get_field('testimonial');
        $data['contact'] = get_field('contact');
        $data['faq'] = get_field('faq');

        return $data;
    }

    public function allproducts(){
        $productGroup = get_field('products');

        $args = array(
            'post_type' => 'products',
            'post__not_in' => [$productGroup['featured_product']->ID],
	    	'posts_per_page' => -1,
	    );
	    $the_query = new WP_Query( $args );
	    return $the_query->posts;
    }

}
