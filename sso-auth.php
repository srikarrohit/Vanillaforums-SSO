<?php
$count=0;
session_start();
    require_once('forums/plugins/jsconnect/functions.jsconnect.php');
   // require_once('includes/database_tc1.php');
    //require_once('includes/functions.php');
    //require_once('includes/initialize_settings.php');

// 1. Get your client ID and secret here. These must match those in your jsConnect settings.
    $clientID = 110838881;
    $secret = "9f3f808ef3b2b12df41e750119e2d99b";
    $signedIn = true;
// 2. Grab the current user from your session management system or database here.
    

    // prepare image file for display
    /*$url_prefix = $setting['site_full_url'];
    $test_imgfile_path = $setting['profile_img_dir'].$_COOKIE['signed_in_id'].$setting['profile_img_ext'];
    if(file_exists($test_imgfile_path)) {
        $imgfile_path = $url_prefix.$test_imgfile_path;
    }
    else {
        $imgfile_path = $url_prefix.$setting['profile_img_dir'].'blank-user.png';
    }*/

// 3. Fill in the user information in a way that Vanilla can understand.
    $user = array();

    if ($signedIn) {
       // CHANGE THESE FOUR LINES.
          $user['uniqueid'] = $_SESSION["id"];
   		  $user['name'] = $_SESSION["name"];
   		  $user['email'] = $_SESSION["email"];
   	      $user['photourl'] = '';
    }

// 4. Generate the jsConnect string.

// This should be true unless you are testing. 
// You can also use a hash name like md5, sha1 etc which must be the name as the connection settings in Vanilla.
    $secure = 'md5';
    $count=WriteJsConnect($user, $_GET, $clientID, $secret, $secure); 
	echo $count;
// for full page forum
    //JsSSOString($user, $clientID, $secret);  // add this line if using an embedded forum (remove if not embedded)
	if($count!=0)
	{
    		header("Location:http://localhost/mithra/forums/index.php?p=/");
	}
