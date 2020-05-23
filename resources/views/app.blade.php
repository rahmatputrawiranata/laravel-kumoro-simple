<!-- get_header('Page Name','Title')-->
<!doctype html>
<html class="no-js" lang="en">
	
<!-- Mirrored from html.xpeedstudio.com/upturn/shop.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 25 Dec 2019 17:07:14 GMT -->
<head>
		<meta charset="utf-8">
		<meta http-equiv="x-ua-compatible" content="ie=edge">
		<title>Kumoro - Toko Sembako Siap Antar</title>
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		
		<link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900%7COpen+Sans:400,700,700i" rel="stylesheet">

		<link rel="icon" type="image/png" href="favicon.html">
		<!-- Place favicon.ico in the root directory -->
		<link rel="apple-touch-icon" href="apple-touch-icon.html">
		<link rel="stylesheet" href="assets/css/font-awesome.min.css">

		<link rel="stylesheet" href="assets/css/bootstrap.min.css">
		<link rel="stylesheet" href="assets/css/animate.css">
		<link rel="stylesheet" href="assets/css/iconfont.css">
		<link rel="stylesheet" href="assets/css/magnific-popup.css">
		<link rel="stylesheet" href="assets/css/owl.carousel.min.css">
		<link rel="stylesheet" href="assets/css/owl.theme.default.min.css">
		<link rel="stylesheet" href="assets/css/rev-settings.css">

		<!--For Plugins external css-->
		<link rel="stylesheet" href="assets/css/plugins.css" />

		<!--Theme custom css -->
		<link rel="stylesheet" href="assets/css/style.css">

		<!--Theme Responsive css-->
		<link rel="stylesheet" href="assets/css/responsive.css" />
	</head>
	<body>
	<!--[if lt IE 10]>
		<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
	<![endif]-->

	<!-- prelaoder -->
	<!-- <div id="preloader">
    <div class="preloader-wrapper">
        <div class="spinner"></div>
    </div>
    <div class="preloader-cancel-btn">
        <a href="#" class="btn btn-secondary prelaoder-btn">Cancel Preloader</a>
    </div>
</div> -->
	<!-- END prelaoder -->
<div class="header">
    <!-- topBar section -->
    <div class="xs-top-bar">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <ul class="xs-top-bar-info">
                    <li>
                        <p><a href="tel:+1%20(254)%854-8569"><i class="icon icon-phone3"></i>+1 (254) 854-8569</a></p>
                    </li>
                </ul>
            </div>
            <div class="col-md-6">
                <ul class="xs-list list-inline">
                    <li><a href="https://www.facebook.com/tokokumoro"><i class="icon icon-facebook"></i></a></li>
                </ul>
            </div>
        </div><!-- .row END -->
    </div><!-- .container END -->
</div>    <!-- End topBar section -->

    <!-- header section -->
    <header class="xs-header header-main">
    <div class="container">
        <div class="row">
            <div class="col-lg-3">
                <div class="xs-logo-wraper">
                    <a href="index.html" class="xs-logo">
                        <img src="{{Voyager::image(setting('site.logo'))}}" alt="">
                    </a>
                </div>
            </div>
        </div>
    </div><!-- .container END -->
</header>    <!-- End header section -->
</div>

<!-- inner banenr start -->
<!--breadcumb start here-->
<section class="inner-banner-area">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="inner-banner-content">
					<h1 class="inner-banner-title">Toko Kumoro</h1>
					<ul class="breadcumbs list-inline">
						<li><a href="index.html">Murah Setiap Saat</a></li>
					</ul>
					<span class="border-divider style-white"></span>
				</div>
			</div>
		</div>
	</div>
	<div class="banner-image" style="background-image:url('assets/images/backgrounds/background-1.jpg')"></div>
</section>
<!--breadcumb end here--><!-- inner banenr end -->

<!-- shop strart -->
<section class="xs-section-padding">
    <div class="container">
        <div class="tab-content">
            <div class="tab-pane fade show active" id="product-cate1" role="tabpanel" aria-labelledby="product-cate1-tab">
                <div class="row">
                    @foreach($data as $row)
                    <div class="col-lg-4 col-md-6">
                        <div class="xs-single-product">
                            <div class="product-header">
                                <img src="{{Voyager::image($row->photo)}}" alt="">
                                <div class="hover-area">
                                    <div class="btn-wraper">
                                        <a href="https://wa.me/{{setting('whatsapp_number')}}?text={{$row->whatsapp_text}}" class="btn btn-primary icon-left style3"><i class="icon icon-shopping-cart2"></i> Order Melalui Whatsapp</a>
                                    </div>
                                </div>
                            </div>
                            <div class="product-footer">
                                <h2 class="product-title"><a href="https://wa.me/{{setting('whatsapp_number')}}?text={{$row->whatsapp_text}}">{{$row->nama}}</a></h2>
                                <span class="price">
                                    <ins>
                                        <span class="woocommerce-Price-amount amount">
                                            <span class="woocommerce-Price-currencySymbol">Rp</span>{{number_format($row->harga)}}
                                        </span>
                                    </ins>
                                </span>
                            </div>
                        </div><!-- .xs-single-product END -->
                    </div>
                    @endforeach
                </div>
            </div><!-- #product-cate1 END -->
        </div>
    </div><!-- .container END -->
</section><!-- end shop -->

		<!-- footer section start -->
		<footer class="xs-footer-section">
			<div class="copyright">
				<div class="container">
					<div class="row">
						<div class="col-md-6">
							<div class="copyright-text">
								<p>Copyright &copy; 2020, All Right Reserved <a href="https://yunip.id">yunip.id</a></p>
							</div><!-- .copyright-text END -->
						</div>
						<div class="col-md-6">
							<ul class="social-list">
								<li><a href="https://www.facebook.com/tokokumoro" class="facebook"><i class="fa fa-facebook"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div><!-- .copyright END -->
		</footer>
		<!-- footer section end -->	
		<!-- js file start -->
		<script src="assets/js/jquery-3.2.1.min.js"></script>
		<script src="assets/js/plugins.js"></script>
		<script src="assets/js/Popper.js"></script>
		<script src="assets/js/bootstrap.min.js"></script>
		<script src="assets/js/jquery.magnific-popup.min.js"></script>
		<script src="assets/js/owl.carousel.min.js"></script>
		<script src="assets/js/jquery.ajaxchimp.min.js"></script>
		<script src="assets/js/jquery.waypoints.min.js"></script>
		<script src="assets/js/isotope.pkgd.min.js"></script>
		<script src="https://maps.googleapis.com/maps/api/js?v=3&amp;key=AIzaSyCy7becgYuLwns3uumNm6WdBYkBpLfy44k"></script>
		<script src="assets/js/scrollax.js"></script>
		<script src="assets/js/jquery.themepunch.revolution.min.js"></script>
		<script src="assets/js/jquery.themepunch.tools.min.js"></script>
		<script src="assets/js/extensions/revolution.extension.slideanims.min.js"></script>
        <script src="assets/js/extensions/revolution.extension.layeranimation.min.js"></script>
        <script src="assets/js/extensions/revolution.extension.navigation.min.js"></script>
        <script src="assets/js/extensions/revolution.extension.parallax.min.js"></script>
		<script src="assets/js/jquery.easypiechart.min.js"></script>
		<script src="assets/js/delighters.js"></script>
		<script src="assets/js/main.js"></script>		<!-- End js file -->
	</body>

<!-- Mirrored from html.xpeedstudio.com/upturn/shop.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 25 Dec 2019 17:07:17 GMT -->
</html>