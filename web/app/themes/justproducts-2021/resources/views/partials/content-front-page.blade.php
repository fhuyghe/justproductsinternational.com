@php $intro_video = $data['intro_video'] @endphp

<section id="intro">
  <div class="image">
    <img src="{{ $intro_video['poster']['sizes']['medium'] }}" />
  </div>

    @php the_content() @endphp
    @if($intro_video)
    <div class="video">
      <video autoplay loop muted poster="{{ $intro_video['poster']['url'] }}">
        <source type="video/mp4" src="{{ $intro_video['video_mp4'] }}" />
        <source type="video/ogv" src="{{ $intro_video['video_ogv'] }}" />
        <source type="video/webm" src="{{ $intro_video['video_webm'] }}" />
      </video>
    </div>
    @endif
</section>

@php $menards = $data['menards'] @endphp
@if($menards)
  <section id="menards">
    <div class="row">
      <div class="col-md-6 info" >
      <div id="menardInfo">
        <div class="logo">
          <img src="{{ $menards['logo']['sizes']['medium'] }}">
        </div>
        {{ $menards['description'] }}
        <div class="facts">
        <div class="row">
          @foreach ($menards['facts'] as $fact)
              <div class="col-4">
                <div class="fact">
                  <div class="number">{{ $fact['number'] }}</div>
                  <div class="unit">{{ $fact['unit'] }}</div>
                </div>
              </div>
          @endforeach
        </div>
      </div>
      </div>
      </div>
      <div class="col-md-6 images">
        @foreach ($menards['images'] as $image)
          <img src="{{ $image['sizes']['large'] }}">
        @endforeach
      </div>
    </div>
  </section>
@endif

@php $map = $data['map'] @endphp
@if($map)
  <section id="map">
    <header>
      <h3>{{ $map['title'] }}</h3>
      <a class="button" href="{{ $map['link'] }}" target="_blank">{{ $map['link_text'] }}</a>
    </header>
    <div class="wrap">
      <div class="arrow reveal">
        @include('partials/arrow')
      </div>
    <div class="map-wrap">
      <div id="interactiveMap" class="reveal">
        {!! do_shortcode('[display-map id="105"]') !!}
      </div>
      </div>
    </div>
  </section>
@endif

{{-- How-to --}}
@php $howItWorks = $data['how_it_works'] @endphp
@if($howItWorks)
  <section id="how">
    <header>
      <h2>{{ $howItWorks['title'] }}</h2>
      <h3>{{ $howItWorks['subtitle'] }}</h3>
    </header>

    <div class="row steps reveal">
      @foreach ($howItWorks['steps'] as $step)
        <div class="col-12 col-md-3 step">
          <div class="wrap">
          <div class="thumbnail">
            <img src="{{ $step['icon']['sizes']['thumbnail'] }}">
          </div>
          <div class="number">
            {{ $loop->iteration }}
          </div>
          <div class="info">
            <h4>{{ $step['title'] }}</h4>
            <p>{{ $step['description'] }}</p>
          </div>
        </div>
        </div>
      @endforeach
    </div>
    <a class="button" href="#contact" target="_blank">Contact Us</a>
  </section>
@endif

{{-- Products --}}
@php $products = $data['products'] @endphp
@if($products)
  <section id="products">
    <header>
      <h2>{{ $products['title'] }}</h2>
      <h3>{{ $products['subtitle'] }}</h3>
      <p>{{ $products['description'] }}</p>
    </header>

      <div class="featured">
        @php $product = $products['featured_product'] @endphp
        @include('partials.product')
      </div>

      @if($allproducts)
          <div class="carousel all-products">
        @foreach ($allproducts as $product)
            @include('partials.product')
          @endforeach
        </div>    
      @endif
  </section>
@endif

{{-- Testimonials --}}
@php $testimonials = $data['testimonials'] @endphp
@if($testimonials)
  <section id="testimonials">
    <header>
      <h2>{{ $testimonials['title'] }}</h2>
      <h3>{{ $testimonials['subtitle'] }}</h3>
    </header>

    <div class="testimonials carousel">
      @foreach ($testimonials['testimonials'] as $testimonial)
        <div class="testimonial">
        <div class="wrap">
          <div class="thumbnail">
            <img src="{{ $testimonial['logo']['sizes']['thumbnail'] }}">
          </div>
          {!! $testimonial['testimonial'] !!}
          <h4>{{ $testimonial['author'] }}</h4>
          <h5>{{ $testimonial['country'] }}</h5>
        </div>
      </div>
      @endforeach
    </div>
  </section>
@endif

{{-- Contact --}}
@php $contact = $data['contact'] @endphp
@if($contact)
<section id="contact">
  <header>
    <h2>{{ $contact['title'] }}</h2>
  </header>
  <div class="row">
    <div class="col-md-6">
      <p>{{ $contact['description'] }}</p>
      <p class="phone">
        <img src="@asset('images/whatsapp-icon.png')" />
        {{ $contact['phone_number'] }}</p>
      <p class="email">
        <img src="@asset('images/email-icon.png')" />
        <a href="mailto:{{ $contact['email'] }}">{{ $contact['email'] }}</a>
      </p>
    </div>
    <div class="col-md-6">
      {!! do_shortcode('[wpforms id="87" title="false"]') !!}
    </div>
  </div>
</section>
@endif

{{-- Frequently Asked Questions --}}
@php $faq = $data['faq'] @endphp
@if($faq)
<section id="faq">
  <h3>{{ $faq['title'] }}</h3>
  <div id="questions">
    @foreach ($faq['questions'] as $question)    
      <div class="question-wrap">
        <div class="question">
          {{$question['question']}}
          <div class="sign"></div>
        </div>
        <div class="answer">
          {!! $question['answer'] !!}
        </div>
      </div>
    @endforeach
  </div>
</section>
@endif