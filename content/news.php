<!--WHATCHU LOOKIN AT MY FRIEND? Ask me if you have question instead..-->
<nav class="navbar navbar-default navbar-fixed-top padNavSide" id="navigator" role="navigation">
  <div class="container">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
    <a href="index.php"><img class="padNavSide logo-banner-size" src="media/permias_ames_logo_300x229.png" /></a>
    <a href="index.php">Home</a>
    <button class="navbar-toggle noMargin" data-toggle="collapse" data-target="#main_navigation" />
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </div>
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="main_navigation">
      <ul class="nav navbar-nav">
        <li><a href="help.php">Help</a></li>
        <li class="active"><a href="news.php">News</a></li>
        <li><a href="about.php">About Us</a></li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div>
</nav>
<div class="banner">
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
      <div class="banner-content">
        <h2>News</h2>
        <p>Get the latest update of PERMIAS Ames here. </p>
      </div>
      </div>
    </div>
  </div>
</div>
<div id="newsfeed">
<div class="container">
<div class="row">
<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
<?php 
$hostname = '{imap.gmail.com:993/imap/ssl}INBOX';
$username = 'permiasamesmailer@gmail.com';
$password = 'p3rm1454m35';
$inbox = imap_open($hostname,$username,$password) or die('Cannot connect to Gmail: ' . imap_last_error());
$emails = imap_search($inbox, "ALL");
$people = array("khidayat" => "Kelvien Hidayat - Wong Jowo","zeniaadi" => "Zenia Adiwijaya - President");
$institution = "iastate.edu";
if($emails) {
	rsort($emails);
	foreach($emails as $email_number) {
		$output = '';
		$unwantedChar = array(' ', '"');
		$overview = imap_headerinfo($inbox,$email_number);
		$structure = imap_fetchstructure($inbox, $email_number);
		if(strcmp($institution, $overview->from[0]->host) != 0){
			continue;
		}
		if(!array_key_exists($overview->from[0]->mailbox, $people)){
			continue;
		}
			if(isset($structure->parts) && is_array($structure->parts) && isset($structure->parts[1])) {
            $part = $structure->parts[1];
            $message = imap_fetchbody($inbox,$email_number,2);

            if($part->encoding == 3) {
                $message = imap_base64($message);
            } else if($part->encoding == 1) {
                $message = imap_8bit($message);
            } else {
                $message = imap_qprint($message);
            }
            $message=str_replace("<img","<img class='img-responsive' ", $message);
        }
        $created = new DateTime($overview->MailDate);
        	$output.= "<div class='news wow fadeInLeft'>";
        	$output.= "<div class='news_subject'><h3>".utf8_decode(imap_utf8($overview->subject))."</h3></div>";
	        $output.= "<div class='news_stamp'><small>Written on <b>".$created->format('Y-m-d H:i:s')."</b> by ".$people[$overview->from[0]->mailbox]."  <img src='media/officer/".$overview->from[0]->mailbox.".jpg' class='img-circle' style='height: 24px; width:24px;'/>  </small></div><hr/>";
		    $output.= "<div class='news_message'>".$message."</div>";
		    $output.= "</div><hr />";
			echo $output;
		}
}
else{
	/*No email*/
	echo "<h4>There is no news</h4>";
}
imap_close($inbox);
?>
</div>
</div>
</div>
</div>
