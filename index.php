<!doctype html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>株式会社Cplus | ウェディングプランについては</title>
		<meta name="keywords" content="Cplusのキーワードが入ります">
		<meta name="description" content="Cplusの説明が入ります">

		<meta name="robots" content="noindex,nofollow">
		<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/3.18.1/build/cssreset/cssreset-min.css">
		<link rel="stylesheet" type="text/css" href="css/top.css">



<!--[if lt IE 9]>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<![endif]-->
<!--[if gte IE 9]><!-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <script src="js/jquery-migrate-1.2.1.min.js"></script>

<!--><![endif]-->
	<script src="js/top.js"></script>
	<?php
	class UserAgent{
		private $ua;
		private $device;
		public function set(){
			$this->ua = mb_strtolower($_SERVER['HTTP_USER_AGENT']);
			if(strpos($this->ua,'iphone') !== false){
				$this->device = 'mobile';
			}elseif(strpos($this->ua,'ipod') !== false){
				$this->device = 'mobile';
			}elseif((strpos($this->ua,'android') !== false) && (strpos($this->ua, 'mobile') !== false)){
				$this->device = 'mobile';
			}elseif((strpos($this->ua,'windows') !== false) && (strpos($this->ua, 'phone') !== false)){
				$this->device = 'mobile';
			}elseif((strpos($this->ua,'firefox') !== false) && (strpos($this->ua, 'mobile') !== false)){
				$this->device = 'mobile';
			}elseif(strpos($this->ua,'blackberry') !== false){
				$this->device = 'mobile';
			}elseif(strpos($this->ua,'ipad') !== false){
				$this->device = 'tablet';
			}elseif((strpos($this->ua,'windows') !== false) && (strpos($this->ua, 'touch') !== false && (strpos($this->ua, 'tablet pc') == false))){
				$this->device = 'tablet';
			}elseif((strpos($this->ua,'android') !== false) && (strpos($this->ua, 'mobile') === false)){
				$this->device = 'tablet';
			}elseif((strpos($this->ua,'firefox') !== false) && (strpos($this->ua, 'tablet') !== false)){
				$this->device = 'tablet';
			}elseif((strpos($this->ua,'kindle') !== false) || (strpos($this->ua, 'silk') !== false)){
				$this->device = 'tablet';
			}elseif((strpos($this->ua,'playbook') !== false)){
				$this->device = 'tablet';
			}else{
				$this->device = 'others';
			}
			return $this->device;
		}
	}

	$ua = new UserAgent();
	?>

	</head>
	<body>
<div id="loader-bg">
	<div id="loader">
	<div id="cssload-loader">
		<div class="tablecell">
			<ul>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
			<p>NOW LOADING</p>
		</div>
	</div>
	</div>
</div>
<div id="wrap">
		<header id="pagetop">
			<h1 id="site-logo">C plus</h1>
			<div id="glovalmenu">
				<ul>
					<li>MENU1</li>
					<li>MENU2</li>
					<li>MENU3</li>
					<li>MENU4</li>
					<li>MENU5</li>
					<li>MENU6</li>
				</ul>
				</div>
		</header>
		<div class="background-wrap">
			<?php if($ua->set() === "mobile" || $ua->set() === "tablet"):?>
				<div id="mobile-bg-elem">
					<!-- <img src="video.gif"> -->

				</div>


			<?php else:?>
				<video id="video-bg-elem" preload="auto" autoplay="true" loop="loop" muted="muted">
					<source src="video.mp4" type="video/mp4">
						video not supported
				</video>
			<?php endif;?>
			
			<div class="contents">
				<div class="bg_videotext">
					<h2 id="massage01">video background title</h2>
					<p id="massage02">this is the tutorial video.this is the tutorial video.</p>
				</div>
			</div>
		</div>


		<div class="detail">
			<span class="zigzag-border"></span>
			<div class="menu">

					<h2 id="titleTxt01" style="font-size:50px; margin-bottom:30px;">video background TEST</h2>
					<p id="titleTxt02">これはテキストです。これはテキストです。これはテキストです。これはテキストです。これはテキストです。これはテキストです。</p>

					<ul>
						<li id="titleTxt03">
							<a href="#">
								<div class="image-card">
									<div class="bluebg"><div class="item"><span>ROOM A</span></div></div>
									<div class="overlay">
										<span></span>
										<span></span>
										<span></span>
										<span></span>
									</div>
									<img src="image/img01.jpg" alt="">
								</div>
							</a>
						</li>
						<li id="titleTxt04">
							<a href="#">
								<div class="image-card">
									<div class="bluebg"><div class="item"><span>ROOM B</span></div></div>
									<div class="overlay">
										<span></span>
										<span></span>
										<span></span>
										<span></span>
									</div>
									<img src="image/img02.jpg" alt="">
								</div>
							</a>
						</li>
						<li id="titleTxt05">
							<a href="#">
								<div class="image-card">
									<div class="bluebg"><div class="item"><span>ROOM C</span></div></div>
									<div class="overlay">
										<span></span>
										<span></span>
										<span></span>
										<span></span>
									</div>
									<img src="image/img03.jpg" alt="">
								</div>
							</a>
						</li>
					</ul>
			</div>
			<!-- <span class="zigzag-border-close"></span> -->
		</div>
		<div class="detail">
			<span class="zigzag-border-close"></span>

			<div class="aboutus">
				<img src="image/main_aboutous.jpg">


			</div>

		</div>
</div>
	</body>
</html>
